import { onMounted, ref } from 'vue'

type useFetchParams<T> = {
  fetchFunc: () => Promise<T>
}

export function useFetch<T>({ fetchFunc }: useFetchParams<T>) {
  const loading = ref(false)
  const error = ref<null | string>(null)
  const data = ref<T | null>(null)

  onMounted(async () => {
    loading.value = true
    error.value = null
    try {
      const result = await fetchFunc()
      data.value = result
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  })

  return {
    loading,
    error,
    data,
  }
}
