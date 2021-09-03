import React from 'react';
import PushController from './PushController';
import {StyleSheet, View, Text, FlatList} from 'react-native';

// Dummy data for list, we'll replace this with data received from push
let pushData = [
  {
    title: 'First push',
    message: 'First push message',
  },
  {
    title: 'Second push',
    message: 'Second push message',
  },
];

renderItem = ({item}) => (
  <View key={item.title}>
    <Text>{item.title}</Text>
    <Text>{item.message}</Text>
  </View>
);

const App = () => {
  return (
    <View>
      <View style={styles.body}>
        <FlatList
          data={pushData}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.title}
        />
        {/* <LearnMoreLinks /> */}
      </View>
      <PushController />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default App;
