import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StreamDetails from './StreamDetails';
import TopForm from './TopForm';
import SpeedupForm from './SpeedupForm';

/**
* React Component to Render Active Stream and Details
* @author [Aron Roberts](https://github.com/robotros)
*/
class Featured extends Component {
  state = {
    type: ['Building', 'Training', 'Research', 'Healing', 'Generic'],
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div>
        <div className='row'>
          <TopForm
            data={this.props.data}
            economic_buff={this.props.economic_buff}
            update={this.props.update}
          />
          <StreamDetails
            data={this.props.data}
            economic_buff={this.props.economic_buff}
          />
        </div>
        <form onSubmit={this.props.update}>
          <div className='row'>
          {this.state.type.map((index) =>
            <SpeedupForm
              key = {index}
              name = {index}
              update = {this.props.update}
            />
          )}
          </div>

          <button type='submit' className='btn btn-primary mb-2'>
            Calculate
          </button>
        </form>
      </div>
    );
  }
}

Featured.propTypes = {
  economic_buff: PropTypes.object.isRequired,
  data: PropTypes.array,
  desc: PropTypes.object,
  update: PropTypes.func.isRequired,
};

export default Featured;
