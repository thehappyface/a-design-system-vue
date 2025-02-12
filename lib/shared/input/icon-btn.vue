<template>
    <button class="ad__input--icon">
        <slot />
    </button>
</template>


<style lang="scss" scoped>
    $iconSize: 32px;
    $color-grey-600: 200, 8.8%, 26.7%;
    $color-grey-100: 210,5.9%,86.7%;
    $color-grey-200: 200, 4.4%, 73.3%;


    .ad__input--icon {
        all: unset;

        --ad-input-label-default: #{$color-grey-600};
        --ad-input-button-hover-bg: #{$color-grey-100};
        --ad-input-button-active-bg: #{$color-grey-200};

		color: hsl(var(--ad-input-label-default));
		cursor: pointer;
		position: absolute;
        // overflow: hidden;
		width: $iconSize;
		height: $iconSize;
		padding: 4px;
		right: 16px;
		top: calc(50% - (#{$iconSize} / 2));
		border-radius: 50%;
        box-sizing: border-box;

        &:hover {
            background-color: hsl(var(--ad-input-button-hover-bg));
		}
		&:active {
            background-color: hsl(var(--ad-input-button-active-bg));
		}
		&:focus-visible, &:has(#hiddenDateInput:focus-visible) { outline: 3px solid}

		&.disabled {
			opacity: .5;
			pointer-events: none;
		}

		&.hasValue:not(.disabled) {
			right: 36px;
		}
		&.hasInfoText {
			right: 42px;
		}

		&.hasInfoText:is(.hasValue) {
			right: 80px;
		}
		

		&.remove__button {
			$iconSize: 24px;
			width: $iconSize;
			height: $iconSize;
			right: 12px;
			top: calc(50% - (#{$iconSize} / 2));

			&.hasInfoText {
				right: 54px;

				&::after {
					content: "";
					width: 1px;
					height: 15px;
					background: #949a9e;
					position: absolute;
					right: -8px;
					top: 4px;
				}
			}
			
			// @include token.removeButton;
		}
	}

</style>