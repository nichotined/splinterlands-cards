import React, { useState } from "react";
import { Button, Modal, Table } from "semantic-ui-react";

const constructData = (distribution) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Number of Cards</Table.HeaderCell>
          <Table.HeaderCell>Total XP</Table.HeaderCell>
          <Table.HeaderCell>Number Burned</Table.HeaderCell>
          <Table.HeaderCell>Total Burned</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {distribution.map((data, index) => (
          <Table.Row key={index}>
            <Table.Cell>{data.num_cards}</Table.Cell>
            <Table.Cell>{data.total_xp}</Table.Cell>
            <Table.Cell>{data.num_burned}</Table.Cell>
            <Table.Cell>{data.total_burned_xp}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

const DistributionModal = ({ distribution, name }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Show</Button>}
    >
      <Modal.Header>Distribution: {name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{constructData(distribution)}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DistributionModal;
