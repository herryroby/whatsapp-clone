import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import 'react-native-gesture-handler';
import ErrorBoundary from './app/components/ErrorBoundary';
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const scheme = useColorScheme();

  useEffect(() => {
    let isMounted = true;
    const loadResource = async () => {
      try {
        // if (Platform.OS === 'android') {
        //   StatusBar.setTranslucent(true);
        //   StatusBar.setBarStyle('light-content');
        //   StatusBar.setBackgroundColor(colors.primaryDark);
        // }
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
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <StatusBar style="light" backgroundColor={colors.primaryDark} />
          {!isReady ? <AppLoading /> : <AppNavigator />}
        </NavigationContainer>
      </AppearanceProvider>
    </ErrorBoundary>
  );
};

export default App;
