<template>
    <div
      class="ad__select"
      :style="{ width: width, ...addCss }"
      :class="addClass"
      @keydown.escape="closeOnKey"
    >
      <svg-icon
        v-if="icon"
        class="ad__select--icon"
        :url="`https://design.atea.com/assets/icons/${icon}.svg`"
      />
      
      <button
        v-if="(!isNative || isMultiple) && !isDisabled"
        :aria-label="label"
        :aria-required="isRequired"
        :aria-expanded="isDropdown ? 'true' : 'false'"
        :id="`${id}multi`"
        type="button"
        class="select--button"
        @click="toggleDropdown"
        @keydown.alt.arrowdown="toggleDropdown"
        @keydown.alt.arrowup="toggleDropdown"
        @blur="markAsTouched(); checkValidation()"
        :disabled="isDisabled"
        :tabindex="!isMultiple ? '-1' : '0'"
        ref="multiSelect"
      >
      </button>
  
      <select
  :value="modelValue"
  @change="selectChange($event)"
  :style="{ width: width }"
  :class="{ keyboard: isKeyboard, active: isActive, isWhiteBackground: isWhiteBackground && !isDropdown }"
  :aria-labelledby="ariaLabelledby"
  :aria-label="ariaLabel"
  :title="title"
  :id="id"
  :required="isRequired"
  :aria-required="isRequired"
  :aria-invalid="!isValid"
  :disabled="isDisabled"
  @blur="onTouched(); checkValidation()"
  :tabindex="isDisabled || isMultiple ? '-1' : '0'"
  ref="select"
>
        <option v-if="!isMultiple" value="" hidden disabled aria-hidden="true" selected></option>
        <option
          v-for="(item, index) in options"
          :key="index"
          :value="item.key"
          :selected="modelValue === item.key"
        >
          {{ item.text }}
        </option>
      </select>
  
      <svg
        :class="{ hasValue: hasValue }"
        class="ad__select--arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" />
      </svg>
  
      <label
        tabindex="-1"
        :for="!isMultiple ? id : `${id}multi`"
        :style="{ fontWeight: labelFontWeight }"
        :class="{ active: !isMultiple && modelValue, required: isRequired, asterisk: isAsterisk }"
      >
        {{ label }} <slot></slot> {{ selectedCount }}
      </label>
  
      <span
        v-if="canRemoveValues"
        role="button"
        tabindex="0"
        aria-label="Remove values"
        class="remove"
        @click="removeValues"
        @keydown.space.prevent="removeValues"
        @keydown.enter.prevent="removeValues"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"/>
        </svg>
      </span>
  
      <div
        v-if="isDropdown && !isNative"
        class="ad__select--dropdown boxshadow"
        aria-label="select_dropdown"
      >
        <div
          v-if="hasFilter"
          class="filter"
        >
          <svg class="filter__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 18.561L14.9497 13.5107C15.9356 12.1623 16.3764 10.4915 16.1838 8.83229C15.9913 7.17304 15.1796 5.64758 13.9111 4.56082C12.6426 3.47406 11.0106 2.90607 9.3415 2.97037C7.67235 3.03468 6.08896 3.72656 4.90782 4.9077C3.72668 6.08884 3.03481 7.67223 2.9705 9.34138C2.90619 11.0105 3.47418 12.6425 4.56094 13.911C5.6477 15.1795 7.17316 15.9911 8.83241 16.1837C10.4917 16.3762 12.1625 15.9355 13.5108 14.9496L18.5612 19.9999L20 18.561ZM5.03517 9.61393C5.03517 8.7083 5.30372 7.82302 5.80685 7.07002C6.30999 6.31703 7.02512 5.73014 7.8618 5.38358C8.69849 5.03701 9.61915 4.94634 10.5074 5.12302C11.3956 5.2997 12.2115 5.7358 12.8518 6.37618C13.4922 7.01655 13.9283 7.83244 14.105 8.72066C14.2816 9.60888 14.191 10.5295 13.8444 11.3662C13.4978 12.2029 12.9109 12.918 12.1579 13.4212C11.4049 13.9243 10.5196 14.1928 9.61401 14.1928C8.40003 14.1914 7.23617 13.7086 6.37777 12.8502C5.51936 11.9918 5.03652 10.8279 5.03517 9.61393Z"/>
          </svg>
          <input
            type="search"
            :value="filterInput"
            @input="filterOnInput($event.target.value)"
            :aria-label="`Search in ${label}`"
          />
        </div>
  
        <ul
          v-if="!isLoadingOptions"
          @keydown.alt.arrowdown="hideDropdown(); setFocus()"
          @keydown.alt.arrowup="hideDropdown(); setFocus()"
          @keydown.escape="hideDropdown(); setFocus()"
        >
          <li
            v-for="(item, index) in filteredOptions"
            :key="index"
          >
            <span
              class="item"
              :tabindex="isMultiple ? '-1' : '0'"
              @click="inputChange(item.key); eventChange()"
              @keydown.space.prevent="inputChange(item.key); eventChange()"
              :class="{ single: !isMultiple }"
            >
              <ad-checkbox
                v-if="isMultiple"
                :width="'250px'"
                :label="item.text"
                class="item__checkbox"
                @click="inputChange(item.key)"
                :isChecked="isValueSelected(item)"
              />
              <template v-else>{{ item.text }}</template>
            </span>
          </li>
        </ul>
      </div>
  
      <ul
        v-if="isMultiple && options?.length > 0 && modelValue?.length > 0"
        class="multiple__list"
        :style="{ borderRadius: isDropdown ? '0' : null, borderWidth: !isSelectedPreview ? '0' : null }"
        :aria-describedby="id"
        :class="{ isWhiteBackground: isWhiteBackground }"
      >
        <li
          v-for="(key, index) in modelValue"
          :key="index"
          class="multiple__item"
        >
          <span class="multiple__item--label">
           {{ selectedItemByKey(key)?.text }}
          </span>
          <button
            v-if="canRemoveValues"
            type="button"
            @click="removeValue(key); eventChange()"
            aria-label="Remove value"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"/>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>

