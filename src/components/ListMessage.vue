<template>
  <div class="block-text">
      <p v-if="!messages.length" class="align-text">
          Здесь пока ничего нет.
      </p>
      <div v-else class="block-main" v-for="message in messages" :key="message.id">
          {{message.description}}
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
        messages: {
            type: Array
        }
    }
  }
</script>

<style scoped>
.block-text {
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    font-size: 19px;
}
.align-text {
    text-align: center;
}
.block-main {
    margin-bottom: 10px;
    width: 400px;
    min-height: 70px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 17px;
    background-color: rgb(226, 226, 226);
}
</style>