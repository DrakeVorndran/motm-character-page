import React from "react"
import { useParams } from "react-router-dom"



function Character() {
  const { name } = useParams()
  console.log(name)
  return (
    <div className="character">
      <p>{name}</p>
    </div>
  )
}

export default Character