import { StyleSheet, Text, View } from 'react-native';

import * as ProximitySensorNative from 'proximity-sensor-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ProximitySensorNative.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
