<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Page not found: {{ $route.fullPath }}</h1>
  <RouterLink to="/">Go back home</RouterLink>
</template>
