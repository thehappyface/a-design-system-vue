<template>

    <div class="ad__input--container">
        <slot />
    </div>

</template>

<style lang="scss">

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





.ad__input--container {
    --ad-input-container-bg: #{$color-grey-25};
    --ad-input-container-bg-hover: #{$color-grey-50};
    --ad-input-container-border: #{$color-grey-400};
    --ad-input-container-text: #{$color-grey-800};
    --ad-input-container-label-default: #{$color-grey-800};
    --ad-input-container-label-active: #{$color-teal-600};
    --ad-input-container-error: #{$color-red-500};

    --ad-input-container-transition-100: 100ms;

    --ad-input-container-animation: #{$animation};

    @media (prefers-reduced-motion) {
        --ad-input-container-transition-100: 0ms;
    }
    
    background-color: hsl(var(--ad-input-container-bg));
    border: 1px solid hsl(var(--ad-input-container-border));
    color: hsl(var(--ad-input-container-text));
    padding: 0 0 0 8px;

    position: relative;
    display: flex;
    border-radius: $radius;
    height: $height;
    transition: background-color var(--ad-input-container-transition-100, 100ms) ease-out, border-color var(--ad-input-container-transition-100, 100ms) ease-out;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: flex-end;

    &:hover {
        background-color: hsl(var(--ad-input-container-bg-hover));
        cursor: text;
    }

    &:focus-within,
    &:focus {
        outline: .5px solid hsl(var(--ad-input-container-label-active));
        outline-offset: -1.5px;
        border-color: hsl(var(--ad-input-container-label-active));


        label {
            color: hsl(var(--ad-input-container-label-active));
            transform: scale(0.75) translateY(-12px);
            font-weight: 500;
        }

        .ad__input--helper {
            display: block;
        }

        // span,
        // .ad__datepicker--input {
        //     opacity: 1;
        // }
    }

    &.disabled {
        opacity: .5;
        pointer-events: none;
    }

    &.readonly {
        pointer-events: none;
    }

    &.invalid {
        border-color: hsl(var(--ad-input-container-error));
        outline: 1px solid hsl(var(--ad-input-container-error));
        outline-offset: -2px;

        ~label {
            color: hsl(var(--ad-input-container-error));
            font-weight: 500;
        }
    }

    &.active {
        // border-radius: $radius $radius 0 0;

        span,
        .ad__datepicker--input {
            opacity: 1;
        }
    }

    &.isWhiteBackground {
        --ad-input-container-bg: #{$color-white};
        background-color: hsl(var(--ad-input-container-bg));

        &:hover {
            background-color: hsl(var(--ad-input-container-bg-hover));
        }
    }

    &.indent {
        padding-left: 40px;
    }


    input {
        all: unset;

        color: hsl(var(--ad-input-container-text));
        padding: 16px 40px 0px 8px;
        font-size: inherit;
        border-radius: 4px;
        min-width: 208px;
        height: 56px;
        font-weight: 500;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>