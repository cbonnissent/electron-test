import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionApplication from '../actions/application';
import MainAppBar from '../components/MainAppBar';
import MainLeftBar from '../components/MainLeftBar';

class App extends Component {

    render() {
        return (<div>
            <MainAppBar {...this.props} openList={() => {this.props.tooglePluginList();}}/>
            <MainLeftBar {...this.props}/>
        </div>);
    }
}

App.propTypes = {
    tooglePluginList : React.PropTypes.func.isRequired
};

export default connect((state) => {
    return state.toJS() || {};
}, actionApplication)(App);
