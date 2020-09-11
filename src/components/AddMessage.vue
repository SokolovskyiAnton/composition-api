<template>
  <div class="form-block">
      <h1 class="align-text">Написать сообщение</h1>
      <form @submit.prevent>
          <div class="text-block" v-if="visible">
              <input type="text" v-model="form.description">
          </div>
          <div class="btn-block">
              <button @click="onSubmit" :disabled="!valid">Отправить</button>
              <button @click="toggle">{{visible ? 'Скрыть': 'Показать'}} форму</button>
          </div>
      </form>
  </div>
</template>

<script>
import {ref, reactive, computed} from '@vue/composition-api'
import {useToggle} from '../composition/toggle'
import {useForm} from '../composition/form'
  export default { 
    
    setup(props) {
        return {
            ...useForm(props),
            ...useToggle()
        }
    },
    props: {
        onAdd: {
            type: Function,
            required: true
        }
    }
  }
</script>

<style scoped>
.form-block {
    padding: 10px;

}
.form-block form {
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
}
.form-block form button {
    margin-top: 15px;
}

.align-text {
    text-align: center;
}

.btn-block {
    display: flex;
    justify-content: center;
}

.btn-block button {
    width: 130px;
    margin: 10px
}
.visible {
    display: none;
}
.text-block input {
    width: 100%;
}
</style>