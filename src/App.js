import React, {Component} from "react"
import Header from "./components/global/Header"
import WidgetView from "./components/main-window/WidgetView"
import './App.css'
import { views, mainWindow } from "./ViewEnum"
import SellingChartView from "./components/selling-chart/SellingChartView"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import OrdersView from "./components/orders/OrdersView"

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
  }

  openMainMenu = () => {
    this.setState({view: mainWindow})
  }

  currentView = () => {
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
            onGoBack={this.openMainMenu}
          />
        )
      case 'Orders':
        return(
          <OrdersView 
            onGoBack={this.openMainMenu}
          />
        )
      default:
        return(
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Not implemented yet</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>We are still workin on this functionality</p>
            </Modal.Body>

            <Modal.Footer>
              <Button 
                variant="secondary"
                onClick={this.openMainMenu}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
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