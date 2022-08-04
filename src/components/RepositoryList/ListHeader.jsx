/* eslint-disable */
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from 'react-native-paper';

import SelectMenu from "./SelectMenu";
import SearchBarContainer from "./SearchBarContainer";

import theme from "../../theme";


const ListHeader = ({activeIndex, changeHandler, searchStr, searchSrtHandler, sortingOptions}) => {

  const [marginBottom, setMarginBottom] = useState(10)


  const styles = StyleSheet.create({
    container: {
      position: "relative",
      flex: 1,
      justifyContent: "space-between",
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      marginBottom: marginBottom
    },
    searchContainer: {},
    selectContainer: {
      paddingTop: 10,
      paddingBottom: 10
    }
  });

  return (

    <Provider>
      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <SearchBarContainer 
            searchSrtHandler={searchSrtHandler} 
            searchStr={searchStr}
          />
        </View>

        <View style={styles.selectContainer}>
          <SelectMenu 
            activeIndex = {activeIndex}
            changeHandler = {changeHandler}
            setMarginBottom = {setMarginBottom}
            sortingOptions = {sortingOptions}
          />
        </View>

        



      </View>
    </Provider>

  );
};

export default ListHeader;