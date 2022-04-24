<template>
  <Switcher v-model="value" />
</template>

<script setup lang="ts">
import Switcher from "./Switcher.vue";
import { ref } from "vue";

const value = ref(false);
</script>
