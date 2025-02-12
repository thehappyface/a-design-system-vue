<template>
    <SvgIcon
      class="ad__input--icon"
      :url="iconUrl"
    />
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import SvgIcon from "../svg-icon.vue";
  
  defineProps({
    icon: String
  });
  
  const iconUrl = computed(() => `https://design.atea.com/assets/icons/${icon}.svg`);
  </script>
  
  <style lang="scss" scoped>
  .ad__input--icon {
    /* Your styles here */
  }
  </style>
  