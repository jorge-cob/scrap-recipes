import React, {
  createContext, useContext, useMemo, useState
} from 'react';
import { RecipeProps } from './pages/Types';

const INITIAL_CONTEXT = {
  recipes: [],
  updateRecipes: (newRecipe): void => {}
};

export const RecipesContext = createContext(INITIAL_CONTEXT);

export const RecipesProvider: React.FC = function ({ children }) {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  const updateRecipes = (newRecipe: RecipeProps): void => {
    setRecipes([...recipes, newRecipe]);
  };

  const value = useMemo(
    () => ({
      updateRecipes,
      recipes
    }),
    [recipes]
  );

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipesContext = () => useContext(RecipesContext);
