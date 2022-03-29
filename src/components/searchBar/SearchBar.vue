<script setup>
  defineProps({
    toggleModal: Function,
  });
</script>

<template>
  <div class="search">
    <input type="text" name="search" placeholder="Search for a recipe">
    <button @click="toggleModal">Add a new recipe</button>
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
}
.search input {
 width: 100%;
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
</style>