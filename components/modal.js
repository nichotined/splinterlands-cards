import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const ModalComponent = ({ name, color, type, stats }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Detail</Button>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {type} - {color}
          {stats.mana}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
