import colors from '../config/colors';
import { callsData, chatData, statusData } from '../data/mocks';

export type Colors = keyof typeof colors;

export type Chats = typeof chatData;
export type Status = typeof statusData;
export type Calls = typeof callsData;
