const COLORS = {
  primary: "#968bb5",
  white: "#F3F4F8",
  blackOnyx: "#121212",
  blackOnyxLight: "#1f1f1f",
  blackDecent: "#121111",
  blackJungleGreen: "#1A1F26",
  blackMirage: "#15191F",
  blackNavy: "#222831",
  grayNavy: "#383d45",
  grayThunder: "#444444",

  placeHolder: "#4e525a",
  link: "#39A7FF",
};

const FONT = {
  regular: "dm-regular",
  medium: "dm-medium",
  bold: "dm-bold",
  extraBold: "dm-extraBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
