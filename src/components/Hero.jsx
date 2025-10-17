import React from 'react'
import { Button } from 'primereact/button'

export default function Hero(){
  return (
    <section className="p-d-flex p-ai-center" style={{padding:'4rem 0', background:'linear-gradient(90deg,#eef2ff, #fff)'}}>
      <div className="container p-grid p-nogutter">
        <div className="p-col-12 p-md-6">
          <h1 style={{marginTop:0}}>Build beautiful experiences</h1>
          <p>We design and build modern web applications that scale.</p>
          <Button label="Get started" icon="pi pi-arrow-right" className="p-button-primary" />
        </div>
        <div className="p-col-12 p-md-6">
          <div style={{height:200, background:'#fff', borderRadius:8}}></div>
        </div>
      </div>
    </section>
  )
}
