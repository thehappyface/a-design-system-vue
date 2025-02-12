import type { Meta, StoryObj } from '@storybook/vue3';

import AdDatepicker from './datepicker2.vue';
import { ref } from 'vue';

// CONFIGURATION
const meta = {
  title: 'components/Datepicker',
  component: AdDatepicker,
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
- [Change format](#change-format)
- [Accessibility Guidelines](#accessibility-guidelines)
<a id="default"></a>
<br>
<br>
<br>
            `,
        },
    },
},
} satisfies Meta<typeof AdDatepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// STORIES
export const Default: Story = {
args: {
    label: "Datepicker",
},
};

export const vModelBinding: Story = {
  render: (args: any) => ({
      components: { AdDatepicker },
      setup() {
          const datepickerValue = ref();
          return { args, datepickerValue };
      },
      template: `
          <a id="v-model-binding"></a>

          <div>
              <AdDatepicker v-model="datepickerValue" label="Datepicker with v-model binding" />

              <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                  Value is: {{ datepickerValue }}
              </p>
          </div>
          <button @click="datepickerValue = '2004-03-11'">Set date '2004-03-11'</button>

      `,
  }),
  parameters: {
      controls: {
          exclude: /.*/g,
      },
      docs: {
          description: {
              story: `This is a code snippet for textfield component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
  <AdDatepicker v-model="datepickerValue" label="Datepicker with v-model binding" />
  <p>Value is: {{ datepickerValue }}</p>
</template>

<script setup>
import { ref } from 'vue';

const datepickerValue = ref();
</script>
\`\`\`
              `,
          },
      },
  },
};


export const changeFormat: Story = {
  render: (args: any) => ({
      components: { AdDatepicker },
      setup() {
          const datepickerValue = ref();
          const selectedFormat = ref("yyyy-mm-dd");
          const formatOptions = ref([
            { value: "yyyy-mm-dd", label: "YYYY-MM-DD (ISO, Default)" },
            { value: "dd-mm-yyyy", label: "DD-MM-YYYY (Europe)" },
            { value: "dd/mm/yyyy", label: "DD/MM/YYYY (Short European)" },
            { value: "mm/dd/yyyy", label: "MM/DD/YYYY (US)" },
            { value: "yyyy/mm/dd", label: "YYYY/MM/DD (ISO Alt)" },
            { value: "dd.mm.yyyy", label: "DD.MM.YYYY (Dot European)" },
          ]);
          return { args, datepickerValue, selectedFormat, formatOptions };
      },
      template: `
          <a id="change-format"></a>
          
          <label for="parentFormatSelector">Select Date Format:</label>
          <select v-model="selectedFormat" id="parentFormatSelector">
            <option v-for="option in formatOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <br>
          <br>
          <div>
              <AdDatepicker v-model:format="selectedFormat" v-model="datepickerValue" label="Change locale format" />

              <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                  Value is: {{ datepickerValue }}
              </p>
          </div>
          <button @click="datepickerValue = '2004-03-11'">Set date '2004-03-11'</button>

      `,
  }),
  parameters: {
      controls: {
          exclude: /.*/g,
      },
      docs: {
          description: {
              story: `This is a code snippet for textfield component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <label for="parentFormatSelector">Select Date Format:</label>
    <select v-model="selectedFormat" id="parentFormatSelector">
      <option v-for="option in formatOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

   <AdDatepicker v-model:format="selectedFormat" v-model="datepickerValue" label="Change locale format" />
</template>

<script setup>
import { ref } from 'vue';

const datepickerValue = ref();
const selectedFormat = ref("yyyy-mm-dd");
const formatOptions = ref([
  { value: "yyyy-mm-dd", label: "YYYY-MM-DD (ISO, Default)" },
  { value: "dd-mm-yyyy", label: "DD-MM-YYYY (Europe)" },
  { value: "dd/mm/yyyy", label: "DD/MM/YYYY (Short European)" },
  { value: "mm/dd/yyyy", label: "MM/DD/YYYY (US)" },
  { value: "yyyy/mm/dd", label: "YYYY/MM/DD (ISO Alt)" },
  { value: "dd.mm.yyyy", label: "DD.MM.YYYY (Dot European)" },
]);
</script>
\`\`\`
              `,
          },
      },
  },
};
