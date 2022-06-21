export type RecipeProps = {
  id: string;
  title: string;
  description: string;
  basicIngredients: Ingredients[];
  optionalIngredients?: Ingredients[];
};

export type Ingredients = {
  id: string;
  name: string;
  description: string;
  basicIngredients: Ingredients[];
  optionalIngredients: Ingredients[];
};
