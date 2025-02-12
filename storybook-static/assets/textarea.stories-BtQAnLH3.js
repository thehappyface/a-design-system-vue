import{o as l,d as o,j as g,m as f,n as s,q as D,t as d,s as q,y as V,z as L,p as h,u as z,x as N,r as E}from"./vue.esm-bundler-BQHuR-zz.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={name:"AdTextarea",props:{modelValue:String,isValid:{type:Boolean,default:!0},isDisabled:Boolean,isRequired:Boolean,isReadonly:Boolean,isAsterisk:{type:Boolean,default:!0},resize:{type:Boolean,default:!0},isWhiteBackground:Boolean,maxCounterLength:Number,minLength:Number,maxLength:Number,width:String,addClass:String,errorMessage:String,description:String,label:String,ariaLabel:String,ariaLabelledBy:String,title:String,id:{type:String,default:()=>`textarea-${crypto.randomUUID()}`}},data(){return{internalValue:this.modelValue||"",textareaHeight:0}},watch:{modelValue(a){this.internalValue=a,this.autoReSize()}},methods:{handleInputChange(a){const t=a.target;t&&(this.internalValue=t.value,this.$emit("update:modelValue",t.value)),this.autoReSize()},autoReSize(){const a=this.$refs.textarea;a.style.height="0px",setTimeout(()=>{a.style.height=`${a.scrollHeight+2}px`},0)},removeValues(a){a.preventDefault(),this.internalValue="",this.$emit("update:modelValue",""),this.$refs.textarea.dispatchEvent(new Event("change",{bubbles:!0}))}},mounted(){this.autoReSize()}},U=a=>(z("data-v-6a9082a6"),a=a(),N(),a),W=["value","id","minlength","maxlength","readonly","tabindex","disabled","required","aria-required","aria-labelledby","aria-label","title","aria-invalid","aria-errormessage"],G=["for"],O=U(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[g("path",{d:"M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"})],-1)),F=[O],K=["id"];function j(a,t,e,P,i,n){var b,p,x,y,v;return l(),o("div",{class:s(["ad__textarea",e.addClass]),style:f({width:e.width})},[g("textarea",{ref:"textarea",value:i.internalValue,onInput:t[0]||(t[0]=(...r)=>n.handleInputChange&&n.handleInputChange(...r)),id:e.id,minlength:e.minLength,maxlength:e.maxLength,readonly:e.isReadonly,tabindex:e.isDisabled?"-1":"0",disabled:e.isDisabled,required:e.isRequired,"aria-required":e.isRequired,"aria-labelledby":e.ariaLabelledBy,"aria-label":e.ariaLabel,title:e.title,style:f({width:e.width,height:`${i.textareaHeight}px`}),class:s({invalid:!e.isValid,isWhiteBackground:e.isWhiteBackground}),"aria-invalid":!e.isValid,"aria-errormessage":e.errorMessage&&!e.isValid?`${e.id}-error`:""},null,46,W),g("label",{tabindex:"-1",for:e.id,class:s({active:((b=i.internalValue)==null?void 0:b.length)>0,required:e.isRequired,asterisk:e.isAsterisk})},[D(d(e.label),1),q(a.$slots,"default",{},void 0,!0)],10,G),((p=i.internalValue)==null?void 0:p.length)>0&&!e.isReadonly&&!e.isDisabled?(l(),o("span",{key:0,role:"button",class:"remove",tabindex:"0","aria-label":"Remove values",onClick:t[1]||(t[1]=(...r)=>n.removeValues&&n.removeValues(...r)),onKeydown:[t[2]||(t[2]=V(L((...r)=>n.removeValues&&n.removeValues(...r),["prevent"]),["space"])),t[3]||(t[3]=V(L((...r)=>n.removeValues&&n.removeValues(...r),["prevent"]),["enter"]))]},F,32)):h("",!0),(e.description||e.errorMessage&&!e.isValid)&&!e.isDisabled?(l(),o("span",{key:1,class:s([{invalid:!e.isValid},"helper"]),id:e.errorMessage&&!e.isValid?`${e.id}-error`:""},d(!e.isValid&&e.errorMessage?e.errorMessage:e.description),11,K)):h("",!0),e.maxCounterLength&&((x=i.internalValue)==null?void 0:x.length)>0?(l(),o("span",{key:2,class:s([{invalid:((y=i.internalValue)==null?void 0:y.length)>e.maxCounterLength},"counter"])},d((v=i.internalValue)==null?void 0:v.length)+" / "+d(e.maxCounterLength),3)):h("",!0)],6)}const M=H(I,[["render",j],["__scopeId","data-v-6a9082a6"]]);I.__docgenInfo={displayName:"AdTextarea",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"isValid",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"}},{name:"isRequired",type:{name:"boolean"}},{name:"isReadonly",type:{name:"boolean"}},{name:"isAsterisk",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"resize",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isWhiteBackground",type:{name:"boolean"}},{name:"maxCounterLength",type:{name:"number"}},{name:"minLength",type:{name:"number"}},{name:"maxLength",type:{name:"number"}},{name:"width",type:{name:"string"}},{name:"addClass",type:{name:"string"}},{name:"errorMessage",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"ariaLabel",type:{name:"string"}},{name:"ariaLabelledBy",type:{name:"string"}},{name:"title",type:{name:"string"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => `textarea-${crypto.randomUUID()}`"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/ERFRI/Repos/atea-component-library-vue/lib/components/textarea/textarea.vue"]};const Q={title:"components/Textarea",component:M,tags:["autodocs"],parameters:{docs:{description:{component:`
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
                `}}}},u={args:{label:"This is a textarea"}},m={render:a=>({components:{AdTextarea:M},setup(){const t=E();return{args:a,textareaValue:t}},template:`
            <a id="v-model-binding"></a>

            <div>
                <AdTextarea v-model="textareaValue" label="Textarea with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Value is: {{ textareaValue }}
                </p>
            </div>
            <button @click="textareaValue = 'My parent toggle'">Set text from parent</button>

        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:`This is a code snippet for textarea component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <AdTextarea v-model="textareaValue" label="Textarea with v-model binding" />
    <p>Value is: {{ textareaValue }}</p>


</template>

<script setup>
import { ref } from 'vue';

const textareaValue = ref();
<\/script>
\`\`\`
                `}}}},c={name:"Accessibility Guidelines",render:()=>({template:`
             <a id="accessibility-guidelines"></a> 
               
            <li> Labels must be visible when an input gets focus.</li>
<li>Labels must be announced to the screen reader on focus.</li>
<br>
<b>Assistive technology products should do the following:</b>
<br>
Ensure the helper text that appears under an input is read when an assistive technology user stops at an input using ARIA.
<br>
Screen readers should announce the element as a textarea with type.
        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:"This story contains accessibility guidelines for using the AdSwitch component."},source:{code:!1}},docsOnly:!0}};var w,S,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "This is a textarea"
  }
}`,...(A=(S=u.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var T,B,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdTextarea
    },
    setup() {
      const textareaValue = ref();
      return {
        args,
        textareaValue
      };
    },
    template: \`
            <a id="v-model-binding"></a>

            <div>
                <AdTextarea v-model="textareaValue" label="Textarea with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Value is: {{ textareaValue }}
                </p>
            </div>
            <button @click="textareaValue = 'My parent toggle'">Set text from parent</button>

        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: \`This is a code snippet for textarea component to demonstrate **v-model** binding in Vue 3.

\\\`\\\`\\\`vue
<template>
    <AdTextarea v-model="textareaValue" label="Textarea with v-model binding" />
    <p>Value is: {{ textareaValue }}</p>


</template>

<script setup>
import { ref } from 'vue';

const textareaValue = ref();
<\/script>
\\\`\\\`\\\`
                \`
      }
    }
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var _,k,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Accessibility Guidelines',
  render: () => ({
    template: \`
             <a id="accessibility-guidelines"></a> 
               
            <li> Labels must be visible when an input gets focus.</li>
<li>Labels must be announced to the screen reader on focus.</li>
<br>
<b>Assistive technology products should do the following:</b>
<br>
Ensure the helper text that appears under an input is read when an assistive technology user stops at an input using ARIA.
<br>
Screen readers should announce the element as a textarea with type.
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
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const X=["Default","vModelBinding","Accessibility"];export{c as Accessibility,u as Default,X as __namedExportsOrder,Q as default,m as vModelBinding};
