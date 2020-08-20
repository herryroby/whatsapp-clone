import { Body, Button, Header as NBHeader, Icon, Right, Title } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import colors from '../config/colors';

const width = Dimensions.get('window').width;

const Header: React.FC = () => (
  <NBHeader hasTabs noLeft noShadow transparent androidStatusBarColor={colors.primaryDark} style={styles.header}>
    <Body>
      <Title style={styles.title}>WhatsApp</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name="search" style={styles.searchIcon} />
      </Button>
      <Button transparent>
        <Icon type="SimpleLineIcons" name="options-vertical" style={styles.menuIcon} />
      </Button>
    </Right>
  </NBHeader>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: width,
  },
  menuIcon: {
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 26,
  },
  title: {
    fontSize: 20,
  },
});

export default Header;
