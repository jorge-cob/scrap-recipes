export type RecipeProps = {
  id: string;
  name: string;
  description: string;
  basicIngredients: Ingredient[];
  optionalIngredients?: Ingredient[];
};

export type Ingredient = {
  id: string;
  name: string;
  type: string;
};
