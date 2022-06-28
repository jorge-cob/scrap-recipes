import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/home-page';
import NewRecipe from './pages/new-recipe';
import { RecipesProvider } from './Context';

const Stack = createNativeStackNavigator();

export default function App(): React.ReactElement {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="NewRecipe" component={NewRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesProvider>
  );
}
