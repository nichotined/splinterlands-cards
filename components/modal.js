import React, { useState } from "react";
import { Button, Modal, Table, TableBody, TableCell, TableHeader } from "semantic-ui-react";

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
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            Max. Level
          </Table.HeaderCell>
          <Table.HeaderCell>
            Mana
          </Table.HeaderCell>
          <Table.HeaderCell>
            Attack
          </Table.HeaderCell>
          <Table.HeaderCell>
            Ranged
          </Table.HeaderCell>
          <Table.HeaderCell>
            Magic
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{stats.attack.length}</Table.Cell>
          <Table.Cell>{join(stats.attack)}</Table.Cell>
          <Table.Cell>{join(stats.mana)}</Table.Cell>
          <Table.Cell>{join(stats.ranged)}</Table.Cell>
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
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {type} - {color}
          {constructTable(stats)}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
