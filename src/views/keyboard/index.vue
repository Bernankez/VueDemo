<template>
  <KeyboardButton placement="middle" @click="click">boom</KeyboardButton>
</template>

<script setup lang="ts">
import KeyboardButton from "./KeyboardButton.vue";

const click = e => {
  alert("Hi");
};
</script>
