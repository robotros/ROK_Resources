/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */


/**
* filename: App.js
* Main component to render Rok Rss Webpage
*
* Author:[Aron Roberts](github.com/robotros)
* Last Update: 06/07/2021
*/
import React from 'react';
import {Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright, faFlagUsa} from '@fortawesome/free-solid-svg-icons';
// import ReactDOMServer from 'react-dom/server';
import Head from './components/Head';
import Foot from './components/Foot';
import Home from './components/Home';
import './css/app.css';
import Logo from './img/logo.png';

// font awesome icon library
library.add(faCopyright, faFlagUsa);


/**
* React Component to Render Website
* @author [Aron Roberts](https://github.com/robotros)
*/
class App extends React.Component {
  state = {
    company: 'ROK Resources',
    site: '',
    Nav: [
      {
        'path': '/',
        'label': 'Home',
        'component': Home,
      },
    ],
    social: [
      {'url': 'https://www.facebook.com/riseofkingdomsgame/'},
      {'url': 'https://www.youtube.com/channel/UChqXRquQhtswoAqlt3ayyXA'},
      // {'url': 'https://www.twitch.tv/robotros'},
      // {'url': 'https://discord.gg/SDpxpVh'},
      // {'url': 'emailto:robotros@wmpq.org'},
    ],
    credentials:
    {
      username: '',
      password: '',
    },
  }

  /**
  * Make API call to get User information
  * @param {HTMLElement} event login form
  */
  login = async (event) =>{
    event.preventDefault();
    let user = event.target[0].value;
    let pass = event.target[1].value;
    let test = false;

   test ?
    await this.setState({credentials: {username: user.toUpperCase(),
      password: pass}}, document.getElementById('closeLogin').click()) :
    console.error('Authenticaion Failed');
  };

  /**
  * SetState credentials to ''
  * @param {HTMLElement} event logout button
  */
  logout = async (event) => {
    event.preventDefault();
    await this.setState({credentials: {username: '', password: ''}});
    console.warn('user logged out');
  }


  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <main className='app'>
        <Head
          site={this.state.site}
          logo={Logo}
          Nav={this.state.Nav}
          credentials = {this.state.credentials}
          login={this.login}
          logout={this.logout}
        />
        <div className='center'>
          {this.state.Nav.map((page) =>
            <Route
              key={page.label}
              exact path={page.path}
              component={page.component}
            />
          )}
        </div>
        <Foot
          social={this.state.social}
          company = {this.state.company}
        />
      </main>
    );
  }
}

export default App;
