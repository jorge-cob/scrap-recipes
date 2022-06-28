import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, TextInput, Button,
} from 'react-native';
import { Formik } from 'formik';
import { useRecipesContext } from '../Context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
  },
  title: {
    fontSize: 23,
  },
  header: {
    padding: 20,
  },
});

function NewRecipe({ navigation }): React.ReactElement {
  const { updateRecipes } = useRecipesContext();
  const handleOnSubmit = (newValues) => {
    updateRecipes(newValues);
    navigation.navigate('Home');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        basicIngredients: [],
        optionalIngredients: []
      }}
      onSubmit={values => handleOnSubmit(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <SafeAreaView style={styles.container}>
          <TextInput
            onChangeText={handleChange('name')}
            value={values.name}
            placeholder="Enter recipe name"
          />
          <Button onPress={handleSubmit} title="Submit" />
        </SafeAreaView>
      )}

    </Formik>
  );
}

export default NewRecipe;
