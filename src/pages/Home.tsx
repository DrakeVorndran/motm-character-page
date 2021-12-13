import React from "react"
import { Link } from "react-router-dom"
import { character, getCharacters } from "../characterStore"

function Home () {
  const characters = getCharacters()
  return (
    <div className="home">
      {characters.map(character => RenderCharacter(character))}
    </div>
  )
}

function RenderCharacter(character: character) {

  return (
    <div className="character">
      <h1>{character.name}</h1>
      <h2>Level {character.level} {character.race}</h2>
    </div>
  )
}


export default Home