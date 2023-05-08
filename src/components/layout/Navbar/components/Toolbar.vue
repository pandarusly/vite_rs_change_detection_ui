<!-- eslint-disable no-console -->
<script setup lang="ts">
import { inject, ref } from "vue";
import { Cartesian3, Math, SplitDirection } from "cesium";
// import imagerySelect from "./imagery-select.vue";
import type { CesiumRef } from "~/libs/cesium/cesium-vue";
import { CESIUM_REF_KEY } from "~/libs/cesium/cesium-vue";

const height = ref(8000);
const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY);
const DialogVisible = ref(true);

const ChangeView = (): void => {
  if (height.value < 10000)
    height.value = 16000;
  else
    height.value = 8000;

  console.log((cesiumRef || {}).viewerContainer);

  (cesiumRef || {}).viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(115.91572, 39.02617, height.value),
    orientation: {
      heading: Math.toRadians(0), // 方向
      pitch: Math.toRadians(-90), // 倾斜角度
      roll: 0,
    },
  });
};

const CompareView = (): void => {
  const left = (cesiumRef || {}).viewer;
  left.splitDirection = SplitDirection.LEFT;
  const right = (cesiumRef || {}).viewer;
  right.splitDirection = SplitDirection.RIGHT;
  //   cesiumRef.viewer.zoomTo(left);
  console.log((cesiumRef || {}).viewerContainer);
  DialogVisible.value = true;
  console.log(DialogVisible.value);
};
</script>

<template>
  <div class="flex justify-start flex-1 px-2">
    <div class="flex items-stretch">
      <!-- <a class="btn btn-ghost rounded-btn">Button</a> -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn">下拉菜单1</label>
        <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <!-- <li><a>Item 1</a></li>
          <li><a>Item 2</a></li> -->
          <li>
            <button class="btn" @click="ChangeView">
              提升视角高度
            </button>
          </li>
          <li>
            <button class="btn" @click="CompareView">
              分屏对比
            </button>
          </li>
          <li>
            <button class="btn">
              Button3
            </button>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn">下拉菜单2</label>
        <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li>
            <button class="btn">
              五
            </button>
          </li>
          <li>
            <button class="btn">
              Button3
            </button>
          </li>
        </ul>
      </div>
      <!-- <imagerySelect v-model="DialogVisible" /> -->
    </div>
  </div>
</template>

<!--
<template>
  <div class="flex flex-1 md:gap-1 lg:gap-2">
    <div class="btn-group">
      <button class="btn btn-active" @click="ChangeView">
        Button1
      </button>
      <button class="btn" @click="CompareView">
        Button2
      </button>
      <button class="btn">
        Button3
      </button>
    </div>
  </div>
</template> -->
