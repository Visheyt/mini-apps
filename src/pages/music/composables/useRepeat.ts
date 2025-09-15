import { ref } from 'vue'

export type RepeatType = 'no' | 'one' | 'all'

export const useRepeat = () => {
  const repeatMode = ref<RepeatType>('all')

  const toggleRepeatMode = () => {
    switch (repeatMode.value) {
      case 'no':
        repeatMode.value = 'all'
        break
      case 'all':
        repeatMode.value = 'one'
        break
      case 'one':
        repeatMode.value = 'no'
        break
    }
  }

  return {
    repeatMode,
    toggleRepeatMode,
  }
}
