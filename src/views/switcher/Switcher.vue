<template>
  <div :class="name">
    <label>
      <input
        :class="{ [bem('checkbox')]: true, [bem('checkbox', 'enabled')]: !props.disabled }"
        type="checkbox"
        v-model="value"
        :disabled="props.disabled"
        :true-value="props.trueValue"
        :false-value="props.falseValue" />
      <span :class="bem('', 'background')"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { createNamespace } from "@/utils";

const [name, bem] = createNamespace("switcher");

interface Props {
  modelValue: boolean | string | number;
  width?: string;
  height?: string;
  toggleDiameter?: string;
  toggleWider?: string;
  switchColorOff?: string;
  switchColorOn?: string;
  switchColorOffDark?: string;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  width: "80px",
  height: "46px",
  toggleDiameter: "40px",
  toggleWider: "52px",
  switchColorOff: "#e9e9e9",
  switchColorOn: "#30d158",
  switchColorOffDark: "#39393d",
  trueValue: true,
  falseValue: false,
  disabled: false
});

const emit = defineEmits<{
  (event: "update:modelValue", value: Props["modelValue"]): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val: Props["modelValue"]) {
    emit("update:modelValue", val);
  }
});
</script>

<style lang="scss" scoped>
.demo-switcher {
  --button-toggle-offset: calc((v-bind("props.height") - v-bind("props.toggleDiameter")) / 2);
  --toggle-shadow-offset: 10px;
}

.demo-switcher--background {
  position: relative;
  display: inline-block;
  width: v-bind("props.width");
  height: v-bind("props.height");
  background-color: v-bind("props.switchColorOff");
  border-radius: calc(v-bind("props.height") / 2);
  transition: 0.3s all ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: var(--button-toggle-offset);
    display: inline-block;
    width: v-bind("props.toggleDiameter");
    height: v-bind("props.toggleDiameter");
    background-color: #fff;
    border-radius: calc(v-bind("props.toggleDiameter") / 2);
    transform: translateX(var(--button-toggle-offset));
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in-out;
  }
}

.demo-switcher__checkbox {
  display: none;

  &:checked + span {
    background-color: v-bind("props.switchColorOn");
  }

  &:checked + span::after {
    transform: translateX(calc(v-bind("props.width") - v-bind("props.toggleDiameter") - var(--button-toggle-offset)));
    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  }

  &--enabled:active + span::after {
    width: v-bind("props.toggleWider");
  }

  &--enabled:checked:active + span::after {
    transform: translateX(calc(v-bind("props.width") - v-bind("props.toggleWider") - var(--button-toggle-offset)));
  }
}

@media (prefers-color-scheme: dark) {
  .demo-switcher .demo-switcher--background {
    background-color: v-bind("props.switchColorOffDark");
  }
}
</style>
