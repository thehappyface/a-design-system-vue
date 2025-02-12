<template>

    <div 
        class="modal" :id="id" :class="{open: isActive}"
        @keydown.esc="closeModal">
        <div class="modal__bg"  
            @click="closeModal"
            @touchmove="preventScroll($event)"></div>

        <div 
            class="modal__container"
            role="dialog"
            tabindex="-1"
            ref="dialog"
            :class="{isMobile: isMobile, noTransition: noTransition, isClosing: isClosing}"
            @scroll="onDialogScroll">
          
            <button
                class="drag-to-close"
                v-if="isMobile"
                @touchstart="dragStart($event)"
                @touchmove="dragMove($event)"
                @touchend="dragEnd">
                
                <span></span></button>

            <button role="button" class="modal--close" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"/>
                </svg>
            </button>

            <div class="modal--header" :style="{padding: !isMobile ? desktopPadding : ''}" :class="{isSticky: setStickyHeader && stickyHeader}" ref="dialogHeading">
                <h2>{{ heading }}</h2>
            </div>

            <div class="modal--content" :style="{padding: !isMobile ? desktopPadding : ''}" >
                <slot />
            </div>
            
            <div class="modal--footer" :class="{isSticky: stickyFooter}" :style="{padding: !isMobile ? desktopPadding : ''}">
                <slot name="footer" />
            </div>

        </div>
    </div>

</template>

<script lang="ts">

export default {
    name: 'AdModal',
    props: {
        heading: String,
        stickyFooter: { type: Boolean, default: true},
        stickyHeader: { type: Boolean, default: true},
        desktopPadding: String,
        id: { type: String, default: () => `modal-${crypto.randomUUID()}` },
    },
    data() {
        return {
            isActive: true,
            isMobile: window.innerWidth < 950,
            setStickyHeader: false,
            lastFocusedElement: null as HTMLElement | null, // Store last focused element

            touchStart: 0,
            noTransition: false,
            isClosing: false,
            scrollTimeout: null as number | null
        };
    },
    emits: ["isClosing"],
    methods: {
        openModal() {
            // Store the currently focused element
            this.lastFocusedElement = document.activeElement as HTMLElement;
            this.isActive = true;

            // Focus the modal dialog
            this.$nextTick(() => {
                (this.$refs.dialog as HTMLElement)?.focus();
            });
        },
        closeModal() {
            this.$emit("isClosing", false);
            this.isActive = false;
            // Restore focus to the last focused element
            this.$nextTick(() => {
                this.lastFocusedElement?.focus();
                document.body.classList.remove("static");
            });
        },
        onDialogScroll() {
            if (!this.stickyHeader) return;

            const rect = (this.$refs.dialogHeading as HTMLElement).getBoundingClientRect();
            const modalRect = (this.$refs.dialog as HTMLElement).getBoundingClientRect();

            this.setStickyHeader = rect.top <= modalRect.top;
        },
        updateWidth() {
            this.isMobile = window.innerWidth < 950
        },

        preventScroll(e: any) {
            e.preventDefault();
        },

        dragStart(e:any) {
            e.preventDefault();

            this.touchStart = e.changedTouches[0].clientY;
            this.noTransition = true;
        },
 
        dragMove(e: any) {
            let posY = e.changedTouches[0].clientY;

            e.preventDefault();
            (this.$refs.dialog as HTMLElement).style.bottom = 'calc(0px + -' + (posY - this.touchStart) + 'px)';

            if ((this.touchStart - posY) < -110) this.isClosing = true
            else this.isClosing = false
        },

        dragEnd() {
            this.noTransition = false;

            this.$nextTick(() => {
                if(this.isClosing) {
                    (this.$refs.dialog as HTMLElement).style.bottom = "-100%";
                    setTimeout(() => {
                        this.closeModal();
                    }, 100)
                }
                else (this.$refs.dialog as HTMLElement).style.bottom = "0%";
            });
        }
    },
    mounted() {
        this.openModal();
        window.addEventListener("resize", this.updateWidth);
        document.body.classList.add("static");
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateWidth);
    },
};
</script>

