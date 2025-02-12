<template>
    <div
      class="ad__checkbox"
      :style="{ width }"
      :class="addClass"
    >
      <input
        type="checkbox"
        :id="id"
        :disabled="isDisabled"
        :tabindex="isDisabled ? '-1' : '0'"
        :readonly="isReadonly"
        :required="isRequired"
        :aria-labelledby="ariaLabelledBy"
        :aria-label="ariaLabel"
        :role="role"
        :title="title"
        :value="modelValue"
        :checked="modelValue || isIndeterminate || isChecked"
        :aria-checked="modelValue || isIndeterminate || isChecked"
        :class="{ asterisk: isAsterisk && isRequired, invalid: !isValid }"
        :aria-invalid="!isValid"
        @change="inputChange"
      />
      <label :for="id" tabindex="-1" :class="{ invalid: !isValid, readonly: isReadonly }">
        <span :class="{ indeterminate: isIndeterminate }"></span>
        {{ label }}
        <slot></slot>
      </label>
    </div>
  </template>
  

<script lang="ts">

export default {
  name: 'AdCheckbox',
  props: {
    modelValue: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isValid: { type: Boolean, default: true },
    isIndeterminate: { type: Boolean, default: false },
    isRequired: { type: Boolean, default: false },
    isReadonly: { type: Boolean, default: false },
    isAsterisk: { type: Boolean, default: true },
    isTabindex: { type: Boolean, default: false },
    isChecked: { type: Boolean, default: false },
    width: { type: String, default: "" },
    addCss: { type: Object, default: () => ({}) },
    addClass: { type: String, default: "" },
    ariaLabel: { type: String, default: "" },
    ariaLabelledBy: { type: String, default: "" },
    title: { type: String, default: "" },
    role: { type: String, default: "checkbox" },
    label: { type: String, default: "" },
    id: { type: String, default: () => `checkbox-${crypto.randomUUID()}` }
  },
  emits: ['update:modelValue', 'change', 'blur'],
  data() {
    return {
      inputModel: this.modelValue
    };
  },
  methods: {
    inputChange() {
      if (!this.isIndeterminate) {
        this.inputModel = !this.inputModel;
      } else {
        this.inputModel = false;
      }
      this.$emit('change', this.inputModel);
      this.$emit('update:modelValue', this.inputModel);
    },
  },
  watch: {
    modelValue(newVal) {
      this.inputModel = newVal;
    }
  }
};
</script>


