import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, TextInput, Text, View
} from 'react-native';
import { Formik } from 'formik';
import { ColorPicker } from 'react-native-btr';
import * as Yup from 'yup';
import { useRecipesContext } from '../Context';
import SubmitButton from '../components/button/Button';
import CustomMultiSelect from '../components/multiSelect/CustomMultiSelect';
import InputFeedback from '../components/feedback/InputFeedback';

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
    alignSelf: 'center',
    marginVertical: 10,
    marginHorizontal: 10
  }
});

const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548'];

const RecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Please enter a longer name')
    .max(50, 'Max 50 characters')
    .required('Required field'),
  description: Yup.string()
    .min(3, 'Please enter a longer description')
    .required('Required field'),
});

function NewRecipe({ navigation }): React.ReactElement {
  const { updateRecipes } = useRecipesContext();
  const handleOnSubmit = (newValues) => {
    updateRecipes(newValues);
    navigation.navigate('Home');
  };

  return (
    <Formik
      validationSchema={RecipeSchema}
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
        handleChange, handleSubmit, values, setFieldValue, errors, touched
      }) => (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}> Recipe name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('name')}
            value={values.name}
            placeholder="Enter recipe name"
          />
          {errors.name && touched.name ? (
            <InputFeedback text={errors.name} type="error" />
          ) : null}
          <Text style={styles.title}> Recipe description: </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('description')}
            value={values.description}
            placeholder="Enter recipe description"
            multiline
            numberOfLines={10}
          />
          {errors.description && touched.description ? (
            <InputFeedback text={errors.description} type="error" />
          ) : null}
          <CustomMultiSelect />
          <View style={styles.colorPicker}>
            <ColorPicker
              selectedColor={values.color}
              onSelect={(e) => setFieldValue('color', e)}
              colors={colors}
            />
          </View>
          <SubmitButton handleOnPress={handleSubmit} title="Submit" />
        </SafeAreaView>
      )}

    </Formik>
  );
}

export default NewRecipe;
