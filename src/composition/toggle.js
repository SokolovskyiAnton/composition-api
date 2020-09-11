import {ref} from '@vue/composition-api'
export function useToggle() {
    const visible = ref(true)
    const toggle = function() {
        visible.value = !visible.value
    }

    return {visible, toggle}
}