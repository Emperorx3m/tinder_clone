import React, { useState, useEffect, useRef, useMemo } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'
import axios from './axios';
import ActionButtons from './ActionButtons';

function TinderCards() {
  const [people, setPeople] = useState([])
  const [currentIndex, setCurrentIndex] = useState(people.length - 1)
  const canSwipe = currentIndex >= 0;
  const canGoBack = currentIndex < people.length - 1
  const childRefs = useMemo(
    () => {
      if (people.length === 0) {
        return []; // Return an empty array if there are no people
      }
      return Array(people.length)
        .fill(0)
        .map((i) => React.createRef())
    }
    ,
    [people]
  )

  useEffect(() => {
    var fetchData = async () => {
      const req = await axios.get("/tinder/cards");
      console.log(req.data)
      setPeople(req.data)
      updateCurrentIndex(req.data.length - 1)
    }
    fetchData();
  }, [])

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
  }

  const swipe = async (dir) => {
    console.log("swipe", dir)
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  const swiped = (direction, nameToDelete, index) => {
    console.log(nameToDelete + " went " + direction, index);
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the building");
  }

  // increase current index and show card
  const goBack = async () => {
    console.log("atras")
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className='tindercards'>
      <div className="tindercards__card_container">
        {people.map((person, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, index)}
            onCardLeftScreen={() => outOfFrame(person.name, index)}
          >

            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
      <ActionButtons goBack={goBack} swipe={swipe} />
    </div>
  );
}

export default TinderCards