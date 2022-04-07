<script setup>
  import { storeToRefs } from 'pinia';
  import { useRecipesStore } from '../../stores/recipes'
  
  const store = useRecipesStore();
  const {filter} = storeToRefs(store);
  
  const emit = defineEmits(['showModal']);
  
  function showModal() {
    emit('showModal');
  }
  
  function search(e) {
    store.setFilter(e.target.value);
  }
  
  function clearSearch() {
    store.setFilter('');
  }
</script>

<template>
  <div class="search">
    <div>
      <input :value="filter" @input="search" type="text" name="search" placeholder="Search for a recipe">
      <button class="clear-search" v-if="filter" @click="clearSearch">Clear search</button>
    </div>
    <button @click="showModal">Add a new recipe</button>
  </div>
</template>

<style scoped>
.search {
 width: 100%;
 padding: 15px;
 display: flex;
 align-items: center;
 border-bottom: 1px solid #ccc;
 margin-bottom: 25px;
 box-sizing: border-box;
 justify-content: space-between;
}
.search input {
 width: 500px;
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 font-size: 16px;
 margin: 0 auto;
 max-width: 500px;
}
.search button {
 margin-left: 10px;
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 font-size: 16px;
 cursor: pointer;
 background: #4caf50;
 color: #fff;
}
.search button.clear-search {
  background-color: #4c95af;
}
</style>