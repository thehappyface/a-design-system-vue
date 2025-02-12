<template>
    <div :class="['ad__textarea', addClass]" :style="{ width }">
      <textarea
        ref="textarea"
        :value="internalValue"
        @input="handleInputChange"
        :id="id"
        :minlength="minLength"
        :maxlength="maxLength"
        :readonly="isReadonly"
        :tabindex="isDisabled ? '-1' : '0'"
        :disabled="isDisabled"
        :required="isRequired"
        :aria-required="isRequired"
        :aria-labelledby="ariaLabelledBy"
        :aria-label="ariaLabel"
        :title="title"
        :style="{ width, height: `${textareaHeight}px` }"
        :class="{ invalid: !isValid, isWhiteBackground }"
        :aria-invalid="!isValid"
        :aria-errormessage="errorMessage && !isValid ? `${id}-error` : ''"
      ></textarea>
  
      <label
        tabindex="-1"
        :for="id"
        :class="{ active: internalValue?.length > 0, required: isRequired, asterisk: isAsterisk }"
      >
        {{ label }}<slot></slot>
      </label>
  
      <span
        v-if="internalValue?.length > 0 && !isReadonly && !isDisabled"
        role="button"
        class="remove"
        tabindex="0"
        aria-label="Remove values"
        @click="removeValues"
        @keydown.space.prevent="removeValues"
        @keydown.enter.prevent="removeValues"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"
          />
        </svg>
      </span>
  
      <span
        v-if="(description || (errorMessage && !isValid)) && !isDisabled"
        :class="{ invalid: !isValid }"
        :id="errorMessage && !isValid ? `${id}-error` : ''"
        class="helper"
      >
        {{ !isValid && errorMessage ? errorMessage : description }}
      </span>
  
      <span
        v-if="maxCounterLength && internalValue?.length > 0"
        :class="{ invalid: internalValue?.length > maxCounterLength }"
        class="counter"
      >
        {{ internalValue?.length }} / {{ maxCounterLength }}
      </span>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'AdTextarea',
    props: {
      modelValue: String,
      isValid: { type: Boolean, default: true },
      isDisabled: Boolean,
      isRequired: Boolean,
      isReadonly: Boolean,
      isAsterisk: { type: Boolean, default: true },
      resize: { type: Boolean, default: true },
      isWhiteBackground: Boolean,
      maxCounterLength: Number,
      minLength: Number,
      maxLength: Number,
      width: String,
      addClass: String,
      errorMessage: String,
      description: String,
      label: String,
      ariaLabel: String,
      ariaLabelledBy: String,
      title: String,
      id: {
        type: String,
        default: () => `textarea-${crypto.randomUUID()}`,
      },
    },
    data() {
      return {
        internalValue: this.modelValue || '', // Local model for fallback
        textareaHeight: 0,
      };
    },
    watch: {
      modelValue(newValue) {
        this.internalValue = newValue;
        this.autoReSize();
      },
    },
    methods: {
      handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target) {
            this.internalValue = target.value;
            this.$emit('update:modelValue', target.value);
        }
        this.autoReSize();
    },
      
      autoReSize() {
        const el = (this.$refs.textarea as HTMLElement);
        el.style.height = '0px';
        setTimeout(() => {
            el.style.height = `${el.scrollHeight + 2}px`;
        },0)
      },
      removeValues(event: { preventDefault: () => void; }) {
        event.preventDefault();
        this.internalValue = "";
        this.$emit("update:modelValue", "");
        (this.$refs.textarea as HTMLElement).dispatchEvent(new Event("change", { bubbles: true }));
      },
    },
    mounted() {
      this.autoReSize();
    },
  };
  </script>
  
  <style scoped>
