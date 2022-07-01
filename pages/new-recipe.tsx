import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, TextInput, Button, Text, Pressable
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
    margin: 12,
  },
  header: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    marginBottom: 20,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
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
          <Text style={styles.title}> Recipe name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            value={values.name}
            placeholder="Enter recipe name"
          />
          <Text style={styles.title}> Recipe description: </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('description')}
            value={values.description}
            placeholder="Enter recipe description"
            multiline
            numberOfLines={10}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Submit</Text>
          </Pressable>
        </SafeAreaView>
      )}

    </Formik>
  );
}

export default NewRecipe;
