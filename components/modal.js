import React, { useState } from "react";
import {
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from "semantic-ui-react";

const join = (arr) => {
  const n = String(arr).split(",");
  n.forEach((item, index) => {
    if (item === "") {
      n[index] = "_";
    }
  });
  return n.join(", ");
};

const constructTable = (stats) => {
  return (
    <Table celled fixed>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Max Level</Table.Cell>
          <Table.Cell>{stats.attack.length}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Attack</Table.Cell>
          <Table.Cell>{join(stats.attack)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mana</Table.Cell>
          <Table.Cell>{join(stats.mana)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ranged</Table.Cell>
          <Table.Cell>{join(stats.ranged)}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Magic</Table.Cell>
          <Table.Cell>{join(stats.magic)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const ModalComponent = ({ name, color, type, stats }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Details</Button>}
    >
      <Modal.Header>
        [{type}] {name} - {color}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>{constructTable(stats)}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
