import React, { useState } from 'react';
import {
  Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import ListItem from '../components/list/item';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  const renderItem = ({ item }) => (
    <ListItem title={item.title} />
  );

  const addNewRecipe = () => {
    setRecipes([...recipes, {
      id: recipes.length + 1,
      title: `Recipe ${recipes.length + 1}`,
    }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scrap Recipes</Text>
      </View>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={() => addNewRecipe()} title="Add new recipe" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 23,
  },
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
  header: {
    padding: 20,
  },
});

export default HomePage;
