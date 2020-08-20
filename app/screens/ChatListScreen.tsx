import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Body, Container, Fab, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Chats } from '../types';

interface ChatListScreenProps {
  chats?: Chats;
}

const ChatListScreen: React.FC<ChatListScreenProps> = ({ chats }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <List
        dataArray={chats}
        keyExtractor={(item, index) => index + item}
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
              <Thumbnail source={{ uri: chat.contactAvatar }} />
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
