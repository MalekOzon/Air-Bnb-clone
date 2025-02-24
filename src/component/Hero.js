import React from "react";
import '../Css/hero.css'
// import pic from "../images/group.png"
export default function Hero(){
    return(
        <section className="hero">
        <img src='../images/group.png' className="hero--photo" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
    )
}
