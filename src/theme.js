let theme = {};

theme.layout = {
  constrain: 1680,
  gutter: 20,
  /* mobile-first */
  navHeight: {
    xs: 60,
    md: 80,
  },
};

/* Bootstrap breakpoints to match AntD grid components */
theme.query = {
  md: '@media all and (min-width: 768px)',
  lg: '@media all and (min-width: 992px)',
};

theme.colors = {
  black: '#2b2b2b',
  steal: '#7c7c85',
  darkGrey: '#161616',
  silverGrey: '#dde1e8',
};

export default theme;

/**
 * - Caption/Heading levels?
 * - Nav appearance/behaviour
 * - Full width/100vh header?
 * - Hero should have a max-height
 * - Two gutter configs?
 * 
 * 
 * https://github.com/gatsbyjs/gatsby/issues/2470
 * https://github.com/fregante/object-fit-images
 */