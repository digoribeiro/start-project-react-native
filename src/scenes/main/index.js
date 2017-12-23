import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Start Project React Native Boilerplate</Text>
      </View>
    );
  }
}

export default connect(() => ({}))(Main);
