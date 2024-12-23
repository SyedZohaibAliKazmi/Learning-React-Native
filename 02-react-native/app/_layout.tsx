import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  return (
   
    <View style={{backgroundColor:"red", width:"100%" , height:"100%"}}>
      <Text style={{fontSize:30, fontWeight:"600", }}>Its Bykea Page Account</Text>
      <Text>Hello World!</Text>
    </View>
  );
}
 // <Stack>
    //   <Stack.Screen name="index" options={{ title: 'Home Page' }} />
    //   <Stack.Screen name="FirstPage" options={{ title: 'First Page' }} />
    // </Stack>