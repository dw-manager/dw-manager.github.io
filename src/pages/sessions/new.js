import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Segment,
  TextArea,
  Header,
} from "semantic-ui-react";
import State from "../../state";
import { addSession } from "../../functions/db";

const New = ({ closeNewSession }) => {
  const state = React.useContext(State);
  const auth = state.auth;
  const sessions = state.sessions;
  console.log(sessions);

  const [createSession, setCreateSession] = useState({
    createTime: "",
    creatorName: "",
    description: "",
    meetingDay: "",
    meetingTime: "",
    members: "",
    numbPlayers: "",
    sessionDuration: "",
  });

  function changeSession(e, { name, value }) {
    const newSession = { ...createSession };
    newSession[name] = value;
    setCreateSession(newSession);
  }

  //Submit session data to firebase DB
  function sessionSubmit() {
    //This is going to tie the user with the session that is created.
    createSession.userId = auth.user.id;
    addSession(createSession);
    console.log(addSession);
  }

  return (
    <React.Fragment>
      <Segment piled>
        <Header as="h1">New Session</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              type="date"
              label="Creation Date"
              placeholder="Enter Creation Date..."
              name="createTime"
              value={createSession.createTime}
              onChange={changeSession}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              value={createSession.description}
              label="Session Description"
              placeholder="Enter Description..."
              name="description"
              onChange={changeSession}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="time"
              label="Meeting Time"
              placeholder="Enter Meeting Time..."
              name="meetingTime"
              value={createSession.meetingTime}
              onChange={changeSession}
            />
            <Form.Input
              label="Meeting Days"
              placeholder="Enter Meeting Days..."
              name="meetingDay"
              value={createSession.meetingDay}
              onChange={changeSession}
            />
            <Form.Input
              label="Duration of Session"
              placeholder="Enter Session Duration..."
              name="sessionDuration"
              value={createSession.sessionDuration}
              onChange={changeSession}
            />
            <Form.Input
              type="number"
              min="0"
              max="6"
              label="Number of Players"
              placeholder="Enter Number of Players..."
              name="numbPlayers"
              value={createSession.numbPlayers}
              onChange={changeSession}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Members"
              placeholder="Enter Members..."
              name="members"
              value={createSession.members}
              onChange={changeSession}
            />
          </Form.Group>

          <Button.Group fluid>
            <Button color="red" onClick={closeNewSession}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" onClick={sessionSubmit}>
              Save
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default New;
