/* eslint no-console: ['error', { allow: ['warn', 'error'] }] */
/* eslint no-invalid-this: 'warn' */
/* eslint max-len: 'warn' */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Form
* @author [Aron Roberts](https://github.com/robotros)
*/
class SpeedupForm extends Component {
  state = {
    Speedups: [
      '1 min', '5 min', '10 min', '15 min', '30 min',
      '1 hr', '3 hr', '8 hr', '15 hr', '1 day',
      '3 days', '7 days', '30 days',
    ],
  }


  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='col-md-2'>
        <h4>{this.props.name}</h4>
        <hr></hr>
        {this.state.Speedups.map((index) =>
          <div className='form-group row' key={index}>
            <label htmlFor='colFormLabelSm' className='col-sm-3 col-md-3 col-form-label col-form-label-sm'>{index}</label>
            <div className='col-sm-9 col-md-9'>
              <input type='number' className='form-control form-control-sm' id='colFormLabelSm'></input>
            </div>
          </div>
        )}
      </div>
    );
  }
}

SpeedupForm.propTypes = {
  update: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SpeedupForm;
