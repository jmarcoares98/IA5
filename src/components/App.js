import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import AppMode from './../AppMode.js';
import LoginPage from './LoginPage.js';
import DisplayPage from './DisplayPage.js';
import ConstructionPage from './ConstructionPage.js'

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "welcome to IA5: login";
modeTitle[AppMode.DISPLAY] = "display data";
modeTitle[AppMode.DISPLAY_ADDDATA] = "add data";
modeTitle[AppMode.CONSTRUCTION] = "under construction";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.DISPLAY] = DisplayPage;
modeToPage[AppMode.DISPLAY_ADDDATA] = DisplayPage;
modeToPage[AppMode.DISPLAY_EDITDATA] = DisplayPage;
modeToPage[AppMode.CONSTRUCTION] = ConstructionPage;

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {mode: AppMode.LOGIN,
                      menuOpen: false,
                      userId: "",
                      showAbout: false};
        }

    handleChangeMode = (newMode) => {
        this.setState({mode: newMode});
    }
        
    openMenu = () => {
        this.setState({menuOpen : true});
    }
          
    closeMenu = () => {
        this.setState({menuOpen : false}); 
    }
        
    toggleMenuOpen = () => {
        this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
    }
        
    setUserId = (Id) => {
        this.setState({userId: Id});
    }

    componentDidMount() {
        window.addEventListener("click",this.handleClick);
    }

    handleClick = (event) => {
        if (this.state.menuOpen) {
          this.closeMenu();
        }
        event.stopPropagation();
    }

    //put about here

    render() {
        const ModePage = modeToPage[this.state.mode];
        return (
          <div onClick={this.handleClick}>
            <NavBar 
              title={modeTitle[this.state.mode]}
              mode={this.state.mode}
              changeMode={this.handleChangeMode}
              menuOpen={this.state.menuOpen}
              toggleMenuOpen={this.toggleMenuOpen}/>
            <SideMenu 
              mode={this.state.mode}
              menuOpen={this.state.menuOpen}
              changeMode={this.handleChangeMode}
              userId={this.state.userId}
              showAbout={this.toggleAbout}/>
            <ModeBar 
              mode={this.state.mode} 
              changeMode={this.handleChangeMode}
              menuOpen={this.state.menuOpen}/>
            <ModePage menuOpen={this.state.menuOpen}
              mode={this.state.mode} 
              changeMode={this.handleChangeMode}
              userId={this.state.userId}
              setUserId={this.setUserId}/>
            {this.state.showAbout ? this.renderAbout() : null}
          </div>
          );  
      }

    
}

export default App;