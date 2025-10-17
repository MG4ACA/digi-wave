import React from 'react'

export default function About(){
  return (
    <section id="about" className="container" style={{padding:'3rem 0'}}>
      <h2>About us</h2>
      <p>We are a small team focused on delivering delightful digital products.</p>
      <div className="p-grid p-mt-3">
        <div className="p-col-12 p-md-4">
          <h3>Design</h3>
          <p>Pixel-perfect UI from your Figma designs.</p>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Development</h3>
          <p>Modern stacks and best practices.</p>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Support</h3>
          <p>Long-term maintenance and monitoring.</p>
        </div>
      </div>
    </section>
  )
}
