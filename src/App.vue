<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import RecipeList from './components/recipe/RecipeList.vue';
import SearchBar from './components/searchBar/SearchBar.vue';
import RecipeForm from './components/recipe/RecipeForm.vue';
import { useRecipesStore } from './stores/recipes'
import recipesJSON from './recipes.json';
import uocLogo from './assets/uoc-logo.png';

const appName = 'Recipes';
const showModal = ref(false);
const store = useRecipesStore();
const {filteredRecipes} = storeToRefs(store);

store.setRecipes(recipesJSON.data);

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
      <RecipeList :recipe-list="filteredRecipes"/>
      
      <!-- RECIPE MODAL FORM -->
      <RecipeForm v-if="showModal" :toggleModal="toggleModal" />
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
