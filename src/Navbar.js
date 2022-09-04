import React from 'react'
import './style.css'
function Navbar(props) {

  const {setnewsCategory} = props;

  const originalStyle = {
    borderBottom: '2px solid antiquewhite'
  }
  function clickHandler(e){

    const category = e.target.innerHTML;
    setnewsCategory(category);
    colorizeActive(category);
  }

  function colorizeActive(category){

    const items = Array.from(document.getElementsByClassName('nav-list-items'))

    items.forEach(item =>{

      item.style.borderBottom = 'none'

      if(item.innerHTML == category){
        item.style.borderBottom = '2px solid antiquewhite'
      }

    })
  }


  return (
    <nav className="navbar">

        <ul className="nav-list">
            <li className="nav-list-items" onClick={clickHandler}>business</li>
            <li className="nav-list-items" onClick={clickHandler}>entertainment</li>
            <li className="nav-list-items" onClick={clickHandler} style={originalStyle}>general</li>
            <li className="nav-list-items" onClick={clickHandler}>health</li>
            <li className="nav-list-items" onClick={clickHandler}>science</li>
            <li className="nav-list-items" onClick={clickHandler}>sports</li>
            <li className="nav-list-items" onClick={clickHandler}>technology</li>
        </ul>
    </nav>
  )
}

export default Navbar