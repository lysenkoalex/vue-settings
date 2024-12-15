<template>
  <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div>
        <label>Username</label>
        <input type="text" v-model="general.username" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="general.email" />
      </div>
      <div>
        <label>About Me</label>
        <textarea v-model="general.about"></textarea>
      </div>
      <div>
        <label>Gender</label>
        <label>
          <input type="radio" value="male" v-model="general.gender" />
          <span>Male</span>
        </label>
        <label>
          <input type="radio" value="female" v-model="general.gender" />
          <span>Female</span>
        </label>
        <label>
          <input type="radio" value="Other" v-model="general.gender" />
          <span>Other</span>
        </label>
      </div>
      <div>
        <label>Country</label>
        <select v-model="general.country">
          <option>USA</option>
          <option>Canada</option>
          <option>Uk</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { general } = useSettings();

const { addNotification } = useNotifications()

const save = () => {
  addNotification('General settings were saaved successfully')
}
</script>
