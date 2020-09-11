import {ref} from '@vue/composition-api'
export function useHome() {
    const messages = ref([])

    const addMessages = (msg) => {
        messages.value.push(msg)
    }

    return {messages,addMessages}
}