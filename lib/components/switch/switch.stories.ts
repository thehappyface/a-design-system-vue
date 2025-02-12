import type { Meta, StoryObj } from '@storybook/vue3';

import AdSwitch from './switch.vue';
import { ref } from 'vue';

// CONFIGURATION
const meta = {
    title: 'components/Switch',
    component: AdSwitch,
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
} satisfies Meta<typeof AdSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

// STORIES
export const Default: Story = {
    args: {
        label: "This is a cool switch",
    },
};

export const vModelBinding: Story = {
    render: (args: any) => ({
        components: { AdSwitch },
        setup() {
            const switchValue = ref(false);
            return { args, switchValue };
        },
        template: `
            <a id="v-model-binding"></a>

            <div>
                <AdSwitch v-model="switchValue" label="Switch with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Switch is: {{ switchValue ? 'On' : 'Off' }}
                </p>
            </div>
            <button @click="switchValue = !switchValue">Toggle</button>

        `,
    }),
    parameters: {
        controls: {
            exclude: /.*/g,
        },
        docs: {
            description: {
                story: `This is a code snippet for switch component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <AdSwitch v-model="switchValue" />
    <p>Switch is: {{ switchValue ? 'On' : 'Off' }}</p>


</template>

<script setup>
import { ref } from 'vue';

const switchValue = ref(false);
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
                <b>Keyboard interactions</b> <br>
Executes the button action. The focus remains on the switch.
<br>
Space -> Select focused item
<br>
<br>
<b>Assistive technology products should do the following:</b>
<br>
Screen readers should announce the element as a checkbox, and optionally provide instructions on how to activate it.
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
