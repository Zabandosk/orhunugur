import React, { useState } from "react";
import { tarotCards } from "../data/TarotData";

const Tarot = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [message, setMessage] = useState("");

  const drawRandomCard = () => {
    if (selectedCards.length < 3 && tarotCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const selectedCard = tarotCards[randomIndex];

      if (!selectedCards.includes(selectedCard)) {
        setSelectedCards((prev) => [...prev, selectedCard]);
        
        if (selectedCards.length === 2) {
          setMessage("Ok, that's it! Off you go!");
        }
      } else {

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
      <h1>Pick a Card</h1>
      <div className="card-container">
  {selectedCards.length < 3 && (
    <img
      src="../media/tarotdeck/000_Back.jpg"
      alt="back"
      className="card back"
    />
  )}

  {selectedCards.map((card, index) => (
    <img
      key={index}
      src={card.image}
      alt={card.name}
      className="card front"
      ref={(element) => {
        // Ensure the last card is scrolled into view when it's added
        if (index === selectedCards.length - 1 && element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      }}
    />
  ))}
</div>
<br />
<div className="tarotcontent">
  {selectedCards.length < 3 ? (
    <button className="button" onClick={drawRandomCard}>
      Draw a Card
    </button>
  ) : (
    <div className="tarotcontent">
      <p>{message}</p>
      <button className="button" onClick={refreshPage}>
        Refresh
      </button>
    </div>
  )}
</div>
    <p className="attribute">Source of the deck: <a href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck_(Roses_%26_Lilies)">Rider-Waite Tarot Deck</a></p>
    </div>
  );
};

export default Tarot;
