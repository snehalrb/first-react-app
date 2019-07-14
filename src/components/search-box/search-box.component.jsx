import React from 'react'

import './search-box.style.css'

export const SearchBox = ({placeHolder, HandleChange})  => (

<input type='search' className="search" placeholder={placeHolder} onChange={HandleChange} />

)
