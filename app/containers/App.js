import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Browser from './Browser';
import ErrorScreen from '../components/ErrorScreen';

class _App extends Component {
  async componentDidMount() {
    const { AppStore } = this.props;
    await AppStore.loadData();
  }

  render() {
    const { AppStore } = this.props;

    if (AppStore.error) {
      return (
        <ErrorScreen />
      );
    }

    return (
      <React.Fragment>
        <Browser />
      </React.Fragment>
    );
  }
}

const App = inject('AppStore')(observer(_App));

export default App;
