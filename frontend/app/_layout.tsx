// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { useFonts } from 'expo-font';
// import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   // const [loaded, error] = useFonts({
//   //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   //   ...FontAwesome.font,
//   // });

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   // useEffect(() => {
//   //   if (error) throw error;
//   // }, [error]);

//   // useEffect(() => {
//   //   if (loaded) {
//   //     SplashScreen.hideAsync();
//   //   }
//   // }, [loaded]);

//   // if (!loaded) {
//   //   return null;
//   // }

//   return <RootLayoutNav />;
// }

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot/>
    </ThemeProvider>
  );
}
