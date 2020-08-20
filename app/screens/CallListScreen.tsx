import { Body, Button, Container, Fab, Icon, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Calls } from '../types';
import { getFormatedDate } from '../utils/getFormatedDate';

interface CallListScreenProps {
  calls: Calls;
}

const CallListScreen: React.FC<CallListScreenProps> = ({ calls }) => (
  <Container>
    <List
      dataArray={calls}
      keyExtractor={(item, index) => index + item}
      renderRow={(call) => (
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: call.contactAvatar }} />
          </Left>
          <Body style={styles.body}>
            <Text style={styles.bold}>{call.contactName}</Text>
            <Text note style={styles.lineHeight}>
              {getFormatedDate(call.time)}
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon active name="call" style={styles.callButton} />
            </Button>
          </Right>
        </ListItem>
      )}
    />
    <Fab style={styles.fab} position="bottomRight">
      <Icon name="md-call" />
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
  callButton: {
    color: colors.primary,
    paddingTop: 5,
  },
  fab: {
    backgroundColor: colors.secondary,
  },
  lineHeight: {
    height: 21,
  },
});

export default CallListScreen;
