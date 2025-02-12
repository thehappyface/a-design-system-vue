<template>

    <template v-if="!description"><slot /></template>

    <div 
        v-else-if="description" 
        :style="{ width }"
        class="ad__input--infocontainer">

        <div class="ad__input--infocontainer--row">
            <slot />
            
            <button
                class="ad__input--infocontainer--row button" 
                @click="toggleDescription(showDescription = !showDescription)"
                :aria-expanded="showDescription" 
                :aria-controls="id"
                :aria-label="ariaLabel"
                type="button">
                <svg v-if="!showDescription" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11 17H13V11H11V17ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.999 9.34813 20.9452 6.80515 19.07 4.93C17.1948 3.05485 14.6519 2.00097 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9972 14.1209 19.1534 16.1541 17.6538 17.6538C16.1541 19.1534 14.1209 19.9972 12 20ZM11 9H13V7H11V9Z"/>
                </svg>

                <svg  v-if="showDescription" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/></svg>

                <!-- <svg v-if="showDescription" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M7,11v2h10v-2H7z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"/></svg> -->

            </button>
        </div>
        
        <p 
            class="ad__input--infocontainer description" 
            :class="{parentIsInvalid: invalid === true, rightIndent: rightIndent}"  
            v-if="showDescription" 
            :id="id">
            {{ description }}
        </p>
    </div>
   
   

</template>
  
<script lang="ts">
  export default {
    name: 'InputInfo',
    emits: ['showInfoText'],
    props: {
        description: String,
        width: String,
        id: String,
        ariaLabel: { type: String, default: "Show description text" },
        invalid: { type: Boolean, default: false },
        rightIndent: Boolean
    },

    data() {
        return {
            showDescription: false
        }
    },
    
    watch: {
        invalid() {
            if(this.invalid) this.toggleDescription(true)
        },
    },

    mounted() {
        if(this.invalid) this.toggleDescription(true)
    },

    methods: {
        toggleDescription(value: any) {
            this.showDescription = value
            this.$emit('showInfoText', value);
        }
    }
  };
</script>

<style lang="scss" scoped>
    $color-grey-50: 180, 2.9%, 93.1%;
    $color-grey-100: 210,5.9%,86.7%;
    $color-grey-200: 200, 4.4%, 73.3%;
    $color-grey-800: 200, 8.8%, 13.3%;
    $buttonSize: 32px;
    $svgSize: 22px; 
    $gap: 8px;

    .ad__input--infocontainer {
        --button-hover-bg: #{$color-grey-100};
        --button-active-bg: #{$color-grey-200};
        --button-default-color: #{$color-grey-800};
       
        display:flex;
        flex-direction: column;

        &--row {
            display:flex;
            align-items: center;
            gap: $gap;
            position: relative;

            &.button {
                all: unset;

                position: absolute;
                // flex-shrink: 0;
                // flex-grow: 0;
                right: 8px;
                width:$buttonSize;
                height:$buttonSize;

                display:flex;
                align-items: center;
                justify-content: center;

                border-radius: 50%;
                color: hsl(var(--button-default-color));

                &:hover {
                    background-color: hsl(var(--button-hover-bg));
                    cursor: pointer;
                }
                &:active {
                    background-color: hsl(var(--button-active-bg));
                }
                &:focus-visible {
                    outline: 3px solid;
                }


                svg {
                    fill: currentColor;
                    width: $svgSize;
                    height: $svgSize;
                }
            }
        }

        &.description {
            all: unset;

            width: calc(100% - $buttonSize - $gap);
            color: hsl(var(--button-default-color));
            padding: 0 17px;
            box-sizing: border-box;

            font-family: Inter;
            font-size: 12px;
            font-weight: 500;
            line-height: 22px; /* 183.333% */
            letter-spacing: -0.15px;
            margin-top: -1px;

            &.parentIsInvalid {
                margin-top: 16px;
            }
            &.rightIndent {
                padding-right: 96px;
            }
        }
    }

</style>
  