import React, { useState, useEffect } from 'react';
import { SectionList, StyleSheet, Text, View, Linking } from 'react-native';
import { ListItem, Button, Rating, Divider } from 'react-native-elements';
import Response from '../API/response';
import GetRestaurant from '../API/getRestaurant';

//Styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    flex: 1,
    padding: 20,
    background: 'lightblue',
    width: 300,
  },
  tableTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  button: {
    width: 100,
  },
  divider: {
    backgroundColor: 'lightgrey',
    height: 1,
    opacity: 0.5,
  },
  rating: {
    alignSelf: 'center',
  },
});

//Convert status to 'Open' or 'Closed
const getStatus = (status) => {
  if (status) {
    return 'Closed';
  } else {
    return 'Open';
  }
};

const TableInfo = (props) => {
  //Button onPress redirect
  const seeMore = () => {
    Linking.openURL(props.getInfo[props.randomNum].url);
  };

  return (
    <View style={styles.container}>
      <ListItem containerStyle={styles.tableTop}>
        <ListItem.Content>
          <ListItem.Title>
            <b>Restaurant</b>: {props.getInfo[props.randomNum].name}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <Divider style={styles.divider} />

      <ListItem>
        <ListItem.Content>
          <ListItem.Title>
            <b>Operation</b>:{' '}
            {getStatus(props.getInfo[props.randomNum].is_closed)}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <Divider style={styles.divider} />

      <ListItem>
        <ListItem.Content>
          <ListItem.Title>
            <b>Contact</b>: {props.getInfo[props.randomNum].phone}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <Divider style={styles.divider} />

      <ListItem>
        <ListItem.Content>
          <ListItem.Title>
            <b>Location</b>: {props.getInfo[props.randomNum].location}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <Divider style={styles.divider} />

      <ListItem containerStyle={styles.tableBottom}>
        <ListItem.Content>
          <Rating
            showRating
            fractions={1}
            startingValue={props.getInfo[props.randomNum].rating}
            style={styles.rating}
          />
        </ListItem.Content>
      </ListItem>

      <Button
        title="See More"
        type="outline"
        style={styles.button}
        onPress={seeMore}
      />
    </View>
  );
};

export default TableInfo;
