import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import TypeOfGame from "./TypeOfGame";
import "./AddPlayers.css"

function AddPlayers({type}) {
    const [inputText, setInputText] = useState("");
    const [getGoingButton, setGetGoingButton] = useState(false)
    const [teamOne, setTeamOne] = useState([]);
    const [teamTwo, setTeamTwo] = useState([])

    function renderPlayer() {
        if (teamOne.length < 2) {
            setTeamOne(prevArray => [...prevArray, inputText])
        } else if (teamTwo.length < 2) {
            setTeamTwo(prevArray => [...prevArray, inputText])
        }
        
        setInputText("")
    }

    function setInputValue(e) {
        if (e.key === "Enter") {
            renderPlayer()
            }
    }

    function removePlayerTeamOne(playerIndex) {
        setTeamOne(teamOne.filter((teamOne, index) => index != playerIndex))
       
    }

    function removePlayerTeamTwo(playerIndex) {
        console.log(teamTwo);
        setTeamTwo(teamTwo.filter((teamTwo, index) => index != playerIndex))
       
    }

    
        return (
            <>
            {(getGoingButton === true) ? <TypeOfGame type = {type}  teamOne={teamOne} teamTwo={teamTwo} /> :
             (teamOne.length !== 2 || teamTwo.length !== 2) ? 
                (
                    <>
                    <div className="inputsection">
                    <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} onKeyDown={setInputValue} />
                    <PrimaryButton title = "Add player" action ={renderPlayer}/>
                    </div>
                    <p>to remove an added player, simply click on the name of the player!</p>
                    <section className="teams">
                    <aside className="teams__team">
                    <h3>Team one</h3>
                    {teamOne.map((player, index)=> <p key={index} onClick={()=>{removePlayerTeamOne(index)}}>{player}</p>)}
                    </aside>
                    <aside className="teams__team">
                    <h3>Team two</h3>
                    {teamTwo.map((player, index)=> <p key={index} onClick={()=>{removePlayerTeamTwo(index)}}>{player}</p>)}
                    </aside>
                    </section>
                    </>
                ) : (
                <>
                <h2>All players added!</h2>
                <p>to remove an added player, simply click on the name of the player!</p>
                <PrimaryButton title="Lets get going!" action={()=>setGetGoingButton(true)} />
                <section className="teams">
                <aside className="teams__team">
                <h3>Team one</h3>
                {teamOne.map((player, index)=> <p key={index} onClick={()=>{removePlayerTeamOne(index)}}>{player}</p>)}
                </aside>
                <aside className="teams__team">
                <h3>Team two</h3>
                {teamTwo.map((player, index)=> <p key={index} onClick={()=>{removePlayerTeamTwo(index)}}>{player}</p>)}
                </aside>
                </section>
                </>
                )}
            </>
)}

export default AddPlayers;