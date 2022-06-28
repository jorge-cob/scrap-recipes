import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, TextInput, Button, View,
} from 'react-native';
import { Formik } from 'formik';

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

function NewRecipe(): React.ReactElement {
  const handleOnSubmit = (newValues) => {
    console.log('newValues', newValues);
  }

  return (
    <Formik
      initialValues={{
        recipeName: '',
        description: '',
        basicIngredients: [],
        optionalIngredients: []
      }}
      onSubmit={values => handleOnSubmit(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <SafeAreaView style={styles.container}>
          <TextInput
            onChangeText={handleChange('recipeName')}
            value={values.recipeName}
            placeholder="Enter recipe name"
          />
          <Button onPress={handleSubmit} title="Submit" />
        </SafeAreaView>
      )}

    </Formik>
  );
}

export default NewRecipe;
