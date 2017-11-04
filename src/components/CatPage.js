import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import * as catActions from '../actions/catActions';
import HobbyList from './HobbyList';
import CatForm from './CatForm';

class CatPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      cat: this.props.cat
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleHobbieChange = this.handleHobbieChange.bind(this);
    this.updateCatField = this.updateCatField.bind(this);
    this.saveCat = this.saveCat.bind(this);
  }

  toggleEdit() {
    this.setState ({
      isEditing: !this.state.isEditing
    });
  }

  handleHobbieChange(e) {
    const { cat, allCatHobbies } = this.props;
    const newStatus = {
      id: +e.currentTarget.value,
      isChecked: e.currentTarget.checked
    }
    const indexOfHobbie = cat.hobbies.findIndex( (hobbie) => {
        return hobbie.id === newStatus.id
    });
    if (indexOfHobbie >= 0) {
      cat.hobbies.splice(indexOfHobbie, 1);
    } else {
      const newHobbie = allCatHobbies.find( hobbie =>
          hobbie.id === newStatus.id
      );
      cat.hobbies.push(newHobbie);
    }
    this.setState({
      cat: cat,
      isEditing: true
    });
  }

  updateCatField(e) {
    const field = e.target.name;
    const cat = this.state.cat;
    cat[field] = e.target.value;
    return this.setState({cat: cat});
  }

  saveCat(e) {
    e.preventDefault();
    this.toggleEdit();
    this.props.actions.updateCat(this.state.cat);
  }

  render() {
    if (this.state.isEditing) {
      return <CatForm
                handleSave={ this.saveCat }
                cat={ this.props.cat }
                allCatHobbies={ this.props.allCatHobbies }
                hobbieChange={ this.handleHobbieChange } />;
    }

    return (
      <div>
        <h1>{ this.props.cat.name }</h1>
        <p>breed: { this.props.cat.breed }</p>
        <p>weight: { this.props.cat.weight }</p>
        <p>temperament: { this.props.cat.temperament }</p>
        <HobbyList hobbies={ this.props.cat.hobbies } />
        <button onClick={ this.toggleEdit } className="btn">Edit</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let cat = {
    name: '',
    breed: '',
    weight: '',
    temperament: '',
    hobbies: []
  };
  const catId = +ownProps.match.params.id;
  if (state.cats.length > 0) {
    cat = Object.assign({}, state.cats.find(cat => cat.id === catId));
  }
  let allCatHobbies = [];
  if (state.hobbies.length > 0) {
    allCatHobbies = state.hobbies;
  }
  return { cat: cat, allCatHobbies: allCatHobbies };
}

export default connect(mapStateToProps)(CatPage);
