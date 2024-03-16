export const COLORS = {
  primary: "#3595A1",
  primaryLight: "#3595A1",
  lightBg: "#f3fefe",
  darkIcon: "#262626",
  bg: "#f9f9f9",
  white: "#FFF",
  gray: "#6F767E",
  lightGray: "#F4F7F8",
  black: "#171725",
  messageGray: "#F3F3F3",
  blackLight: "#505050",
  textLight: "#CACFD9",
  orange: "#F49301",
  alert: "#FF5959",
  danger: "#F41F52",
  lighter: "#F9FBFA",
  border: "#EFEFEF",
  green: "#00983D",
  fino: "#D8D8D9",
  textInputColor: "#F4F6F9",
  yellow: "#f49201",
  text: "#3D3D3D",
  separator: "#EFEFEF",
  one: "#ede0d4",
  two: "#b08968",
  three: "#a76c4b",
};

export const SIZES = {
  base: 10,
  small: 12,
  graySmall: 11,
  font: 14,
  h4: 16,
  h3: 18,
  h2: 24,
  h1: 34,
};

export const FONTS = {
  bold: "EncodeSansBold",
  boldItalic: "EncodeSansBoldItalic",
  semiBold: "EncodeSansSemiBold",
  semiBoldItalic: "EncodeSansSemiBoldItalic",
  medium: "EncodeSansMedium",
  mediumItalic: "EncodeSansMediumItalic",
  regular: "EncodeSansRegular",
  regularItalic: "EncodeSansRegularItalic",
  light: "EncodeSansLight",
  lightItalic: "EncodeSansLightItalic",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
