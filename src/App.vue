<script setup lang="ts">
import { useUserItems } from '@/composables/useUserItems'
import { useAvailableItems } from '@/composables/useAvailableItems'
import { userItemsData, availableItemsData } from './data'

const { userItems, selectedUserItems, toggleUserItem } = useUserItems(userItemsData)

const { availableItems, selectedAvailableItem, selectAvailableItem } =
  useAvailableItems(availableItemsData)
</script>

<template>
  <div class="container">
    <div class="section-row">
      <div class="panel">
        <h3>Выбранные вещи пользователя</h3>
        <ul class="item-list">
          <li v-for="item in selectedUserItems" :key="item.id" class="item">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="panel">
        <h3>Выбранная вещь на выбор</h3>
        <p v-if="selectedAvailableItem">{{ selectedAvailableItem.name }}</p>
      </div>
    </div>

    <div class="section-row">
      <div class="panel">
        <h3>Вещи у пользователя</h3>
        <ul class="item-list">
          <li
            v-for="item in userItems"
            :key="item.id"
            :class="['item', { 'item--selected': selectedUserItems.includes(item) }]"
            @click="toggleUserItem(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="panel">
        <h3>Вещи на выбор</h3>
        <ul class="item-list">
          <li
            v-for="item in availableItems"
            :key="item.id"
            :class="['item', { 'item--selected': selectedAvailableItem === item }]"
            @click="selectAvailableItem(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.section-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.panel {
  flex: 1;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 4px;
}

.item {
  cursor: pointer;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 3px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
}

.item:hover {
  background-color: #f0f0f0;
}

.item--selected {
  background-color: #d0f0d0;
  border-color: #90c090;
}

.empty-state {
  color: #888;
  font-style: italic;
}
</style>
