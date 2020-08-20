import { FontAwesome } from '@expo/vector-icons';
import { Body, Button, Container, Fab, Icon, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Status } from '../types';
import { getFormatedDate } from '../utils/getFormatedDate';

interface StatusListScreenProps {
  user: {
    avatar: string;
  };
  statusItems: Status;
}

const StatusListScreen: React.FC<StatusListScreenProps> = ({ user, statusItems }) => (
  <Container>
    <ListItem avatar noBorder>
      <Left>
        <Thumbnail source={{ uri: user.avatar }} />
      </Left>
      <Body style={styles.body}>
        <Text style={styles.bold}>My status</Text>
        <Text note style={styles.lineHeight}>
          Tap to add status update
        </Text>
      </Body>
    </ListItem>
    <ListItem itemDivider style={styles.listItemContainer}>
      <Text style={styles.sectionText}>Recent updates</Text>
    </ListItem>
    <List
      dataArray={statusItems}
      keyExtractor={(item, index) => index + item}
      renderRow={(item) => (
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: item.contactAvatar }} />
          </Left>
          <Body style={styles.body}>
            <Text style={styles.bold}>{item.contactName}</Text>
            <Text note style={styles.lineHeight}>
              {getFormatedDate(item.time)}
            </Text>
          </Body>
        </ListItem>
      )}
    />
    <Fab active style={styles.fab} direction="up" position="bottomRight">
      <FontAwesome name="camera" style={styles.cameraIcon} />
      <Button style={styles.fabCreateContainer}>
        <Icon type="MaterialCommunityIcons" name="pencil" style={styles.createIcon} />
      </Button>
    </Fab>
  </Container>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  cameraIcon: {
    fontSize: 20,
  },
  createIcon: {
    color: colors.primary,
  },
  fab: {
    backgroundColor: colors.secondary,
  },
  fabCreateContainer: {
    backgroundColor: colors.light,
  },
  lineHeight: {
    height: 21,
  },
  listItemContainer: {
    marginTop: 10,
    height: 30,
    borderTopWidth: 0.5,
    borderTopColor: '#C3C4BC',
  },
  sectionText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.medium,
  },
});

export default StatusListScreen;
