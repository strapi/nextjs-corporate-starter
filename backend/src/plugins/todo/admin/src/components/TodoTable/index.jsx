import PropTypes from "prop-types";

import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Box,
  Flex,
  Button,
  Typography,
  IconButton,
  VisuallyHidden,
  Checkbox,
  Field,
} from "@strapi/design-system";
import { Pencil, Trash } from "@strapi/icons";

function TodoCheckbox({ value, checkboxID, onChange, disabled }) {
  const [isChecked, setIsChecked] = useState(value);

  function handleChange() {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange({ id: checkboxID, value: !isChecked });
    }
  }

  return (
    <Checkbox checked={isChecked} onClick={handleChange} disabled={disabled} />
  );
}

TodoCheckbox.propTypes = {
  value: PropTypes.bool,
  checkboxID: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

function TodoInput({ value, onChange }) {
  return (
    <Field.Root
      name="name"
      error={value.length === 0 ? "Text cannot be empty" : ""}
    >
      <Field.Label>Todo text</Field.Label>
      <Field.Input onChange={onChange} value={value} />
      <Field.Error />
    </Field.Root>
  );
}

TodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default function TodoTable({
  children,
  todoData,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <Box padding={4} background="neutral100">
            {children}
          </Box>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Todo</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Status</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {todoData.map((todo) => {
            const [inputValue, setInputValue] = useState(todo.name);
            const [isEdit, setIsEdit] = useState(false);

            return (
              <Tr key={todo.id}>
                <Td>
                  <Typography textColor="neutral800">{todo.id}</Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <TodoInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{todo.name}</Typography>
                  )}
                </Td>

                <Td>
                  <TodoCheckbox
                    value={todo.isDone}
                    checkboxID={todo.id}
                    onChange={() => toggleTodo(todo.documentId)}
                    disabled={isEdit}
                  />
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editTodo(todo.documentId, { name: inputValue })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <Box paddingLeft={1}>
                        <IconButton
                          label="Edit"
                          onClick={() => setIsEdit(true)}
                        >
                          <Pencil />
                        </IconButton>
                      </Box>
                      <Box paddingLeft={1}>
                        <IconButton
                          label="Delete"
                          onClick={() => deleteTodo(todo)}
                        >
                          <Trash />
                        </IconButton>
                      </Box>
                    </Flex>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

TodoTable.propTypes = {
  children: PropTypes.node,
  todoData: PropTypes.array,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
