<template>
  <Keyboard />
  <KeyboardButton placement="middle" theme="light" @click="click">boom</KeyboardButton>
  <KeyboardSwitch v-model="value">
    <BulbOutlined />
  </KeyboardSwitch>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Keyboard from "./Keyboard.vue";
import KeyboardButton from "./KeyboardButton.vue";
import KeyboardSwitch from "./KeyboardSwitch.vue";
import { BulbOutlined } from "@vicons/antd";

const click = e => {
  console.log("Hi");
};

const value = ref(false);
</script>
