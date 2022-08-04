/* eslint-disable */
import { useState } from "react";
import { StyleSheet, Pressable} from "react-native";
import { Menu } from 'react-native-paper';
import Text from '../Text';

import theme from "../../theme";


const SelectMenu = ({activeIndex, changeHandler, setMarginBottom, sortingOptions}) => {

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const styles = StyleSheet.create({
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
            `sorted by: ${sortingOptions[activeIndex].title}`
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
  );
};

export default SelectMenu;