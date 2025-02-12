<template>
    <label
        tabindex="-1"
        >
        <slot></slot> 
    </label>
</template>

<style lang="scss" scoped>

// Colors
$color-grey-600: 200, 8.8%, 26.7%;
$color-red-500: 358.3, 71.2%, 49%;
$color-teal-600: 190.6, 87.9%, 22.7%;


    label {
        all: unset; 
        --ad-input-label-default: #{$color-grey-600};
        --ad-input-label-active: #{$color-teal-600};
        --ad-input-error: #{$color-red-500};
        --ad-input-transition-100: 100ms;

        display:flex;
        gap: 4px;
        z-index: 1;
        color: hsl(var(--ad-input-label-default));
        font-size: inherit;
        pointer-events: none;
        position: absolute;
        line-height: 18px;
        font-weight: 400;
        top: 1.125rem;
        left: 16px;
        transform-origin: left top;
        transition: transform var(--ad-input-transition-100, 150ms) ease-out, color var(--ad-input-transition-100, 150ms) ease-out;
        letter-spacing: -.25px;
        user-select: none;
        z-index: 0;

        @media (prefers-reduced-motion) {
            --ad-input-transition-100: 0ms;
        }

        &.active {
            color: hsl(var(--ad-input-label-active));
            transform: scale(0.75) translateY(-12px);
            font-weight: 500;

            span {
                transition-delay: .4s;
                transition: max-width 0.35s, opacity .5s;
                max-width: 200px;
                opacity: 1;
            }
        }

        &.required {
            &.asterisk {
                &:after {
                    content: "*";
                    color: hsl(var(--ad-input-error));
                    margin: -6px 0 0 -2px;
                }
            }
        }

        &.disabled {
            opacity: .5;
        }
 
        &.indent {
            left: 48px !important;
        }
    }

</style>