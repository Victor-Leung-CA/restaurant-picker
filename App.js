import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import TableInfo from './components/TableInfo';
import { Swipe } from './components/Swipe';
import GetRestaurant from './API/getRestaurant';

const YourApp = () => {
  const generator = new GetRestaurant();
  const getInfo = generator.results;

  const [randNum, setRandNum] = useState(generator.getRandInt());
  const getRandNum = () => {
    setRandNum(generator.getRandInt());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Swipe
        getInfo={getInfo}
        getRandNum={getRandNum}
        randomNum={randNum}
        onClick={getRandNum}
      />
      <TableInfo getInfo={getInfo} randomNum={randNum} />
    </View>
  );
};

export default YourApp;