import AdCheckbox from '../checkbox/checkbox.vue'
import SvgIcon from "../../shared/svg-icon.vue"


  export default {
    components: {
        SvgIcon,
        AdCheckbox
    },
    props: {
      modelValue: {
        type: [String, Array],
      },
      options: {
        type: Array,
        default: () => [],
      },
      isMultiple: {
        type: Boolean,
        default: false,
      },
      isNative: {
        type: Boolean,
        default: false,
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: "",
      },
      width: {
        type: String,
        default: "100%",
      },
      icon: {
        type: String,
        default: "",
      },
      isDropdown: {
        type: Boolean,
        default: false,
      },
      isRequired: {
        type: Boolean,
        default: false,
      },
      isValid: {
        type: Boolean,
        default: true,
      },
      addCss: {
        type: Object,
        default: () => ({}),
      },
      addClass: {
        type: String,
        default: "",
      },
      ariaLabel: {
        type: String,
        default: "",
      },
      ariaLabelledby: {
        type: String,
        default: "",
      },
      labelFontWeight: {
        type: String,
        default: "",
      },
      isWhiteBackground: {
        type: Boolean,
        default: false,
      },
      canRemoveValues: {
        type: Boolean,
        default: false,
      },
      isLoadingOptions: {
        type: Boolean,
        default: false,
      },
      hasFilter: {
        type: Boolean,
        default: false,
      },
      filterInput: {
        type: String,
        default: "",
      },
      selectedCount: {
        type: Number,
        default: 0,
      },
      isAsterisk: {
        type: Boolean,
        default: false,
      },
      isKeyboard: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
        default: () => `select-${crypto.randomUUID()}`,
        },
    },
    computed: {
      filteredOptions() {
        if (this.hasFilter && this.filterInput) {
          return this.options.filter((option) =>
            option.text.toLowerCase().includes(this.filterInput.toLowerCase())
          );
        }
        return this.options;
      },
      hasValue() {
        return !!this.modelValue && this.modelValue.length > 0;
      },
    },
    methods: {
      toggleDropdown() {
        this.$emit("toggleDropdown");
      },
      inputChange(value) {
        let updatedValue;
  
        if (this.isMultiple) {
          const index = this.modelValue.indexOf(value);
          if (index === -1) {
            updatedValue = [...this.modelValue, value];
          } else {
            updatedValue = this.modelValue.filter((v) => v !== value);
          }
        } else {
          updatedValue = value;
        }
  
        this.$emit("update:modelValue", updatedValue);
      },
      selectChange(event) {
    const value = this.isMultiple
      ? Array.from(event.target.selectedOptions, (option) => option.value)
      : event.target.value;

    this.$emit('update:modelValue', value);
    this.$emit('change', value);
  },
      markAsTouched() {
        this.$emit("touched");
      },
      checkValidation() {
        this.$emit("validate");
      },
      removeValues() {
        this.$emit("update:modelValue", []);
      },
      onTouched() {
        this.$emit("touched");
      },
      onFocus() {
        this.isActive = true;
    },
    onBlur() {
        this.isActive = false;
        this.onTouched();
        this.checkValidation();
    },
      setFocus() {
        this.$refs.select.focus();
      },
      hideDropdown() {
        this.$emit("hideDropdown");
      },
      filterOnInput(value) {
        this.filterInput = value;
      },
      isValueSelected(item) {
        return this.modelValue.includes(item.key);
      },
      selectedItemByKey(key) {
        return this.options.find((option) => option.key === key);
      },
    },
  };
  </script>
  
  <style scoped>
