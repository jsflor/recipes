<script setup>
  import Recipe from './Recipe.vue';
  
  defineProps({
    recipeList: Array,
  });
</script>

<template>
  <div class="recipe-list">
    <Recipe
      v-for="recipe in recipeList" :key="recipe.id"
      :id="recipe.id"
      :title="recipe.title"
      :image="recipe.image"
      :servings="recipe.servings"
      :time="recipe.time"
      :difficulty="recipe.difficulty"
      :ingredients="recipe.ingredients"
      :directions="recipe.directions"
      :featured="recipe.featured"      
    />
  </div>
</template>

<style scoped>
.recipe-list {
 display: grid;
 width: 100%;
 grid-template-columns: 1fr 1fr 1fr;
}
</style>