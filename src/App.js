import React, {Component} from "react"
import Header from "./components/global/Header"
import WidgetView from "./components/main-window/WidgetView"
import './App.css'
import './ViewEnum'
import { views } from "./ViewEnum"
import SellingChartView from "./components/selling-chart/SellingChartView"
import NotImplementedYet from "./NotImplementedYet"

class App extends Component
{

  constructor(props){
    super(props);
    this.state = {      
      theme: false, // false for light, true for dark
      languages: ['Polski', 'English'],
      chosenLanguage: 'English',
      view: views[0]
    }
  }

  setTheme = (themeValue) => {
    this.setState({theme: themeValue})
  }

  setLanguage = (language) => {
    this.setState({chosenLanguage: language})
  }

  setView = (newView) => {
    this.setState({view: newView})
    //DELETE LOG LATER
    console.log(this.state.view)
  }

  currentView = () => {
    console.log(this.state.view)
    switch (this.state.view) {
      case 'Main window':
        return(
          <WidgetView
            onSelectView={this.setView}
          />
        )
      case 'Selling chart':
        return(
          <SellingChartView
            onSelectView={this.setView}
          />
        )
      default:
        return(
          <NotImplementedYet
            onSelectView={this.setView}
          />
        )        
    }
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
        {this.currentView()}
      </div>
    )
  }
}

export default App