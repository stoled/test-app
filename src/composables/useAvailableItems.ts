// composables/useAvailableItems.ts
import { ref } from 'vue'
import type { Item } from '@/types'

export function useAvailableItems(initialItems: Item[]) {
  const availableItems = ref<Item[]>(initialItems)
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
