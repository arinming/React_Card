import React from 'react'
import './Menu.css'

function menu() {
  return (
    <nav className="black-nav">
        <a href='/' className="Title">
        <img className="logo" alt="balaok" src="img/balaok.png"></img>
            Blog
        </a>
        <div className="MenuBar">
            <ul>
                <li className='MenuList'>
                    <a href="/list">악보 리스트</a>
                </li>
                <li className='MenuTrans'>
                    <a href="/trans">악보 변환</a>
                </li>
                <li className='MenuUplode'>
                    <a href="/uplode">악보 등록하기</a>
                </li>
            </ul>
        </div>
        </nav>
  )
}

export default menu