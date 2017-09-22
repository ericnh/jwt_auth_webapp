import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CatList from './CatList';
import CatPage from './CatPage';

class CatsPage extends Component {
  render() {
    const match = this.props.match;
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Cats</h1>
        </div>
        <div className="col-md-4">
          <CatList cats={ this.props.cats } />
        </div>
        <div className="col-md-8 col-md-offset-2">
          <Route path={ `${ match.url }/:id` } component={ CatPage } />
          <Route exact path={ match.url } render={ () => (
            <h3>Please has cat</h3>
          )}/>
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
