import React, {Component} from "react"
import Header from "./components/global/Header"
import WidgetView from "./components/main-window/WidgetView"
import './App.css'

class App extends Component
{

  constructor(props){
    super(props);
    this.state = {      
      theme: false, // false for light, true for dark
      languages: ['Polski', 'English'],
      chosenLanguage: 'English'
    }
  }

  setTheme = (themeValue) => {
    this.setState({theme: themeValue})
  }

  setLanguage = (language) => {
    this.setState({chosenLanguage: language})
  }

  render() 
  {
    return(
      <div
        className='app'
      >
        <Header 
          onThemeSwitch={this.setTheme}
          onLanguageChoice={this.setLanguage}
          languagesList={this.state.languages}
          initialThemeValue={this.state.theme}
        />
        <WidgetView />
      </div>
    )
  }
}

export default App