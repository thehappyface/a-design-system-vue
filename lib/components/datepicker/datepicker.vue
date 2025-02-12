<template>
    <div 
        :class="['ad__datepicker', addClass]" 
        :style="{ width }" 
        :id="id + 'container'"
      >
      
      <div 
        class="ad__datepicker--value"
        :class="{ isWhiteBackground, isDisabled }"
      >
      
        <SvgIcon
        v-if="icon"
        class="ad__textfield--icon"
        :url="`https://design.atea.com/assets/icons/${icon}.svg`"
        />

        <div class="ad__datepicker--inputs">
          <template v-for="(part, index) in formatParts" :key="index">
            <input
              :maxlength="part.length"
              type="text"
              v-model="dateParts[index]"
              @input="handlePartInput(index)"
              :placeholder="part.toUpperCase()"
              ref="dateInput"
              class="ad__datepicker--input"
            />
            <span v-if="index < formatParts.length - 1" :key="`separator-${index}`" class="separator">{{ separator }}</span>
          </template>
        </div>
        
        <button type="button" @click="openDatePicker">📅</button>

        <input
          id="hiddenDateInput"
          type="date"
          v-model="hiddenDateValue"
          ref="hiddenDate"
          @change="syncPartsWithDate"
          tabindex="-1"
          hidden
        />
        <!-- <p v-if="errorMessage" class="error">{{ errorMessage }}</p> -->
    
    </div>

    <label
          :for="id"
          :class="{ active: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0, required: isRequired, asterisk: isRequired && isAsterisk }"
          tabindex="-1"
          class="active"
          >
          {{ label }}<slot></slot>
        </label>
    <span
        v-if="(description ||errorMessage) && !isDisabled"
        :class="{ invalid: errorMessage}"
        :id="errorMessage ? `${id}-error` : ''"
        class="helper"
      >
        {{ errorMessage ? errorMessage : description }}
      </span>


      <!-- <span
      v-if="(hiddenDateValue?.length > 0) && !isReadonly && !isDisabled"
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
      v-if="(description || errorMessage) && !isDisabled"
      :class="{ invalid: errorMessage }"
      :id="errorMessage ? `${id}-error` : ''"
      class="helper"
    >
      {{ errorMessage ? errorMessage : description }}
    </span> -->

    </div>
  </template>
  
  <script>
import SvgIcon from "../../shared/svg-icon.vue"

  export default {
    name: "AdDatepicker",

    components: {
    SvgIcon,
  },
  props: {
    icon: String,
    isDisabled: Boolean,
    isRequired: Boolean,
    isAsterisk: { type: Boolean, default: true },
    isReadonly: Boolean,
    isWhiteBackground: Boolean,
    addClass: String,
    description: String,
    label: String,
    width: String,
    id: {
      type: String,
      default: () => `datepicker-${crypto.randomUUID()}`,
    },
    format: {
      type: String,
      default: "yyyy-mm-dd", // Default format
    },
    modelValue: {
      type: String,
      default: "", // Bound value from parent
    },
  },
  data() {
    return {
      selectedFormat: this.format, // Local format sync with prop
      dateParts: ["", "", ""], // Parts of the date
      errorMessage: "",
    };
  },
  computed: {
    formatParts() {
      return this.selectedFormat.toLowerCase().split(/[^a-z]/);
    },
    separator() {
      if (this.selectedFormat.includes(".")) return ".";
      if (this.selectedFormat.includes("/")) return "/";
      return "-";
    },
    hiddenDateValue: {
      get() {
        const [yyyy, mm, dd] = this.reorderPartsForISO();
        if (yyyy && mm && dd) {
          return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
        }
        return "";
      },
      set(value) {
        if (value) {
          const [yyyy, mm, dd] = value.split("-");
          this.dateParts = this.reorderPartsFromISO([yyyy, mm, dd]);
          this.$emit("update:modelValue", value); // Emit change for two-way binding
        }
      },
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newValue) {
        this.hiddenDateValue = newValue;
      },
    },
    format(newFormat) {
      this.selectedFormat = newFormat; // Sync with parent format
      this.updateFormat();
    },
  },
  methods: {
    handlePartInput(index) {
      const part = this.dateParts[index];
      this.dateParts[index] = part.replace(/\D/g, "").slice(0, this.formatParts[index].length);

      if (this.dateParts[index].length === this.formatParts[index].length && index < this.formatParts.length - 1) {
        this.focusNextInput(index);
      }
      this.validateAndSyncDate();
    },
    focusNextInput(index) {
      const nextInput = this.$refs.dateInput[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    },
    validateAndSyncDate() {
      const [yyyy, mm, dd] = this.reorderPartsForISO();
      if (yyyy && mm && dd) {
        const formattedDate = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
        const isValidDate = this.isValidDate(formattedDate);
        if (!isValidDate) {
          this.errorMessage = "Invalid date.";
        } else {
          this.errorMessage = "";
          this.hiddenDateValue = formattedDate;
        }
      }
      this.$refs.hiddenDate.value = this.hiddenDateValue;
    },
    isValidDate(date) {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime()) && date === parsedDate.toISOString().split("T")[0];
    },
    openDatePicker() {
      this.$refs.hiddenDate.showPicker();
    },
    syncPartsWithDate() {
      const value = this.$refs.hiddenDate.value;
      this.hiddenDateValue = value;
    },
    updateFormat() {
      this.dateParts = ["", "", ""]; // Clear date parts on format change
      this.errorMessage = "";
      this.hiddenDateValue = "";
    },
    reorderPartsForISO() {
      const isoOrder = ["yyyy", "mm", "dd"];
      const partsMap = this.formatParts.map((part, index) => [part, this.dateParts[index]]);
      const reordered = isoOrder.map((part) => {
        const match = partsMap.find(([key]) => key === part);
        return match ? match[1] : "";
      });
      return reordered;
    },
    reorderPartsFromISO([yyyy, mm, dd]) {
      const mapping = { yyyy, mm, dd };
      return this.formatParts.map((part) => mapping[part] || "");
    },
  },
};
  </script>
  
