<template>
  <div :class="name">
    <div :class="[bem('', 'roof'), props.className]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from "@/utils";

const [name, bem] = createNamespace("keyboard");

interface Prop {
  width?: string;
  height?: string;
  className?: string;
  offset?: string;
  activeOffset?: string;
  activeScale?: `${number},${number}`;
}

const props = withDefaults(defineProps<Prop>(), {
  width: "80px",
  height: "80px",
  offset: "6px",
  activeOffset: "7px",
  activeScale: "0.98,0.98",
});
</script>

<style lang="scss">
.demo-keyboard {
  --keyboard-radius: 10px;
  --keyboard-offset: v-bind("props.offset");
  --keyboard-offset-active: v-bind("props.activeOffset");
  --keyboard-width: v-bind("props.width");
  --keyboard-height: v-bind("props.height");

  position: relative;
  width: var(--keyboard-width);
  height: var(--keyboard-height);
  background: linear-gradient(to bottom, #282828, #202020);
  border: 1px solid #0009;
  border-radius: var(--keyboard-radius);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
}

.demo-keyboard:active {
  transform: scale(v-bind("props.activeScale"));
}

.demo-keyboard:active .demo-keyboard--roof {
  top: var(--keyboard-offset-active);
  left: var(--keyboard-offset-active);
  background: linear-gradient(75deg, #191919, #414141);
  box-shadow: -15px -15px 10px 7px rgba(255, 255, 255, 0.25), 10px 5px 10px rgba(0, 0, 0, 0.15);
}

.demo-keyboard--roof {
  position: absolute;
  top: var(--keyboard-offset);
  left: var(--keyboard-offset);
  height: calc(100% - var(--keyboard-offset) * 3);
  width: calc(100% - var(--keyboard-offset) * 3);
  background: linear-gradient(to right, #232323, #4a4a4a);
  box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25), 10px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: var(--keyboard-radius);
}
</style>
