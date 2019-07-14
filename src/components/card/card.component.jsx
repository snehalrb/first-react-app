import React from 'react'
import './card.style.css';

export const Card = (props) => (
<div className="card-bg">
    <img src={`https://robohash.org/ ${ props.mymonstertocard.id }?set=set2&size=180x180`} alt="{ props.mymonstertocard.id }" />
 <h2>  { props.mymonstertocard.name } </h2>
 <p>{ props.mymonstertocard.email }</p>
 </div>
)





