import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ThinRedLine } from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: 'blue',
  },
});

const InfoCard = (album) => {
  const { title, onPress } = album;
  return (
  <View style={styles.container}>

    <View style={styles.leftPane}>
      <View>
      <Text>dfghjj</Text>
    <ThinRedLine onPress={onPress} />
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
      <Image style={{ width: 160, height: 110 }} source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
      </View>
      <View style={{ flexDirection: 'row' }} />
    </View>

  </View>
);
};

export default InfoCard;
