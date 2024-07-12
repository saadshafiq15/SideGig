import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Login',
            title: '',
          }}
        />
		<Drawer.Screen
          name="gigs" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Gigs',
            title: '',
          }}
        />
        <Drawer.Screen
          name="signup" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Sign Up',
            title: '',
          }}
        />
		
      </Drawer>
    </GestureHandlerRootView>
  );
}
