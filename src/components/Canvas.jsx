// Canvas.js
import React, { useState,useEffect } from "react";
import Card from "./Card";

const Canvas = () => {
  const [cards, setCards] = useState(()=>{
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      return JSON.parse(savedCards);
      // setCards(JSON.parse(savedCards));
      console.log(savedCards);
    }
    else return [];
  });

  // useEffect(() => {
  //   // Retrieve cards from local storage
  //   const savedCards = localStorage.getItem('cards');
  //   if (savedCards) {
  //     setCards(JSON.parse(savedCards));
  //     console.log(savedCards);
  //   }
  // }, []);

  useEffect(() => {
    // Save cards to local storage
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

 

  const handleTextChange = (id, newText) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, text: newText } : card
      )
    );
  };
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      text: ``,
      x:240*(cards.length)+20
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };



  return (
    <div>
      <button
        onClick={addCard}
        className="m-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Card
      </button>
      <div className=" border border-black h-[1400px] w-full  bg-red-500 relative flex flex-wrap gap-4 p-4">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} text={card.text} x={card.x} onTextChange={handleTextChange} onDelete={handleDelete}/>
          // <div className="w-[200px] h-[200px] bg-gray-50" id={card.id}>{card.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
