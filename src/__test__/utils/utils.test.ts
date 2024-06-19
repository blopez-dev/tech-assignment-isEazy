import formatTimestamp from '../../utils/date';

describe('formatTimestamp', () => {
  it('returns a formatted time string', () => {
    const timestamp = 1718791619;
    const formattedTime = formatTimestamp(timestamp);
    expect(formattedTime).toBe('12:06 pm');
  });
});
