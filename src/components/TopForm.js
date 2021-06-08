/* eslint no-console: ['error', { allow: ['warn', 'error'] }] */
/* eslint no-invalid-this: 'warn' */
/* eslint max-len: 'warn' */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Form
* @author [Aron Roberts](https://github.com/robotros)
*/
class TopForm extends Component {
  state = {
    vip_levels: [
      0, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17,
    ],
    civilizations: [
      'Rome', 'Germany', 'Britain', 'France',
      'Vikings', 'China', 'Japan', 'Korea',
      'Spain', 'Arabia', 'Ottoman Empire', 'Byzantium',
    ],
  }


  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='col-md-8 col-sm-12'>
        <form onSubmit={this.props.update}>
          <div className='form-group'>
            <h3>Primary Information</h3>
            <hr></hr>
            <label htmlFor='VIP'>VIP Status</label>
            <select className='form-control'>
              {this.state.vip_levels.map((index) =>
                <option key={index}>{index}</option>
              )}
            </select>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox1'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox1'>Max Buildings</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox2'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox2'>Max Research</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox3'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox3'>Max Alliance Tech</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox4'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox4'>All Holy Sites</label>
            </div>
          </div>
          <div className='form-group'>
            <h3>Additional Buffs</h3>
            <hr></hr>
            <label htmlFor='Civ'>Civilization</label>
            <select className='form-control'>
              {this.state.civilizations.map((index) =>
                <option key={index}>{index}</option>
              )}
            </select>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox5'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox4'>Counsellor</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox6'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox4'>Duke</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox7'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox4'>Scientist</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='checkbox' id='inlineCheckbox8'></input>
              <label className='form-check-label' htmlFor='inlineCheckbox4'>Architect</label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary mb-2'>
            Update
          </button>
        </form>
      </div>
    );
  }
}

TopForm.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TopForm;
