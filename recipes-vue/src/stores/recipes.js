import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
  state: () => {
    return {
      /** 
       * @type {{title: string, id: string, image: string, servings: number,  time: string,  difficulty: string, ingredients: string[], directions: string[], featured: boolean }[]}
       */
      recipes: [],
      /**
       * @type {string}
      */
      filter: '',
    }
  },
  getters: {
    filteredRecipes(_state) {
      return _state.recipes.filter((recipe) => recipe.title.toLowerCase().includes(_state.filter));
    }
  },
  actions: {
    setRecipes(_recipes) {
      this.recipes = _recipes;
    },
    addRecipe(_newRecipe) {
      this.recipes.push(_newRecipe);
    },
    deleteRecipe(_id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== _id);
    },
    setFilter(_filter) {
      this.filter = _filter.toLocaleLowerCase();
    },
    deleteFilter() {
      this.filter = '';
    }
  }
})