import { FontAwesome } from '@expo/vector-icons';
import { ScrollableTab, Tab, TabHeading, Tabs as NBTabs } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { callsData, chatData, statusData, userData } from '../data/mocks';
import CallListScreen from './CallListScreen';
import CameraScreen from './CameraScreen';
import ChatListScreen from './ChatListScreen';
import StatusListScreen from './StatusListScreen';

const Tabs: React.FC = () => {
  const [chats] = useState(chatData);
  const [statusItems] = useState(statusData);
  const [calls] = useState(callsData);
  const [user] = useState(userData);

  return (
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
          <ChatListScreen chats={chats} />
        </Tab>
        <Tab
          heading="STATUS"
          tabStyle={styles.tabHeading}
          textStyle={styles.tabText}
          activeTabStyle={styles.activeTabStyle}
          activeTextStyle={styles.activeTabText}
        >
          <StatusListScreen statusItems={statusItems} user={user} />
        </Tab>
        <Tab
          heading="CALLS"
          tabStyle={styles.tabHeading}
          textStyle={styles.tabText}
          activeTabStyle={styles.activeTabStyle}
          activeTextStyle={styles.activeTabText}
        >
          <CallListScreen calls={calls} />
        </Tab>
      </NBTabs>
    </Screen>
  );
};

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

export default Tabs;
