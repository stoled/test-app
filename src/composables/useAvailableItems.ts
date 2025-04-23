import { ref } from 'vue'
import { availableItemsData } from '@/data'
import type { Item } from '@/types'

export function useAvailableItems() {
  const availableItems = ref<Item[]>(availableItemsData)
  const selectedAvailableItem = ref<Item | null>(null)

  const selectAvailableItem = (item: Item) => {
    selectedAvailableItem.value = item
  }

  const clearSelection = () => {
    selectedAvailableItem.value = null
  }

  return {
    availableItems,
    selectedAvailableItem,
    selectAvailableItem,
    clearSelection,
  }
}
