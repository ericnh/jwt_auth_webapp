import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList';

class CatsPage extends Component {
  render() {
    return (
      <div className="col-md-12">
        <h1>Cats</h1>
        <div className="col-md-4">
          <CatList cats={ this.props.cats } />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // state = { cats: [{id:1, name:"Foo"} etc.] }
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);
