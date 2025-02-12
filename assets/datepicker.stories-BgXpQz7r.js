import{I as X,a as $,b as ee,c as te,d as ae,e as ne}from"./input-container-Dd1GaaSs.js";import{e as y,o as d,f as p,w as u,g as S,j as s,d as x,k as ie,F as A,l as C,v as T,n as o,m as R,t as f,p as g,q as I,s as le,u as re,x as se,r as M}from"./vue.esm-bundler-BQHuR-zz.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={name:"AdDatepicker",components:{InputInfo:X,InputLoading:$,InputIconBtn:ee,InputHelpText:te,InputLabel:ae,InputContainer:ne},props:{icon:String,isDisabled:Boolean,isValid:{type:Boolean,default:!0},isRequired:Boolean,isAsterisk:{type:Boolean,default:!0},isReadonly:{type:Boolean,default:!1},isWhiteBackground:Boolean,isLoading:Boolean,addClass:String,description:String,errorMessage:{type:String,default:""},ariaLabel:{type:String,default:"Date value"},label:String,width:String,id:{type:String,default:()=>`datepicker-${crypto.randomUUID()}`},setLanguage:{type:String,default:"en",validator(e){return["en","sv","da","no","fi","lt","et","lv"].includes(e)}},format:{type:String,default:"yyyy-mm-dd",validator(e){return["yyyy-mm-dd","dd-mm-yyyy","dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","dd.mm.yyyy"].includes(e)}},modelValue:{type:String,default:""},minDate:{type:String,default:""},maxDate:{type:String,default:""},infoText:String},data(){return{selectedFormat:this.format,dateParts:["","",""],resetElement:!1,_errorMessage:"",_isValid:this.isValid,_showInfoText:!1,isSafari:!1,translations:{en:{invalidDate:"Invalid date",underMinDate:"Min date:",overMaxDate:"Max date:",readOnly:"Read only"},sv:{invalidDate:"Ogiltigt datum",underMinDate:"Min datum:",overMaxDate:"Max datum:",readOnly:"Endast läsning"},da:{invalidDate:"Ugyldig dato",underMinDate:"Min dato:",overMaxDate:"Max dato:",readOnly:"Kun læsning"},no:{invalidDate:"Ugyldig dato",underMinDate:"Min dato:",overMaxDate:"Max dato:",readOnly:"Kun lesing"},fi:{invalidDate:"Virheellinen päivämäärä",underMinDate:"Minimi päivämäärä:",overMaxDate:"Maksimi päivämäärä:",readOnly:"Vain luku"},lt:{invalidDate:"Neteisinga data",underMinDate:"Minimali data:",overMaxDate:"Maksimali data:",readOnly:"Tik skaitymui"},et:{invalidDate:"Vigane kuupäev",underMinDate:"Miinimum kuupäev:",overMaxDate:"Maksimum kuupäev:",readOnly:"Ainult lugemiseks"},lv:{invalidDate:"Nederīgs datums",underMinDate:"Minimālais datums:",overMaxDate:"Maksimālais datums:",readOnly:"Tikai lasīšanai"}}}},computed:{formatParts(){return this.selectedFormat.toLowerCase().split(/[^a-z]/)},separator(){return this.selectedFormat.includes(".")?".":this.selectedFormat.includes("/")?"/":"-"},hiddenDateValue:{get(){const[e,n,t]=this.reorderPartsForISO();return e&&n&&t?`${e}-${n.padStart(2,"0")}-${t.padStart(2,"0")}`:""},set(e){if(e){const[n,t,l]=e.split("-");this.dateParts=this.reorderPartsFromISO([n,t,l]),this.$emit("update:modelValue",e)}}}},watch:{modelValue:{immediate:!0,handler(e){this.hiddenDateValue=e,this.hiddenDateValue&&this.setAsInvalid(this.hiddenDateValue)}},format(e){this.selectedFormat=e,this.removeValues()},isValid(e){this._isValid=e,this.setErrorMessage()}},mounted(){this.checkSafari(),this.isValid||this.setErrorMessage()},methods:{checkSafari(){const e=navigator.userAgent;this.isSafari=e.includes("Safari")&&!e.includes("Chrome")&&!e.includes("Edg")},handlePartInput(e){const n=this.dateParts[e];this.dateParts[e]=n.replace(/\D/g,"").slice(0,this.formatParts[e].length),this.dateParts[e].length===this.formatParts[e].length&&e<this.formatParts.length-1?this.focusNextInput(e):this.dateParts[e].length===this.formatParts[e].length&&this.validateAndSyncDate()},focusNextInput(e){const n=this.$refs.dateInput[e+1];n&&n.focus()},focusFirstInput(){this.$refs.dateInput[0].focus()},selectAllText(e){e.target.select()},validateAndSyncDate(){const[e,n,t]=this.reorderPartsForISO();if(e&&n&&t){const l=`${e}-${n.padStart(2,"0")}-${t.padStart(2,"0")}`;this.setAsInvalid(l)&&(this.hiddenDateValue=l)}this.$refs.hiddenDate.value=this.hiddenDateValue},isValidDate(e){const n=new Date(e);return!isNaN(n.getTime())&&e===n.toISOString().split("T")[0]},isWithinRange(e){const n=l=>{const[a,i,h]=l.split("-"),Y={yyyy:a,mm:i,dd:h};return this.formatParts.map(D=>Y[D]||"").join(this.separator)},t=this.translations[this.setLanguage]||this.translations.en;if(this.minDate&&e<this.minDate){const l=n(this.minDate);return this._errorMessage=`${t.underMinDate} ${l}`,!1}if(this.maxDate&&e>this.maxDate){const l=n(this.maxDate);return this._errorMessage=`${t.overMaxDate} ${l}`,!1}return!0},setAsInvalid(e){const n=this.isValidDate(e)&&this.isWithinRange(e);return this._isValid=n,n?(this._errorMessage="",!0):(this.setErrorMessage(),!1)},setErrorMessage(){this.errorMessage?this._errorMessage=this.errorMessage:this._errorMessage=this._errorMessage||this.translations[this.setLanguage].invalidDate||this.translations.en.invalidDate},openDatePickerWithKeyboard(e){(e.code==="Enter"||e.code==="Space")&&(e.preventDefault(),this.openDatePicker(),this.isSafari||e.target.blur())},openDatePicker(e){e.preventDefault(),this.isPickerOpenByKeyboard||this.$refs.hiddenDate.showPicker()},syncPartsWithDate(){const e=this.$refs.hiddenDate.value;this.hiddenDateValue=e,this.setAsInvalid(e)},reorderPartsForISO(){const e=["yyyy","mm","dd"],n=this.formatParts.map((l,a)=>[l,this.dateParts[a]]);return e.map(l=>{const a=n.find(([i])=>i===l);return a?a[1]:""})},reorderPartsFromISO([e,n,t]){const l={yyyy:e,mm:n,dd:t};return this.formatParts.map(a=>l[a]||"")},removeValues(){this.dateParts=["","",""],this.hiddenDateValue="",this.setErrorMessage(),this.$emit("update:modelValue","")}}},j=e=>(re("data-v-f5078680"),e=e(),se(),e),oe={class:"ad__datepicker--value",role:"group","aria-labelledby":"datepicker-label"},ue=["aria-label","maxlength","onUpdate:modelValue","onInput","placeholder","readonly","disabled"],me=j(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M17.0001 13H12.0001V18H17.0001V13ZM16.0001 2V4H8.00012V2H6.00012V4H5.00012C4.73798 4.00012 4.47845 4.05201 4.23641 4.15268C3.99438 4.25336 3.7746 4.40084 3.58971 4.58666C3.40481 4.77249 3.25843 4.993 3.15897 5.23553C3.05951 5.47807 3.00893 5.73786 3.01012 6L3.00012 20C3.00005 20.2627 3.05173 20.5228 3.15221 20.7655C3.2527 21.0081 3.40001 21.2286 3.58574 21.4144C3.77148 21.6001 3.99198 21.7474 4.23467 21.8479C4.47735 21.9484 4.73746 22.0001 5.00012 22H19.0001C19.5301 21.9984 20.0379 21.7872 20.4126 21.4125C20.7874 21.0378 20.9986 20.53 21.0001 20V6C20.9986 5.47004 20.7874 4.96224 20.4126 4.5875C20.0379 4.21276 19.5301 4.00155 19.0001 4H18.0001V2H16.0001ZM19.0001 20H5.00012V9H19.0001V20Z"})],-1)),ce=["aria-label","tabindex","readonly","aria-readonly","disabled","aria-disabled","min","max"],ye=j(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"})],-1));function pe(e,n,t,l,a,i){const h=y("InputIconBtn"),Y=y("InputLabel"),D=y("InputHelpText"),G=y("InputLoading"),J=y("InputContainer"),Q=y("input-info");return d(),p(Q,{description:t.isReadonly||t.isDisabled?"":t.infoText,width:t.width,invalid:!a._isValid,id:t.id+"description",onShowInfoText:n[7]||(n[7]=v=>a._showInfoText=v)},{default:u(()=>{var v;return[S(J,{class:o(["ad__datepicker",{isWhiteBackground:t.isWhiteBackground,disabled:t.isDisabled,invalid:!a._isValid,active:((v=i.hiddenDateValue)==null?void 0:v.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0,readonly:t.isReadonly,indent:t.isLoading||t.icon}]),id:t.id+"container",style:R({width:t.width})},{default:u(()=>{var P,F,w,L;return[s("div",oe,[s("button",{type:"button",class:"ad__datepicker--bg-btn",onClick:n[0]||(n[0]=(...r)=>i.focusFirstInput&&i.focusFirstInput(...r)),tabindex:"-1","aria-hidden":"true"}),(d(!0),x(A,null,ie(i.formatParts,(r,m)=>{var O;return d(),x(A,{key:m},[C(s("input",{"aria-label":r.length,maxlength:r.length,type:"tel","onUpdate:modelValue":c=>a.dateParts[m]=c,onInput:c=>i.handlePartInput(m),onBlur:n[1]||(n[1]=(...c)=>i.validateAndSyncDate&&i.validateAndSyncDate(...c)),onFocus:n[2]||(n[2]=(...c)=>i.selectAllText&&i.selectAllText(...c)),placeholder:r.toUpperCase(),ref_for:!0,ref:"dateInput",class:o(["ad__datepicker--input",{hasValue:((O=i.hiddenDateValue)==null?void 0:O.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0}]),style:R({width:r.length>2?"56px":"38px"}),readonly:t.isReadonly,disabled:t.isDisabled},null,46,ue),[[T,a.dateParts[m]]]),m<i.formatParts.length-1?(d(),x("span",{key:`separator-${m}`,"aria-hidden":"true"},f(i.separator),1)):g("",!0)],64)}),128))]),S(h,{role:a.isSafari?null:"button",type:e.button,tabindex:!a.isSafari||t.isReadonly||t.isDisabled?t.isReadonly||t.isDisabled?"-1":0:t.isReadonly||t.isDisabled?null:"-1",onClick:n[3]||(n[3]=r=>!a.isSafari&&!t.isReadonly?i.openDatePicker(r):null),onKeyup:i.openDatePickerWithKeyboard,"aria-label":"Show datepicker",class:o({hasValue:((P=i.hiddenDateValue)==null?void 0:P.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0,disabled:t.isDisabled||t.isReadonly,hasInfoText:t.infoText})},{default:u(()=>[me]),_:1},8,["role","type","tabindex","onKeyup","class"]),C(s("input",{"aria-label":t.ariaLabel,id:"hiddenDateInput",type:"date","onUpdate:modelValue":n[4]||(n[4]=r=>i.hiddenDateValue=r),ref:"hiddenDate",tabindex:a.isSafari?0:-1,readonly:t.isReadonly,"aria-readonly":t.isReadonly,disabled:t.isDisabled||t.isReadonly,"aria-disabled":t.isDisabled,min:t.minDate,max:t.maxDate,onChange:n[5]||(n[5]=(...r)=>i.syncPartsWithDate&&i.syncPartsWithDate(...r)),class:o({"safari-only":a.isSafari,hasValue:((F=i.hiddenDateValue)==null?void 0:F.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0,disabled:t.isDisabled||t.isReadonly})},null,42,ce),[[T,i.hiddenDateValue]]),!(t.isDisabled||t.isReadonly)&&(((w=i.hiddenDateValue)==null?void 0:w.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0)?(d(),p(h,{key:0,class:o(["remove__button",{hasInfoText:t.infoText}]),tabindex:"0","aria-label":"Remove value",title:"Remove value",onClick:n[6]||(n[6]=r=>i.removeValues())},{default:u(()=>[ye]),_:1},8,["class"])):g("",!0),S(Y,{id:"datepicker-label",class:o({active:((L=i.hiddenDateValue)==null?void 0:L.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0,required:t.isRequired,asterisk:t.isRequired&&t.isAsterisk,indent:t.isLoading,disabled:t.isDisabled})},{default:u(()=>{var r;return[I(f(t.label)+" ",1),le(e.$slots,"default",{},void 0,!0),s("span",{id:"datepicker-select-format",class:o({hasValue:((r=i.hiddenDateValue)==null?void 0:r.length)>0||a.dateParts[0].length>0||a.dateParts[1].length>0||a.dateParts[2].length>0})},"("+f(a.selectedFormat)+")",3)]}),_:3},8,["class"]),(t.description||a._errorMessage&&!a._isValid)&&!t.isDisabled&&!t.isReadonly?(d(),p(D,{key:1,class:o({invalid:!a._isValid}),id:a._isValid?"":t.id+"-error"},{default:u(()=>[I(f(a._isValid?a._showInfoText?"":t.description:a._errorMessage),1)]),_:1},8,["class","id"])):g("",!0),t.isReadonly?(d(),p(D,{key:2,class:"readonly"},{default:u(()=>[I(f(a.translations[t.setLanguage].readOnly),1)]),_:1})):g("",!0),t.isLoading?(d(),p(G,{key:3})):g("",!0)]}),_:3},8,["id","class","style"])]}),_:3},8,["description","width","invalid","id"])}const _=de(Z,[["render",pe],["__scopeId","data-v-f5078680"]]);Z.__docgenInfo={displayName:"AdDatepicker",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"isDisabled",type:{name:"boolean"}},{name:"isValid",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isRequired",type:{name:"boolean"}},{name:"isAsterisk",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isReadonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isWhiteBackground",type:{name:"boolean"}},{name:"isLoading",type:{name:"boolean"}},{name:"addClass",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"errorMessage",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"ariaLabel",type:{name:"string"},defaultValue:{func:!1,value:'"Date value"'}},{name:"label",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => `datepicker-${crypto.randomUUID()}`"}},{name:"setLanguage",type:{name:"string"},defaultValue:{func:!1,value:'"en"'}},{name:"format",type:{name:"string"},defaultValue:{func:!1,value:'"yyyy-mm-dd"'}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"minDate",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxDate",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"infoText",type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/a-design-system-vue/a-design-system-vue/lib/components/datepicker/datepicker2.vue"]};const De={title:"components/Datepicker",component:_,tags:["autodocs"],parameters:{docs:{description:{component:`
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
            `}}}},b={args:{label:"Datepicker"}},V={render:e=>({components:{AdDatepicker:_},setup(){const n=M();return{args:e,datepickerValue:n}},template:`
          <a id="v-model-binding"></a>

          <div>
              <AdDatepicker v-model="datepickerValue" label="Datepicker with v-model binding" />

              <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                  Value is: {{ datepickerValue }}
              </p>
          </div>
          <button @click="datepickerValue = '2004-03-11'">Set date '2004-03-11'</button>

      `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:`This is a code snippet for textfield component to demonstrate **v-model** binding in Vue 3.

\`\`\`vue
<template>
  <AdDatepicker v-model="datepickerValue" label="Datepicker with v-model binding" />
  <p>Value is: {{ datepickerValue }}</p>
</template>

<script setup>
import { ref } from 'vue';

const datepickerValue = ref();
<\/script>
\`\`\`
              `}}}},k={render:e=>({components:{AdDatepicker:_},setup(){const n=M(),t=M("yyyy-mm-dd"),l=M([{value:"yyyy-mm-dd",label:"YYYY-MM-DD (ISO, Default)"},{value:"dd-mm-yyyy",label:"DD-MM-YYYY (Europe)"},{value:"dd/mm/yyyy",label:"DD/MM/YYYY (Short European)"},{value:"mm/dd/yyyy",label:"MM/DD/YYYY (US)"},{value:"yyyy/mm/dd",label:"YYYY/MM/DD (ISO Alt)"},{value:"dd.mm.yyyy",label:"DD.MM.YYYY (Dot European)"}]);return{args:e,datepickerValue:n,selectedFormat:t,formatOptions:l}},template:`
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

      `}),parameters:{controls:{exclude:/.*/g},docs:{description:{story:`This is a code snippet for textfield component to demonstrate **v-model** binding in Vue 3.

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
<\/script>
\`\`\`
              `}}}};var B,E,U;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Datepicker"
  }
}`,...(U=(E=b.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var H,N,W;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdDatepicker
    },
    setup() {
      const datepickerValue = ref();
      return {
        args,
        datepickerValue
      };
    },
    template: \`
          <a id="v-model-binding"></a>

          <div>
              <AdDatepicker v-model="datepickerValue" label="Datepicker with v-model binding" />

              <p style="margin-top: 32px; font-size: 12px; border-top: 1px solid lightgrey; padding: 32px 0 0 0;">
                  Value is: {{ datepickerValue }}
              </p>
          </div>
          <button @click="datepickerValue = '2004-03-11'">Set date '2004-03-11'</button>

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
  <AdDatepicker v-model="datepickerValue" label="Datepicker with v-model binding" />
  <p>Value is: {{ datepickerValue }}</p>
</template>

<script setup>
import { ref } from 'vue';

const datepickerValue = ref();
<\/script>
\\\`\\\`\\\`
              \`
      }
    }
  }
}`,...(W=(N=V.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var z,K,q;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      AdDatepicker
    },
    setup() {
      const datepickerValue = ref();
      const selectedFormat = ref("yyyy-mm-dd");
      const formatOptions = ref([{
        value: "yyyy-mm-dd",
        label: "YYYY-MM-DD (ISO, Default)"
      }, {
        value: "dd-mm-yyyy",
        label: "DD-MM-YYYY (Europe)"
      }, {
        value: "dd/mm/yyyy",
        label: "DD/MM/YYYY (Short European)"
      }, {
        value: "mm/dd/yyyy",
        label: "MM/DD/YYYY (US)"
      }, {
        value: "yyyy/mm/dd",
        label: "YYYY/MM/DD (ISO Alt)"
      }, {
        value: "dd.mm.yyyy",
        label: "DD.MM.YYYY (Dot European)"
      }]);
      return {
        args,
        datepickerValue,
        selectedFormat,
        formatOptions
      };
    },
    template: \`
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
<\/script>
\\\`\\\`\\\`
              \`
      }
    }
  }
}`,...(q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const ve=["Default","vModelBinding","changeFormat"];export{b as Default,ve as __namedExportsOrder,k as changeFormat,De as default,V as vModelBinding};
