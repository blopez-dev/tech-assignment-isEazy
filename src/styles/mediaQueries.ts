const size = {
  mobileM: '360px',
  mobileL: '410px',
  tabletH: '768px',
  tabletV: '1024px',
  laptop: '1280px',
  laptopL: '1440px',
};

export const device = {
  laptopL: `(max-width: ${size.laptopL})`,
  laptop: `(max-width: ${size.laptop})`,
  tabletH: `(max-width: ${size.tabletH})`,
  tabletV: `(max-width: ${size.tabletV})`,
  mobileL: `(max-width: ${size.mobileL})`,
};
