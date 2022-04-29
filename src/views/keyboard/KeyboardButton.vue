<template>
  <Keyboard :className="name" :width="props.width" :height="props.height" :theme="props.theme" @click="click">
    <slot>{{ props.title }}ffff</slot>
  </Keyboard>
</template>

<script setup lang="ts">
import Keyboard from "./Keyboard.vue";
import { createNamespace } from "@/utils";
import { computed, defineProps } from "vue";

const [name, bem] = createNamespace("keyboard-button");

interface Prop {
  placement?: `${"left" | "right"}-${"top" | "bottom"}` | `${"top" | "bottom"}-${"left" | "right"}` | "left" | "right" | "top" | "bottom" | "middle";
  title?: string;
  theme?: "dark" | "light";
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Prop>(), {
  placement: "left-top",
  theme: "dark",
  width: "80px",
  height: "80px",
});

const emit = defineEmits<{
  (event: "click", e: MouseEvent): void;
}>();

const computedStyle = computed(() => {
  const flex = { justifyContent: "center", alignItems: "center" };
  if (props.placement.includes("left")) {
    flex.justifyContent = "flex-start";
  } else if (props.placement.includes("right")) {
    flex.justifyContent = "flex-end";
  }
  if (props.placement.includes("top")) {
    flex.alignItems = "flex-start";
  } else if (props.placement.includes("bottom")) {
    flex.alignItems = "flex-end";
  }
  return flex;
});

const click = e => {
  emit("click", e);
};
</script>

<style lang="scss" scoped>
:global(.demo-keyboard-button) {
  display: flex;
  justify-content: v-bind("computedStyle.justifyContent");
  align-items: v-bind("computedStyle.alignItems");
  padding: 8%;
  box-sizing: border-box;
}
</style>
