import {reactive, computed} from '@vue/composition-api'
export function useForm(props) {
    const form = reactive({
        description: ''
    })
    const onSubmit = (msg) => {
        const message = {
            description: form.description.trim(), 
            id: Date.now().toString()
        }
        form.description = ''
        props.onAdd(message)
    }

    const valid = computed(() => {
        return form.description.trim()
    })

    return {form, onSubmit, valid}
}