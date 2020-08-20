import moment from 'moment';

export const getFormatedDate = (date: Date): string =>
  moment(date).format('MMMM') + ' ' + moment(date).format('D') + ', ' + moment(date).format('hh:mm A');
