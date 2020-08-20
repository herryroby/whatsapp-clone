import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import colors from '../config/colors';
import ChatScreen from '../screens/ChatScreen';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        headerTitle: (props) => <ChatHeader {...route} {...props} />,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleContainerStyle: {
          left: 40,
        },
      })}
    />
  </Stack.Navigator>
);

export default AppNavigator;
