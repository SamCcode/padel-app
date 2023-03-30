import { useState } from "react";
import "./TypeOfGame.css"

function TypeOfGame(props) {
    const [greenScore, setGreenScore] = useState(0)
    const [redScore, setRedScore] = useState(0)
    const [redGame, setRedGame] = useState(0)
    const [redSet, setRedSet] = useState(0)
    const [greenGame, setGreenGame] = useState(0)
    const [greenSet, setGreenSet] = useState(0)

function addGreenScore() {
    if (greenScore === 40) {
        setGreenScore(0)
        setRedScore(0)
        setGreenGame(score => score + 1)
    } else if (greenScore === 30) {
        setGreenScore(score => score + 10)
    } else 
    setGreenScore(score => score + 15)
}

addRedSetPoint()
function addRedScore() {
    if (redScore === 40) {
        setGreenScore(0)
        setRedScore(0)
        setRedGame(score => score + 1)
    } else if (redScore === 30) {
        setRedScore(score => score + 10)
    } else 
    setRedScore(score => score + 15)
}

function addRedSetPoint() {
    if (redGame === 6) {
        setRedGame(0)
        setGreenGame(0)
        setRedSet(score => score + 1)
    } else if (greenGame === 6) {
        setRedGame(0)
        setGreenGame(0)
        setGreenSet(score => score + 1)
}}
    return ( 
        <>
        <p>to add points, click on the team field</p>
        <section className="gamefield">
            <aside className="team-red__field" onClick={addRedScore}>
                <div>
                {props.teamOne.map((player, index)=> <p key={index}>{player}</p>)}
                </div>
                <h2>{redScore}</h2>
            </aside>
            <aside className="team-green__field" onClick={addGreenScore}>
                <div>
                {props.teamTwo.map((player, index)=> <p key={index}>{player}</p>)}
                </div>
                <h2>{greenScore}</h2>
            </aside>
        </section>
        <footer>
            <aside className="scoreboard">
            <h2>Team Red</h2>
            <h3>Game <br /> {redGame}</h3>
            <h3>Set <br /> {redSet}</h3>
            </aside>
            <aside className="scoreboard">
            <h2>Team Green</h2>
            <h3>Game <br /> {greenGame}</h3>
            <h3>Set <br /> {greenSet}</h3>
            </aside>
        </footer>
        </>
     );
}

export default TypeOfGame;