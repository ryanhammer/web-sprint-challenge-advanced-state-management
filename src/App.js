import React, { Component } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { fetchSmurfs } from "./actions";

class App extends Component {

  componentDidMount() {
    fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

export default connect(null, { fetchSmurfs })(App);