<template>
  <div :class="name">
    <link href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <button :class="bem('button')" @click="click">
      {{ props.value }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from "@/utils";
import { computed, withDefaults } from "vue";

const [name, bem] = createNamespace("cyber-button");

interface Props {
  value?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  value: ""
});

const computedValue = computed(() => `"${props.value}"`);

const emit = defineEmits<{
  (event: "click", e: MouseEvent): void
}>();

function click(e: MouseEvent) {
  emit("click", e);
}
</script>

<style lang="scss" scoped>
.demo-cyber-button {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
}

.demo-cyber-button__button {
  &, &::after {
    position: relative;
    padding: 0 40px;
    font-size: 36px;
    font-family: "Bebas Neue", cursive;
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 88px;
    box-shadow: 6px 0 0 #00e6f6;
    outline: transparent;
  }

  &::after {
    content: v-bind("computedValue");
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);
    text-shadow: -3px -3px 0 #f8f005, 3px 3px 0 #00e6f6;
    clip-path: var(--slice-0);
  }

  &:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end)
  }

  &:active {
    transform: scale(0.95, 0.95);
  }
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}
</style>