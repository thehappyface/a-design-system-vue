<template>
    <div class="ad__input--icon">
        <SvgIcon
        :url="iconUrl"
        />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import SvgIcon from "../svg-icon.vue";
  
  // Define props
  const props = defineProps<{
    icon: string;
  }>();
  
  // Use props.icon in the computed function
  const iconUrl = computed(() => `https://design.atea.com/assets/icons/${props.icon}.svg`);
  </script>
  
  <style lang="scss" scoped>
  $color-grey-800: 200, 8.8%, 13.3%;
  .ad__input--icon {
    --ad-icon-color: #{$color-grey-800};
    
    color: hsl(var(--ad-icon-color));

    pointer-events: none;
    position: absolute;

    width: 24px;
    height: 24px;

    left: 16px;
    top: calc(50% - 12px);

    svg {
        fill:currentColor;  
    }
  }
  </style>
  