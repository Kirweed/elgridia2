enum Colors {
  black = "#000",
  blue = "#14213d",
  yellow = "#fca311",
  grey = "#e5e5e5",
  white = "#fff",
}

export interface GlobalTheme {
  colors: {
    [key in keyof typeof Colors]: `${typeof Colors[key]}`;
  };
}

export const theme: GlobalTheme = {
  colors: {
    black: Colors.black,
    blue: Colors.blue,
    yellow: Colors.yellow,
    grey: Colors.grey,
    white: Colors.white,
  },
};
