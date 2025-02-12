import{S as G}from"./svg-icon-DaDAGzU3.js";import{I as Q,a as X,b as Y,c as $,d as ee,e as ne}from"./input-container-PX8FxXT9.js";import{A as te,B as ie,o as r,d as ae,g as T,e as l,f as s,w as o,p as u,j as _,n as c,q as h,t as g,s as re,m as le,r as m}from"./vue.esm-bundler-BQHuR-zz.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const se={class:"ad__input--icon"},W=te({__name:"icon",props:{icon:{}},setup(i){const n=i,e=ie(()=>`https://design.atea.com/assets/icons/${n.icon}.svg`);return(I,t)=>(r(),ae("div",se,[T(G,{url:e.value},null,8,["url"])]))}}),oe=z(W,[["__scopeId","data-v-003bd83e"]]);W.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"string"}}],sourceFiles:["/Users/ERFRI/Repos/atea-component-library-vue/lib/shared/input/icon.vue"]};const de={en:{readOnly:"Read only"},sv:{readOnly:"Endast läsning"},da:{readOnly:"Kun læsning"},no:{readOnly:"Kun lesing"},fi:{readOnly:"Vain luku"},lt:{readOnly:"Tik skaitymui"},et:{readOnly:"Ainult lugemiseks"},lv:{readOnly:"Tikai lasīšanai"}},K={name:"AdTextfield",components:{SvgIcon:G,InputInfo:Q,InputLoading:X,InputIconBtn:Y,InputHelpText:$,InputLabel:ee,InputContainer:ne,InputIcon:oe},props:{modelValue:String,type:{type:String,default:"text"},icon:String,autocomplete:{type:String,default:"off"},isValid:{type:Boolean,default:!0},isDisabled:Boolean,isRequired:Boolean,isAsterisk:{type:Boolean,default:!0},isReadonly:Boolean,isWhiteBackground:Boolean,maxCounterLength:Number,minLength:Number,maxLength:Number,min:Number,max:Number,pattern:String,width:String,addClass:String,description:String,errorMessage:String,label:String,ariaLabel:String,ariaLabelledBy:String,title:String,infoText:String,isLoading:Boolean,id:{type:String,default:()=>`textfield-${crypto.randomUUID()}`},setLanguage:{type:String,default:"en",validator(i){return["en","sv","da","no","fi","lt","et","lv"].includes(i.toString())}}},data(){return{internalValue:this.modelValue||"",_isValid:this.isValid,_showInfoText:!1,translations:de}},watch:{modelValue(i){this.internalValue=i},isValid(i){this._isValid=i}},methods:{handleInputChange(i){const n=i.target;n&&(this.internalValue=n.value,this.$emit("update:modelValue",n.value))},removeValues(i){i.preventDefault(),this.internalValue="",this.$emit("update:modelValue",""),this.$refs.textfield.dispatchEvent(new Event("change",{bubbles:!0}))}}},ue=["type","value","id","minlength","maxlength","min","max","disabled","tabindex","autocomplete","required","aria-required","aria-labelledby","aria-label","title","pattern","readonly","aria-invalid","aria-errormessage"],me=_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[_("path",{d:"M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"})],-1);function ce(i,n,e,I,t,f){const a=l("InputIcon"),d=l("InputLabel"),p=l("InputIconBtn"),N=l("InputHelpText"),P=l("InputLoading"),Z=l("InputContainer"),J=l("input-info");return r(),s(J,{description:e.isReadonly||e.isDisabled?"":e.infoText,width:e.width,invalid:!t._isValid,id:e.id+"description",rightIndent:(e.maxCounterLength??0)>0,onShowInfoText:n[1]||(n[1]=b=>t._showInfoText=b)},{default:o(()=>[T(Z,{class:c(["ad__textfield",{isWhiteBackground:e.isWhiteBackground,disabled:e.isDisabled,invalid:!t._isValid,readonly:e.isReadonly,indent:e.isLoading||e.icon}]),style:le({width:e.width})},{default:o(()=>{var b,L,w,S;return[e.icon&&!e.isLoading?(r(),s(a,{key:0,icon:e.icon},null,8,["icon"])):u("",!0),_("input",{ref:"textfield",type:e.type,value:t.internalValue,onInput:n[0]||(n[0]=(...y)=>f.handleInputChange&&f.handleInputChange(...y)),id:e.id,minlength:e.minLength,maxlength:e.maxLength,min:e.min,max:e.max,disabled:e.isDisabled,tabindex:e.isDisabled?"-1":"0",autocomplete:e.autocomplete,required:e.isRequired,"aria-required":e.isRequired,"aria-labelledby":e.ariaLabelledBy,"aria-label":e.ariaLabel,title:e.title,pattern:e.pattern,readonly:e.isReadonly,"aria-invalid":!e.isValid,"aria-errormessage":e.isValid&&e.errorMessage?`${e.id}-error`:""},null,40,ue),T(d,{for:e.id,class:c({active:((b=t.internalValue)==null?void 0:b.length)>0,required:e.isRequired,asterisk:e.isRequired&&e.isAsterisk,indent:e.isLoading||e.icon,disabled:e.isDisabled})},{default:o(()=>[h(g(e.label),1),re(i.$slots,"default")]),_:3},8,["for","class"]),((L=t.internalValue)==null?void 0:L.length)>0&&!e.isReadonly&&!e.isDisabled?(r(),s(p,{key:1,class:c(["remove__button",{hasInfoText:e.infoText}]),tabindex:"0","aria-label":"Remove value",title:"Remove value",onClick:f.removeValues},{default:o(()=>[me]),_:1},8,["onClick","class"])):u("",!0),(e.description||e.errorMessage&&!t._isValid)&&!e.isDisabled&&!e.isReadonly?(r(),s(N,{key:2,class:c({invalid:!t._isValid,rightIndent:(e.maxCounterLength??0)>0}),id:t._isValid?"":e.id+"-error"},{default:o(()=>[h(g(t._isValid?t._showInfoText?"":e.description:e.errorMessage),1)]),_:1},8,["class","id"])):u("",!0),e.isReadonly?(r(),s(N,{key:3,class:"readonly"},{default:o(()=>[h(g(t.translations[e.setLanguage].readOnly),1)]),_:1})):u("",!0),e.maxCounterLength&&((w=t.internalValue)==null?void 0:w.length)>0?(r(),s(N,{key:4,class:c([{invalid:((S=t.internalValue)==null?void 0:S.length)>e.maxCounterLength},"isCounter"])},{default:o(()=>{var y;return[h(g((y=t.internalValue)==null?void 0:y.length)+" / "+g(e.maxCounterLength),1)]}),_:1},8,["class"])):u("",!0),e.isLoading?(r(),s(P,{key:5})):u("",!0)]}),_:3},8,["class","style"])]),_:3},8,["description","width","invalid","id","rightIndent"])}const A=z(K,[["render",ce]]);K.__docgenInfo={displayName:"AdTextfield",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"text"'}},{name:"icon",type:{name:"string"}},{name:"autocomplete",type:{name:"string"},defaultValue:{func:!1,value:'"off"'}},{name:"isValid",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isDisabled",type:{name:"boolean"}},{name:"isRequired",type:{name:"boolean"}},{name:"isAsterisk",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isReadonly",type:{name:"boolean"}},{name:"isWhiteBackground",type:{name:"boolean"}},{name:"maxCounterLength",type:{name:"number"}},{name:"minLength",type:{name:"number"}},{name:"maxLength",type:{name:"number"}},{name:"min",type:{name:"number"}},{name:"max",type:{name:"number"}},{name:"pattern",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"addClass",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"errorMessage",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"ariaLabel",type:{name:"string"}},{name:"ariaLabelledBy",type:{name:"string"}},{name:"title",type:{name:"string"}},{name:"infoText",type:{name:"string"}},{name:"isLoading",type:{name:"boolean"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => `textfield-${crypto.randomUUID()}`"}},{name:"setLanguage",type:{name:"string"},defaultValue:{func:!1,value:'"en"'}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/ERFRI/Repos/atea-component-library-vue/lib/components/textfield/textfield.vue"]};const ye={title:"components/Textfield",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
                `}}}},v={args:{label:"This is a cool switch"}},x={render:i=>({components:{AdTextfield:A},setup(){const n=m();return{args:i,textfieldValue:n}},template:`
            <a id="v-model-binding"></a>

            <div>
                <AdTextfield v-model="textfieldValue" label="Textfield with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Value is: {{ textfieldValue }}
                </p>
            </div>
            <button @click="textfieldValue = 'My parent toggle'">Set text from parent</button>

        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:`This is a code snippet for textfield component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
    <AdTextfield v-model="textfieldValue" label="Textfield with v-model binding" />
    <p>Value is: {{ textfieldValue }}</p>


</template>

<script setup>
import { ref } from 'vue';

const textfieldValue = ref();
<\/script>
\`\`\`
                `}}}},k={name:"Accessibility Guidelines",render:()=>({template:`
             <a id="accessibility-guidelines"></a> 
               
            <li> Labels must be visible when an input gets focus.</li>
<li>Labels must be announced to the screen reader on focus.</li>
<br>
<b>Assistive technology products should do the following:</b>
<br>
Ensure the helper text that appears under an input is read when an assistive technology user stops at an input using ARIA.
<br>
Screen readers should announce the element as a textfield with type.
        `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:"This story contains accessibility guidelines for using the AdSwitch component."},source:{code:!1}},docsOnly:!0}},V={render:i=>({components:{AdTextfield:A},setup(){const n=m({companyName:"",email:"",orgNumber:"",additionalInfo:""}),e=m({companyName:null,email:null,orgNumber:null}),I={companyNameInput:m(null),emailInput:m(null),orgNumberInput:m(null)},t=()=>{const a={companyName:null,email:null,orgNumber:null};return n.value.companyName||(a.companyName="Företagsnamn är obligatoriskt."),n.value.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value.email)||(a.email="Ange en giltig e-postadress."):a.email="E-post är obligatoriskt.",n.value.orgNumber?/^\d+$/.test(n.value.orgNumber)||(a.orgNumber="Organisationsnummer måste endast innehålla siffror."):a.orgNumber="Organisationsnummer är obligatoriskt.",e.value=a,!Object.values(a).some(d=>d!==null)};return{args:i,form:n,errors:e,refs:I,handleSubmit:()=>{t()?alert("Form submitted successfully!"):setTimeout(()=>{var a,d,p;(p=(d=(a=document.querySelector("form"))==null?void 0:a.querySelector(".invalid"))==null?void 0:d.querySelector("input"))==null||p.focus()},0)}}},template:`
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
        `})};var F,R,E;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "This is a cool switch"
  }
}`,...(E=(R=v.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var q,B,C;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdTextfield
    },
    setup() {
      const textfieldValue = ref();
      return {
        args,
        textfieldValue
      };
    },
    template: \`
            <a id="v-model-binding"></a>

            <div>
                <AdTextfield v-model="textfieldValue" label="Textfield with v-model binding" />

                <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                    Value is: {{ textfieldValue }}
                </p>
            </div>
            <button @click="textfieldValue = 'My parent toggle'">Set text from parent</button>

        \`
  }),
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      description: {
        story: \`This is a code snippet for textfield component to demonstrate **v-model** binding in Vue 3.

\\\`\\\`\\\`vue
<template>
    <AdTextfield v-model="textfieldValue" label="Textfield with v-model binding" />
    <p>Value is: {{ textfieldValue }}</p>


</template>

<script setup>
import { ref } from 'vue';

const textfieldValue = ref();
<\/script>
\\\`\\\`\\\`
                \`
      }
    }
  }
}`,...(C=(B=x.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,D,M;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
Screen readers should announce the element as a textfield with type.
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
}`,...(M=(D=k.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var H,U,j;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdTextfield
    },
    setup() {
      // Define the types for the form fields and errors
      interface FormFields {
        companyName: string;
        email: string;
        orgNumber: string;
        additionalInfo: string;
      }
      type Errors = { [K in keyof Pick<FormFields, 'companyName' | 'email' | 'orgNumber'>]: string | null };
      const form = ref<FormFields>({
        companyName: '',
        email: '',
        orgNumber: '',
        additionalInfo: ''
      });
      const errors = ref<Errors>({
        companyName: null,
        email: null,
        orgNumber: null
      });

      // Define the refs object with explicit types for input refs
      const refs = {
        companyNameInput: ref<HTMLElement | null>(null),
        emailInput: ref<HTMLElement | null>(null),
        orgNumberInput: ref<HTMLElement | null>(null)
      };
      const validateForm = () => {
        const validationErrors: Errors = {
          companyName: null,
          email: null,
          orgNumber: null
        };
        if (!form.value.companyName) {
          validationErrors.companyName = 'Företagsnamn är obligatoriskt.';
        }
        if (!form.value.email) {
          validationErrors.email = 'E-post är obligatoriskt.';
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.value.email)) {
          validationErrors.email = 'Ange en giltig e-postadress.';
        }
        if (!form.value.orgNumber) {
          validationErrors.orgNumber = 'Organisationsnummer är obligatoriskt.';
        } else if (!/^\\d+$/.test(form.value.orgNumber)) {
          validationErrors.orgNumber = 'Organisationsnummer måste endast innehålla siffror.';
        }
        errors.value = validationErrors;
        return !Object.values(validationErrors).some(error => error !== null);
      };
      const handleSubmit = () => {
        if (!validateForm()) {
          setTimeout(() => {
            document.querySelector("form")?.querySelector(".invalid")?.querySelector("input")?.focus();
          }, 0);
        } else {
          alert('Form submitted successfully!');
        }
      };
      return {
        args,
        form,
        errors,
        refs,
        handleSubmit
      };
    },
    template: \`
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
        \`
  })
}`,...(j=(U=V.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const he=["Default","vModelBinding","Accessibility","FinanceRequestForm"];export{k as Accessibility,v as Default,V as FinanceRequestForm,he as __namedExportsOrder,ye as default,x as vModelBinding};
