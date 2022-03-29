<script setup>
  import deleteSVG from '../../assets/delete-button.svg';

  defineProps({
    id: String,
    title: String,
    image: String,
    servings: Number,
    time: String,
    difficulty: String,
    ingredients: Array,
    directions: Array,
    featured: Boolean,
    deleteRecipe: Function,
  });
</script>

<template>
<!-- RECIPE -->
  <div class="recipe" :class="{ featured: featured }">
    
    <!-- DELETE -->
    <button class="delete-recipe" @click="deleteRecipe">
      <img :src="deleteSVG" alt="delete recipe">
    </button>
    
    <!-- TITLE -->
    <h2 class="recipe-title">{{title}}</h2>
    
    <!-- IMAGE -->
    <div class="recipe-image"><img :src="image" :alt="title"></div>
    
    <!-- RECIPE INFO -->
    <div class="recipe-info">
      <div class="recipe-info-item">
        <span class="recipe-info-label">Servings</span>
        <span class="recipe-info-value">{{servings}}</span>        
      </div>
      <div class="recipe-info-item">
        <span class="recipe-info-label">Time</span>
        <span class="recipe-info-value">{{time}}</span>        
      </div>
      <div class="recipe-info-item">
        <span class="recipe-info-label">Difficulty</span>
        <span class="recipe-info-value">{{difficulty}}</span>        
      </div>
    </div>
    
    <!-- INGREDIENTS -->
    <div class="recipe-ingredients">
      <h3 class="recipe-ingredients-title">Ingredients</h3>
      <ul class="recipe-ingredients-list">
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ingredient}}
        </li>
      </ul>
    </div>
    
    <!-- DIRECTIONS -->
    <div class="recipe-directions">
      <h3 class="recipe-directions-title">Directions</h3>
      <ul class="recipe-directions-list">
        <li v-for="direction in directions" :key="direction">
          {{direction}}
        </li>
      </ul>
    </div>
    
  </div>
</template>

<style scoped>
  .recipe {
   padding: 20px;
   border: 1px solid #ccc;
   margin: 20px;
   border-radius: 4px;
   display: block;
   position: relative;
  }
  .recipe.featured {
   background-color: #f5f5f5;
  }
  .recipe-title {
   font-weight: bold;
   font-size: 28px;
  }
  .recipe-image {
   margin-bottom: 20px;
   max-height: 160px;
   overflow: hidden;
  }
  .recipe-image img {
   width: 100%;
  }
  .recipe-info {
   margin-bottom: 20px;
   display: flex;
   justify-content: space-between;
  }
  .recipe-info-label {
   font-weight: bold;
   margin-right: 5px;
  }
  .recipe-ingredients,
  .recipe-directions {
   margin-bottom: 20px;
   text-align: left;
  }
  .recipe-ingredients-title,
  .recipe-directions-title {
   font-weight: bold;
   margin-bottom: 10px;
  }
  .recipe-ingredients-list,
  .recipe-directions-list {
     padding: 0;
   margin: 0;
   margin-left: 18px;
  }
  .delete-recipe {
   position: absolute;
   top: 10px;
   right: 10px;
   background: transparent;
   border: 0;
   padding: 0;
   cursor: pointer;
  }
  .delete-recipe img {
   width: 20px;
  }
</style>