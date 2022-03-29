<script setup>
  import { ref } from 'vue';
  import closeSVG from '../../assets/close-button.svg';
  
  const props = defineProps({
    toggleModal: Function,
    addRecipe: Function,
  });
  
  const title = ref('');
  const image = ref('');
  const servings = ref('');
  const time = ref('');
  const difficulty = ref('');
  const ingredients = ref('');
  const directions = ref('');  
  
  function submitRecipe() { 
    if (isValidated()) {
      props.addRecipe(createNewRecipe());
      props.toggleModal();
    } else {
      console.warn('fill the empty fields');
    }    
  }
  
  function isValidated() {
    return (
      title.value.length > 0 && image.value.length > 0 && time.value.length > 0 && servings.value > 0 &&
      difficulty.value.length > 0 && ingredients.value.length > 0 && directions.value.length > 0
    );
  }
  
  function createNewRecipe() {
    const uuid = Date.now().toString(36);
    const ingredientsArray = splitStringToArray(ingredients.value);
    const directionsArray = splitStringToArray(directions.value);

    return {
      id: uuid,
      title: title.value,
      image: image.value,
      servings: servings.value,
      time: time.value,
      difficulty: difficulty.value,
      ingredients: ingredientsArray,
      directions: directionsArray,
    }
  }
  
  function splitStringToArray(string) {
    return string.split(',').map(value => value.trim());
  }  
</script>

<template>
  <div class="modal-container">
    <div class="recipe-form">
      
      <!-- FORM HEADER -->
      <div class="recipe-form-header">
        <h2>Add a new recipe</h2>
        <button @click="toggleModal">
          <img :src="closeSVG" alt="close recipe form modal">
        </button>
      </div>
      
      <!-- FORM -->
      <form @submit.prevent="submitRecipe">
        <!-- TITLE -->
        <div class="recipe-form-item">
          <label for="title">Title</label>
          <input id="title" type="text" name="title" v-model="title">
        </div>
        
        <!-- IMAGE URL -->
        <div class="recipe-form-item">
          <label for="imageUrl">Image URL</label>
          <input id="imageUrl" type="text" name="imageUrl" v-model="image">
        </div>
        
        <!-- SERVINGS -->
        <div class="recipe-form-item">
          <label for="servings">Servings</label>
          <input id="servings" type="number" name="servings" v-model="servings">
        </div>
        
        <!-- TIME -->
        <div class="recipe-form-item">
          <label for="time">Time</label>
          <input id="time" type="text" name="time" v-model="time">
        </div>
        
        <!-- DIFFICULTY -->
        <div class="recipe-form-item">
          <label for="difficulty">Difficulty</label>
          <select id="difficulty" name="difficulty" v-model="difficulty">
            <option disabled value="">Please select one</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        
        <!-- INGREDIENTS -->
        <div class="recipe-form-item">
          <label for="ingredients">Ingredients</label>
          <input id="ingredients" type="text" name="ingredients" v-model="ingredients">
        </div>
        
        <!-- DIRECTIONS -->
        <div class="recipe-form-item">
          <label for="directions">Directions</label>
          <input id="directions" type="text" name="directions" v-model="directions">
        </div>
        
        <!-- SUBMIT -->
        <div class="recipe-form-item">
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.5);
 z-index: 10;
}
.recipe-form {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 80%;
 max-width: 500px;
 background: #fff;
 padding: 20px;
 border-radius: 5px;
}
.recipe-form-header {
}
.recipe-form-header button {
 position: absolute;
 top: 10px;
 right: 10px;
 background: transparent;
 border: 0;
padding: 0;
 cursor: pointer;
}
.recipe-form-header button img {
 width: 20px;
}
.recipe-form-item {
 margin-bottom: 20px;
}
.recipe-form-item label {
 display: block;
 font-weight: bold;
 margin-bottom: 5px;
}
.recipe-form-item input,
.recipe-form-item select {
 width: 100%;
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 max-width: 300px;
}
.recipe-form-item button {
 background: #4caf50;
 color: #fff;
 padding: 10px;
 border: none;
 border-radius: 4px;
 cursor: pointer;
}
</style>