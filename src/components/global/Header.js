import React, {useState} from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Switch from "react-switch"
import './Header.css'
import userIcon from '../../images/user-icon.png'

const Header = (props) => {

  const [theme, setTheme] = useState(props.initialThemeValue)

  const handleSwitchChange = (e) => {
    setTheme(e);
    props.onThemeSwitch(theme)
  }

  let availableLanguages = props.languagesList.map((language) => {
    return (
    <NavDropdown.Item key={language}>{language}</NavDropdown.Item>
  )});

    return (
      <Navbar 
        className='navbar' 
        expand="lg"
      >
        <Navbar.Brand
          className="theme-label"
        >THEME:</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Switch 
              onChange={handleSwitchChange}
              checked={theme}
              className="react-switch"
            />
            <NavDropdown 
              title="LANGUAGE"
              className="languages-dropdown"
            >
              {availableLanguages}
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <img 
          src={userIcon}
          className="user-image"
          alt="user profile icon"
        />
      </Navbar>
    )
}

export default Header