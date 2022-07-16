import { View, StyleSheet, ScrollView } from 'react-native';
import Tab from "./Tab";

import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: theme.colors.tabBackGround,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
      >
        <Tab 
            title='Repositories'
            target='/'
        />
        <Tab 
            title='Sign in'
            target='/signIn'
        />
      </ScrollView>

    </View>
  );
};

export default AppBar;