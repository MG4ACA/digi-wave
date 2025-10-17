import React from 'react'

export default function Footer(){
  return (
    <footer style={{padding:'2rem 0', borderTop:'1px solid #eee', marginTop:'3rem'}}>
      <div className="container p-d-flex p-jc-between p-ai-center">
        <div>© {new Date().getFullYear()} Digi Wave</div>
        <div>
          <a className="p-mr-2" href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
