import{A as r}from"./checkbox-Cm3HkI4U.js";import{r as V,a as T}from"./vue.esm-bundler-BQHuR-zz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R={title:"components/Checkbox",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
------------

<br>
<br>

### Table of Contents
- [Playground](#default)
- [v-model binding example](#v-model-binding)
- [Indeterminate](#indeterminate)
- [Accessibility Guidelines](#accessibility-guidelines)
    <a id="default"></a>
    <br>
    <br>
    <br>
                `}}}},n={args:{label:"Checkbox input"}},o={render:i=>({components:{AdCheckbox:r},setup(){const e=V(!1);return{args:i,checkboxValue:e}},template:`
            <a id="v-model-binding"></a>

            <div>
                <AdCheckbox v-model="checkboxValue" label="Checkbox input" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Checkbox is: {{ checkboxValue ? 'Checked' : 'Unchecked' }}
                </p>
            </div>

            <button @click="checkboxValue = !checkboxValue">Toggle</button>
        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:`This is a code snippet for checkbox component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <AdCheckbox v-model="checkboxValue" label="Checkbox input" />

    <p>Checkbox is: {{ checkboxValue ? 'Checked' : 'Unchecked' }}</p>
</template>

<script setup>
import { ref } from 'vue';

const checkboxValue = ref(false);
<\/script>
\`\`\`
                `}}}},s=i=>{const e=T({parent:!1,indeterminate:!1,childs:[!1,!1,!1,!1]}),y=["Buy groceries","Go to gym","Get kids from school","Cook some food"],v=t=>{e.childs[t]=!e.childs[t];const w=e.childs.every(a=>a===!0),J=e.childs.some(a=>a===!0);w?(e.indeterminate=!1,e.parent=!0):J?(e.indeterminate=!0,e.parent=!1):(e.indeterminate=!1,e.parent=!1)},A=()=>{let t;e.indeterminate?t=!1:t=!e.parent,e.childs=e.childs.map(()=>t),e.indeterminate=!1,e.parent=t,console.log(e)};return{components:{AdCheckbox:r},setup(){return{args:i,checkboxJson:e,handleChildChange:v,handleParentChange:A,childLabels:y}},template:`
          <a id="indeterminate"></a>
    
          <div>
            <AdCheckbox
              v-model="checkboxJson.parent"
              :is-indeterminate="checkboxJson.indeterminate"
              @change="handleParentChange"
            >
              Pick daily tasks
            </AdCheckbox>
            <ul style="display: flex; flex-direction: column; gap: 16px; padding: 32px;">
              <li v-for="(child, index) in checkboxJson.childs" :key="index">
                <AdCheckbox
                  :is-checked="child"
                  @change="() => handleChildChange(index)"
                >
                  {{ childLabels[index] }}
                </AdCheckbox>
              </li>
            </ul>
          </div>
        `}},c={name:"Accessibility Guidelines",render:()=>({template:`
             <a id="accessibility-guidelines"></a> 
                The Checkbox component is used to provide a list of options where the user can select multiple options, including all or none. A checkbox control has three possible states indicated by the value of its aria-checked attribute, “true” when selected, “false” when unselected and “mixed” when in the indeterminate state. The indeterminate state comes into play when the checkbox contains a sublist of selections, some of which are selected, and some unselected.
<br>
<br>

The Tab key is used to move focus to each checkbox. Checkboxes identified as disabled are ignored in the tab order. The Space key is used to select and deselect each checkbox when the checkbox has focus. When the checkbox is selected the ARIA state is set to aria-checked="true" and when it is deselected aria-checked="false". An indeterminable checkbox has an ARIA state that is set to aria-checked="mixed" until it is selected or deselected by the user. Fieldset and Legend elements are used for labeling the checkbox group.
<br>
<br>
<b>Keyboard interactions</b>
Executes the button action. The focus remains on the button except if the button opens or closes the current container. In this case, the focus moves to the target or back to the caller.
<br>

<li>Space</li>
<br>
<br>

<b>WAI-ARIA Roles, States, and Properties</b>
<li>Checkboxes must have a clear and concise label.</li>
<li>Users should be warned if selecting a checkbox will cause a change in context.</li>
<li>If the checkbox is a required field include the aria-required property and indicate that it is a required field and use the validation message for input errors.</li>
<br>
<br>

<b>Assistive technology products should do the following:</b>
Screen readers should announce the element as a checkbox, and optionally provide instructions on how to activate it.`}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:"This story contains accessibility guidelines for using the AdCheckbox component."},source:{code:!1}},docsOnly:!0}};var l,d,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input"
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,u,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdCheckbox
    },
    setup() {
      const checkboxValue = ref(false);
      return {
        args,
        checkboxValue
      };
    },
    template: \`
            <a id="v-model-binding"></a>

            <div>
                <AdCheckbox v-model="checkboxValue" label="Checkbox input" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Checkbox is: {{ checkboxValue ? 'Checked' : 'Unchecked' }}
                </p>
            </div>

            <button @click="checkboxValue = !checkboxValue">Toggle</button>
        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: \`This is a code snippet for checkbox component to demonstrate **v-model** binding in Vue 3.

\\\`\\\`\\\`vue
<template>
    <AdCheckbox v-model="checkboxValue" label="Checkbox input" />

    <p>Checkbox is: {{ checkboxValue ? 'Checked' : 'Unchecked' }}</p>
</template>

<script setup>
import { ref } from 'vue';

const checkboxValue = ref(false);
<\/script>
\\\`\\\`\\\`
                \`
      }
    }
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,x,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => {
  const checkboxJson = reactive({
    parent: false,
    indeterminate: false,
    childs: [false, false, false, false]
  });
  const childLabels = ['Buy groceries', 'Go to gym', 'Get kids from school', 'Cook some food'];
  const handleChildChange = (index: number) => {
    checkboxJson.childs[index] = !checkboxJson.childs[index];
    const allChecked = checkboxJson.childs.every(v => v === true);
    const someChecked = checkboxJson.childs.some(v => v === true);
    if (allChecked) {
      checkboxJson.indeterminate = false;
      checkboxJson.parent = true;
    } else if (someChecked) {
      checkboxJson.indeterminate = true;
      checkboxJson.parent = false;
    } else {
      checkboxJson.indeterminate = false;
      checkboxJson.parent = false;
    }
  };
  const handleParentChange = () => {
    let newValue;
    if (checkboxJson.indeterminate) newValue = false;else newValue = !checkboxJson.parent;
    checkboxJson.childs = checkboxJson.childs.map(() => newValue);
    checkboxJson.indeterminate = false;
    checkboxJson.parent = newValue;
    console.log(checkboxJson);
  };
  return {
    components: {
      AdCheckbox
    },
    setup() {
      return {
        args,
        checkboxJson,
        handleChildChange,
        handleParentChange,
        childLabels
      };
    },
    template: \`
          <a id="indeterminate"></a>
    
          <div>
            <AdCheckbox
              v-model="checkboxJson.parent"
              :is-indeterminate="checkboxJson.indeterminate"
              @change="handleParentChange"
            >
              Pick daily tasks
            </AdCheckbox>
            <ul style="display: flex; flex-direction: column; gap: 16px; padding: 32px;">
              <li v-for="(child, index) in checkboxJson.childs" :key="index">
                <AdCheckbox
                  :is-checked="child"
                  @change="() => handleChildChange(index)"
                >
                  {{ childLabels[index] }}
                </AdCheckbox>
              </li>
            </ul>
          </div>
        \`
  };
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,g,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Accessibility Guidelines',
  render: () => ({
    template: \`
             <a id="accessibility-guidelines"></a> 
                The Checkbox component is used to provide a list of options where the user can select multiple options, including all or none. A checkbox control has three possible states indicated by the value of its aria-checked attribute, “true” when selected, “false” when unselected and “mixed” when in the indeterminate state. The indeterminate state comes into play when the checkbox contains a sublist of selections, some of which are selected, and some unselected.
<br>
<br>

The Tab key is used to move focus to each checkbox. Checkboxes identified as disabled are ignored in the tab order. The Space key is used to select and deselect each checkbox when the checkbox has focus. When the checkbox is selected the ARIA state is set to aria-checked="true" and when it is deselected aria-checked="false". An indeterminable checkbox has an ARIA state that is set to aria-checked="mixed" until it is selected or deselected by the user. Fieldset and Legend elements are used for labeling the checkbox group.
<br>
<br>
<b>Keyboard interactions</b>
Executes the button action. The focus remains on the button except if the button opens or closes the current container. In this case, the focus moves to the target or back to the caller.
<br>

<li>Space</li>
<br>
<br>

<b>WAI-ARIA Roles, States, and Properties</b>
<li>Checkboxes must have a clear and concise label.</li>
<li>Users should be warned if selecting a checkbox will cause a change in context.</li>
<li>If the checkbox is a required field include the aria-required property and indicate that it is a required field and use the validation message for input errors.</li>
<br>
<br>

<b>Assistive technology products should do the following:</b>
Screen readers should announce the element as a checkbox, and optionally provide instructions on how to activate it.\`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: 'This story contains accessibility guidelines for using the AdCheckbox component.'
      },
      source: {
        code: false // Hides the "Show code" button
      }
    },
    docsOnly: true // Hides the story from the sidebar
  }
}`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const G=["Default","vModelBinding","indeterminate","Accessibility"];export{c as Accessibility,n as Default,G as __namedExportsOrder,R as default,s as indeterminate,o as vModelBinding};
