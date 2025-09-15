import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export const useAside = () => {
  const isOpen = ref<boolean>(false)
  const route = useRoute()

  const handleClose = () => {
    isOpen.value = false
  }

  const handleOpen = () => {
    isOpen.value = true
  }

  watch(route, () => {
    isOpen.value = false
  })
  return {
    handleClose,
    handleOpen,
    isOpen,
  }
}
