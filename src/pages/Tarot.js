import React, { useState } from "react";
import tarotCards from "../data/TarotData.js";

const Tarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to select a random card
  const drawRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setSelectedCard(tarotCards[randomIndex]);
  };
  <div className="card">
sad
  </div>

  return (
    <div className="container">
          <div className="card">
sad
  </div>
      <h1>Pick a Tarot Card</h1>
      Şu desteyi indir https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck_(Roses_%26_Lilies)
      {selectedCard ? (
        <div className="card">
          <h2>{selectedCard.name}</h2>
          <img src={selectedCard.image} alt={selectedCard.name} />
        </div>
      ) : (
        <p>Please pick a card!</p>
      )}
      <button className="button" onClick={drawRandomCard}>
        Draw a Card
      </button>
    </div>
  );
};

export default Tarot;
