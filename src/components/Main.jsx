import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import SignUp from './SingUp';
import Tyomaa from './Tyomaa';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});


/*
 *
 */
const Main = () => {


  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/signIn' element={<SignIn />} exact />
        <Route path='/signOut' element={<SignOut />} exact />
        <Route path='/signUp' element={<SignUp />} exact />
        <Route path='/tyomaa' element={<Tyomaa />} exact />
        <Route path='/createReview' element={<CreateReview />} exact />
        <Route path='/repository'>
          <Route path=':id' element={<SingleRepository />} />
        </Route>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;