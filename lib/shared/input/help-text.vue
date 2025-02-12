<template>
    <span class="ad__input--helper">
        <slot />
    </span>
</template>


<style lang="scss" scoped>
    $color-grey-600: 200, 8.8%, 26.7%;
    $color-red-500: 358.3, 71.2%, 49%;

    .ad__input--helper {
        --ad-input-label-default: #{$color-grey-600};
        --ad-input-error: #{$color-red-500};

        color: hsl(var(--ad-input-label-default));
        font-size: 12px;
        margin: 0 16px;
        bottom: -22px;
        position: absolute;
        font-weight: 500;
        line-height: 22px; /* 183.333% */
        letter-spacing: -0.15px;
        left: 0;

        white-space: nowrap;
        max-width: calc(100% - 32px);
        display:none;
        overflow:hidden;
        text-overflow: ellipsis;

        &.invalid {
            color: hsl(var(--ad-input-error));
            display:block;
            font-weight: 600;
        }
        &.readonly {display:flex !important}

        &.rightIndent {
            padding-right: 96px;
        }

        &.isCounter {
            right: 0px;
            left: auto;
        }
    }
</style>