import { useState } from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from 'react-native-paper';


const Tyomaa = () => {

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const pressHandler = (val) => {

      console.log(val);
      closeMenu();

    }

    return (
        <Provider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show menu</Button>}>
            <Menu.Item onPress={() => pressHandler("Item 1")} title="Item 1" />
            <Menu.Item onPress={() => pressHandler("Item 2")} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => pressHandler("Item 3")} title="Item 3" />
          </Menu>
        </View>
      </Provider>  
    );
};

export default Tyomaa;