import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Header from "../Components/Header";
import axios from "../Helpers/axios";
import SwipeButtons from "../Components/SwipeButtons";
import "./home.css";
function Home() {
  const [people, setPeople] = useState([]);

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/tinder/card");

      var tempData = [];
      response.data.forEach((ele) => {
        var base64Flag = `data:${ele.img.contentType};base64,`;
        var imageStr = arrayBufferToBase64(ele.img.data.data);
        tempData.push({
          name: ele.name,
          image: base64Flag + imageStr,
        });
      });
      setPeople(tempData);
    }
    fetchData();
  }, [people]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <>
      <Header />
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
              <div className="card">
                <img
                  className="card-image"
                  src={person.image}
                  alt={person.name}
                />
                <h1 className="cardContent">{person.name}</h1>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <SwipeButtons />
    </>
  );
}

export default Home;
