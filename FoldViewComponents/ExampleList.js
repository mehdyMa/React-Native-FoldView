import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, View, TabBarIOS } from 'react-native';
import axios from 'axios';
import Row from './Row';

class ExampleList extends Component {
  state = { events: [] };
  componentWillMount() {
    axios.get('https://4e4hpeh5l7.execute-api.eu-west-1.amazonaws.com/prod/events/?limit=50&page=3&sort=POPULARITY,TIME&category=NIGHTLIFE,MUSIC_EVENTS&after=2016-11-25T13:36:50Z&before=2016-12-25T13:36:50Z&latitude=50.826920&longitude=4.400077&maxDistance=10000000000')
    .then(response => this.setState({ events: response.data.items }));
  }
  renderEvents() {
    return this.state.events.map(event =>
      <Row key={event.externalId} title={event.name} image={event.pictureUrl} />
      );
  }
  render() {
//console.log(this.state);
  //let events = this.renderEvents.bind(this)()
  //console.log(this.state);
  return (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />

    <ScrollView
      style={styles.scrollView}
    >
  {this.renderEvents.bind(this)()}
    </ScrollView>
      <TabBarIOS
        unselectedTintColor="black"
        tintColor="#FDDA4B"
        barTintColor="#FFFFFF"
      >
      <TabBarIOS.Item
          systemIcon="more"
      />
      <TabBarIOS.Item
          systemIcon="history"
      />
      <TabBarIOS.Item
          systemIcon="favorites"
      />
      </TabBarIOS>
  </View>
);
}
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  scrollView: {
    backgroundColor: '#FDDA4B',
    flex: 0,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default ExampleList;
