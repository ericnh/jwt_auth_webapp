import React, { Component } from 'react';
import Checkbox from './common/Checkbox'

class CatForm extends Component {

  constructor(props) {
    super(props);
    this.catLikesHobbie = this.catLikesHobbie.bind(this);
    this.handleHobbieChange = this.handleHobbieChange.bind(this);
  }

  // pass that buck
  handleHobbieChange(e) {
    this.props.hobbieChange(e);
  }

  showCatHobbies() {
    return this.props.allCatHobbies.map( (hobbie) => {
      let checked = this.catLikesHobbie(hobbie);
      return (
          <Checkbox 
            label={ hobbie.name }
            isChecked={ checked }
            key={ hobbie.id }
            value={ hobbie.id }
            hobbieChange={ this.handleHobbieChange } />
      );
    });
  }

  catLikesHobbie(hobbie) {
    let dislikesHobbie = this.props.cat.hobbies.every((catHobbie) => {
        return +catHobbie.id !== +hobbie.id
    });
    return !dislikesHobbie;
  }


  render() {
    return (
      <div>
        <h1>Edit The Cat</h1>
        { this.showCatHobbies() }
        <div className="row">
          <button onClick={ this.props.handleSave } className="btn col-xs-offset-10">Save</button>
        </div>
      </div>
    );
  }
}

export default CatForm;
