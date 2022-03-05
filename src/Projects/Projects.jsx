import React from "react";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="myProjects">
      <div className="pokemonProj">
      <a href="https://pokemonunown.netlify.app/" target="_blank" rel="noreferrer">Unseen Forces</a>
      <br />
      Pokemon Memory Card Flip Game
      <br />
      <a href="https://github.com/Scotty-Cloud/Pokemon-Memory-Game" target="_blank" rel="noreferrer">Github</a>
      </div>
      <div className="hammyProj">
      <a href="https://wanna-hammy-out.herokuapp.com/" target="_blank" rel="noreferrer">Wanna Hammy Out</a>
      <br />
      Its Hammy Time
      <br />
      <a href="https://github.com/Scotty-Cloud/wanna-hammy-out" target="_blank" rel="noreferrer">Github</a>
      </div>
      <div className="elvisProj">
      <a href="https://graceland-movies.herokuapp.com/" target="_blank" rel="noreferrer">Graceland</a>
      <br />
      Just another heart break hotel story
      <br />
      <a href="https://github.com/Scotty-Cloud/pinkcadillac" target="_blank" rel="noreferrer">Github</a>
      </div>
      <div className="lfgProj">
      <a href="https://lfgpls.herokuapp.com/" target="_blank" rel="noreferrer">LFG</a>
      <br />
      Need Friends? Look no further!
      <br />
      <a href="https://github.com/Scotty-Cloud/lfg" target="_blank" rel="noreferrer">Github</a>
      </div>
    </div>
  )
}

export default Projects