<style scoped>
.ad__checkbox{--checkbox-color: 120, 100%, 27.1%;--checkbox-color-hover: 120, 51.9%, 41.6%;--checkbox-label: 200, 8.8%, 13.3%;--checkbox-label-active: 202.5, 9.4%, 33.3%;--checkbox-error: 358.3, 71.2%, 49%;--checkbox-hover-bg: 120, 100%, 27.1%, .12;--checkbox-transition-25: 25ms;--checkbox-transition-50: 50ms;--checkbox-transition-75: 75ms;--checkbox-transition-150: .15s;position:relative;display:flex;width:auto}@media (prefers-reduced-motion){.ad__checkbox{--checkbox-transition-25: 0ms;--checkbox-transition-50: 0ms;--checkbox-transition-75: 0ms;--checkbox-transition-150: 0ms}}.ad__checkbox label{font-size:var(--text-size-body, 1rem);color:#1f2325;color:hsla(var(--checkbox-label, 200, 8.8%, 13.3%),1);font-weight:400;line-height:1.375rem;padding-bottom:1px;position:relative;display:flex;cursor:pointer;letter-spacing:-.25px;-webkit-user-select:none;user-select:none;transition:all var(--checkbox-transition-25, .25s);outline:0}.ad__checkbox label.invalid{color:#d62429;color:hsla(var(--checkbox-error, 358.3, 71.2%, 49%),1)}.ad__checkbox label.invalid span{border-color:#d62429;border-color:hsla(var(--checkbox-error, 358.3, 71.2%, 49%),1)}.ad__checkbox label.invalid span:before,.ad__checkbox label.invalid span:after{background:hsla(358.3,71.2%,49%,1);background:hsla(var(--checkbox-error, 358.3, 71.2%, 49%),1)}.ad__checkbox label.readonly{pointer-events:none}.ad__checkbox label:before{content:"";z-index:0;position:absolute;width:40px;height:40px;left:-8px;top:-9px;border-radius:50%;background-color:#008a001f;background-color:hsla(var(--checkbox-hover-bg, 120, 100%, 27.1%, .12));opacity:0;transition:opacity var(--checkbox-transition-75, 75ms)}.ad__checkbox label span{margin-left:0rem;margin-right:.75rem;display:flex;position:relative;align-items:center;background-color:transparent;width:24px;height:24px;margin-top:-1px;flex-grow:0;flex-shrink:0;transform-origin:center;box-sizing:border-box;border:3px solid hsla(var(--checkbox-color, 120, 100%, 27.1%, 1));border-radius:4px;transition:background-color var(--checkbox-transition-150, .15s)}.ad__checkbox label span:before{background:hsla(120,100%,27.1%,1);background:hsla(var(--checkbox-color, 120, 100%, 27.1%),1);content:"";width:0px;height:3px;border-radius:3px;position:absolute;transform:rotate(45deg);transition:width var(--checkbox-transition-50, 50ms) ease var(--checkbox-transition-50, 50ms);transform-origin:0% 0%;top:7px;left:4px}.ad__checkbox label span:after{background:hsla(120,100%,27.1%,1);background:hsla(var(--checkbox-color, 120, 100%, 27.1%),1);content:"";width:0;height:3px;border-radius:3px;position:absolute;transform:rotate(315deg);transition:width var(--checkbox-transition-50, 50ms) ease;transform-origin:0% 0%;top:12px;left:6px}.ad__checkbox label:hover{font-weight:600}.ad__checkbox label:hover:before{opacity:1}.ad__checkbox label:active{--checkbox-label: var(--checkbox-label-active)}.ad__checkbox input[type=checkbox]{position:absolute;width:23px;height:24px;opacity:1;top:-1px;left:1px;background:transparent;border:none;-webkit-appearance:none;appearance:none;pointer-events:none;margin:0}.ad__checkbox input[type=checkbox]:disabled+label{opacity:.5;pointer-events:none}.ad__checkbox input[type=checkbox]:disabled+label span{opacity:.75}.ad__checkbox input[type=checkbox]:focus-visible{outline:3px solid;outline-offset:8px;border-radius:50%}.ad__checkbox input[type=checkbox]:checked+label span{background-color:#008a00;background-color:hsla(var(--checkbox-color, 120, 100%, 27.1%),1);animation:checkboxChecked var(--checkbox-transition-150, .15s) cubic-bezier(.78,-1.22,.17,1.89)}.ad__checkbox input[type=checkbox]:checked+label span:after{width:11px;background:#fff;transition:width var(--checkbox-transition-75, 75ms) ease var(--checkbox-transition-50, 50ms)}.ad__checkbox input[type=checkbox]:checked+label span:before{width:8px;background:#fff;transition:width var(--checkbox-transition-75, 75ms) ease var(--checkbox-transition-50, 50ms)}.ad__checkbox input[type=checkbox]:checked+label span.indeterminate:before{display:none}.ad__checkbox input[type=checkbox]:checked+label span.indeterminate:after{transition-duration:0ms;transition-delay:0ms;width:14px;height:3px;left:2px;top:auto;bottom:auto;border-radius:2px;transform:rotate(0)}.ad__checkbox input[type=checkbox]:checked+label:hover{--checkbox-color: var(--checkbox-color-hover)}.ad__checkbox input[type=checkbox]:checked+label:hover span{background-color:#008a00;background-color:hsla(var(--checkbox-color, 120, 100%, 27.1%),1)}.ad__checkbox input[type=checkbox]:checked+label:hover span:after{width:11px;background:#fff;transition:width var(--checkbox-transition-75, 75ms) ease var(--checkbox-transition-50, 50ms)}.ad__checkbox input[type=checkbox]:checked+label:hover span:before{width:8px;background:#fff;transition:width var(--checkbox-transition-75, 75ms) ease var(--checkbox-transition-50, 50ms)}.ad__checkbox input[type=checkbox]:checked+label:hover span.indeterminate:after{transition-duration:0ms;transition-delay:0ms;width:14px;height:3px;left:2px;top:auto;bottom:auto;border-radius:2px;transform:rotate(0)}.ad__checkbox input[type=checkbox]:required.asterisk+label:after{content:"*";color:#d62429;margin:-4px 0 0 2px}@keyframes checkboxChecked{0%{transform:scale(.915)}to{transform:scale(1)}}
</style>
