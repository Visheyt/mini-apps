import { ref } from 'vue'

export function useFetch<T>() {
  const loading = ref(false)
  const error = ref<null | string>(null)
  const data = ref<T | null>(null)

  const execute = async (fetchFunc: () => Promise<T>) => {
    loading.value = true
    error.value = null
    try {
      const result = await fetchFunc()
      data.value = result
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    data,
    execute,
  }
}
