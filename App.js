import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './screens/Landing';

export default function App() {
  return (
   <Provider store={store}>
      <Landing/>
   </Provider>
  );
}


