// http://react.tips/checkboxes-in-react/
import React, { Component } from 'react';

class Checkbox extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // isChecked: this.props.isChecked
    // }
    // this.handleHobbieChange = this.handleHobbieChange.bind(this);
  // }

  // handleHobbieChange(e) {
    // this.setState({
      // isChecked: !this.state.isChecked
    // });
  // }

  render() {
    const { label, value, hobbieChange, isChecked } = this.props;

    return (
      <div className="checkbox">
        <label>
          <input 
            type="checkbox"
            checked={ isChecked }
            value={ value }
            onChange={ hobbieChange } />
          { label }
        </label>
      </div>
    );
  }
}

export default Checkbox;
