import React, { createContext } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { KnowledgeBase } from './knowledge-base/knowledge-base';
import HomeScreen from './home-screen';
import { SharedProvider } from './shared/data-provider';

const MainScreen = ({ navigation }) => <HomeScreen navigation={navigation} />;

export default () => {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <SharedProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </SharedProvider>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerLeft: null,
      },
    },
    KnowledgeBase: {
      screen: KnowledgeBase,
      navigationOptions: {
        headerTitle: 'FAQ',
      },
    },
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
  },
);

const App = createAppContainer(AppNavigator);
