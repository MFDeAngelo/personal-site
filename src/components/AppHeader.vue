<template>
  <div id="header">
    <div class="compact">
      <h1>Matthew F. DeAngelo</h1>
      <h3><a :href=emailLink>{{ email }}</a></h3>
      <h3>Tampa, FL</h3>
    </div>
    <div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/education">Education</router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import email from '@/data/contactInformation';

const emailLink = computed(() => `mailto:${email}`);
</script>

<style scoped>
#header {
  display: flex;
  border-bottom-color: var(--primary-color);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

#header div {
  flex: 1;
}

.compact h1 {
  margin-top: 2px;
  margin-bottom: 2px;
}

.compact h3 {
  margin-top: 2px;
  margin-bottom: 2px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #D0D0D0;
}

nav a.router-link-exact-active {
  color: var(--primary-color);
}
</style>
