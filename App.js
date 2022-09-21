import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { startProximity, stopProximity } from 'react-native-proximity-screen';
import * as ProximitySensorNative from 'proximity-sensor-native';

export default function App() {
  React.useEffect(() => {
    startProximity();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{ProximitySensorNative.hello()}</Text>
      <TouchableOpacity
        onPress={() => {
          startProximity();
        }}
      >
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          stopProximity();
        }}
      >
        <Text>Stop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});


// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Button,
//   NativeModules,
//   StyleSheet,
//   Text,
//   View,
//   Vibration,
// } from 'react-native';
// import Torch from 'react-native-torch';
// const ONE_SECOND_IN_MS = 1000;

//   const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];
// export default class TorchDemo extends Component {

  
//   constructor(props) {
//     super(props);

//     this.state = {
//       isTorchOn: false,
//     };
//   }

//   _handlePress() {
//     const { isTorchOn } = this.state;
//     Torch.switchState(!isTorchOn);
//     Vibration.vibrate(1 * ONE_SECOND_IN_MS)
//     this.setState({ isTorchOn: !isTorchOn });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           RCTTorch Demo
//         </Text>
//         <Button
//           onPress={this._handlePress.bind(this)}
//           title="Toggle Torch"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });