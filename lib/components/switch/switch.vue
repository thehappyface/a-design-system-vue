<template>
  <div 
    class="ad__switch" 
    :style="{ width }"
    :class="addClass">
    <input 
      type="checkbox" 
      :class="{ reverse: isReverse }"
      :aria-labelledby="ariaLabelledBy"
      :aria-label="ariaLabel"
      :role="role"
      :title="title"
      :disabled="isDisabled"
      :tabindex="isDisabled || isReadonly ? '-1' : '0'"
      :id="id" 
      :value="modelValue"
      @change="inputChange"
      :checked="modelValue"
      :aria-checked="modelValue"
      :readonly="isReadonly"
      ref="switch"
    >
  
    <label 
      tabindex="-1"
      :class="{ reverse: isReverse }">
      <span 
        role="button"
        @click="triggerSwitchClick" 
        class="ad__switch--toggle"
        :class="{ readonly: isReadonly, 'no-transition': !isInitialize }"
      ></span>

      <div class="ad__switch--text" :style="{ marginTop: description.length > 0 ? '-8px' : '' }">
        <span class="switch--label">{{ label }} <slot></slot></span>
        <span class="switch--description" v-if="description.length > 0">{{ description }}</span>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AdSwitch',
  props: {
    modelValue: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isReadonly: { type: Boolean, default: false },
    isReverse: { type: Boolean, default: false },
    width: { type: String, default: '' },
    addClass: { type: String, default: '' },
    ariaLabel: { type: String, default: '' },
    ariaLabelledBy: { type: String, default: '' },
    title: { type: String, default: '' },
    role: { type: String, default: 'switch' },
    label: { type: String, default: '' },
    description: { type: String, default: '' },
    id: { type: String, default: () => `switch-${crypto.randomUUID()}` }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isInitialize: false
    };
  },
  
  mounted() {
    this.isInitialize = true;
  },
  methods: {
    inputChange(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.$emit('update:modelValue', target.checked);
        }
    },
    
    triggerSwitchClick() {
      (this.$refs.switch as HTMLButtonElement).click();    
    }
  }
};
</script>
  
  <style scoped>
 .ad__switch{--switch-color: 200, 4.4%, 73.3%;--switch-color-hover: 204, 4.9%, 60%;--switch-color-checked: 120, 100%, 27.1%;--switch-color-checked-hover: 120, 51.9%, 41.6%;--switch-label: 200, 8.8%, 13.3%;--switch-label-description: 200, 8.8%, 26.7%;--switch-label-size: 16px;--switch-label-description-size: 14px;--switch-hover-bg: 120, 100%, 27.1%, .12;--switch-transition-100: .1s;--switch-transition-150: .15s;--switch-transition-200: .2s;position:relative;display:flex;width:auto}@media (prefers-reduced-motion){.ad__switch{--switch-transition-100: 0ms;--switch-transition-150: 0ms;--switch-transition-200: 0ms}}.ad__switch input[type=checkbox],.ad__switch input[type=radio]{position:absolute;width:63px;height:32px;opacity:1;top:0;right:1px;background:transparent;border:none;-webkit-appearance:none;appearance:none;pointer-events:none;margin:0}.ad__switch input[type=checkbox].reverse,.ad__switch input[type=radio].reverse{right:auto;left:1px}.ad__switch input[type=checkbox]:checked+label span.ad__switch--toggle,.ad__switch input[type=radio]:checked+label span.ad__switch--toggle{background-color:#008a00;background-color:hsla(var(--switch-color-checked, 120, 100%, 27.1%),1)}.ad__switch input[type=checkbox]:checked+label span.ad__switch--toggle:after,.ad__switch input[type=radio]:checked+label span.ad__switch--toggle:after{margin-left:calc(100% - 28px)}.ad__switch input[type=checkbox]:checked+label:hover span.ad__switch--toggle:has(.readonly),.ad__switch input[type=radio]:checked+label:hover span.ad__switch--toggle:has(.readonly){background-color:#33a133;background-color:hsla(var(--switch-color-checked-hover, 120, 51.9%, 41.6%),1)}.ad__switch input[type=checkbox]:disabled~label,.ad__switch input[type=radio]:disabled~label{opacity:.5;pointer-events:none}.ad__switch input[type=checkbox]:disabled~label span.ad__switch--toggle,.ad__switch input[type=radio]:disabled~label span.ad__switch--toggle{opacity:.75}.ad__switch input[type=checkbox]:focus-visible,.ad__switch input[type=radio]:focus-visible{outline:3px solid;outline-offset:8px;border-radius:50px}.ad__switch--text{padding:0rem 1rem 0rem 0rem;margin:0rem 1rem 0rem 0rem;display:flex;flex-direction:column}.ad__switch--text>span{max-width:400px}.ad__switch label{padding:5px 0 0;display:flex;flex-direction:row-reverse;width:100%;letter-spacing:-.2px;-webkit-user-select:none;user-select:none;transition:opacity var(--switch-transition-200, .25s);outline:0}.ad__switch label.reverse{flex-direction:row;gap:0 16px}.ad__switch label.reverse .ad__switch--toggle{margin:-4px 0 0}.ad__switch label .switch--label{font-size:var(--switch-label-size, 16px);color:#1f2325;color:hsla(var(--switch-label, 200, 8.8%, 13.3%),1);font-weight:500;line-height:24px}.ad__switch label .switch--label:last-child{font-weight:400}.ad__switch label .switch--description{font-size:var(--switch-label-size-description, 14px);color:#3e464a;color:hsla(var(--switch-description, 200, 8.8%, 26.7%),1);font-weight:400;line-height:20px}.ad__switch label .ad__switch--toggle{background-color:#949a9e;background-color:hsla(var(--switch-color, 204, 4.9%, 60%),1);position:relative;width:64px;height:32px;border-radius:50px;margin:-5px 0 0 auto;flex-grow:0;flex-shrink:0;display:flex;align-items:center;transition:background-color var(--switch-transition-150, .15s),outline-color var(--switch-transition-100, .1s);outline:8px solid transparent;cursor:pointer}.ad__switch label .ad__switch--toggle:after{content:"";width:24px;height:24px;background-color:#fff;border-radius:100%;margin-left:4px;transition:all var(--switch-transition-100, .1s)}.ad__switch label .ad__switch--toggle.no-transition:after{transition-duration:0ms}.ad__switch label .ad__switch--toggle:hover{z-index:0;background-color:#71797d;background-color:hsla(var(--switch-color-hover, 200, 5%, 46.7%),1);outline-color:#008a001f;outline-color:hsla(var(--switch-hover-bg, 120, 100%, 27.1%, .12))}.ad__switch label .ad__switch--toggle.readonly{cursor:default;pointer-events:none;opacity:.5}
  </style>
  