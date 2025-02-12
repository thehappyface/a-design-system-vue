<template>
    <input-info 
        :description="isReadonly || isDisabled ? '' : infoText" 
        :width="width" 
        :invalid="!_isValid" 
        :id="id + 'description'"
        @showInfoText="_showInfoText = $event">
        

            <InputContainer
            class="ad__datepicker"
            :id="id + 'container'"
            :class="{ 
                isWhiteBackground, 
                disabled: isDisabled, 
                invalid: !_isValid,
                active: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0,
                readonly: isReadonly,
                indent: isLoading || icon }"
            :style="{ width }">

            <div class="ad__datepicker--value" 
                role="group" 
                aria-labelledby="datepicker-label">

                <button type="button" class="ad__datepicker--bg-btn" @click="focusFirstInput" tabindex="-1" aria-hidden="true"></button>

                <template v-for="(part, index) in formatParts" :key="index">
                    <input :aria-label="part.length" :maxlength="part.length" type="tel" v-model="dateParts[index]"  @input="handlePartInput(index)"
                        @blur="validateAndSyncDate" @focus="selectAllText" :placeholder="part.toUpperCase()" ref="dateInput" class="ad__datepicker--input"
                        :style="{ 'width': part.length > 2 ? '56px' : '38px' }" :readonly="isReadonly" :disabled="isDisabled"  :class="{ 
                        hasValue: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0 }" />
                    <span v-if="index < formatParts.length - 1" :key="`separator-${index}`" aria-hidden="true">{{ separator }}</span>
                </template>
            </div>

            <InputIconBtn 
                :role="!isSafari ? 'button' : null"
                :type="button"
                :tabindex="!isSafari || isReadonly || isDisabled ? isReadonly || isDisabled ? '-1' : 0 : isReadonly || isDisabled ? null : '-1'"
                @click="!isSafari && !isReadonly ? openDatePicker($event) : null"
                @keyup="openDatePickerWithKeyboard"
                aria-label="Show datepicker"
                :class="{ 
                    hasValue: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0, 
                    disabled: isDisabled || isReadonly,
                    hasInfoText: infoText}">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.0001 13H12.0001V18H17.0001V13ZM16.0001 2V4H8.00012V2H6.00012V4H5.00012C4.73798 4.00012 4.47845 4.05201 4.23641 4.15268C3.99438 4.25336 3.7746 4.40084 3.58971 4.58666C3.40481 4.77249 3.25843 4.993 3.15897 5.23553C3.05951 5.47807 3.00893 5.73786 3.01012 6L3.00012 20C3.00005 20.2627 3.05173 20.5228 3.15221 20.7655C3.2527 21.0081 3.40001 21.2286 3.58574 21.4144C3.77148 21.6001 3.99198 21.7474 4.23467 21.8479C4.47735 21.9484 4.73746 22.0001 5.00012 22H19.0001C19.5301 21.9984 20.0379 21.7872 20.4126 21.4125C20.7874 21.0378 20.9986 20.53 21.0001 20V6C20.9986 5.47004 20.7874 4.96224 20.4126 4.5875C20.0379 4.21276 19.5301 4.00155 19.0001 4H18.0001V2H16.0001ZM19.0001 20H5.00012V9H19.0001V20Z"/>
                </svg>
            </InputIconBtn>
            <input 
                :aria-label="ariaLabel"
                id="hiddenDateInput" 
                type="date" 
                v-model="hiddenDateValue" 
                ref="hiddenDate" 
                :tabindex="isSafari ? 0 : -1"
                :readonly="isReadonly"
                :aria-readonly="isReadonly"
                :disabled="isDisabled || isReadonly"
                :aria-disabled="isDisabled"
                :min="minDate"
                :max="maxDate"
                @change="syncPartsWithDate"
                :class="{ 
                    'safari-only': isSafari,
                    hasValue: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0, 
                    disabled: isDisabled || isReadonly
                 }"
            />
        
            <InputIconBtn 
                class="remove__button"
                tabindex="0"
                aria-label="Remove value"
                title="Remove value"
                @click="removeValues()"
                v-if="!(isDisabled || isReadonly) && (hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0)"
                :class="{hasInfoText: infoText}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"/>
                </svg>
            </InputIconBtn>

            <InputLabel
                id="datepicker-label"
                :class="{ 
                    active: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0, 
                    required: isRequired, asterisk: isRequired && isAsterisk,
                    indent: isLoading,
                    disabled: isDisabled,
                }">
                {{ label }}
                <slot></slot> 
                <span id="datepicker-select-format" :class="{hasValue: hiddenDateValue?.length > 0 || dateParts[0].length > 0 || dateParts[1].length > 0 || dateParts[2].length > 0}">({{ selectedFormat }})</span>
            </InputLabel>


            <InputHelpText
                v-if="(description || (_errorMessage && !_isValid)) && (!isDisabled && !isReadonly)"
                :class="{ invalid: !_isValid}"
                :id="!_isValid ? id +'-error' : ''"
            >
                {{ !_isValid ? _errorMessage : !_showInfoText ? description : '' }}
            </InputHelpText>

            <InputHelpText
                v-if="isReadonly"
                class="readonly"
            >
                {{ translations[setLanguage].readOnly }}
            </InputHelpText>

            <InputLoading v-if="isLoading" />
            <!-- </div> -->
        </InputContainer>

    </input-info>
