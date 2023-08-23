import React from 'react'
import { FaSearch } from 'react-icons/fa';

function Filter({searching}){
  return (
    <form className="searchfor">
        <input type="text" className="search-input"
        onChange={searching} placeholer="search for transactions here"></input>
        <i>FaSearch</i>
    </form>
  )
}

export default Filter