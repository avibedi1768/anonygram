import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './../css/footer.css'
import './../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  var sharableLink = window.location.href.replace('profile', 'main')
  // console.log(sharableLink)

  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className="footer-brand">
          <h2 style={{ color: '#fff' }} >AnonyGram</h2>
          <p>Unveil your thoughts anonymously with Anonygram, Where every message is a secret.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link smooth to="/login">Login</Link></li>
            <li><HashLink smooth to={sharableLink}>Sharable Link</HashLink></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p> <FontAwesomeIcon icon={faPhone} /> &nbsp; <a href="tel:+918146004250">+91 81460 04250</a></p>
          <p>  <FontAwesomeIcon icon={faEnvelope} /> &nbsp; <a href="mailto:arshbedi2517@gmail.com">arshbedi2517@gmail.com</a></p>
          {/* <Link to="/"> <FontAwesomeIcon icon={fa} /> &nbsp;&nbsp; Go to Cart</Link> */}
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>

          <div className="social-links">
            <a href="https://www.instagram.com/avibedi46/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /> </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookF} /> </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} /> </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faPinterest} /> </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Website developed by <a href="https://avibedi1768.github.io/" target='_blank' rel="noreferrer" >APS Bedi</a>.</p>
      </div>

    </footer>
  )
}

export default Footer