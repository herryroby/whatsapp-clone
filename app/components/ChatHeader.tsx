import { Button, Icon, Text, Thumbnail } from 'native-base';
import React, { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const width = Dimensions.get('window').width;

interface ChatHeaderProps {
  params?: any;
}

const ChatHeader: FC<ChatHeaderProps> = ({ params }) => {
  const { user, avatar } = params;
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <Thumbnail small source={{ uri: avatar }} />
        <Text style={styles.contactName}>{user}</Text>
      </View>
      <View style={styles.icons}>
        <Button transparent>
          <Icon type="Ionicons" name="videocam" style={styles.icon} />
        </Button>
        <Button transparent>
          <Icon active name="call" style={styles.icon} />
        </Button>
        <Button transparent>
          <Icon type="SimpleLineIcons" name="options-vertical" style={styles.menuIcon} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: width,
  },
  icon: {
    color: colors.white,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 45,
  },
  menuIcon: {
    fontSize: 15,
    color: colors.white,
  },
});

export default ChatHeader;
