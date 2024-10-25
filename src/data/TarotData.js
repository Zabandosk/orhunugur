import React, { Fragment } from "react";


const tarotCards = [
  { name: "The Fool", meaning: "New beginnings, adventure, potential" },
  { name: "The Magician", meaning: "Manifestation, power, action" },
  { name: "The High Priestess", meaning: "Intuition, mystery, inner voice" },
  { name: "The Empress", meaning: "Fertility, creation, abundance" },
  { name: "The Emperor", meaning: "Authority, control, structure" },
  // Add more cards as needed...
];

const TarotComponent = () => {
  return (
    <Fragment>
      <h1>Tarot Cards</h1>
      <ul>
        {tarotCards.map((card, index) => (
          <li key={index}>
            <strong>{card.name}</strong>: {card.meaning}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default TarotComponent;
export { tarotCards };
