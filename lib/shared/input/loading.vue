<template>
    <div class="ad__input--loading"></div>
</template>

<style lang="scss" scoped>
    $color-grey-100: 210,5.9%,86.7%;
    $color-grey-300: 204,4.9%,60%;

    .ad__input--loading {
        --loading-grey: #{$color-grey-100};
        --loading-grey-dark: #{$color-grey-300};

        position: absolute;
        left: 16px;
        top: calc(100% / 2 - 24px / 2);

        border-radius: 50%;
        width: 24px;
        height: 24px;
        
        border: 3.5px solid hsl(var(--loading-grey));
        border-top-color: hsl(var(--loading-grey-dark));

        animation: rotateLoading .6s infinite linear;
    }

    @keyframes rotateLoading {
        to { transform: rotate(360deg)}
    }
</style>