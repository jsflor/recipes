<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';

import RecipeList from './components/recipe/RecipeList.vue';
import SearchBar from './components/searchBar/SearchBar.vue';
import RecipeForm from './components/recipe/RecipeForm.vue';

import recipesJSON from './recipes.json';

import uocLogo from './assets/uoc-logo.png';

const appName = 'Recipes';
const recipes = ref(recipesJSON.data);
const showModal = ref(false);

function addRecipe(newRecipe) {  
  recipes.value.push(newRecipe);
}

function deleteRecipe(id) {
  recipes.value = recipes.value.filter(recipe => recipe.id !== id);
}

function toggleModal() {
  showModal.value = !showModal.value;
}
</script>

<template>
    <!-- HEADER -->
    <div class="header">
      <img :src="uocLogo" alt="UOC logo" class="logo">
      <h1 class="app-name">{{appName}}</h1>
    </div>

    <!-- CONTENT -->
    <div class="content">
      <!-- SEARCH BAR -->
      <SearchBar :toggleModal="toggleModal" />
      
      <!-- RECIPE LIST -->
      <RecipeList :recipe-list="recipes" :deleteRecipe="deleteRecipe" />
      
      <!-- RECIPE MODAL FORM -->
      <RecipeForm v-if="showModal" :addRecipe="addRecipe" :toggleModal="toggleModal" />
    </div>
</template>

<style>
body {
 margin: 0;
} 
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 display: flex;
 flex-wrap: wrap;
 height: 100%;
 width: 100%;
 max-width: 1280px;
  margin: 0 auto;
}
.header {
 width: 100%;
 padding: 15px;
 display: flex;
 align-items: center;
 border-bottom: 1px solid #ccc;
}
.header .logo {
 max-height: 50px;
}
.header .app-name {
 margin-left: 25px;
 font-weight: bold;
 font-size: 20px;
}
.content {
  width: 100%;
}
</style>
