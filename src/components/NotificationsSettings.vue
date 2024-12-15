<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto">
      <div class="flex items-center gap-2">
        <input type="checkbox" value="male" v-model="notifications.email" />
        <label>Email notifications</label>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" value="male" v-model="notifications.sms" />
        <label>SMS notifications</label>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
</script>
