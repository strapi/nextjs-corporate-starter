import PropTypes from "prop-types";

import { Modal, Button, Field } from "@strapi/design-system";
import { Plus } from "@strapi/icons";

export default function TodoModal({
  open,
  setOpen,
  handleSubmit,
  errorMessage,
  setValue,
  value,
}) {
  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button variant="secondary" startIcon={<Plus />}>
          Add a todo
        </Button>
      </Modal.Trigger>
      <Modal.Content>
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Add a todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Field.Root name="name" required error={errorMessage}>
              <Field.Label>Todo text</Field.Label>
              <Field.Input
                onChange={(e) => {
                  console.log(e.target.value);
                  setValue(e.target.value);
                }}
                value={value}
              />
              <Field.Error />
            </Field.Root>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>
              <Button variant="tertiary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Modal.Close>
            <Button type="submit" startIcon={<Plus />}>
              Save todo
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}

TodoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.string,
};
