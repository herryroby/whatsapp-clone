import { FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Container, Form, Icon, Input, Item, Text, View } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { ChatRoom, fetchChats, setData } from '../redux/reducers/chatsSlice';
import { fetchUser, User } from '../redux/reducers/userSlice';
import { RootState } from '../redux/rootReducer';

interface ChatScreenProps {
  route: any;
}

const ChatScreen: FC<ChatScreenProps> = ({ route }) => {
  const [message, setMessage] = useState('');
  const [showMicrophone, setShowMicrophone] = useState(true);
  const [user, setUser] = useState<User | any>({});
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState<string | null>(null);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [chatRoomsLoading, setChatRoomsLoading] = useState(false);
  const [chatRoomsError, setChatRoomsError] = useState<string | null>(null);
  const { chatRoomId } = route.params;
  const dispatch = useDispatch();
  const userSelector = useSelector((state: RootState) => ({
    loading: state.user.loading,
    error: state.user.error,
    data: state.user.data,
  }));
  const chatRoomsSelector = useSelector((state: RootState) => ({
    loading: state.chats.loading,
    error: state.chats.error,
    data: state.chats.data,
  }));

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchChats());
  }, [dispatch]);

  useEffect(() => {
    setUserLoading(userSelector.loading);
    setUserError(userSelector.error);
    setUser(userSelector.data);
    setChatRoomsLoading(chatRoomsSelector.loading);
    setChatRoomsError(chatRoomsSelector.error);
    setChatRooms(chatRoomsSelector.data);
  }, [userSelector, chatRoomsSelector]);

  useEffect(() => {
    if (message.length > 0) {
      setShowMicrophone(false);
    } else {
      setShowMicrophone(true);
    }
  }, [message]);

  if (userLoading || chatRoomsLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (userError || chatRoomsError) {
    return (
      <Container>
        <Text> Error: {!!userError ? userError : chatRoomsError}</Text>
      </Container>
    );
  }

  const chatsFiltered = chatRooms.filter((item) => item.chatRoomId === chatRoomId);

  const handleChange = (value: string) => setMessage(value);

  const handleSubmit = () => {
    const newMessage = { convId: Date.now(), user: user.username, message, timestamp: '8:48 AM' };
    const newChatRooms = chatRooms.map((chatRoom) => {
      if (chatRoom.chatRoomId === chatRoomId)
        return {
          ...chatRoom,
          conversations: [...chatsFiltered[0].conversations, newMessage],
        };
      return chatRoom;
    });
    dispatch(setData(newChatRooms));
    setMessage('');
  };

  return (
    <Screen style={styles.screen}>
      {chatsFiltered.length > 0 &&
        chatsFiltered[0].conversations.map((chat) => (
          <View key={chat.convId} style={chat.user === user.username ? styles.outgoingMessage : styles.incomingMessage}>
            <View style={styles.messageContent}>
              <Text style={styles.messageText}>{chat.message}</Text>
            </View>
            <View style={styles.flexEnd}>
              <Text note style={styles.timestamp}>
                {chat.timestamp}
              </Text>
            </View>
            <View style={styles.flexEnd}>
              {chat.user === user.username && <MaterialCommunityIcons name="check-all" style={styles.readIcon} />}
            </View>
          </View>
        ))}
      <View style={styles.chatFooter}>
        <View style={styles.inputContainer}>
          <Form>
            <Item rounded style={styles.formItem}>
              <Fontisto name="smiley" style={styles.emoticon} />
              <Input
                multiline
                placeholder="Type a message"
                style={styles.input}
                autoFocus
                value={message}
                onChangeText={(value) => handleChange(value)}
              />
              <FontAwesome name="paperclip" style={styles.attachIcon} />
              <FontAwesome name="camera" style={styles.cameraIcon} />
            </Item>
          </Form>
        </View>
        {showMicrophone ? (
          <View>
            <Button rounded style={styles.buttonContainer}>
              <MaterialCommunityIcons name="microphone" style={styles.microphoneIcon} />
            </Button>
          </View>
        ) : (
          <View>
            <Button rounded style={styles.buttonContainer} onPress={handleSubmit}>
              <Icon type="Ionicons" name="ios-paper-plane" style={styles.sendIcon} />
            </Button>
          </View>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  attachIcon: {
    fontSize: 25,
    margin: 10,
    color: colors.medium,
    left: -25,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.tertier,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    fontSize: 20,
    color: colors.medium,
    left: -15,
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  emoticon: {
    fontSize: 25,
    margin: 10,
    color: colors.medium,
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
  formItem: {
    backgroundColor: colors.white,
    height: 50,
    elevation: 1,
  },
  incomingMessage: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 8,
    paddingTop: 5,
    marginRight: 40,
    marginBottom: 10,
    elevation: 1,
  },
  input: {
    fontSize: 16,
  },
  inputContainer: {
    flex: 1,
    marginRight: 5,
  },
  messageContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  microphoneIcon: {
    color: colors.white,
    fontSize: 25,
  },
  outgoingMessage: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: colors.quinary,
    padding: 8,
    paddingTop: 5,
    marginLeft: 40,
    marginBottom: 10,
    elevation: 1,
  },
  readIcon: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: colors.link,
    marginLeft: 3,
  },
  sendIcon: {
    color: colors.white,
    fontSize: 25,
    transform: [{ rotateZ: '52deg' }],
    top: -3,
    left: -2,
  },
  screen: {
    justifyContent: 'flex-end',
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.wallpaper,
  },
  timestamp: {
    alignSelf: 'flex-end',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default ChatScreen;
