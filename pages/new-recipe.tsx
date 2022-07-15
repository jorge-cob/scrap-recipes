import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, TextInput, Text, View
} from 'react-native';
import { Formik } from 'formik';
import { ColorPicker } from 'react-native-btr';
import { useRecipesContext } from '../Context';
import SubmitButton from '../components/button/button';
import CustomMultiSelect from '../components/multiSelect/CustomMultiSelect';

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
  input: {
    marginBottom: 20,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    textAlignVertical: 'top'
  },
  colorPicker: {
    marginVertical: 10,
    marginHorizontal: 40
  }
});

const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548'];

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
        color: '#F44336',
        description: '',
        basicIngredients: [],
        optionalIngredients: []
      }}
      onSubmit={(values) => handleOnSubmit(values)}
    >
      {({
        handleChange, handleSubmit, values, setFieldValue
      }) => (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}> Recipe name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            value={values.name}
            placeholder="Enter recipe name"
          />
          <View style={styles.colorPicker}>
            <ColorPicker
              selectedColor={values.color}
              onSelect={(e) => setFieldValue('color', e)}
              colors={colors}
            />
          </View>
          <Text style={styles.title}> Recipe description: </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('description')}
            value={values.description}
            placeholder="Enter recipe description"
            multiline
            numberOfLines={10}
          />
          <CustomMultiSelect />
          <SubmitButton handleOnPress={handleSubmit} title="Submit" />
        </SafeAreaView>
      )}

    </Formik>
  );
}

export default NewRecipe;
