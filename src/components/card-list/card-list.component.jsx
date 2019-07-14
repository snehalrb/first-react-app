import React from 'react'

import './card-list.style.css'

import {Card} from '../card/card.component';

export const CardList = (props) => (
    <div className='Clist'>
    {props.passmonster.map(mymonster => <Card key={mymonster.id} mymonstertocard={mymonster} /> )}
    </div>
)

