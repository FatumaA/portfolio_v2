import React from 'react'
// import {} from 'react-icons'

const Footer = () => {
  return (
    <div className="footer-main-container">
    
      <div className="footer-grid-2">
      <p className="sm-footer-text">
          Delicately crafted by 
          <a href='https://github.com/FatumaA' target='_blank' rel='noreferrer'> Fatuma A</a>
        </p>
      </div>
      <div className="footer-grid-3"> 
        &#169; {new Date().getUTCFullYear()}
      </div>
      </div>
    
  )
}

export default Footer
