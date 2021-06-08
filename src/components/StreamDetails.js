import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

/**
* React Component to Render Active Stream Details
* @author [Aron Roberts](https://github.com/robotros)
*/
class StreamDetails extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='col-md-4 col-sm-6 infor'>
        <h2 className='my-3 text-center'>Economic Buffs</h2>
        <hr></hr>
        <Table
          data={this.props.data}
        />
        <hr></hr>
      </div>
    );
  }
}

StreamDetails.propTypes = {
  data: PropTypes.object,
};

export default StreamDetails;
