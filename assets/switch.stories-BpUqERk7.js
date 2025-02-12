import{o as r,d as u,j as i,n as s,m,q as A,t as f,s as C,p as T,r as B}from"./vue.esm-bundler-BQHuR-zz.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={name:"AdSwitch",props:{modelValue:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},isReadonly:{type:Boolean,default:!1},isReverse:{type:Boolean,default:!1},width:{type:String,default:""},addClass:{type:String,default:""},ariaLabel:{type:String,default:""},ariaLabelledBy:{type:String,default:""},title:{type:String,default:""},role:{type:String,default:"switch"},label:{type:String,default:""},description:{type:String,default:""},id:{type:String,default:()=>`switch-${crypto.randomUUID()}`}},emits:["update:modelValue"],data(){return{isInitialize:!1}},mounted(){this.isInitialize=!0},methods:{inputChange(a){const t=a.target;t&&this.$emit("update:modelValue",t.checked)},triggerSwitchClick(){this.$refs.switch.click()}}},D=["aria-labelledby","aria-label","role","title","disabled","tabindex","id","value","checked","aria-checked","readonly"],R={class:"switch--label"},z={key:0,class:"switch--description"};function I(a,t,e,L,k,n){return r(),u("div",{class:s(["ad__switch",e.addClass]),style:m({width:e.width})},[i("input",{type:"checkbox",class:s({reverse:e.isReverse}),"aria-labelledby":e.ariaLabelledBy,"aria-label":e.ariaLabel,role:e.role,title:e.title,disabled:e.isDisabled,tabindex:e.isDisabled||e.isReadonly?"-1":"0",id:e.id,value:e.modelValue,onChange:t[0]||(t[0]=(...d)=>n.inputChange&&n.inputChange(...d)),checked:e.modelValue,"aria-checked":e.modelValue,readonly:e.isReadonly,ref:"switch"},null,42,D),i("label",{tabindex:"-1",class:s({reverse:e.isReverse})},[i("span",{role:"button",onClick:t[1]||(t[1]=(...d)=>n.triggerSwitchClick&&n.triggerSwitchClick(...d)),class:s(["ad__switch--toggle",{readonly:e.isReadonly,"no-transition":!k.isInitialize}])},null,2),i("div",{class:"ad__switch--text",style:m({marginTop:e.description.length>0?"-8px":""})},[i("span",R,[A(f(e.label)+" ",1),C(a.$slots,"default",{},void 0,!0)]),e.description.length>0?(r(),u("span",z,f(e.description),1)):T("",!0)],4)],2)],6)}const _=O(x,[["render",I],["__scopeId","data-v-c3102895"]]);x.__docgenInfo={displayName:"AdSwitch",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isReadonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isReverse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"addClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabelledBy",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"role",type:{name:"string"},defaultValue:{func:!1,value:"'switch'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => `switch-${crypto.randomUUID()}`"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/a-design-system-vue/a-design-system-vue/lib/components/switch/switch.vue"]};const U={title:"components/Switch",component:_,tags:["autodocs"],parameters:{docs:{description:{component:`
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
                `}}}},l={args:{label:"This is a cool switch"}},o={render:a=>({components:{AdSwitch:_},setup(){const t=B(!1);return{args:a,switchValue:t}},template:`
            <a id="v-model-binding"></a>

            <div>
                <AdSwitch v-model="switchValue" label="Switch with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Switch is: {{ switchValue ? 'On' : 'Off' }}
                </p>
            </div>
            <button @click="switchValue = !switchValue">Toggle</button>

        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:`This is a code snippet for switch component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <AdSwitch v-model="switchValue" />
    <p>Switch is: {{ switchValue ? 'On' : 'Off' }}</p>


</template>

<script setup>
import { ref } from 'vue';

const switchValue = ref(false);
<\/script>
\`\`\`
                `}}}},c={name:"Accessibility Guidelines",render:()=>({template:`
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
        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:"This story contains accessibility guidelines for using the AdSwitch component."},source:{code:!1}},docsOnly:!0}};var h,p,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "This is a cool switch"
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,y,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdSwitch
    },
    setup() {
      const switchValue = ref(false);
      return {
        args,
        switchValue
      };
    },
    template: \`
            <a id="v-model-binding"></a>

            <div>
                <AdSwitch v-model="switchValue" label="Switch with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Switch is: {{ switchValue ? 'On' : 'Off' }}
                </p>
            </div>
            <button @click="switchValue = !switchValue">Toggle</button>

        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: \`This is a code snippet for switch component to demonstrate **v-model** binding in Vue 3.

\\\`\\\`\\\`vue
<template>
    <AdSwitch v-model="switchValue" />
    <p>Switch is: {{ switchValue ? 'On' : 'Off' }}</p>


</template>

<script setup>
import { ref } from 'vue';

const switchValue = ref(false);
<\/script>
\\\`\\\`\\\`
                \`
      }
    }
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,V,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Accessibility Guidelines',
  render: () => ({
    template: \`
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
        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: 'This story contains accessibility guidelines for using the AdSwitch component.'
      },
      source: {
        code: false // Hides the "Show code" button
      }
    },
    docsOnly: true // Hides the story from the sidebar
  }
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const G=["Default","vModelBinding","Accessibility"];export{c as Accessibility,l as Default,G as __namedExportsOrder,U as default,o as vModelBinding};
