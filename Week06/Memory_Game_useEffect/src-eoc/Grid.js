import {useState, useEffect} from 'react'
import cx from 'classnames'
// imported and named to use CSS modules
import styles from './UI.module.css'

import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'

const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]

// game logic, game board
//const Grid = () => {}
//export default Grid
export default function Grid() {
  const [cards, setCards] = useState([])
  const [turn, setTurns] = useState(0)

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    // spread all of our card image objects 2x so that we have duplicates!
    const shuffledCards = [...cardImages, ...cardImages]

      // add the sort function which fires a function for each item in our array
      // when the number is negative, aka not truthy leave the card where it is in the deck
      // when the number is positive, swap it with another item
      .sort(() => Math.random() - 0.5)
      // now we map to add another property to each card object in out shuffled deck
      .map((card) => ({...card, id: Math.round(Math.random() * 1000000000)}))
    // console.log(shuffledCards)

    //use our Setter to add the shuffled deck to our cards in State
    setCards(shuffledCards)
  }

  // handle a user click assigning a card choice
  const handleChoice = (card) => {
    console.log(card)
    // check if we have choice one, if so this clicked card is choice 2
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // ok, now we have both choices time to compare?
    // BUT NOT HERE!
    // if we were to check it here, our setter from the line of code above
    // might not have fully finished updating our state when we compare on this next line!
    // fire a function when either choiceOne or choiceTwo updates
    // useEffect with a second argument!
  }

  useEffect(() => {
    // make sure we have both choices
    if (choiceOne && choiceTwo) {
      // now they both exist, compare the value of thier src key
      if (choiceOne.src === choiceTwo.src) {
        // we have an array of our shuffled cards stored in state as cards
        // we have to map through our cards array and assign a new property matched: true when they match
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              console.log('these cards match!')
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        // else = they dont match!
        console.log('these cards do not match!')
        // eeK bad UX, cant even see the second card before it is compared and reflipped
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]) // if either of these pieces of state updates, the first argument (function ) will fire

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      Turns Used: {turn}
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      </div>
    </>
  )
}

// inidividual card logic
function Card(props) {
  const {card, handleChoice, flipped} = props
  // temporary isActive logic to flip the cards stored in state
  // const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    // this is temp just for visual feedback
    // setIsActive(!setIsActive)
    // this passes the chosen card object back up to the parent where handleChoice is defined
    handleChoice(card)
  }
  return (
    <div className={styles.flip_card}>
      <div
        onClick={handleClick}
        className={cx(styles.flip_card_inner, {[styles.flipped]: flipped})}
      >
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card face" />
        </div>
      </div>
    </div>
  )
}
