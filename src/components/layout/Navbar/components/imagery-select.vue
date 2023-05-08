<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
} from "vue";

import jtDraggableResizable from "~/components/jit/jt-draggable-resizable/index.vue";

const UPDATE_MODEL_EVENT = "update:modelValue";

export default defineComponent({
  name: "ImagerySelect",
  components: { JtDraggableResizable: jtDraggableResizable },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    [UPDATE_MODEL_EVENT](val: boolean) {
      return true;
    },
  },
  setup(props, context) {
    const visible = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (val) => {
        visible.value = val;
      },
    );

    watch(visible, (val) => {
      context.emit(UPDATE_MODEL_EVENT, val);
    });
    return {
      visible,
    };
  },
});
</script>

<template>
  <JtDraggableResizable
    v-model="visible" :resizable="false" :w="300" :h="300" :y="300" :x="500" initial-position="tr"
    :draggable="true" class="pointer-events-auto"
  >
    <template #title>
      {{ '添加影像' }}
    </template>
    <div class="flex flex-1 md:gap-1 lg:gap-2">
      <div class="btn-group">
        <button class="btn">
          Button1
        </button>
        <button class="btn">
          Button2
        </button>
        <button class="btn">
          Button3
        </button>
      </div>
    </div>
  </JtDraggableResizable>
</template>
