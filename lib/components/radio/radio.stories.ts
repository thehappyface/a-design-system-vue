import type { Meta, StoryObj } from '@storybook/vue3';

import AdRadio from './radio.vue';
import { ref } from 'vue';

const meta = {
    title: 'components/Radio',
    component: AdRadio,
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
} satisfies Meta<typeof AdRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Radio input",
        value: "2"
    },
};
export const vModelBinding: Story = {
    render: (args: any) => ({
        components: { AdRadio },
        setup() {
          const selectedValue = ref<String | Number | Object>();
          
          return { args, selectedValue };
        },
        template: `
        <div style="display:flex; flex-direction: column; gap: 16px;">
            <h4 style="margin: 0 0 8px 0">Favorite artist:</h4>
          <AdRadio 
            v-model="selectedValue"
            label="Adele" 
            :value="'adele'" 
            name="radiogroup"
          />
          <AdRadio 
            v-model="selectedValue"
            label="Taylor Swift" 
            :value="'swift'" 
            name="radiogroup"
          />
           <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
            Selected artist: {{ selectedValue }}
        </p>
        </div>
            <button @click="selectedValue = 'swift'">Set as Swift</button>
        `,
      }),
      parameters: {
        controls:{
            exclude:/.*/g
        },
        docs: {
            toc: true,
            description: {
                story: `This is a code snippet for Radio group component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <div style="display:flex; flex-direction: column; gap: 16px;">
        <h4 style="margin: 0 0 8px 0">Favorite artist:</h4>
        <AdRadio 
            v-model="selectedValue"
            label="Adele" 
            :value="'adele'" 
            name="radiogroup"
        />
        <AdRadio 
            v-model="selectedValue"
            label="Taylor Swift" 
            :value="'swift'" 
            name="radiogroup"
        />
        <p style="font-size:14px">Selected artist: {{ selectedValue }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref<String | Number | Object>();
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
                The radio button is a component that is part of a radio group containing a set of checkable buttons, known as radio buttons where no more than one of the buttons can be checked at a time. In this example the first button is set to be selected by default. The tabindex="0" has been added to allows each button to receive keyboard focus placing the element in the logical navigation flow.
<br>
<br>
<b>Keyboard interactions</b>
<br>
Executes the button action and the focus remains on the radio button.
<br>
<br>
- Space -> Select focused item
<br>
- Right Arrow and Down Arrow: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.
<br> 
- Left Arrow and Up Arrow: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.
<br>
- Tab -> in or out of radio group

<br>
<br>


<b>WAI-ARIA Roles, States, and Properties</b>
<br>
Radio button must have a clear and concise label.
If the radio group is a required include the aria-required property and indicate that it is a required group and use the validation indicator.

<br>
<br>

<b>Assistive technology products should do the following:</b>
<br>
Screen readers should announce the element as a alternative button, and optionally provide instructions on how to activate it.
        `,
    }),
    parameters: {
        controls: {
            exclude: /.*/g,
        },
        docs: {
            description: {
                story: 'This story contains accessibility guidelines for using the AdRadio component.',
            },
            source: {
                code: false,  // Hides the "Show code" button
            },
        },
        docsOnly: true,  // Hides the story from the sidebar
    },
};