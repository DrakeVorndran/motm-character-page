export interface character {
  name: string,
  age: string,
  height: string,
  weight: string,
  appearance: string,
  scores: scores,
  race: string,
  level: number
}

interface scores {
  affinity: number,
  power: number,
  will: number,
  cunning: number,
  charisma: number,
  resistance: number
}

export function getCharacters(): character[] {
  const charactersString = localStorage.getItem("characters")
  let characters: character[]
  if(charactersString) {
    characters = JSON.parse(charactersString)
  }
  else {
    characters = []
  }

  return characters 

}