<template>
  <div>
    <h2 class="text-2xl mb-4">Privacy</h2>
    <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-2">
        <input type="checkbox" value="male" v-model="privacy.searchEngineIndexing" />
        <label>Search Engine Indexing</label>
      </div>
      <div>
        <label>Visibility</label>
        <select v-model="privacy.visibility">
          <option class="private">Private</option>
          <option class="public">Public</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>


<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { privacy } = useSettings();
</script>
