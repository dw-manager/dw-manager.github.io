import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Link } from "gatsby";

const EditPage = ({ classEdit, editForm, edit }) => {
  return (
    <React.Fragment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            label="Class name:"
            id="classname"
            name="name"
            value={edit.name}
            onChange={editForm}
          />
          <Form.TextArea
            label="Class Description:"
            id="classDescription"
            name="description"
            value={edit.description}
            onChange={editForm}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            label="Race name:"
            id="racename"
            name="name"
            value={edit.name}
            onChange={editForm}
          />
          <Form.TextArea
            label="Race Description:"
            id="raceDescription"
            name="description"
            value={edit.description}
            onChange={editForm}
          />
        </Form.Group>
        <Form.Field>
          <Button
          //   onClick={addRace}
          >
            Add Race
          </Button>
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Select
            label="Select Race:"
            options={edit.raceOptions}
            name="race"
            value={edit.race}
            onChange={editForm}
          />
          <Form.Input
            label="Name:"
            name="name"
            value={edit.name}
            onChange={editForm}
          />
        </Form.Group>
        <Form.Field>
          <Button
          //   onClick={addName}
          >
            Add Recommended name
          </Button>
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Input
            type="number"
            label="Base HP"
            name="baseHp"
            value={edit.baseHp}
            onChange={editForm}
          />
          <Form.Input
            type="number"
            label="Base Damage"
            name="baseDamage"
            value={edit.baseDamage}
            onChange={editForm}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <Button
              color="green"
              icon="plus"
              content="Edit Class"
              fluid
              as={Link}
              to="/classes"
              onClick={classEdit}
            />
          </Form.Field>
          <Form.Field>
            <Button
              type="button"
              as={Link}
              to="/classes"
              content="Cancel"
              fluid
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default EditPage;
