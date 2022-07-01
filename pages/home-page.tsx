import React, { useState } from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import SubmitButton from '../components/button/button';
import List from '../components/list/List';
import ListItem from '../components/list/ListItem';
import SearchBox from '../components/searchbox/SearchBox';
import { useRecipesContext } from '../Context';
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

function HomePage({ navigation }): React.ReactElement {
  const { recipes } = useRecipesContext();
  const [searchText, setSearchText] = useState('');

  const renderItem = (item: any) => (
    <ListItem listItem={item} />
  );

  const filteredRecipes = recipes.filter((recipe: RecipeProps) => recipe.name.toLowerCase()
    .includes(searchText.toLowerCase()));

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
      <SubmitButton handleOnPress={() => navigation.navigate('NewRecipe')} title="Add new recipe" />
    </SafeAreaView>
  );
}

export default HomePage;
