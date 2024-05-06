import React from "react";
import './App.css'
import Hero from './component/Hero'
import Nav from './component/Nav'
import Card from './component/Card'
import data from './data'

console.log(data)

export default function app(){

  const cards =  data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
})

  return(
    <div>
      <Nav />
      <Hero />
      <div className="css-card" >
        {cards}
      </div>
    </div>
  )
}