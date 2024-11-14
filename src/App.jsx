import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './App.css'; // Importing the CSS file

// Sample component to render conversations
function ConversationsApp() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load JSON data (replace with actual fetch or import if using a file)
    fetch('../data/walkthroughgpt-default-rtdb-export.json')
      .then(response => response.json())
      .then(data => {
        const conversationList = Object.entries(data.conversations).map(([id, convo]) => ({
          id,
          ...convo,
          conversation: JSON.parse(convo.conversation),
        }));
        setConversations(conversationList);
      });
  }, []);

  const handleOpenModal = (conversation) => {
    setSelectedConversation(conversation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConversation(null);
  };

  return (
    <div className="container">
      <h2 className="title">Conversations</h2>
      <ul className="conversation-list">
        {conversations.map((convo) => (
          <li key={convo.id} className="conversation-item" onClick={() => handleOpenModal(convo)}>
            <span className="conversation-timestamp">{new Date(convo.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>

      {selectedConversation && (
        <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="modal-dialog">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">Conversation Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            {selectedConversation.conversation.map((message, index) => (
              <div key={index} className={`message ${message.role}-message`}>
                <div className="message-role">{message.role === 'user' ? 'User' : 'Bot'}:</div>
                <div className="message-content">{message.content.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}<br /></React.Fragment>
                ))}</div>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <button onClick={handleCloseModal} className="closeButton">Close</button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ConversationsApp;