import type { Meta, StoryObj } from '@storybook/vue3';

import AdTextarea from './textarea.vue';
import { ref } from 'vue';

// CONFIGURATION
const meta = {
    title: 'components/Textarea',
    component: AdTextarea,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
------------

<br>
<br>

### Table of Contents
- [Playground](#default)
- [v-model binding example](#v-model-binding)
- [Accessibility Guidelines](#accessibility-guidelines)
    <a id="default"></a>
    <br>
    <br>
    <br>
                `,
            },
        },
    },
} satisfies Meta<typeof AdTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// STORIES
export const Default: Story = {
    args: {
        label: "This is a textarea",
    },
};

export const vModelBinding: Story = {
    render: (args: any) => ({
        components: { AdTextarea },
        setup() {
            const textareaValue = ref();
            return { args, textareaValue };
        },
        template: `
            <a id="v-model-binding"></a>

            <div>
                <AdTextarea v-model="textareaValue" label="Textarea with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Value is: {{ textareaValue }}
                </p>
            </div>
            <button @click="textareaValue = 'My parent toggle'">Set text from parent</button>

        `,
    }),
    parameters: {
        controls: {
            exclude: /.*/g,
        },
        docs: {
            description: {
                story: `This is a code snippet for textarea component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <AdTextarea v-model="textareaValue" label="Textarea with v-model binding" />
    <p>Value is: {{ textareaValue }}</p>


</template>

<script setup>
import { ref } from 'vue';

const textareaValue = ref();
</script>
\`\`\`
                `,
            },
        },
    },
};

// Accessibility Guidelines Story
export const Accessibility: Story = {
    name: 'Accessibility Guidelines',
    render: () => ({
        template: `
             <a id="accessibility-guidelines"></a> 
               
            <li> Labels must be visible when an input gets focus.</li>
<li>Labels must be announced to the screen reader on focus.</li>
<br>
<b>Assistive technology products should do the following:</b>
<br>
Ensure the helper text that appears under an input is read when an assistive technology user stops at an input using ARIA.
<br>
Screen readers should announce the element as a textarea with type.
        `,
    }),
    parameters: {
        controls: {
            exclude: /.*/g,
        },
        docs: {
            description: {
                story: 'This story contains accessibility guidelines for using the AdSwitch component.',
            },
            source: {
                code: false,  // Hides the "Show code" button
            },
        },
        docsOnly: true,  // Hides the story from the sidebar
    },
};
