import { View, StyleSheet, ScrollView } from 'react-native';
import Tab from "./Tab";

import useLoggedUser from '../hooks/useLoggedUser';

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

  const { user } = useLoggedUser();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
      >
        <Tab 
            title='Repositories'
            target='/'
        />
        {
          user
          ? <Tab title = 'Create a review' target='/createReview' />
          : <Tab title = 'Sign up' target='/signUp' />
        }
        {
          user && <Tab title = 'My Reviews' target='/myReviews' />
        }
        {
          user
          ? <Tab title = 'Sign out' target='/signOut' />
          : <Tab title = 'Sign in' target='/signIn' />
        }

        <Tab title= 'Tyomaa' target='/tyomaa' />

      </ScrollView>

    </View>
  );
};

export default AppBar;