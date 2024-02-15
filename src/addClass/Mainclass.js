import React from 'react'
import { Link } from 'react-router-dom'

function Mainclass() {
  return (
    <div style={{ display: "flex" }}>
    <Link className="add" to={"/home/addClass/add"}>
      <div>
        <h1 id="head">Add Class</h1>
      </div>
    </Link>

  </div>
  )
}

export default Mainclass