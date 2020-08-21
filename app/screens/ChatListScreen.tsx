import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Body, Container, Fab, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../config/colors';
import { ChatRoom, fetchChats } from '../redux/reducers/chatsSlice';
import { RootState } from '../redux/rootReducer';

const ChatListScreen: FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: RootState) => ({
    loading: state.chats.loading,
    error: state.chats.error,
    data: state.chats.data,
  }));

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  useEffect(() => {
    setChatRooms(data);
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
        dataArray={chatRooms}
        keyExtractor={(item) => item.chatRoomId.toString()}
        renderRow={(chat) => (
          <ListItem
            avatar
            button
            onPress={() =>
              navigation.navigate('Chat', {
                user: chat.contactName,
                avatar: chat.contactAvatar,
                chatRoomId: chat.chatRoomId,
              })
            }
          >
            <Left>
              <Thumbnail
                source={chat.contactAvatar ? { uri: chat.contactAvatar } : require('../assets/images/avatar.png')}
              />
            </Left>
            <Body style={styles.body}>
              <Text style={styles.bold}>{chat.contactName}</Text>
              <Text note style={styles.lineHeight}>
                {chat.snippet}
              </Text>
            </Body>
            <Right>
              <Text note style={styles.time}>
                {moment(chat.time).format('h:mm A')}
              </Text>
            </Right>
          </ListItem>
        )}
      />
      <Fab style={styles.fab} containerStyle={{}} position="bottomRight">
        <MaterialCommunityIcons name="message-text" size={20} />
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
  fab: {
    backgroundColor: colors.secondary,
  },
  lineHeight: {
    height: 21,
  },
  time: {
    fontSize: 11,
    paddingTop: 10,
  },
});

export default ChatListScreen;
