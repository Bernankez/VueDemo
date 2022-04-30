<template>
  <label>
    <input :class="bem('checkbox')" type="checkbox" v-model="value" :true-value="props.trueValue" :false-value="props.falseValue" />
    <Keyboard :className="name" :theme="props.theme">
      <Icon :class="{ [bem('', 'icon')]: props.useShadow && value === props.trueValue }" size="30px" :color="value ? props.onColor : props.offColor">
        <slot>
          <PoweroffOutlined v-if="props.useDefaultIcon" />
        </slot>
      </Icon>
    </Keyboard>
  </label>
</template>

<script setup lang="ts">
import Keyboard from "./Keyboard.vue";
import { Icon } from "@vicons/utils";
import { PoweroffOutlined } from "@vicons/antd";
import { createNamespace } from "@/utils";
import { computed } from "vue";

const [name, bem] = createNamespace("keyboard-switch");

interface Prop {
  modelValue: any;
  trueValue?: any;
  falseValue?: any;
  theme?: "dark" | "light";
  useShadow?: boolean;
  useDefaultIcon?: boolean;
  onColor?: string;
  offColor?: string;
}

const props = withDefaults(defineProps<Prop>(), {
  modelValue: false,
  trueValue: true,
  falseValue: false,
  theme: "dark",
  useShadow: true,
  useDefaultIcon: true,
  onColor: "#e6e613",
});

const emit = defineEmits<{
  (event: "update:modelValue", val: Prop["modelValue"]): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val: Prop["modelValue"]) {
    emit("update:modelValue", val);
  },
});
</script>

<style lang="scss" scoped>
:global(.demo-keyboard-switch) {
  display: flex;
  justify-content: center;
  align-items: center;
  color: v-bind("props.offColor");
}

:slotted(.demo-keyboard-switch--icon svg) {
  filter: drop-shadow(0 0 5px v-bind("props.onColor")) drop-shadow(0 0 15px v-bind("props.onColor"));
}

.demo-keyboard-switch__checkbox {
  display: none;
}
</style>
