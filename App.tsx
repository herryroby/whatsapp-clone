import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import ErrorBoundary from './app/components/ErrorBoundary';
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';
import store from './app/redux/store';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const scheme = useColorScheme();

  useEffect(() => {
    let isMounted = true;
    const loadResource = async () => {
      try {
        await Font.loadAsync({
          Roboto: require('./app/assets/fonts/Roboto.ttf'),
          Roboto_medium: require('./app/assets/fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        if (isMounted) setIsReady(true);
      } catch (err) {
        console.error(err);
      }
    };
    loadResource();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppearanceProvider>
          <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <StatusBar style="light" backgroundColor={colors.primaryDark} />
            {!isReady ? <AppLoading /> : <AppNavigator />}
          </NavigationContainer>
        </AppearanceProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
