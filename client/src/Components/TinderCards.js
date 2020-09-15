import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./tindercard.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "",
    },
    {
      name: "Bill Gates",
      url: "",
    },
    {
      name: "Tony Stark",
      url: "",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinder_cards">
      <div className="tinderCard_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h1 className="cardContent">{person.name}</h1>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
