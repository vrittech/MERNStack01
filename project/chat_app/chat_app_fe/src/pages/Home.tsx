import { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSearchParams } from "react-router-dom";

export interface IConversation {
  _id: string;
  members: [
    {
      name: string;
      surname: string;
      _id: string;
    }
  ];
  conversation_name: string;
}

export interface IMember {
    _id : string,
    name : string,
    surname : string
}

export interface IMessage {
  _id: string;
  from_id: string;
  type: string;
  message: string;
}
export default function Home() {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const [searchParams] = useSearchParams();
  const loggedInUser = searchParams.get("loggedInUser");
  const [selectedConversation, setSelectedConversation] = useState<string>(
    "639fc8fc96a7be609a9f0eaa"
  );
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [members, setMembers] = useState<IMember[]>([]);

  useEffect(() => {
    getAllConversations();
  }, []);

  useEffect(() => {
    console.log("This effect is called")
    getMessagesOfConversation();
  }, [selectedConversation]);

  const getMessagesOfConversation = async () => {
    const response = await fetch(
      `http://localhost:8000/api/v1/conversation/messages/all/${selectedConversation}`
    );
    const data = await response.json();
    const conversation_id= data.messages?.[0]?.conversation_id;
    console.log(conversation_id)
    const membersOfConversation = conversation_id?.members ?? []
    setMembers(membersOfConversation);
    setMessages(data.messages);
  };
  const getAllConversations = async () => {
    const response = await fetch("http://localhost:8000/api/v1/conversation");
    const data = await response.json();
    setConversations(data.conversations);
    setSelectedConversation(data.conversations[0]._id);
  };

  const sendMessage = async () => {
    if (!messageRef.current?.value || messageRef.current?.value === "") {
      return;
    }
    const messageBody = {
      type: "text",
      conversation_id: selectedConversation,
      from: loggedInUser,
      message: messageRef.current.value,
    };
    const response = await fetch("http://localhost:8000/api/v1/conversation/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageBody),
    });

    const {createdMessage} = await response.json();
   setMessages((prev) => [...prev, createdMessage])
    messageRef.current.value=""
  };

  const changeConversation = (conversation:string) => {
    setSelectedConversation(conversation)
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Chat App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div style={{ marginTop: "10px" }}>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <div>
                {conversations.map((conversation) => {
                  return (
                    <div
                      key={conversation._id}
                      style={{
                        padding: "10px",
                        background: selectedConversation === conversation._id ? "#ccc":"#f3f2f2",
                        boxShadow: "3px 2px 20px 0px #ccc",
                        marginBottom: "10px",
                        textAlign: "center",
                        cursor:"pointer"
                      }}
                      onClick={() => changeConversation(conversation._id)}
                    >
                      {conversation.conversation_name}
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col xs lg="7">
              <div style={{ height: "90vh", background: "#f3f2f2" }}>
                <header
                  style={{
                    padding: "10px",
                    boxShadow: "-1px 3px 4px 0px #b4a7a7",
                  }}
                >
                  <div>Mern Stack Group</div>
                </header>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {messages.map((message) => {
                    if (message.from_id === loggedInUser) {
                      return (
                        <div className="sender" key={message._id}>
                          <div className="sender-message">
                            {message.message}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="receiver" key={message._id}>
                          <div className="receiver-message">
                            {message.message}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div style={{ position: "fixed", zIndex: 100, bottom: 0 }}>
                  <input placeholder="Send Message" ref={messageRef} />
                  <Button onClick={sendMessage}>Send Message</Button>
                </div>
              </div>
            </Col>
            <Col xs lg="2">
             <div>
                {
                    members.map(member => {
                        return (
                            <div key={member._id}  style={{
                                padding: "10px",
                                background: loggedInUser === member._id ? "#ccc":"#f3f2f2",
                                boxShadow: "3px 2px 20px 0px #ccc",
                                marginBottom: "10px",
                                textAlign: "center",

                              }}>{member.name} {member.surname}</div>
                        )
                    })
                }
             </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
