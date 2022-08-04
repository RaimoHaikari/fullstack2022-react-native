/* eslint-disable */
import { useState } from "react";
import { View, StyleSheet, Pressable} from "react-native";
import { Menu, Provider } from 'react-native-paper';
import Text from '../Text';

import theme from "../../theme";


/*  backgroundColor: "#222", borderWidth: 2, top:150, left:-100 , position: 'absolute', zIndex:100 */
const ListHeader = ({activeIndex, changeHandler, sortingOptions}) => {

  const [visible, setVisible] = useState(false);
  const [marginBottom, setMarginBottom] = useState(10)

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const styles = StyleSheet.create({
    container: {
      position: "relative",
      flex: 1,
      justifyContent: "space-between",
      marginTop: 10,
      marginLeft: 10,
      marginBottom: marginBottom
    },
    text: {
      color: theme.colors.textSecondary, 
      fontSize: theme.fontSizes.subheading, 
      fontWeight: theme.fontWeights.bold
    },
    menuContainer: {
      position: "absolute",
      borderWidth: 2, 
      top:10, 
      left:10
    },
    menuItem: {
      backgroundColor: "white",
    }
  });

  const openMenuHandler = () => {
    setMarginBottom(9999);
    openMenu();
  }

  const closeMenuHandler = () => {
    setMarginBottom(10);
    closeMenu();
  }

  const getDisplayButton = () => {

    return (
      <Pressable 
          onPress={() => openMenuHandler()} 
          disabled={false}
      >
        <Text style={styles.text}>
          {
            `sorted by ${sortingOptions[activeIndex].title}`
          }
        </Text>
      </Pressable>    
    )
  }

  const pressHandler = (val) => {

    setMarginBottom(10);
    closeMenu();

    changeHandler(val);

  }

  return (

    <Provider>
      <View style={styles.container}>

        <Text>Hakukenttää pitäisi väsätä</Text>

        <Menu
          style={styles.menuContainer}
          visible={visible}
          onDismiss={() => closeMenuHandler()}
          anchor={getDisplayButton()}
        >
        {
          sortingOptions.map((o) => {
            return (
              <Menu.Item 
                key={o.index}
                style={styles.menuItem} 
                onPress={() => pressHandler(o)} 
                title={activeIndex === o.index ? `+ ${o.title}` : o.title} 
              />);
          })
        }
        </Menu>

      </View>
    </Provider>

  );
};

export default ListHeader;