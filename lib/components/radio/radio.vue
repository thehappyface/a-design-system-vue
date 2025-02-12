<template>
    <div
      class="ad__radio"
      :style="{ width }"
      :class="addClass"
    >
      <input
        role="radio"
        type="radio"
        :name="name"
        :aria-labelledby="ariaLabelledBy"
        :aria-label="ariaLabel"
        :title="title"
        :id="id"
        :required="isRequired"
        :aria-required="isRequired"
        :class="{ asterisk: isAsterisk && isRequired, invalid: !isValid && !modelValue }"
        :disabled="isDisabled"
        :tabindex="isDisabled || isReadonly ? '-1' : '0'"
        :value="value"
        @change="inputChange"
        :checked="value == modelValue"
        :aria-checked="value == modelValue"
        :aria-invalid="!isValid && !modelValue"
      >
      <label
        tabindex="-1"
        :for="id"
        :class="{ invalid: !isValid && !modelValue, readonly: isReadonly }"
      >
        <span tabindex="-1"></span>
        {{ label }} <slot></slot>
      </label>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'AdRadio',
    props: {
      modelValue: { type: [String, Number, Object, Array] },
      value: { type: [String, Number, Object, Array] },
      isDisabled: { type: Boolean, default: false },
      isRequired: { type: Boolean, default: false },
      isReadonly: { type: Boolean, default: false },
      isAsterisk: { type: Boolean, default: false },
      isValid: { type: Boolean, default: true },
      width: { type: String, default: '' },
      addClass: { type: String, default: '' },
      ariaLabel: { type: String, default: '' },
      ariaLabelledBy: { type: String, default: '' },
      title: { type: String, default: '' },
      name: { type: String, default: '' },
      label: { type: String, default: '' },
      id: { type: String, default: () => `radio-${crypto.randomUUID()}` },
    },
    emits: ['update:modelValue'],
    methods: {
      inputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target) {
          this.$emit('update:modelValue', target.value);
          }
        },
      },
    };
</script>
  


<style scoped>
.ad__radio{--radio-color: 120, 100%, 27.1%;--radio-label: 200, 8.8%, 13.3%;--radio-label-hover: 202.5, 9.4%, 33.3%;--radio-error: 358.3, 71.2%, 49%;--radio-hover-bg: 120, 100%, 27.1%, .12;--radio-transition-25: 25ms;--radio-transition-50: 50ms;--radio-transition-75: 75ms;--radio-transition-100: .1s;--radio-transition-130: .13s;position:relative;display:flex;width:auto}.ad__radio.darkmode{--radio-label: 0, 0%, 100%;--radio-label-hover: 0, 0%, 100%}@media (prefers-reduced-motion){.ad__radio{--radio-transition-25: 0ms;--radio-transition-50: 0ms;--radio-transition-75: 0ms;--radio-transition-100: 0ms;--radio-transition-130: 0ms}}.ad__radio label{font-size:var(--text-size-body, 1rem);color:#1f2325;color:hsla(var(--radio-label, 200, 8.8%, 13.3%),1);font-weight:400;line-height:1.375rem;padding-bottom:1px;display:flex;cursor:pointer;letter-spacing:-.3px;-webkit-user-select:none;user-select:none;outline:0;transition:opacity var(--radio-transition-25, 25ms)}.ad__radio label.invalid{color:#d62429;color:hsla(var(--radio-error, 358.3, 71.2%, 49%),1)}.ad__radio label.invalid span{border-color:#d62429;border-color:hsla(var(--radio-error, 358.3, 71.2%, 49%),1)}.ad__radio label.invalid span:before,.ad__radio label.invalid span:after{background:hsla(358.3,71.2%,49%,1);background:hsla(var(--radio-error, 358.3, 71.2%, 49%),1)}.ad__radio label.readonly{pointer-events:none}.ad__radio label:before{content:"";z-index:0;position:absolute;width:40px;height:40px;left:-8px;top:-9px;border-radius:50%;background-color:#008a001f;background-color:hsla(var(--radio-hover-bg, 120, 100%, 27.1%, .12));opacity:0;transition:opacity var(--radio-transition-75, 75ms)}.ad__radio label span{margin-left:0rem;margin-right:.75rem;border:3px solid hsla(var(--radio-color, 120, 100%, 27.1%, 1));display:flex;align-items:center;justify-content:center;position:relative;background-color:transparent;width:24px;height:24px;margin-top:-1px;flex-grow:0;flex-shrink:0;transform-origin:center;border-radius:50%;box-sizing:border-box;transition:background-color var(--radio-transition-50, 50ms) var(--radio-transition-100, .1s)}.ad__radio label span:after{background:hsla(120,100%,27.1%,1);background:hsla(var(--radio-color, 120, 100%, 27.1%),1);content:"";width:10px;height:10px;border-radius:50%;transition:transform var(--radio-transition-50, 50ms) ease var(--radio-transition-50, 50ms);transform-origin:center;transform:scale(0)}.ad__radio label:hover{font-weight:600;cursor:pointer}.ad__radio label:hover:before{opacity:1}.ad__radio input[type=radio]{position:absolute;width:23px;height:24px;opacity:1;top:-1px;left:1px;background:transparent;border:none;-webkit-appearance:none;appearance:none;pointer-events:none;margin:0}.ad__radio input[type=radio]:disabled+label{opacity:.5;pointer-events:none}.ad__radio input[type=radio]:disabled+label span{opacity:.75}.ad__radio input[type=radio]:focus-visible{outline:3px solid;outline-offset:8px;border-radius:50%}.ad__radio input[type=radio]:checked+label span{background-color:#008a00;background-color:hsla(var(--radio-color, 120, 100%, 27.1%),1);animation:radioButtonSelect .15s cubic-bezier(.78,-1.22,.17,1.89)}.ad__radio input[type=radio]:checked+label span:after{transition:background transform var(--radio-transition-75, 75ms) ease var(--radio-transition-130, .13s);background:#fff;transform:scale(.85)}.ad__radio input[type=radio]:checked+label:hover{font-weight:400;cursor:default}.ad__radio input[type=radio]:checked+label:hover:before{opacity:0}.ad__radio input[type=radio]:checked+label:hover span{background-color:#008a00;background-color:hsla(var(--radio-color, 120, 100%, 27.1%),1);transform:scale(1)}.ad__radio input[type=radio]:checked+label:hover span:after{transition:background var(--radio-transition-50, 50ms) ease var(--radio-transition-50, 50ms);background:#fff}.ad__radio input[type=radio]:required.asterisk+label:after{content:"*";color:#d62429;margin:-4px 0 0 2px}@keyframes radioButtonSelect{0%{transform:scale(1)}75%{transform:scale(1.1)}to{transform:scale(1)}}
</style>