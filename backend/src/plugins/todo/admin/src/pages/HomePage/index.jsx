/*
 *
 * HomePage
 *
 */

import { memo, useState, useEffect, useCallback } from "react";
import { useFetchClient } from "@strapi/strapi/admin";
import { Page } from '@strapi/strapi/admin';

import { EmptyStateLayout, Box } from "@strapi/design-system";
import { Illo } from "../../components/Illo";

import TodoModal from "../../components/TodoModal";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";

const HomePage = () => {
  const { get, put, del, post } = useFetchClient();

  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (isLoading === false) setIsLoading(true);

    try {
      const response = await get("/todo/find");
      setTodoData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [get, isLoading]);

  useEffect(() => {
    fetchData();
  }, []);


  if (isLoading) return <Page.Loading />;

  const handleAddTodo = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!value) {
      setErrorMessage("Todo text is required");
      return;
    }

    try {
      const response = await post("/todo/create", { data: { name: value } });
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }

    setValue("");
    setErrorMessage("");
    setOpen(false);
  };

  const handleDeleteTodo = async (data) => {
    const confirmation = confirm(
      "Are you sure you want to delete this todo? " + data.name
    );

    if (confirmation === false) return;

    try {
      const response = await del(`/todo/delete/${data.documentId}`);
      console.log(response, "response");
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleTodo = async (documentId) => {
    try {
      const response = await put(`/todo/toggle/${documentId}`);
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTodo = async (documentId, data) => {
    try {
      const response = await put(`/todo/update/${documentId}`, data);
      console.log(response, "response");
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box padding={8}>
      <div>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todo's yet..."
            action={
              <TodoModal
                open={open}
                setOpen={setOpen}
                handleSubmit={handleAddTodo}
                errorMessage={errorMessage}
                setValue={setValue}
                value={value}
              />
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              toggleTodo={handleToggleTodo}
              deleteTodo={handleDeleteTodo}
              editTodo={handleEditTodo}
            >
              <TodoModal
                open={open}
                setOpen={setOpen}
                handleSubmit={handleAddTodo}
                errorMessage={errorMessage}
                setValue={setValue}
                value={value}
              />
            </TodoTable>
          </>
        )}
      </div>
    </Box>
  );
};

export default memo(HomePage);
