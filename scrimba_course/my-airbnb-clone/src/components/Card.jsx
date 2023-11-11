import React from "react";

export default function Card( props ) {
    //console.log(myKey)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
  return (


    <div className="card">
       {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`/src/assets/${props.item.coverImg}` } className="card--img" />
      <div className="card--stats">
        <img src="/src/assets/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">({props.item.stats.reviewCount})</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>    
            <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  );
}
