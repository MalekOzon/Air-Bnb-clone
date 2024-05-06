import React from "react";
import '../Css/card.css'

export default function Card(props ){

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return(
        <div className="all" >
            { badgeText != null && <div className="sold">{badgeText}</div>}
            < img src={`images/${props.coverImg}`} height="200px"/>
            <div className="text-under-photo">
                <div className="text-below">
                    <img src="images/star.png" className="star"/>
                    <p className="rate">{props.stats.rating}</p>
                    <p className="text">({props.stats.reviewCount})  {props.location}</p>
                </div>
                <p className="cv-text">{props.title}</p>
                <div className="last-line">
                    <span>From ${props.price}/</span>
                    <p>person</p>
                </div>
            </div>
        </div>
    )
}