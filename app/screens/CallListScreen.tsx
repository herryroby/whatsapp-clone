import { Body, Button, Container, Fab, Icon, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../config/colors';
import { Call, fetchCalls } from '../redux/reducers/callsSlice';
import { RootState } from '../redux/rootReducer';

const CallListScreen: FC = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: RootState) => ({
    loading: state.calls.loading,
    error: state.calls.error,
    data: state.calls.data,
  }));

  useEffect(() => {
    dispatch(fetchCalls());
  }, [dispatch]);

  useEffect(() => {
    setCalls(data);
  }, [data]);

  if (loading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text> Error: {error}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <List
        dataArray={calls}
        keyExtractor={(item) => item.id.toString()}
        renderRow={(call) => (
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={call.contactAvatar ? { uri: call.contactAvatar } : require('../assets/images/avatar.png')}
              />
            </Left>
            <Body style={styles.body}>
              <Text style={styles.bold}>{call.contactName}</Text>
              <Text note style={styles.lineHeight}>
                {call.timestamp}
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
};

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
