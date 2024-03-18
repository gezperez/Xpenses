export type Theme = {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  danger: string;
};

export type SystemContextType = {
  theme: Theme;
  setAppTheme: (newTheme: Theme) => void;
  toggleAppTheme: () => void;
};
