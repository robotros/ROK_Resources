/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-console: ["warn", { allow: ["warn", "error"] }] */

import React from 'react';
import Featured from './Featured';
import axios from 'axios';
import Cookies from 'universal-cookie';
import CryptoJS from 'crypto-js';

// setup const
const cookies = new Cookies();


/**
* React Component to Render WMPQ.org home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Home extends React.Component {
  state = {
    economic_buff: {
      building_speed: 0,
      research_speed: 0,
      training_speed: 0,
      healing_speed: 0,
      gold_gathering_speed: 0,
    },
    VIP: 0,
    max_building: false,
    max_technology: false,
    max_alliance_tech: false,
    all_holy_sites: false,
    holySites: {
      sactum_of_hope: false,
      storm_altar: false,
      wisdom_altar: false,
      earth_altar: false,
      shrine_of_war: false,
      shrine_of_radiance: false,
    },
    civ: '',
    title: {counsellor: false, duke: false, scientist: false, architect: false},
    data: [],
  }

  /**
  * toggleData
  */
  toggleData = () =>{
    // let status = this.state.showData ? false : true;
    // this.setState({showData: status});
  }


  /**
  * Calculate speed
  */
  async calculateSpeed() {
    let buildingSpeed = 0;
    let researchSpeed = 0;
    let trainingSpeed = 0;
    let healingSpeed = 0;


    if (this.state.title.counsellor) {
      buildingSpeed = buildingSpeed + 1;
      researchSpeed = researchSpeed + 1;
      trainingSpeed = trainingSpeed + 0;
      healingSpeed = healingSpeed + 0;
    }

    if (this.state.title.duke) {
      buildingSpeed = buildingSpeed + 0;
      researchSpeed = researchSpeed + 0;
      trainingSpeed = trainingSpeed + 5;
      healingSpeed = healingSpeed + 0;
    }
    if (this.state.title.architect) {
      buildingSpeed = buildingSpeed + 5;
      researchSpeed = researchSpeed + 0;
      trainingSpeed = trainingSpeed + 0;
      healingSpeed = healingSpeed + 0;
    }
    if (this.state.title.scientist) {
      buildingSpeed = buildingSpeed + 0;
      researchSpeed = researchSpeed + 5;
      trainingSpeed = trainingSpeed + 0;
      healingSpeed = healingSpeed + 0;
    }

    switch (this.state.civ) {
      case 'China':
        buildingSpeed = buildingSpeed + 5;
        break;
      case 'Germany':
        trainingSpeed = trainingSpeed + 5;
        break;
      case 'Korea':
        researchSpeed = researchSpeed + 5;
        break;
    }

    if (this.state.max_building) {
      buildingSpeed = buildingSpeed + 0;
      researchSpeed = researchSpeed + 25;
      trainingSpeed = trainingSpeed + 0;
      healingSpeed = healingSpeed + 0;
    }

    if (this.state.max_technology) {
      buildingSpeed = buildingSpeed + 50;
      researchSpeed = researchSpeed + 25;
      trainingSpeed = trainingSpeed + 20;
      healingSpeed = healingSpeed + 0;
    }

    if (this.state.max_alliance_tech) {
      buildingSpeed = buildingSpeed + 23;
      researchSpeed = researchSpeed + 23;
      trainingSpeed = trainingSpeed + 0;
      healingSpeed = healingSpeed + 20;
    }

    if (this.state.all_holy_sites) {
      buildingSpeed = buildingSpeed + 5;
      researchSpeed = researchSpeed + 5;
      trainingSpeed = trainingSpeed + 15;
      healingSpeed = healingSpeed + 20;
    }

    if (this.state.VIP == 17) {
      buildingSpeed = buildingSpeed + 20;
      researchSpeed = researchSpeed + 20;
      trainingSpeed = trainingSpeed + 25;
      healingSpeed = healingSpeed + 55;
    } else if (this.state.VIP >= 15) {
      buildingSpeed = buildingSpeed + 20;
      researchSpeed = researchSpeed + 20;
      trainingSpeed = trainingSpeed + 20;
      healingSpeed = healingSpeed + 50;
    } else if (this.state.VIP >= 12) {
      buildingSpeed = buildingSpeed + 15;
      researchSpeed = researchSpeed + 15;
      trainingSpeed = trainingSpeed + 15;
      healingSpeed = healingSpeed + 0;
    } else if (this.state.VIP >= 10) {
      buildingSpeed = buildingSpeed + 15;
      researchSpeed = researchSpeed + 10;
      trainingSpeed = trainingSpeed + 15;
      healingSpeed = healingSpeed + 0;
    } else if (this.state.VIP >= 8) {
      buildingSpeed = buildingSpeed + 10;
      researchSpeed = researchSpeed + 10;
      trainingSpeed = trainingSpeed + 10;
      healingSpeed = healingSpeed + 0;
    } else if (this.state.VIP >= 7) {
      buildingSpeed = buildingSpeed + 10;
      researchSpeed = researchSpeed + 5;
      trainingSpeed = trainingSpeed + 10;
      healingSpeed = healingSpeed + 0;
    } else if (this.state.VIP >= 6) {
      buildingSpeed = buildingSpeed + 10;
      researchSpeed = researchSpeed + 5;
      trainingSpeed = trainingSpeed + 5;
      healingSpeed = healingSpeed + 0;
    } else if (this.state.VIP >= 4) {
      buildingSpeed = buildingSpeed + 5;
      researchSpeed = researchSpeed + 5;
      trainingSpeed = trainingSpeed + 5;
      healingSpeed = healingSpeed + 0;
    } else if (this.state.VIP >= 3) {
      buildingSpeed = buildingSpeed + 5;
      researchSpeed = researchSpeed + 0;
      trainingSpeed = trainingSpeed + 0;
      healingSpeed = healingSpeed + 0;
    }

    await this.setState({
      economic_buff: {
        building_speed: buildingSpeed,
        research_speed: researchSpeed,
        training_speed: trainingSpeed,
        healing_speed: healingSpeed,
      },
    });
  }


  /**
  * Update State to Form Data
  * @param {HTMLElement} event TopForm form
  */
  update = async (event) =>{
    event.preventDefault();
    let vip = event.target[0].value;
    let buildings = event.target[1].checked;
    let research = event.target[2].checked;
    let allianceTech = event.target[3].checked;
    let holySites = event.target[4].checked;
    let civ = event.target[5].value;
    let title = {counsellor: event.target[6].checked, duke: event.target[7].checked, scientist: event.target[8].checked, architect: event.target[9].checked};

    await this.setState({
      VIP: vip,
      max_building: buildings,
      max_technology: research,
      max_alliance_tech: allianceTech,
      all_holy_sites: holySites,
      title: title,
      civ: civ,
    });

    console.warn(this.state);
    await this.calculateSpeed();
    await this.buildData();
  };

  /**
  * Run build data for component
  */
  async buildData() {
    let dataSet = [];
    dataSet.push({Description: 'Current VIP Level',
      Value: this.state.VIP});
    dataSet.push({Description: 'Building Speed',
      Value: this.state.economic_buff.building_speed});
    dataSet.push({Description: 'Research Speed',
      Value: this.state.economic_buff.research_speed});
    dataSet.push({Description: 'Training Speed',
      Value: this.state.economic_buff.training_speed});
    await this.setState({data: dataSet});
  }

  /**
  * build main content
  */
  async main() {
    await this.buildData();
  }

  /**
  * Run methods once component has mounted
  */
  componentDidMount() {
    this.main();
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='Home container'>
        <h1>MGE  SpeedUp Optimizer</h1>
        <Featured
          active={this.state.active_stream}
          economic_buff={this.state.economic_buff}
          data={this.state.data}
          update={this.update}
        />
      </div>
    );
  }
}

export default Home;
