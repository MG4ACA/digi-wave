import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    alert(`Thanks ${name}! We'll reach out to ${email}`)
  }

  return (
    <section id="contact" className="container" style={{padding:'3rem 0'}}>
      <h2>Contact</h2>
      <form onSubmit={submit} className="p-fluid p-formgrid p-grid p-mt-3">
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="name">Name</label>
          <InputText id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label htmlFor="email">Email</label>
          <InputText id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="p-col-12">
          <Button type="submit" label="Send" icon="pi pi-send" />
        </div>
      </form>
    </section>
  )
}
