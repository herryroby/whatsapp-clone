import { FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Form, Icon, Input, Item, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { chatData, userData } from '../data/mocks';

interface ChatScreenProps {
  route: any;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
  const [message, setMessage] = useState('');
  const [showMicrophone, setShowMicrophone] = useState(true);
  const { chatRoomId } = route.params;

  useEffect(() => {
    if (message.length > 0) {
      setShowMicrophone(false);
    } else {
      setShowMicrophone(true);
    }
  }, [message]);

  const chats = chatData.filter((data) => data.chatRoomId === chatRoomId);

  const handleChange = (value: string) => setMessage(value);

  const handleSubmit = () => {
    console.log(message);
    setMessage('');
  };

  return (
    <Screen style={styles.screen}>
      {chats[0].conversations.map((chat, index) => (
        <View
          key={`${chat}${index}`}
          style={chat.user === userData.username ? styles.outgoingMessage : styles.incomingMessage}
        >
          <View style={styles.messageContent}>
            <Text style={styles.messageText}>{chat.message}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Text note style={styles.timestamp}>
              {chat.timestamp}
            </Text>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            {chat.user === userData.username && <MaterialCommunityIcons name="check-all" style={styles.readIcon} />}
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
                // onSubmitEditing={handleSubmitEditing}
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
