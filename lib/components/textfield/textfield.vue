<template>
  <input-info 
    :description="isReadonly || isDisabled ? '' : infoText" 
    :width="width" 
    :invalid="!_isValid" 
    :id="id + 'description'"
    :rightIndent="(maxCounterLength ?? 0) > 0"
    @showInfoText="_showInfoText = $event">

    <InputContainer
      class="ad__textfield"
      :class="{ 
          isWhiteBackground, 
          disabled: isDisabled, 
          invalid: !_isValid,
          readonly: isReadonly,
          indent: isLoading || icon }"
      :style="{ width }">

      <InputIcon
        v-if="icon && !isLoading"
        :icon="icon"
      />

      <input
        ref="textfield"
        :type="type"
        :value="internalValue"
        @input="handleInputChange"
        :id="id"
        :minlength="minLength"
        :maxlength="maxLength"
        :min="min"
        :max="max"
        :disabled="isDisabled"
        :tabindex="isDisabled ? '-1' : '0'"
        :autocomplete="autocomplete"
        :required="isRequired"
        :aria-required="isRequired"
        :aria-labelledby="ariaLabelledBy"
        :aria-label="ariaLabel"
        :title="title"
        :pattern="pattern"
        :readonly="isReadonly"
      
        :aria-invalid="!isValid"
        :aria-errormessage="isValid && errorMessage ? `${id}-error` : ''"
      />

      <InputLabel
          :for="id"
          :class="{ 
              active: internalValue?.length > 0, 
              required: isRequired, 
              asterisk: isRequired && isAsterisk,
              indent: isLoading || icon,
              disabled: isDisabled
          }">
          {{ label }}<slot></slot>
      </InputLabel>

      <InputIconBtn 
          class="remove__button"
          tabindex="0"
          aria-label="Remove value"
          title="Remove value"
          @click="removeValues"
          v-if="(internalValue?.length > 0) && !isReadonly && !isDisabled"
          :class="{hasInfoText: infoText}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"/>
          </svg>
      </InputIconBtn>

      <InputHelpText
          v-if="(description || (errorMessage && !_isValid)) && (!isDisabled && !isReadonly)"
          :class="{ invalid: !_isValid, rightIndent: (maxCounterLength ?? 0) > 0}"
          :id="!_isValid ? id +'-error' : ''"
        >
          {{ !_isValid ? errorMessage : !_showInfoText ? description : '' }}
      </InputHelpText>
          
      <InputHelpText
            v-if="isReadonly"
            class="readonly"
        >
            {{ translations[setLanguage].readOnly }}
      </InputHelpText>

      <InputHelpText
          v-if="maxCounterLength && internalValue?.length > 0"
          :class="{ invalid: internalValue?.length > maxCounterLength }"
          class="isCounter"
        >
        {{ internalValue?.length }} / {{ maxCounterLength }}
      </InputHelpText>

      <!-- <span
        v-if="maxCounterLength && internalValue?.length > 0"
        :class="{ invalid: internalValue?.length > maxCounterLength }"
        class="counter"
      >
        {{ internalValue?.length }} / {{ maxCounterLength }}
      </span> -->

      <InputLoading v-if="isLoading" />

    </InputContainer>
    
  </input-info>
</template>

<script lang="ts">
import SvgIcon from "../../shared/svg-icon.vue"
import InputInfo from "../../shared/input/input-info.vue"
import InputLoading from "../../shared/input/loading.vue"
import InputHelpText from "../../shared/input/help-text.vue"
import InputIconBtn from "../../shared/input/icon-btn.vue"
import InputLabel from "../../shared/input/label.vue"
import InputContainer from "../../shared/input/input-container.vue"
import InputIcon from "../../shared/input/icon.vue"

import { translations } from "../../shared/locale"



export default {
  name: "AdTextfield",
  components: {
    SvgIcon,
    InputInfo,
    InputLoading,
    InputIconBtn,
    InputHelpText,
    InputLabel,
    InputContainer,
    InputIcon
  },
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text"
    },
    icon: String,
    autocomplete: { type: String, default: "off" },
    isValid: { type: Boolean, default: true },
    isDisabled: Boolean,
    isRequired: Boolean,
    isAsterisk: { type: Boolean, default: true },
    isReadonly: Boolean,
    isWhiteBackground: Boolean,
    maxCounterLength: Number,
    minLength: Number,
    maxLength: Number,
    min: Number,
    max: Number,
    pattern: String,
    width: String,
    addClass: String,
    description: String,
    errorMessage: String,
    label: String,
    ariaLabel: String,
    ariaLabelledBy: String,
    title: String,
    infoText: String,
    isLoading: Boolean,
    id: {
      type: String,
      default: () => `textfield-${crypto.randomUUID()}`,
    },
    setLanguage: {
        type: String,
        default: "en", // Default format
        validator(value: String) {
            const allowedLanguages = [
                "en", "sv", "da", "no", "fi", "lt", "et", "lv"
            ];
            return allowedLanguages.includes(value.toString());
        },
    },
  },
  data() {
    return {
      internalValue: this.modelValue || "", // Local model for fallback
      _isValid: this.isValid,
      _showInfoText: false,
      translations,
    };
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue;
    },
    isValid(value) {
      this._isValid = value;
    }
  },
  methods: {
    handleInputChange(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.internalValue = target.value;
        this.$emit('update:modelValue', target.value);
      }
    },
    removeValues(event: { preventDefault: () => void; }) {
      event.preventDefault();
      this.internalValue = "";
      this.$emit("update:modelValue", "");
      (this.$refs.textfield as HTMLElement).dispatchEvent(new Event("change", { bubbles: true }));
    },
  },
};
</script>

  <style lang="scss" scoped>
  
  </style>