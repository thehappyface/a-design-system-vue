import{o as x,d as w,j as s,n,q as A,t as S,s as R,m as k,u as _,x as I,r as q}from"./vue.esm-bundler-BQHuR-zz.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={name:"AdRadio",props:{modelValue:{type:[String,Number,Object,Array]},value:{type:[String,Number,Object,Array]},isDisabled:{type:Boolean,default:!1},isRequired:{type:Boolean,default:!1},isReadonly:{type:Boolean,default:!1},isAsterisk:{type:Boolean,default:!1},isValid:{type:Boolean,default:!0},width:{type:String,default:""},addClass:{type:String,default:""},ariaLabel:{type:String,default:""},ariaLabelledBy:{type:String,default:""},title:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},id:{type:String,default:()=>`radio-${crypto.randomUUID()}`}},emits:["update:modelValue"],methods:{inputChange(t){const a=t.target;a&&this.$emit("update:modelValue",a.value)}}},B=t=>(_("data-v-928536d5"),t=t(),I(),t),D=["name","aria-labelledby","aria-label","title","id","required","aria-required","disabled","tabindex","value","checked","aria-checked","aria-invalid"],C=["for"],N=B(()=>s("span",{tabindex:"-1"},null,-1));function j(t,a,e,L,O,d){return x(),w("div",{class:n(["ad__radio",e.addClass]),style:k({width:e.width})},[s("input",{role:"radio",type:"radio",name:e.name,"aria-labelledby":e.ariaLabelledBy,"aria-label":e.ariaLabel,title:e.title,id:e.id,required:e.isRequired,"aria-required":e.isRequired,class:n({asterisk:e.isAsterisk&&e.isRequired,invalid:!e.isValid&&!e.modelValue}),disabled:e.isDisabled,tabindex:e.isDisabled||e.isReadonly?"-1":"0",value:e.value,onChange:a[0]||(a[0]=(...V)=>d.inputChange&&d.inputChange(...V)),checked:e.value==e.modelValue,"aria-checked":e.value==e.modelValue,"aria-invalid":!e.isValid&&!e.modelValue},null,42,D),s("label",{tabindex:"-1",for:e.id,class:n({invalid:!e.isValid&&!e.modelValue,readonly:e.isReadonly})},[N,A(" "+S(e.label)+" ",1),R(t.$slots,"default",{},void 0,!0)],10,C)],6)}const v=T(g,[["render",j],["__scopeId","data-v-928536d5"]]);g.__docgenInfo={displayName:"AdRadio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number|object|array"}},{name:"value",type:{name:"string|number|object|array"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isRequired",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isReadonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isAsterisk",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isValid",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"addClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabelledBy",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => `radio-${crypto.randomUUID()}`"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/ERFRI/Repos/atea-component-library-vue/lib/components/radio/radio.vue"]};const F={title:"components/Radio",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`
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
                `}}}},o={args:{label:"Radio input",value:"2"}},i={render:t=>({components:{AdRadio:v},setup(){const a=q();return{args:t,selectedValue:a}},template:`
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
        `}),parameters:{controls:{exclude:/.*/g},docs:{toc:!0,description:{story:`This is a code snippet for Radio group component to demonstrate **v-model** binding in Vue 3.

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
<\/script>
\`\`\`
                `}}}},l={name:"Accessibility Guidelines",render:()=>({template:`
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
        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:"This story contains accessibility guidelines for using the AdRadio component."},source:{code:!1}},docsOnly:!0}};var r,u,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "Radio input",
    value: "2"
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var b,m,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdRadio
    },
    setup() {
      const selectedValue = ref<String | Number | Object>();
      return {
        args,
        selectedValue
      };
    },
    template: \`
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
        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      toc: true,
      description: {
        story: \`This is a code snippet for Radio group component to demonstrate **v-model** binding in Vue 3.

\\\`\\\`\\\`vue
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
<\/script>
\\\`\\\`\\\`
                \`
      }
    }
  }
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,h,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Accessibility Guidelines',
  render: () => ({
    template: \`
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
        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: 'This story contains accessibility guidelines for using the AdRadio component.'
      },
      source: {
        code: false // Hides the "Show code" button
      }
    },
    docsOnly: true // Hides the story from the sidebar
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const E=["Default","vModelBinding","Accessibility"];export{l as Accessibility,o as Default,E as __namedExportsOrder,F as default,i as vModelBinding};
