import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Navbar(props) {
  const [Mode, setMode] = useState("blue")

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} ${props.txtMode}`}>
    <div className="container-fluid">
      <a className={`navbar-brand ${props.txtMode}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a className={`nav-link active ${props.txtMode}`}aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${props.txtMode}`} href="/">About</a>
          </li>
         
            
        </ul>
       {/* <div className={`form-check form-switch ${props.txtMode} `}>
  <input className="form-check-input " onClick={props.toggleModeYellow}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enabled yellow Dark Mode</label>
</div>
        <div className={`form-check form-switch ${props.txtMode} `}>
  <input className="form-check-input " onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enabled blue Dark Mode</label>
  </div>*/}
  
 

<div class="form-check">
  <input class="form-check-input" onChange={props.toggleMode} value="red" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
    Enable Light Mode
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" onChange={props.toggleModeYellow} value="red" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
    Enable Yellow Mode
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" onChange={props.toggleModeDark} value="red" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
    Enable dark  Mode
  </label>
</div>

      </div>
    </div>
  </nav>
  )
}
Navbar.prototype={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'set title here'

}