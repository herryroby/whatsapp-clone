export const userData = {
  id: 1,
  email: 'foo@bar.io',
  username: 'John Smith',
  avatar: 'https://randomuser.me/api/portraits/men/88.jpg',
};

export const chatData = [
  {
    chatRoomId: 1,
    contactName: 'Darren Black',
    contactAvatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    snippet: 'Have a good day too bro!',
    latestUpdateTime: new Date(2020, 8, 17, 8, 54, 0),
    conversations: [
      {
        convId: 1,
        user: 'Darren Black',
        message: 'How are you bro?',
        timestamp: '8:45 AM',
      },
      {
        convId: 2,
        user: 'John Smith',
        message: 'Fine, how about you?',
        timestamp: '8:47 AM',
      },
      {
        convId: 3,
        user: 'Darren Black',
        message: 'Fine too',
        timestamp: '8:48 AM',
      },
      {
        convId: 4,
        user: 'Darren Black',
        message: 'Are you busy now?',
        timestamp: '8:48 AM',
      },
      {
        convId: 5,
        user: 'John Smith',
        message: `I'm really sorry, I have a meeting now`,
        timestamp: '8:50 AM',
      },
      {
        convId: 6,
        user: 'John Smith',
        message: 'Can we talk after the meeting?',
        timestamp: '8:51 AM',
      },
      {
        convId: 7,
        user: 'Darren Black',
        message: 'Sure, no problem',
        timestamp: '8:52 AM',
      },
      {
        convId: 8,
        user: 'John Smith',
        message: 'Great. Have a good day bro!',
        timestamp: '8:53 AM',
      },
      {
        convId: 9,
        user: 'Darren Black',
        message: 'Have a good day too bro!',
        timestamp: '8:54 AM',
      },
    ],
  },
  {
    chatRoomId: 2,
    contactName: 'Camila Wilson',
    contactAvatar: 'https://randomuser.me/api/portraits/women/66.jpg',
    snippet: 'Hi. How are you?',
    latestUpdateTime: new Date(2020, 8, 16, 14, 2, 0),
    conversations: [
      {
        convId: 1,
        user: 'Camila Wilson',
        message: 'Hi. How are you?',
        timestamp: '2:02 PM',
      },
    ],
  },
  {
    chatRoomId: 3,
    contactName: 'Craig Nelson',
    contactAvatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    snippet: 'Where have you been?',
    latestUpdateTime: new Date(2020, 8, 16, 10, 24, 0),
    conversations: [
      {
        convId: 1,
        user: 'Craig Nelson',
        message: 'Where have you been',
        timestamp: '10:24 AM',
      },
    ],
  },
  {
    chatRoomId: 4,
    contactName: 'Deanna Riley',
    contactAvatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    snippet: 'Hey! When are you planning to come?',
    latestUpdateTime: new Date(2020, 8, 15, 9, 5, 0),
    conversations: [
      {
        convId: 1,
        user: 'Deanna Riley',
        message: 'Hey! When are you planning to come?',
        timestamp: '9:05 AM',
      },
    ],
  },
  {
    chatRoomId: 5,
    contactName: 'Douglas Newman',
    contactAvatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    snippet: 'Shoot me an email.',
    latestUpdateTime: new Date(2020, 8, 14, 19, 54, 0),
    conversations: [
      {
        convId: 1,
        user: 'Camila Wilson',
        message: 'Shoot me an email.',
        timestamp: '7:54 PM',
      },
    ],
  },
  {
    chatRoomId: 6,
    contactName: 'Katrina Henry',
    contactAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    snippet: 'Thank you. That was really helpful.',
    latestUpdateTime: new Date(2020, 8, 13, 13, 15, 0),
    conversations: [
      {
        convId: 1,
        user: 'Katrina Henry',
        message: 'Thank you. That was really helpful.',
        timestamp: '1:15 PM',
      },
    ],
  },
];

export const statusData = [
  {
    contactName: 'Deanna Riley',
    contactAvatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    time: new Date('08/17/2020'),
  },
  {
    contactName: 'Darren Black',
    contactAvatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    time: new Date('08/16/2020'),
  },
  {
    contactName: 'Katrina Henry',
    contactAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    time: new Date('08/16/2020'),
  },
  {
    contactName: 'Camila Wilson',
    contactAvatar: 'https://randomuser.me/api/portraits/women/66.jpg',
    time: new Date('08/15/2020'),
  },
];

export const callsData = [
  {
    contactName: 'Katrina Henry',
    contactAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    time: new Date('08/13/2020'),
  },
  {
    contactName: 'Douglas Newman',
    contactAvatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    time: new Date('08/13/2020'),
  },
  {
    contactName: 'Darren Black',
    contactAvatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    time: new Date('08/10/2020'),
  },
  {
    contactName: 'Deanna Riley',
    contactAvatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    time: new Date('08/08/2020'),
  },
];
