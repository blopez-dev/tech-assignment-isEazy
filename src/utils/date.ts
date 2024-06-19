import dayjs from 'dayjs';
import 'dayjs/locale/en';

export function formatTimestamp(timestamp: number): string {
  return dayjs(timestamp * 1000).format('h:mm a');
}
