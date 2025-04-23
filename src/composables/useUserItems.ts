import { ref, computed } from 'vue'
import { userItemsData } from '@/data'
import type { Item } from '@/types'

export function useUserItems() {
  const userItems = ref<Item[]>(userItemsData)
  const selectedUserItems = ref<Item[]>([])

  const MAX_SELECTABLE_ITEMS = 6

  const isMaxUserItemsSelected = computed(
    () => selectedUserItems.value.length >= MAX_SELECTABLE_ITEMS,
  )

  const addUserItem = (item: Item) => {
    if (!isMaxUserItemsSelected.value) {
      selectedUserItems.value.push(item)
    }
  }

  const removeUserItem = (item: Item) => {
    selectedUserItems.value = selectedUserItems.value.filter((i) => i !== item)
  }

  const toggleUserItem = (item: Item) => {
    const isSelected = selectedUserItems.value.includes(item)

    if (isSelected) {
      removeUserItem(item)
    } else if (!isMaxUserItemsSelected.value) {
      addUserItem(item)
    }
  }

  return {
    userItems,
    selectedUserItems,
    toggleUserItem,
    addUserItem,
    removeUserItem,
  }
}
