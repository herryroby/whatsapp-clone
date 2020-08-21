import { FontAwesome } from '@expo/vector-icons';
import { ScrollableTab, Tab, TabHeading, Tabs as NBTabs } from 'native-base';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import Screen from '../components/Screen';
import colors from '../config/colors';
import CallListScreen from './CallListScreen';
import CameraScreen from './CameraScreen';
import ChatListScreen from './ChatListScreen';
import StatusListScreen from './StatusListScreen';

const MainScreen: FC = () => (
  <Screen style={styles.screen}>
    <Header />
    <NBTabs
      initialPage={1}
      tabBarUnderlineStyle={styles.tabBarUnderline}
      renderTabBar={() => <ScrollableTab style={styles.tabContainer} />}
    >
      <Tab
        heading={
          <TabHeading style={[styles.tabHeading]}>
            <FontAwesome name="camera" size={20} style={styles.cameraIcon} />
          </TabHeading>
        }
      >
        <CameraScreen />
      </Tab>
      <Tab
        heading="CHATS"
        tabStyle={styles.tabHeading}
        textStyle={styles.tabText}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.activeTabText}
      >
        <ChatListScreen />
      </Tab>
      <Tab
        heading="STATUS"
        tabStyle={styles.tabHeading}
        textStyle={styles.tabText}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.activeTabText}
      >
        <StatusListScreen />
      </Tab>
      <Tab
        heading="CALLS"
        tabStyle={styles.tabHeading}
        textStyle={styles.tabText}
        activeTabStyle={styles.activeTabStyle}
        activeTextStyle={styles.activeTabText}
      >
        <CallListScreen />
      </Tab>
    </NBTabs>
  </Screen>
);

const styles = StyleSheet.create({
  activeTabStyle: {
    backgroundColor: 'transparent',
  },
  activeTabText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.white,
  },
  cameraIcon: {
    color: colors.quaternary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.quaternary,
  },
  screen: {
    paddingTop: 0,
  },
  tabBarUnderline: {
    height: 2,
  },
  tabContainer: {
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
  },
  tabHeading: {
    backgroundColor: colors.primary,
  },
});

export default MainScreen;
