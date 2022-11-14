/*
Heading
font-family: timonium, sans-serif;
font-weight: 800;
font-style: italic;

Mono
font-family: auger-mono, monospace;
font-weight: 300;
font-style: normal;

font-family: auger-mono, monospace;
font-weight: 700;
font-style: normal;

Regular
font-family: dinosaur, sans-serif;
font-weight: 400;
font-style: normal;

font-family: dinosaur,sans-serif;
font-weight: 400;
font-style: italic;

font-family: dinosaur,sans-serif;
font-weight: 700;
font-style: normal;

font-family: dinosaur,sans-serif;
font-weight: 700;
font-style: italic;
*/

// eslint-disable-next-line import/prefer-default-export
export const fonts = {
  heading: {
    fontFamily: 'timonium, sans-serif',
    blackItalic: {
      weight: 800,
      style: 'italic',
    },
  },
  mono: {
    fontFamily: 'auger-mono, monospace',
    light: {
      weight: 300,
      style: 'normal',
    },
    bold: {
      weight: 700,
      style: 'normal',
    },
  },
  regular: {
    fontFamily: 'dinosaur, sans-serif',
    regular: {
      weight: 400,
      style: 'normal',
    },
    regularItalic: {
      weight: 400,
      style: 'italic',
    },
    bold: {
      weight: 700,
      style: 'normal',
    },
    boldItalic: {
      weight: 700,
      style: 'italic',
    },
  },
};
