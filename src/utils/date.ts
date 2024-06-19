import dayjs from 'dayjs';
import 'dayjs/locale/en';

const formatTimestamp = (timestamp: number): string => {
  return dayjs(timestamp * 1000).format('h:mm a');
};
export default formatTimestamp;
