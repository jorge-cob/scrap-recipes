import React, { useState } from 'react';
import {
  Button, SafeAreaView, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import List from '../components/list/List';
import ListItem from '../components/list/ListItem';
import SearchBox from '../components/searchbox/SearchBox';
import { RecipeProps } from './Types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
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

function HomePage(): React.ReactElement {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [searchText, setSearchText] = useState('');

  const renderItem = (item: any) => (
    <ListItem listItem={item} />
  );

  const filteredRecipes = recipes.filter((recipe: RecipeProps) => recipe.title.toLowerCase()
    .includes(searchText.toLowerCase()));

  function addNewRecipe() {
    setRecipes([...recipes, {
      id: recipes.length + 1,
      title: `Recipe ${recipes.length + 1}`,
    }]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scrap Recipes</Text>
        <SearchBox
          onChangeSearchText={setSearchText}
          placeholder="Search recipes"
        />
      </View>
      <List
        data={filteredRecipes}
        renderItem={renderItem}
      />
      <Button onPress={() => addNewRecipe()} title="Add new recipe" />
    </SafeAreaView>
  );
}

export default HomePage;