<style>
.static {
    display: static;
    overflow:hidden;
}
</style>


<style lang="scss" scoped>
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    display:flex;
    align-items: center;
    justify-content: center;

     z-index: 10;
}

.modal__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color .25s, backdrop-filter .25s;

    background-color: rgba(0, 0, 0, .72);
    backdrop-filter: blur(3px);

    @starting-style {
        background-color: transparent;
        backdrop-filter: blur(0px);
    }
}
.modal__container {
    position: relative;
    width: 932px;
    min-height: 200px;
    max-height: 93svh;
    height: auto;

    border-radius: 8px;
    background: #FFF;
    box-shadow: -8px 0px 16px 0px rgba(0, 0, 0, 0.07), -4px 0px 8px 0px rgba(0, 0, 0, 0.05), -16px 0px 32px 0px rgba(0, 0, 0, 0.07);
    z-index: 2;

    overflow: auto;

    display:flex;
    flex-direction: column;

    outline: none;

    @media (min-width: 950px) {
        transition: transform .2s, opacity .2s;
        transform: scale(1) translateY(0px);
        opacity: 1;

        @starting-style {
            transform: scale(.9) translateY(50px);
            opacity: 0;
        }
    }
   
    
  &.isMobile {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0%;
    overflow-x: hidden;
    transition: bottom .15s linear;
    border-radius: 16px 16px 0 0;

    @starting-style {
        bottom: -100%;
    }

    &.noTransition {
        transition-duration: 0s;
    }
    &.isClosing {
        & > .modal--content,
        & > .modal--header h2 {
            opacity: .25;
        }
    }

    .modal {
        &--close { 
            margin-top: -22px;
            z-index:3;
        }

        &--header {
            height: auto;
            h2 {
                padding-top: 24px;
            }

            &.isSticky {
                height: 50px;
                h2 {
                    font-size: 16px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding: 6px 48px 0 0;
                }
            }
        }
        &--content {
            padding-bottom: 48px;
        }
        &--footer {
            button {
                padding: 14px 28px;
            }
        }

        &--header,
        &--content,
        &--footer {
            padding-left: 24px;
            padding-right: 24px;
        }
    }
}
 
.drag-to-close {
    all: unset;
    display:flex;
    position: sticky;
    width: 100%;
    z-index: 2;
    flex-shrink: 0;
    top:0;
    background: white;
    justify-content: center;
    align-items: center;
    padding: 6px 0 4px 0;
    
    span {
      width: 40px;
      height: 5px;
      background: rgba(grey,.5);
      border-radius: 10px;
    }
  }
}


.modal--header {
    margin-top: 24px;
    height: 64px;
    flex-shrink: 0;
    display:flex;
    align-items: center ;

    top: 0;
    
    background-color: #FFF;
    z-index: 1;
    border-bottom: 1px solid transparent;

    &.isSticky {
        position: sticky;
        border-bottom-color: lightgrey;
        h2 {
            font-size: 20px;
            padding-top:2px;
        }
    }
    h2 {
        margin: 0;
        transition: all .12s;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -.35px;
    }
}
.modal--content {

}
.modal--footer {
    display:flex;
    align-items: center;
    min-height: 56px;
    height: auto;
    width: 100%;
    &.isSticky {
      position: sticky;
      border-top: 1px solid lightgrey;
      background: white;
      bottom: -1px;
      margin-top: auto;
    }
    &:empty {
        display:none;
    }
}

.modal--close {
    all: unset;

    color: #1f1f1f;
    background-color: rgba(#FFF, .85);
    position: sticky;
    flex-shrink: 0;
    top: 8px;
    margin-left: auto;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    cursor: pointer;

    svg {
        width:24px;
        height: 24px;
    }

    &:hover {
        background-color: #EDEEEE;
    }

    &:focus-visible {
        outline: 3px solid;
    }
}

</style>