.ad__select{--select-bg: 0, 0%, 97%;--select-bg-hover: 180, 2.9%, 93.1%;--select-border: 200, 4.4%, 73.3%;--select-text: 200, 8.8%, 13.3%;--select-label-default: 200, 8.8%, 26.7%;--select-label-active: 190.6, 87.9%, 22.7%;--select-error: 358.3, 71.2%, 49%;--select-animation: .2s;position:relative;width:auto;display:flex;flex-direction:column;align-items:center;font-size:var(--text-size-body, 16px)}@media (prefers-reduced-motion){.ad__select{--select-animation: 0ms}}.ad__select>*{box-sizing:border-box}.ad__select input{box-sizing:border-box;font-family:Inter,sans-serif}.ad__select button{all:revert}.ad__select--icon{color:#3e464a;color:hsla(var(--textfield-label-default, 200, 8.8%, 26.7%),1);pointer-events:none;position:absolute;width:24px;height:24px;left:1rem;top:16px}.ad__select--icon~select{text-indent:2rem}@supports (-moz-appearance: none){.ad__select--icon~select{text-indent:1rem}}.ad__select--icon~label{margin-left:3rem!important}.ad__select select{background-color:#f7f7f7;background-color:hsla(var(--select-bg, 0, 0%, 97%),1);border-color:#b8bcbe;border-color:hsla(var(--select-border, 200, 4.4%, 73.3%),1);color:#1f2325;color:hsla(var(--select-text, 200, 8.8%, 13.3%),1);padding:1rem 2.5rem 0rem 1rem;font-size:inherit;border-width:1px;border-style:solid;border-radius:4px;min-width:0px;width:100%;height:56px;transition:background-color var(--select-animation, .2s),border-color var(--select-animation, .2s);font-weight:500;-webkit-appearance:none;appearance:none;text-overflow:ellipsis}@supports (-moz-appearance: none){.ad__select select{padding:1rem 1rem 0rem .6625rem}}.ad__select select:hover{background-color:#edeeee;background-color:hsla(var(--select-bg-hover, 180, 2.9%, 93.1%),1);cursor:pointer}.ad__select select:focus{border-color:#075b6d;border-color:hsla(var(--select-label-active, 190.6, 87.9%, 22.7%),1)}.ad__select select:focus-visible{outline:3px solid}.ad__select select:disabled{opacity:.5;pointer-events:none}.ad__select select:disabled~label,.ad__select select:disabled~.ad__select--arrow{opacity:.5}.ad__select select::placeholder{display:none}.ad__select select.invalid{border-color:#d62429;border-color:hsla(var(--select-error, 358.3, 71.2%, 49%),1)}.ad__select select.invalid~label{color:#d62429;color:hsla(var(--select-error, 358.3, 71.2%, 49%),1);font-weight:500}.ad__select select.active{border-radius:4px 4px 0 0}.ad__select select.isWhiteBackground{--textfield-bg: 0, 0%, 100%;background-color:#fff;background-color:hsla(var(--textfield-bg, 0, 0%, 100%),1)}.ad__select select.isWhiteBackground:hover{background-color:#edeeee;background-color:hsla(var(--select-bg-hover, 180, 2.9%, 93.1%),1);cursor:pointer}.ad__select--arrow{color:#1f2325;color:hsla(var(--select-text, 200, 8.8%, 13.3%),1);pointer-events:none;position:absolute;width:24px;height:24px;right:.875rem;top:16px}.ad__select .remove{color:#3e464a;cursor:pointer;position:absolute;width:24px;height:24px;padding:4px;right:.75rem;top:calc(50% - 12px);border-radius:50%;top:16px;right:54px}.ad__select .remove:hover{background-color:#dbdddf}.ad__select .remove[role=button]{animation:counterFadeIn .2s}.ad__select .remove:active{background-color:#b8bcbe}.ad__select .remove:focus-visible{outline:3px solid}.ad__select .remove:after{content:"";position:absolute;right:-8px;top:4px;width:1px;height:15px;background-color:#949a9e}.ad__select label{margin-left:1rem;margin-right:0rem;color:#3e464a;color:hsla(var(--select-label-default, 200, 8.8%, 26.7%),1);font-size:inherit;pointer-events:none;position:absolute;left:0;top:1.125rem;transform-origin:left top;transition:all var(--select-animation, .2s);letter-spacing:-.25px}.ad__select label.active{color:#075b6d;color:hsla(var(--select-label-active, 190.6, 87.9%, 22.7%),1);transform:scale(.75) translateY(-12px);font-weight:500}.ad__select label.required.asterisk:after{content:"*";color:#d62429;margin:-8px 0 0 2px}.ad__select .select--button{position:absolute;width:100%;height:56px;top:0;left:0;background-color:transparent;border:none;border-radius:4px}.ad__select .select--button:hover{cursor:pointer}.ad__select .select--button:hover~select{background-color:#edeeee;background-color:hsla(var(--select-bg-hover, 180, 2.9%, 93.1%),1)}.ad__select .select--button:active~select{border-color:#075b6d;border-color:hsla(var(--select-label-active, 190.6, 87.9%, 22.7%),1)}.ad__select .select--button:focus-visible{outline:3px solid}.ad__select .select--button:disabled{pointer-events:none}.ad__select--dropdown{border:1px solid transparent;border-top-width:0px;background-color:#f7f7f7;background-color:hsla(var(--select-bg, 0, 0%, 97%),1);border-color:#b8bcbe;border-color:hsla(var(--select-border, 200, 4.4%, 73.3%),1);position:absolute;display:flex;flex-direction:column;overflow:hidden;width:100%;left:0;top:100%;z-index:1;border-radius:0 0 4px 4px;transform-origin:top;animation:selectDropdown var(--select-animation, animation)}.ad__select--dropdown .inner{position:relative;display:flex;flex-direction:column;max-height:280px;overflow:hidden;width:100%}.ad__select--dropdown .inner.border{border-top:1px solid transparent;border-color:#b8bcbe;border-color:hsla(var(--select-border, 200, 4.4%, 73.3%),1)}.ad__select--dropdown .option__loader{padding:16px 24px 24px;display:flex;flex-direction:column;width:100%;gap:16px}.ad__select--dropdown .option__loader--item{background-color:#dbdddf;width:calc(100% - 24px);margin-left:12px;height:28px;border-radius:4px}.ad__select--dropdown .option__loader--item:after{position:absolute;inset:0;transform:translate(-100%);background-image:linear-gradient(90deg,hsla(var(--select-bg),0) 0,hsla(var(--select-bg),.1) 20%,hsla(var(--select-bg),.2) 60%,hsla(var(--select-bg),0));animation:shimmer 1.5s infinite;content:""}@keyframes shimmer{to{transform:translate(100%)}}.ad__select--dropdown ul{overflow:auto;height:100%;padding:16px 18px 16px 24px;margin:0;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:#B8BCBE transparent}.ad__select--dropdown ul::-webkit-scrollbar{width:6px}.ad__select--dropdown ul::-webkit-scrollbar-track{background:transparent}.ad__select--dropdown ul::-webkit-scrollbar-thumb{background-color:#b8bcbe;border-radius:20px;border:0px solid #B8BCBE}.ad__select--dropdown ul::-webkit-scrollbar-thumb:hover{background-color:#9da3a6}.ad__select--dropdown ul li{display:flex;margin:0}.ad__select--dropdown .item{color:#1f2325;color:hsla(var(--select-text, 200, 8.8%, 13.3%),1);font-size:var(--text-size-body, 16px);font-family:Inter,sans-serif;width:100%;border:1px solid transparent;border-radius:4px;background-color:transparent;letter-spacing:-.5px;text-align:left;font-weight:400;line-height:150%;padding:12px;gap:0 8px;display:flex;align-items:center}.ad__select--dropdown .item.single:hover{font-weight:500;background-color:#edeeee;border-color:#b8bcbe;cursor:pointer}.ad__select--dropdown .item__checkbox:active{pointer-events:none}.ad__select--dropdown .filter{background-color:#f7f7f7;background-color:hsla(var(--select-bg, 0, 0%, 97%),1);color:#3e464a;color:hsla(var(--select-label-default, 200, 8.8%, 26.7%),1);width:100%;position:absolute;top:0;left:24px;width:calc(100% - 48px);z-index:1}.ad__select--dropdown .filter__icon{position:absolute;left:12px;pointer-events:none;top:calc(50% - 3px);width:22px;height:22px}.ad__select--dropdown .filter input{border:1px solid transparent;color:#1f2325;color:hsla(var(--select-text, 200, 8.8%, 13.3%),1);border-color:#949a9e;font-size:var(--text-size-body, 16px);width:100%;margin:1rem 0 0;border-radius:4px;padding:.875rem 1rem .875rem 2.5rem;font-weight:500;outline:none}.ad__select--dropdown .filter~ul,.ad__select--dropdown .filter~.option__loader{padding-top:5rem;margin:0}.ad__select .multiple__list{border:1px solid transparent;border-top-width:0;background-color:#f7f7f7;background-color:hsla(var(--select-bg, 0, 0%, 97%),1);border-color:#b8bcbe;border-color:hsla(var(--select-border, 200, 4.4%, 73.3%),1);border-radius:0 0 4px 4px;list-style-type:none;width:100%;display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:.875rem 1rem}.ad__select .multiple__list.isWhiteBackground{--textfield-bg: 0, 0%, 100%;background-color:#fff;background-color:hsla(var(--textfield-bg, 0, 0%, 100%),1)}.ad__select .multiple__list li{margin:0;padding:0}.ad__select .multiple__list--button{--select-pill-background: 200, 8.8%, 13.3%;--select-pill-background-hover: 202.5, 9.4%, 33.3%;--select-pill-text: 0, 0%, 100%;color:hsl(var(--select-pill-text));background-color:hsl(var(--select-pill-background));border:none;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:var(--text-size-details, 14px);padding:.375rem 1.5rem .4375rem .5625rem;font-family:Inter,sans-serif;font-weight:500;line-height:100%;width:100%;border-radius:4px;display:block;align-items:center;transition:background-color var(--select-animation, .2s);animation:selectFadeIn var(--select-animation, .2s)}.ad__select .multiple__list--button:hover{cursor:pointer;background-color:hsl(var(--select-pill-background-hover))}.ad__select .multiple__list--button:active{background-color:hsl(var(--select-pill-background-hover))}.ad__select .multiple__list--button:focus-visible{outline:3px solid black;outline-offset:3px}.ad__select .multiple__list--button svg{position:absolute;top:6px;right:6px;pointer-events:none;color:inherit;width:16px;height:16px}.boxshadow{transition:box-shadow var(--select-animation, .2s);box-shadow:0 6px 12px #00000008,0 4px 8px #00000008,0 2px 4px #00000008}@keyframes selectDropdown{0%{max-height:0}to{max-height:500px}}@keyframes selectFadeIn{0%{opacity:0}to{opacity:1}}
</style>
  