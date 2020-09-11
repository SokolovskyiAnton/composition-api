<template>
  <div class="container">
    <div class="form">
      <AddMessage :onAdd="addMessages"/>
    </div>
    <div class="list">
       <ListMessage :messages="messages"/>
    </div>
  </div>
</template>

<script>
import AddMessage from '../components/AddMessage'
import ListMessage from '../components/ListMessage'
import {useHome} from '../composition/home'
export default {
  setup() {
    return {
      ...useHome()
    }
  },
  components: {
    AddMessage, ListMessage
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
