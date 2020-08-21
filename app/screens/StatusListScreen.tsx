import { FontAwesome } from '@expo/vector-icons';
import { Body, Button, Container, Fab, Icon, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../config/colors';
import { fetchStatus, Status } from '../redux/reducers/statusSlice';
import { fetchUser, User } from '../redux/reducers/userSlice';
import { RootState } from '../redux/rootReducer';

const StatusListScreen: FC = () => {
  const [user, setUser] = useState<User | any>({});
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState<string | null>(null);
  const [statusItems, setStatusItems] = useState<Status[]>([]);
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const userSelector = useSelector((state: RootState) => ({
    loading: state.user.loading,
    error: state.user.error,
    data: state.user.data,
  }));
  const statusSelector = useSelector((state: RootState) => ({
    loading: state.status.loading,
    error: state.status.error,
    data: state.status.data,
  }));

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchStatus());
  }, [dispatch]);

  useEffect(() => {
    setUserLoading(userSelector.loading);
    setUserError(userSelector.error);
    setUser(userSelector.data);
    setStatusLoading(statusSelector.loading);
    setStatusError(statusSelector.error);
    setStatusItems(statusSelector.data);
  }, [userSelector, statusSelector]);

  if (userLoading || statusLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (userError || statusError) {
    return (
      <Container>
        <Text> Error: {!!userError ? userError : statusError}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ListItem avatar noBorder>
        <Left>
          <Thumbnail source={user.avatar ? { uri: user.avatar } : require('../assets/images/avatar.png')} />
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
        keyExtractor={(item) => item.id.toString()}
        renderRow={(item) => (
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={item.contactAvatar ? { uri: item.contactAvatar } : require('../assets/images/avatar.png')}
              />
            </Left>
            <Body style={styles.body}>
              <Text style={styles.bold}>{item.contactName}</Text>
              <Text note style={styles.lineHeight}>
                {item.timestamp}
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
};

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
