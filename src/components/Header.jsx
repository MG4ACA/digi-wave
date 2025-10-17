import React from 'react'

export default function Header(){
  return (
    <header className="p-shadow-2" style={{background:'#fff'}}>
      <div className="container p-d-flex p-jc-between p-ai-center" style={{padding:'1rem 0'}}>
        <div style={{fontWeight:700}}>Digi Wave</div>
        <nav>
          <a href="#about" className="p-mr-3">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
