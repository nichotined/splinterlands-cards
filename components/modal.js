import React, { useState } from "react";
import { Button, Modal, Table } from "semantic-ui-react";

const join = (arr) => {
  const n = String(arr).split(",");
  n.forEach((item, index) => {
    if (item === "") {
      n[index] = "_";
    }
  });
  return n;
};

const constructTable = (stats) => {
  return (
    <Table celled fixed selectable>
      <Table.Body>
        <Table.Row>
          <Table.Cell textAlign="right">Level</Table.Cell>
          {join(stats.mana).map((item, index) => (
            <Table.Cell key={index}>{index + 1}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Abilities</Table.Cell>
          {stats.abilities ? (
            join(stats.abilities).map((item, index) => (
              <Table.Cell key={index}>{item}</Table.Cell>
            ))
          ) : (
            <Table.Cell key={"none"}>_</Table.Cell>
          )}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Mana</Table.Cell>
          {join(stats.mana).map((item, index) => (
            <Table.Cell key={index}>{item}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Health</Table.Cell>
          {join(stats.health).map((item, index) => (
            <Table.Cell key={index}>{item}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Attack</Table.Cell>
          {join(stats.attack).map((item, index) => (
            <Table.Cell key={index}>{item}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Armor</Table.Cell>
          {join(stats.armor).map((item, index) => (
            <Table.Cell key={index}>{item}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Ranged</Table.Cell>
          {join(stats.ranged).map((item, index) => (
            <Table.Cell key={index}>{item}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="right">Magic</Table.Cell>
          {join(stats.magic).map((item, index) => (
            <Table.Cell key={index}>{item}</Table.Cell>
          ))}
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
      trigger={<Button primary>Details</Button>}
    >
      <Modal.Header>
        [{type}] {name} - {color}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>{constructTable(stats)}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
