<template>
  <DemoSwitcher v-model="value" />
</template>

<script setup lang="ts">
import DemoSwitcher from "./DemoSwitcher.vue";
import { ref } from "vue";

const value = ref(false);
</script>
