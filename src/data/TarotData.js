import React, { Fragment } from "react";

const tarotCards = [
  { name: "The Fool", image: "../media/tarotdeck/00_Fool.jpeg" },
  { name: "The Magician", image: "../media/tarotdeck/01_Magician.jpeg" },
  { name: "The High Priestess", image: "../media/tarotdeck/02_High_Priestess.jpeg" },
  { name: "The Empress", image: "../media/tarotdeck/03_Empress.jpeg" },
  { name: "The Emperor", image: "../media/tarotdeck/04_Emperor.jpeg" },
  { name: "The Hierophant", image: "../media/tarotdeck/05_Hierophant.jpeg" },
  { name: "The Lovers", image: "../media/tarotdeck/06_Lovers.jpeg" },
  { name: "The Chariot", image: "../media/tarotdeck/07_Chariot.jpeg" },
  { name: "Strength", image: "../media/tarotdeck/08_Strength.jpeg" },
  { name: "The Hermit", image: "../media/tarotdeck/09_Hermit.jpeg" },
  { name: "The Wheel of Fortune", image: "../media/tarotdeck/10_Wheel_of_Fortune.jpeg" },
  { name: "Justice", image: "../media/tarotdeck/11_Justice.jpeg" },
  { name: "The Hanged Man", image: "../media/tarotdeck/12_Hanged_Man.jpeg" },
  { name: "Death", image: "../media/tarotdeck/13_Death.jpeg" },
  { name: "Temperance", image: "../media/tarotdeck/14_Temperance.jpeg" },
  { name: "The Devil", image: "../media/tarotdeck/15_Devil.jpeg" },
  { name: "The Tower", image: "../media/tarotdeck/16_Tower.jpeg" },
  { name: "The Star", image: "../media/tarotdeck/17_Star.jpeg" },
  { name: "The Moon", image: "../media/tarotdeck/18_Moon.jpeg" },
  { name: "The Sun", image: "../media/tarotdeck/19_Sun.jpeg" },
  { name: "Judgement", image: "../media/tarotdeck/20_Judgement.jpeg" },
  { name: "The World", image: "../media/tarotdeck/21_World.jpeg" },
  { name: "Cups 1", image: "../media/tarotdeck/Cups_01.jpeg" },
  { name: "Cups 2", image: "../media/tarotdeck/Cups_02.jpeg" },
  { name: "Cups 3", image: "../media/tarotdeck/Cups_03.jpeg" },
  { name: "Cups 4", image: "../media/tarotdeck/Cups_04.jpeg" },
  { name: "Cups 5", image: "../media/tarotdeck/Cups_05.jpeg" },
  { name: "Cups 6", image: "../media/tarotdeck/Cups_06.jpeg" },
  { name: "Cups 7", image: "../media/tarotdeck/Cups_07.jpeg" },
  { name: "Cups 8", image: "../media/tarotdeck/Cups_08.jpeg" },
  { name: "Cups 9", image: "../media/tarotdeck/Cups_09.jpeg" },
  { name: "Cups 10", image: "../media/tarotdeck/Cups_10.jpeg" },
  { name: "Cups 11", image: "../media/tarotdeck/Cups_11.jpeg" },
  { name: "Cups 12", image: "../media/tarotdeck/Cups_12.jpeg" },
  { name: "Cups 13", image: "../media/tarotdeck/Cups_13.jpeg" },
  { name: "Cups 14", image: "../media/tarotdeck/Cups_14.jpeg" },
  { name: "Pentacles 1", image: "../media/tarotdeck/Pentacles_01.jpeg" },
  { name: "Pentacles 2", image: "../media/tarotdeck/Pentacles_02.jpeg" },
  { name: "Pentacles 3", image: "../media/tarotdeck/Pentacles_03.jpeg" },
  { name: "Pentacles 4", image: "../media/tarotdeck/Pentacles_04.jpeg" },
  { name: "Pentacles 5", image: "../media/tarotdeck/Pentacles_05.jpeg" },
  { name: "Pentacles 6", image: "../media/tarotdeck/Pentacles_06.jpeg" },
  { name: "Pentacles 7", image: "../media/tarotdeck/Pentacles_07.jpeg" },
  { name: "Pentacles 8", image: "../media/tarotdeck/Pentacles_08.jpeg" },
  { name: "Pentacles 9", image: "../media/tarotdeck/Pentacles_09.jpeg" },
  { name: "Pentacles 10", image: "../media/tarotdeck/Pentacles_10.jpeg" },
  { name: "Pentacles 11", image: "../media/tarotdeck/Pentacles_11.jpeg" },
  { name: "Pentacles 12", image: "../media/tarotdeck/Pentacles_12.jpeg" },
  { name: "Pentacles 13", image: "../media/tarotdeck/Pentacles_13.jpeg" },
  { name: "Pentacles 14", image: "../media/tarotdeck/Pentacles_14.jpeg" },
  { name: "Swords 1", image: "../media/tarotdeck/Swords_01.jpeg" },
  { name: "Swords 2", image: "../media/tarotdeck/Swords_02.jpeg" },
  { name: "Swords 3", image: "../media/tarotdeck/Swords_03.jpeg" },
  { name: "Swords 4", image: "../media/tarotdeck/Swords_04.jpeg" },
  { name: "Swords 5", image: "../media/tarotdeck/Swords_05.jpeg" },
  { name: "Swords 6", image: "../media/tarotdeck/Swords_06.jpeg" },
  { name: "Swords 7", image: "../media/tarotdeck/Swords_07.jpeg" },
  { name: "Swords 8", image: "../media/tarotdeck/Swords_08.jpeg" },
  { name: "Swords 9", image: "../media/tarotdeck/Swords_09.jpeg" },
  { name: "Swords 10", image: "../media/tarotdeck/Swords_10.jpeg" },
  { name: "Swords 11", image: "../media/tarotdeck/Swords_11.jpeg" },
  { name: "Swords 12", image: "../media/tarotdeck/Swords_12.jpeg" },
  { name: "Swords 13", image: "../media/tarotdeck/Swords_13.jpeg" },
  { name: "Swords 14", image: "../media/tarotdeck/Swords_14.jpeg" },
  { name: "Wands 1", image: "../media/tarotdeck/Wands_01.jpeg" },
  { name: "Wands 2", image: "../media/tarotdeck/Wands_02.jpeg" },
  { name: "Wands 3", image: "../media/tarotdeck/Wands_03.jpeg" },
  { name: "Wands 4", image: "../media/tarotdeck/Wands_04.jpeg" },
  { name: "Wands 5", image: "../media/tarotdeck/Wands_05.jpeg" },
  { name: "Wands 6", image: "../media/tarotdeck/Wands_06.jpeg" },
  { name: "Wands 7", image: "../media/tarotdeck/Wands_07.jpeg" },
  { name: "Wands 8", image: "../media/tarotdeck/Wands_08.jpeg" },
  { name: "Wands 9", image: "../media/tarotdeck/Wands_09.jpeg" },
  { name: "Wands 10", image: "../media/tarotdeck/Wands_10.jpeg" },
  { name: "Wands 11", image: "../media/tarotdeck/Wands_11.jpeg" },
  { name: "Wands 12", image: "../media/tarotdeck/Wands_12.jpeg" },
  { name: "Wands 13", image: "../media/tarotdeck/Wands_13.jpeg" },
  { name: "Wands 14", image: "../media/tarotdeck/Wands_14.jpeg" },
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

export { tarotCards };
export default TarotComponent;
