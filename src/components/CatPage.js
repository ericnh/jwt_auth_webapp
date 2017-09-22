import React, { Component } from 'react';
import { connect } from 'react-redux';
import HobbyList from './HobbyList';

class CatPage extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.cat.name }</h1>
        <p>breed: { this.props.cat.breed }</p>
        <p>weight: { this.props.cat.weight }</p>
        <p>temperament: { this.props.cat.temperament }</p>
        <HobbyList hobbies={ this.props.cat.hobbies } />
      </div>
    );
  }
}

// function collectCatHobbies(hobbies, cat) {
  // let selected = hobbies.map(hobby => {
    // if (cat.hobby_ids.filter(hobbyId => +hobbyId === +hobby.id).length > 0) {
      // return hobby;
    // }
  // })
  // return selected.filter(el => el != undefined)
// }


function mapStateToProps(state, ownProps) {
  let cat = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
  let hobbies = [];
  const catId = +ownProps.match.params.id;
  if (state.cats.length > 0) {
    cat = Object.assign({}, state.cats.find(cat => cat.id === catId));
    // console.log(cat);
    // if (cat.hobbies.length > 0) {
      // hobbies = collectCatHobbies(state.hobbies, cat);
    // }
  }
  return { cat: cat, catHobbies: hobbies };
}

export default connect(mapStateToProps)(CatPage);
