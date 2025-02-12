import type { Meta, StoryObj } from '@storybook/vue3';

import AdTextfield from './textfield.vue';
import { ref } from 'vue';

// CONFIGURATION
const meta = {
    title: 'components/Textfield',
    component: AdTextfield,
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
} satisfies Meta<typeof AdTextfield>;

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
        components: { AdTextfield },
        setup() {
            const textfieldValue = ref();
            return { args, textfieldValue };
        },
        template: `
            <a id="v-model-binding"></a>

            <div>
                <AdTextfield v-model="textfieldValue" label="Textfield with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Value is: {{ textfieldValue }}
                </p>
            </div>
            <button @click="textfieldValue = 'My parent toggle'">Set text from parent</button>

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
    <AdTextfield v-model="textfieldValue" label="Textfield with v-model binding" />
    <p>Value is: {{ textfieldValue }}</p>


</template>

<script setup>
import { ref } from 'vue';

const textfieldValue = ref();
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
Screen readers should announce the element as a textfield with type.
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


export const FinanceRequestForm: Story = {
    render: (args: any) => ({
        components: { AdTextfield },
        setup() {
            // Define the types for the form fields and errors
            interface FormFields {
                companyName: string;
                email: string;
                orgNumber: string;
                additionalInfo: string;
            }

            type Errors = {
                [K in keyof Pick<FormFields, 'companyName' | 'email' | 'orgNumber'>]: string | null;
            };

            const form = ref<FormFields>({
                companyName: '',
                email: '',
                orgNumber: '',
                additionalInfo: '',
            });

            const errors = ref<Errors>({
                companyName: null,
                email: null,
                orgNumber: null,
            });

            // Define the refs object with explicit types for input refs
            const refs = {
                companyNameInput: ref<HTMLElement | null>(null),
                emailInput: ref<HTMLElement | null>(null),
                orgNumberInput: ref<HTMLElement | null>(null),
            };
            const validateForm = () => {
                const validationErrors: Errors = {
                    companyName: null,
                    email: null,
                    orgNumber: null,
                };

                if (!form.value.companyName) {
                    validationErrors.companyName = 'Företagsnamn är obligatoriskt.';
                }

                if (!form.value.email) {
                    validationErrors.email = 'E-post är obligatoriskt.';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
                    validationErrors.email = 'Ange en giltig e-postadress.';
                }

                if (!form.value.orgNumber) {
                    validationErrors.orgNumber = 'Organisationsnummer är obligatoriskt.';
                } else if (!/^\d+$/.test(form.value.orgNumber)) {
                    validationErrors.orgNumber = 'Organisationsnummer måste endast innehålla siffror.';
                }

                errors.value = validationErrors;

                return !Object.values(validationErrors).some((error) => error !== null);
            };

            const handleSubmit = () => {
                if (!validateForm()) {
                    setTimeout(() => {
                        document.querySelector("form")?.querySelector(".invalid")?.querySelector("input")?.focus()
                    }, 0);
                } else {
                    alert('Form submitted successfully!');
                }
            };

            return { args, form, errors, refs, handleSubmit };
        },

        template: `
            <div style="margin: auto; width: 600px; display: flex; flex-direction: column; gap: 0px; padding: 10vh 0;">
                <p style="line-height: 150%; margin: 0;">
                    Vi är glada över att du visar intresse för finansiering av dina produkter. När vi får in din intresseanmälan,
                    kommer du inom kort att bli kontaktad av Atea Finance för att titta vidare på hur den bästa finansieringslösningen
                    kan se ut för er.
                </p>
                <p style="line-height: 150%;">
                    Är din förfrågan mer allmän, eller du redan nu vet vilka specifka behov ni har, skriver du detta i
                    kommentarsfältet nedan. Då kan våra specialister förbereda sig innan de kontaktar dig. Annars bifogas produkterna
                    du har i kundvagnen med din ansökan.
                </p>
                <p style="line-height: 150%; margin: 0;">
                    Genom att skicka in din förfrågan till oss accepterar du att Atea Finance genomför en sedvanlig kreditbedömning.
                </p>

                <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; gap: 24px; margin: 32px 0 16px 0;">
                    <!-- Företagsnamn -->
                    <AdTextfield
                        ref="refs.companyNameInput"
                        :isRequired="true"
                        :width="'100%'"
                        :isValid="!errors.companyName"
                        :errorMessage="errors.companyName"
                        :description="''"
                        :infoText="'Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner'"
                        v-model="form.companyName"
                    >
                        Företagsnamn
                    </AdTextfield>

                    <!-- E-post -->
                    <AdTextfield
                        ref="refs.emailInput"
                        :isRequired="true"
                        :width="'100%'"
                        :isValid="!errors.email"
                        :errorMessage="errors.email"
                        :description="''"
                        :infoText="'Atea Finance kommer att kontakta den angivna e-postadressen'"
                        v-model="form.email"
                    >
                        E-post
                    </AdTextfield>

                    <!-- Organisationsnummer -->
                    <AdTextfield
                        ref="refs.orgNumberInput"
                        :isRequired="true"
                        :width="'100%'"
                        :isValid="!errors.orgNumber"
                        :errorMessage="errors.orgNumber"
                        :description="''"
                        :infoText="'Organisationsnummer är obligatoriskt vid ansökningen.'"
                        v-model="form.orgNumber"
                    >
                        Organisationsnummer
                    </AdTextfield>

                    <!-- Information till ansökningen -->
                    <AdTextfield :width="'100%'" v-model="form.additionalInfo">
                        Information till ansökningen
                    </AdTextfield>

                    <!-- Buttons -->
                    <div style="display: flex; justify-content: space-between;">
                        <button type="button">Close</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        `,
    }),
};
