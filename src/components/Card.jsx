// Card.js
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Card = ({ id, text,x,onTextChange,onDelete }) => {
  const [showMore, setShowMore] = useState(false);
  const [cardText, setCardText] = useState(text);

  const handleTextChange = (e) => {
    setCardText(e.target.value);
    onTextChange(id, e.target.value);
  };

  return (
    <Rnd
      default={{
        x: x%1200,
        y: 150*(Math.floor(x/1200)) +20,
        width: 200,
        height: 100,
      }}
      minWidth={100}
      minHeight={100}
      bounds="parent"
      className="bg-white rounded-lg shadow-md p-7"
    >
      <div className="p-0 h-full">
        
        <textarea
          value={cardText}
          onChange={handleTextChange}
          className="w-full h-full resize-none border border-gray-300 rounded p-1 m-0 overflow-hidden"
          maxLength={150} // Set a maximum length if needed
        />
        <button
          onClick={() => setShowMore(true)}
          className="mt-5 ml-6  w-20 h-6 text-sm  bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show More
        </button>
        <button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
        <Modal
          isOpen={showMore}
          onRequestClose={() => setShowMore(false)}
          contentLabel="Card Details"
          className="fixed left-1 inset-0 flex items-center justify-center bg-black bg-opacity-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          style={{
            content: {
              maxWidth: '500px',
              maxHeight: '80%',
              padding: '20px',
              borderRadius: '8px',
              background: '#fff',
              overflow: 'auto',
            },
          }}
        >
          <div>
            <h2 className="text-xl font-semibold">Card Details</h2>
            <p className="mt-2">{text}</p>
            <button
              onClick={() => setShowMore(false)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </Rnd>
  );
};

export default Card;