.ad__textarea{--textarea-bg: 0, 0%, 97%;--textarea-bg-hover: 180, 2.9%, 93.1%;--textarea-border: 200, 4.4%, 73.3%;--textarea-text: 200, 8.8%, 13.3%;--textarea-label-default: 200, 8.8%, 26.7%;--textarea-label-active: 190.6, 87.9%, 22.7%;--textarea-error: 358.3, 71.2%, 49%;--textarea-transition-125: 125ms;--textarea-transition-150: .1s;position:relative;width:auto;display:flex;align-items:center;margin:.5rem 0rem;font-size:var(--text-size-body, 16px)}@media (prefers-reduced-motion){.ad__textarea{--textarea-transition-125: 0ms;--textarea-transition-150: 0ms}}.ad__textarea>*{box-sizing:border-box}.ad__textarea textarea{background-color:#f7f7f7;background-color:hsla(var(--textarea-bg, 0, 0%, 97%),1);border-color:#b8bcbe;border-color:hsla(var(--textarea-border, 200, 4.4%, 73.3%),1);color:#1f2325;color:hsla(var(--textarea-text, 200, 8.8%, 13.3%),1);padding:1.625rem 1rem 1rem;scrollbar-width:thin;scrollbar-color:lightgrey transparent;line-height:1.25rem;font-size:inherit;border-width:1px;border-style:solid;border-radius:4px;min-width:312px;min-height:100px;width:100%;height:auto;transition:background-color var(--textarea-transition-150, .15s) ease-out,border-color var(--textarea-transition-150, .15s) ease-out;font-weight:500;font-family:inherit;outline:none}.ad__textarea textarea::-webkit-scrollbar{width:6px}.ad__textarea textarea::-webkit-scrollbar-track{background:transparent}.ad__textarea textarea::-webkit-scrollbar-thumb{background-color:#d3d3d3;border-radius:20px;border:0px solid lightgrey}.ad__textarea textarea::-webkit-scrollbar-thumb:hover{background-color:#bababa}.ad__textarea textarea:hover:not([readonly]){background-color:#edeeee;background-color:hsla(var(--textarea-bg-hover, 180, 2.9%, 93.1%),1)}.ad__textarea textarea:focus:not([readonly]){border-color:#075b6d;border-color:hsla(var(--textarea-label-active, 190.6, 87.9%, 22.7%),1)}.ad__textarea textarea:focus:not([readonly])+label{color:#075b6d;color:hsla(var(--textarea-label-active, 190.6, 87.9%, 22.7%),1);transform:scale(.75) translateY(-6px);font-weight:500}.ad__textarea textarea:focus:not([readonly])~.helper{display:flex}.ad__textarea textarea:focus:not([readonly])~.counter{opacity:1}.ad__textarea textarea:disabled{opacity:.5;pointer-events:none}.ad__textarea textarea:disabled+label{opacity:.5}.ad__textarea textarea.invalid{border-color:#d62429;border-color:hsla(var(--textarea-error, 358.3, 71.2%, 49%),1)}.ad__textarea textarea.invalid+label{color:#d62429;color:hsla(var(--textarea-error, 358.3, 71.2%, 49%),1);font-weight:500}.ad__textarea textarea.isWhiteBackground{--textfield-bg: 0, 0%, 100%;background-color:#fff;background-color:hsla(var(--textfield-bg, 0, 0%, 100%),1)}.ad__textarea textarea.isWhiteBackground:hover{background-color:#edeeee;background-color:hsla(var(--textarea-bg-hover, 180, 2.9%, 93.1%),1)}.ad__textarea label{color:#3e464a;color:hsla(var(--textarea-label-default, 200, 8.8%, 26.7%),1);margin:1rem 0rem 0rem 1rem;font-size:inherit;pointer-events:none;position:absolute;line-height:18px;font-weight:400;top:0;left:0;transform-origin:left top;transition:transform var(--textarea-transition-150, .15s) ease-out,color var(--textarea-transition-150, .15s) ease-out;letter-spacing:-.25px}.ad__textarea label.active{color:#075b6d;color:hsla(var(--textarea-label-active, 190.6, 87.9%, 22.7%),1);transform:scale(.75) translateY(-6px);font-weight:500}.ad__textarea label.required.asterisk:after{content:"*";color:#d62429;margin:-8px 0 0 2px}.ad__textarea .remove{color:#3e464a;cursor:pointer;position:absolute;width:24px;height:24px;padding:4px;right:.75rem;top:calc(50% - 12px);border-radius:50%;top:.5rem}.ad__textarea .remove:hover{background-color:#dbdddf}.ad__textarea .remove[role=button]{animation:counterFadeIn .2s}.ad__textarea .remove:active{background-color:#b8bcbe}.ad__textarea .remove:focus-visible{outline:3px solid}.ad__textarea .helper{font-size:var(--text-size-small, 12px);margin:0rem 0rem 0rem 1rem;bottom:-1rem;position:absolute;display:none;font-weight:500;left:0}.ad__textarea .helper.invalid{color:#d62429;color:hsla(var(--textarea-error, 358.3, 71.2%, 49%),1);display:flex}.ad__textarea .counter{font-size:var(--text-size-small, 12px);margin:0rem 1rem 0rem 0rem;bottom:-1rem;position:absolute;opacity:0;font-weight:500;right:0;transition:opacity var(--textarea-transition-125, 125ms)}.ad__textarea .counter.invalid{color:#d62429;color:hsla(var(--textarea-error, 358.3, 71.2%, 49%),1)}  </style>