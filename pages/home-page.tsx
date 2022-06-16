import React, { useEffect, useState } from 'react';
import {
  Button, SafeAreaView, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import List from '../components/list/List';
import ListItem from '../components/list/ListItem';
import { ListItemProps } from '../components/list/Types';
import SearchBox from '../components/searchbox/SearchBox';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const renderItem = ({item}: ListItemProps) => (
    <ListItem listItem={item} />
  );

  const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchText.toLowerCase()));

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
        <SearchBox searchText={searchText} onChangeSearchText={setSearchText} />
      </View>
      <List
        data={filteredRecipes}
        renderItem={renderItem}
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
