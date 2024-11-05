import React, { useState } from "react";
import { tarotCards } from "../data/TarotData";

const Tarot = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [message, setMessage] = useState("");

  const drawRandomCard = () => {
    if (selectedCards.length < 3 && tarotCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const selectedCard = tarotCards[randomIndex];

      // Avoid selecting the same card
      if (!selectedCards.includes(selectedCard)) {
        setSelectedCards((prev) => [...prev, selectedCard]);
        
        // Check if three cards have been selected
        if (selectedCards.length === 2) {
          setMessage("Ok, that's it! Off you go!");
        }
      } else {
        // Optionally, you can log a message or handle duplicates
        console.log("Card already selected. Try again.");
      }
    }
  };

  const refreshPage = () => {
    setSelectedCards([]);
    setMessage("");
  };

  return (
    <div className="content">
      <h1>Pick 3 Tarot Cards</h1>
      <div className="card-container">
        {/* Back of the card */}
        {selectedCards.length < 3 && (
          <img 
            src="../media/tarotdeck/000_Back.jpg" 
            alt="back" 
            className="card back" 
          />
        )}

        {/* Render selected cards */}
        {selectedCards.map((card, index) => (
          <img 
            key={index} 
            src={card.image} 
            alt={card.name} 
            className="card front" 
          />
        ))}
      </div>

      {selectedCards.length < 3 ? (
        <button className="button" onClick={drawRandomCard}>
          Draw a Card
        </button>
      ) : (
        <div>
          <p>{message}</p>
          <button className="button" onClick={refreshPage}>
            Refresh
          </button>
        </div>
      )}
    <p>Source of the deck: <a href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck_(Roses_%26_Lilies)">Rider-Waite Tarot Deck</a></p>
    </div>
  );
};

export default Tarot;