</template>

<script>
import InputInfo from "../../shared/input/input-info.vue"
import InputLoading from "../../shared/input/loading.vue"
import InputHelpText from "../../shared/input/help-text.vue"
import InputIconBtn from "../../shared/input/icon-btn.vue"
import InputLabel from "../../shared/input/label.vue"
import InputContainer from "../../shared/input/input-container.vue"

export default {
    name: "AdDatepicker",

    components: {
        InputInfo,
        InputLoading,
        InputIconBtn,
        InputHelpText,
        InputLabel,
        InputContainer
    },

    props: {
        icon: String,
        isDisabled: Boolean,
        isValid: { type: Boolean, default: true },
        isRequired: Boolean,
        isAsterisk: { type: Boolean, default: true }, // Need isRequered to show
        isReadonly: { type: Boolean, default: false },
        isWhiteBackground: Boolean,
        isLoading: Boolean,
        addClass: String,
        description: String,
        errorMessage: { type: String, default: "" },
        ariaLabel: { type: String, default: "Date value" },
        label: String,
        width: String,
        id: {
            type: String,
            default: () => `datepicker-${crypto.randomUUID()}`,
        },
        setLanguage: {
            type: String,
            default: "en", // Default format
            validator(value) {
                const allowedLanguages = [
                    "en", "sv", "da", "no", "fi", "lt", "et", "lv"
                ];
                return allowedLanguages.includes(value);
            },
        },
        format: {
            type: String,
            default: "yyyy-mm-dd", // Default format
            validator(value) {
                const allowedFormats = [
                    "yyyy-mm-dd", "dd-mm-yyyy", "dd/mm/yyyy", "mm/dd/yyyy", "yyyy/mm/dd", "dd.mm.yyyy",
                ];
                return allowedFormats.includes(value);
            },
        },
        modelValue: {
            type: String,
            default: "", // Bound value from parent
        },
        minDate: {
            type: String,
            default: "", // Expected format: "yyyy-mm-dd"
        },
        maxDate: {
            type: String,
            default: "", // Expected format: "yyyy-mm-dd"
        },
        infoText: String,
    },
    data() {
        return {
            selectedFormat: this.format, // Local format sync with prop
            dateParts: ["", "", ""], // Parts of the date
            resetElement: false,
            _errorMessage: "",
            _isValid: this.isValid,
            _showInfoText: false,
            isSafari: false,
            translations: {
                en: {
                    invalidDate: "Invalid date",
                    underMinDate: "Min date:",
                    overMaxDate: "Max date:",
                    readOnly: "Read only"
                },
                sv: {
                    invalidDate: "Ogiltigt datum",
                    underMinDate: "Min datum:",
                    overMaxDate: "Max datum:",
                    readOnly: "Endast läsning"
                },
                da: {
                    invalidDate: "Ugyldig dato",
                    underMinDate: "Min dato:",
                    overMaxDate: "Max dato:",
                    readOnly: "Kun læsning"
                },
                no: {
                    invalidDate: "Ugyldig dato",
                    underMinDate: "Min dato:",
                    overMaxDate: "Max dato:",
                    readOnly: "Kun lesing"
                },
                fi: {
                    invalidDate: "Virheellinen päivämäärä",
                    underMinDate: "Minimi päivämäärä:",
                    overMaxDate: "Maksimi päivämäärä:",
                    readOnly: "Vain luku"
                },
                lt: {
                    invalidDate: "Neteisinga data",
                    underMinDate: "Minimali data:",
                    overMaxDate: "Maksimali data:",
                    readOnly: "Tik skaitymui"
                },
                et: {
                    invalidDate: "Vigane kuupäev",
                    underMinDate: "Miinimum kuupäev:",
                    overMaxDate: "Maksimum kuupäev:",
                    readOnly: "Ainult lugemiseks"
                },
                lv: {
                    invalidDate: "Nederīgs datums",
                    underMinDate: "Minimālais datums:",
                    overMaxDate: "Maksimālais datums:",
                    readOnly: "Tikai lasīšanai"
                }
            }
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
                if (this.hiddenDateValue) this.setAsInvalid(this.hiddenDateValue);
            },
        },
        format(newFormat) {
            this.selectedFormat = newFormat; // Sync with parent format
            this.removeValues();
        },
        isValid(value) {
            this._isValid = value;
            this.setErrorMessage();
        }
    },
    mounted() {
        this.checkSafari();

        if(!this.isValid) this.setErrorMessage();
    },
    methods: {
        checkSafari() {
            const userAgent = navigator.userAgent;
            this.isSafari = userAgent.includes("Safari") && !userAgent.includes("Chrome") && !userAgent.includes("Edg");
        },
        handlePartInput(index) {
            const part = this.dateParts[index];
            this.dateParts[index] = part.replace(/\D/g, "").slice(0, this.formatParts[index].length);

            if (this.dateParts[index].length === this.formatParts[index].length && index < this.formatParts.length - 1) {
                this.focusNextInput(index);
            } else if (this.dateParts[index].length === this.formatParts[index].length) this.validateAndSyncDate();
        },
        focusNextInput(index) {
            const nextInput = this.$refs.dateInput[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        },
        focusFirstInput() {
            this.$refs.dateInput[0].focus();
        },
        selectAllText(event) {
            event.target.select();
        },
        validateAndSyncDate() {
            const [yyyy, mm, dd] = this.reorderPartsForISO();
            if (yyyy && mm && dd) {
                const formattedDate = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;

                if (this.setAsInvalid(formattedDate)) {
                    this.hiddenDateValue = formattedDate;
                }
            }
            this.$refs.hiddenDate.value = this.hiddenDateValue;
        },
        isValidDate(date) {
            const parsedDate = new Date(date);
            return !isNaN(parsedDate.getTime()) && date === parsedDate.toISOString().split("T")[0];
        },
        isWithinRange(date) {
            const formatDate = (rawDate) => {
                const [yyyy, mm, dd] = rawDate.split("-");
                const partsMapping = { yyyy, mm, dd };
                return this.formatParts
                    .map((part) => partsMapping[part] || "")
                    .join(this.separator);
            };

            const langTranslations = this.translations[this.setLanguage] || this.translations.en;

            if (this.minDate && date < this.minDate) {
                const formattedMinDate = formatDate(this.minDate);
                this._errorMessage = `${langTranslations.underMinDate} ${formattedMinDate}`;
                return false;
            }
            if (this.maxDate && date > this.maxDate) {
                const formattedMaxDate = formatDate(this.maxDate);
                this._errorMessage = `${langTranslations.overMaxDate} ${formattedMaxDate}`;
                return false;
            }
            return true;
        },

        setAsInvalid(value) {
            const isValid = this.isValidDate(value) && this.isWithinRange(value);
            this._isValid = isValid

            if (!isValid) {
                this.setErrorMessage();
                return false;
            }
            this._errorMessage = "";
            return true;
        },
        setErrorMessage() {
            if (this.errorMessage) {
                this._errorMessage = this.errorMessage;
            } else {
                // Fallback to translation or custom range message
                this._errorMessage = this._errorMessage || this.translations[this.setLanguage].invalidDate || this.translations.en.invalidDate;
            }
        },
        openDatePickerWithKeyboard(event) {
            if (event.code === "Enter" || event.code === "Space") {
                event.preventDefault(); // Prevent scrolling when Space is pressed
                this.openDatePicker();

                // Remove the focus so it doesn't open when selecting date via enter/space
                if (!this.isSafari) event.target.blur();
            }
        },
        openDatePicker(e) {
            e.preventDefault();
            if (!this.isPickerOpenByKeyboard) this.$refs.hiddenDate.showPicker();
        },
        syncPartsWithDate() {
            const value = this.$refs.hiddenDate.value;
            this.hiddenDateValue = value;

            this.setAsInvalid(value);
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
        removeValues() {
            this.dateParts = ["", "", ""];
            this.hiddenDateValue = "";
            this.setErrorMessage();
            this.$emit("update:modelValue", "");
        },
    },
};
</script>



<style lang="scss" scoped>
// Local variables
$radius: 4px;
$height: 56px;
$iconSize: 32px;
$animation: .2s;

// Colors
$color-grey-800: 200, 8.8%, 13.3%;
$color-grey-600: 200, 8.8%, 26.7%;
$color-grey-400: 200, 5%, 46.7%;
$color-grey-200: 200, 4.4%, 73.3%;
$color-grey-100: 210,5.9%,86.7%;
$color-grey-50: 180, 2.9%, 93.1%;
$color-grey-25: 0, 0%, 97%;
$color-red-500: 358.3, 71.2%, 49%;
$color-white: 0, 0%, 100%;
$color-teal-600: 190.6, 87.9%, 22.7%;



// Code
.ad__datepicker {
    --datepicker-bg: #{$color-grey-25};
    --datepicker-bg-hover: #{$color-grey-50};
    --datepicker-border: #{$color-grey-400};
    --datepicker-text: #{$color-grey-800};
    --datepicker-label-default: #{$color-grey-600};
    --datepicker-label-active: #{$color-teal-600};
    --datepicker-error: #{$color-red-500};
    --datepicker-button-hover-bg: #{$color-grey-100};

    --datepicker-transition-150: 100ms;

    --datepicker-animation: #{$animation};

    align-items: center;
    min-width: 200px;

    @media (prefers-reduced-motion) {
        --datepicker-transition-150: 0ms;
    }

    &--value {
        position: relative;
        display: flex;
     
        width: 100%;
        box-sizing: border-box;
        justify-content: flex-start;
        align-items: flex-end;

        span {
            padding: 0 0 11px 0;
            opacity: 0;
        }
    }

    &:focus-within,
    &:focus {
        #datepicker-select-format {
            transition-delay: .4s;
            transition: max-width 0.35s, opacity .5s;
            max-width: 200px;
            opacity: 1;
        }

        span, .ad__datepicker--input {
            opacity: 1;
        }
    }

    .ad__datepicker--bg-btn {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        left: 0;
        top: 0;
    }
    .ad__datepicker--input {
        all: unset; // Resets all styles
        opacity: 0;
        z-index: 1;
        width: auto;
        padding: 16px 4px 0 8px;
        margin-top: 2px;
        background: transparent;
        color: hsl(var(--datepicker-text));
        border: none;
        height: calc($height - 2px);
        // width: 100%;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        line-height: 100%;
        box-sizing: border-box;

        &:hover {
            background: linear-gradient(
                0deg, hsla(var(--datepicker-button-hover-bg), 0) 9.5%, 
                hsla(var(--datepicker-button-hover-bg), 1) 10%, 
                hsla(var(--datepicker-button-hover-bg), 1) 57.5%, 
                hsla(var(--datepicker-button-hover-bg), 0) 58%
            );
        }

        &:focus {
            outline: none;
        }

        &::placeholder {
            font-weight: 400;
            color: hsl(var(--datepicker-label-default));
        }

        &.hasValue {
            animation: datepickerFadein .4s;
            opacity: 1;

            & + span {
                opacity: 1;
            }
        }
    }

    #datepicker-select-format {
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
        transition: all 0s;
        white-space: nowrap;
        &.hasValue {
            transition-delay: .4s;
            transition: max-width 0.35s, opacity .5s;
            max-width: 200px;
            opacity: 1;
        }
    }
    #hiddenDateInput {
        all:unset;
        box-sizing: border-box;
        border-radius: 50px;
        overflow: hidden;
        opacity: 0;
        z-index: 10;

        $iconSize: 32px;
        right: 16px;
		top: calc(50% - (#{$iconSize} / 2));
        position: absolute;
		width: $iconSize;
		height: $iconSize;
        pointer-events: none;
        color: transparent;


        &.safari-only {
            pointer-events: auto;

            &::selection {
                background-color: transparent;
                color: transparent;
            }
        }
        &.hasValue:not(.disabled) {
			right: 2.25rem;
		}
        &:focus {
            opacity: 1;
            outline: 3px solid #000;
        }
    }
}
</style>