<style lang="scss" scoped>

// Local variables
$radius: 4px;
$minWidth: 186px;
$height: 56px;
$iconSize: 32px;
$animation: .2s;

// Colors
$color-grey-800: 200,8.8%,13.3%;  
$color-grey-600: 200,8.8%,26.7%;  
$color-grey-400: 200,5%,46.7%;
$color-grey-200: 200,4.4%,73.3%;
$color-grey-50: 180,2.9%,93.1%;
$color-grey-25: 0, 0%, 97%;
$color-red-500:358.3,71.2%,49%;
$color-white: 0, 0%, 100%;
$color-teal-600: 190.6,87.9%,22.7%;



// Code
.ad__datepicker {
  --datepicker-label-default: #{$color-grey-600};
	--datepicker-bg: #{$color-white};

	--datepicker-bg: #{$color-grey-25};
	--datepicker-bg-hover: #{$color-grey-50};
	--datepicker-border: #{$color-grey-200};
	--datepicker-text: #{$color-grey-800};
	--datepicker-label-default: #{$color-grey-600};
	--datepicker-label-active: #{$color-teal-600};
	--datepicker-error: #{$color-red-500};

	--datepicker-transition-125: 125ms;
	--datepicker-transition-150: 100ms;

	--datepicker-transition-125: 125ms;
	--datepicker-animation: #{$animation};

	position: relative;
	width: auto;
	display: flex;
	align-items: center;
  min-width: 200px;

  @media (prefers-reduced-motion) {
		--datepicker-transition-125: 0ms;
	}

  &--value {
		background-color: hsl(var(--datepicker-bg));
		border: 1px solid hsl(var(--datepicker-border));
		color: hsl(var(--datepicker-text));

		position: relative;
		display:flex;
		align-items: center;
		border-radius: $radius;
		height: $height;
		transition: background-color var(--datepicker-transition-150, 150ms) ease-out, border-color var(--datepicker-transition-150, 150ms) ease-out;
		font-weight: 500;
		width: 100%;
    box-sizing: border-box;
    justify-content: space-between;


		&:hover {
			background-color: hsl(var(--datepicker-bg-hover));
		}

		&:focus-within, &:focus {
			outline: none;
			border-color: hsl(var(--datepicker-label-active));

			+label {
				color: hsl(var(--datepicker-label-active));
        transform: scale(0.75) translateY(-12px);
        font-weight: 500;
			}

			~.helper {
				display: flex;
			}
		}

		&.range {
			min-width: 346px;
		}

		&.disabled {
			opacity: .5;
			pointer-events: none;

			~ label {
				opacity: .5;
			}
		}

		&.invalid {
			border-color: hsl(var(--datepicker-error));

			~ label {
				color: hsl(var(--datepicker-error));
				font-weight: 500;
			}
		}

		&.active {
            border-radius: $radius $radius 0 0;
        }

		&.isWhiteBackground {
			--datepicker-bg: #{$color-white};
			background-color: hsl(var(--datepicker-bg));

			&:hover {
				background-color: hsl(var(--datepicker-bg-hover));
			}
		}

    .ad__datepicker--inputs { 
      width: 100%; // Or remove if unnecessary
      min-width: unset; // To avoid any unwanted constraints
    }
		.ad__datepicker--input {
      all: unset; // Resets all styles
      width: auto; 
			padding: 16px 16px 0 16px;
      margin-top: -1px;
      background: transparent;
			// background-color: rgba(yellow, .2);
			color: hsl(var(--datepicker-text));
			border: none;
			height: $height;
			// width: 100%;
      width: 80px !important;
      font-family: 'Inter';
			font-size: 16px;
      font-weight: 500;
			line-height: 100%;
      box-sizing:border-box;
      flex-shrink: 0;
      margin: 0;

			&:focus {
				outline: none;
			}

			&.hasValue {
				animation: datepickerFadein .4s;
				opacity: 1;
			}
		}
    #hiddenDateInput {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      opacity: 0;
      width: 0px;
      height: 0px;
      max-width: 0px;
      max-height: 0px;
      pointer-events: none;
    }
	}


  label {
		color: hsl(var(--datepicker-label-default));
		font-size: inherit;
		pointer-events: none;
		position: absolute;
		line-height: 18px;
		font-weight: 400;
		top: 1.125rem;
		left: 16px;
		transform-origin: left top;
		transition: transform var(--datepicker-transition-150, 150ms) ease-out, color var(--datepicker-transition-150, 150ms) ease-out;
		letter-spacing: -.25px;
		user-select: none;

		&.active {
			color: hsl(var(--datepicker-label-active));
      transform: scale(0.75) translateY(-12px);
      font-weight: 500;
		}

		&.required {
			&.asterisk {
				&:after {
					content: "*";
					color: hsl(var(--datepicker-error));
					margin: -8px 0 0 2px;
				}
			}
		}
	}

  .helper {
    color: hsl(var(--datepicker-label-default));
    font-size: 12px;
    margin: 0 0 0 16px;
    bottom: -16px;
    position: absolute;
    display: none;
    font-weight: 500;
    left: 0;

    &.invalid {
        color: hsl(var(--datepicker-error));
        display: flex;
    }
  }
}




</style>
  