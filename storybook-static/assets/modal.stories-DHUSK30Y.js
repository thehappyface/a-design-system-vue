import{o as c,d as p,j as a,p as x,n as u,m,t as O,s as g,u as M,x as F,r as k}from"./vue.esm-bundler-BQHuR-zz.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P={name:"AdModal",props:{heading:String,stickyFooter:{type:Boolean,default:!0},stickyHeader:{type:Boolean,default:!0},desktopPadding:String,id:{type:String,default:()=>`modal-${crypto.randomUUID()}`}},data(){return{isActive:!0,isMobile:window.innerWidth<950,setStickyHeader:!1,lastFocusedElement:null,touchStart:0,noTransition:!1,isClosing:!1,scrollTimeout:null}},emits:["isClosing"],methods:{openModal(){this.lastFocusedElement=document.activeElement,this.isActive=!0,this.$nextTick(()=>{var e;(e=this.$refs.dialog)==null||e.focus()})},closeModal(){this.$emit("isClosing",!1),this.isActive=!1,this.$nextTick(()=>{var e;(e=this.lastFocusedElement)==null||e.focus(),document.body.classList.remove("static")})},onDialogScroll(){if(!this.stickyHeader)return;const e=this.$refs.dialogHeading.getBoundingClientRect(),i=this.$refs.dialog.getBoundingClientRect();this.setStickyHeader=e.top<=i.top},updateWidth(){this.isMobile=window.innerWidth<950},preventScroll(e){e.preventDefault()},dragStart(e){e.preventDefault(),this.touchStart=e.changedTouches[0].clientY,this.noTransition=!0},dragMove(e){let i=e.changedTouches[0].clientY;e.preventDefault(),this.$refs.dialog.style.bottom="calc(0px + -"+(i-this.touchStart)+"px)",this.touchStart-i<-110?this.isClosing=!0:this.isClosing=!1},dragEnd(){this.noTransition=!1,this.$nextTick(()=>{this.isClosing?(this.$refs.dialog.style.bottom="-100%",setTimeout(()=>{this.closeModal()},100)):this.$refs.dialog.style.bottom="0%"})}},mounted(){this.openModal(),window.addEventListener("resize",this.updateWidth),document.body.classList.add("static")},beforeDestroy(){window.removeEventListener("resize",this.updateWidth)}},I=e=>(M("data-v-588c2e12"),e=e(),F(),e),S=["id"],E=I(()=>a("span",null,null,-1)),w=[E],C=I(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[a("path",{d:"M13.41 12L18.71 17.29L17.29 18.71L12 13.41L6.71004 18.71L5.29004 17.29L10.59 12L5.29004 6.71L6.71004 5.29L12 10.59L17.29 5.29L18.71 6.71L13.41 12Z"})],-1)),H=[C];function z(e,i,l,V,n,s){return c(),p("div",{class:u(["modal",{open:n.isActive}]),id:l.id},[a("div",{class:"modal__bg",onClick:i[0]||(i[0]=(...t)=>s.closeModal&&s.closeModal(...t)),onTouchmove:i[1]||(i[1]=t=>s.preventScroll(t))},null,32),a("div",{class:u(["modal__container",{isMobile:n.isMobile,noTransition:n.noTransition,isClosing:n.isClosing}]),role:"dialog",tabindex:"-1",ref:"dialog",onScroll:i[6]||(i[6]=(...t)=>s.onDialogScroll&&s.onDialogScroll(...t))},[n.isMobile?(c(),p("button",{key:0,class:"drag-to-close",onTouchstart:i[2]||(i[2]=t=>s.dragStart(t)),onTouchmove:i[3]||(i[3]=t=>s.dragMove(t)),onTouchend:i[4]||(i[4]=(...t)=>s.dragEnd&&s.dragEnd(...t))},w,32)):x("",!0),a("button",{role:"button",class:"modal--close",onClick:i[5]||(i[5]=(...t)=>s.closeModal&&s.closeModal(...t))},H),a("div",{class:u(["modal--header",{isSticky:n.setStickyHeader&&l.stickyHeader}]),style:m({padding:n.isMobile?"":l.desktopPadding}),ref:"dialogHeading"},[a("h2",null,O(l.heading),1)],6),a("div",{class:"modal--content",style:m({padding:n.isMobile?"":l.desktopPadding})},[g(e.$slots,"default",{},void 0,!0)],4),a("div",{class:u(["modal--footer",{isSticky:l.stickyFooter}]),style:m({padding:n.isMobile?"":l.desktopPadding})},[g(e.$slots,"footer",{},void 0,!0)],6)],34)],10,S)}const d=D(P,[["render",z],["__scopeId","data-v-588c2e12"]]);P.__docgenInfo={displayName:"AdModal",exportName:"default",description:"",tags:{},props:[{name:"heading",type:{name:"string"}},{name:"stickyFooter",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"stickyHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"desktopPadding",type:{name:"string"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => `modal-${crypto.randomUUID()}`"}}],events:[{name:"isClosing",type:{names:["undefined"]}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/Users/ERFRI/Repos/atea-component-library-vue/lib/components/modal/modal.vue"]};const L={title:"components/Modal",component:d},o={render:e=>({components:{AdModal:d},setup(){return{modalIsOpen:k(!1),args:e}},template:`
          <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
          <AdModal 
            v-if="modalIsOpen"
            @isClosing="modalIsOpen = value"
            :heading="args.heading"
            :stickyHeader="args.stickyHeader"
            :stickyFooter="args.stickyFooter"
            :desktopPadding="args.desktopPadding">
            <template #default>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
            </template>
            <template #footer>
                <div style="display: flex;justify-content: space-between;width: 100%;">
                    <button @click="modalIsOpen = !modalIsOpen">Close</button>
                    <button @click="modalIsOpen = !modalIsOpen">My action</button>
                </div>
            </template>
          </AdModal>
        `}),args:{heading:"My modal heading",stickyHeader:!0,stickyFooter:!0,desktopPadding:"0 48px"}},r={render:e=>({components:{AdModal:d},setup(){return{modalIsOpen:k(!1),args:e}},template:`
      <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
      <AdModal 
        v-if="modalIsOpen"
        @isClosing="modalIsOpen = value"
        :heading="args.heading"
        :stickyHeader="args.stickyHeader"
        :stickyFooter="args.stickyFooter"
        :desktopPadding="args.desktopPadding">
        <template #default>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
        </template>
        <template #footer>
            <div style="display: flex;justify-content: space-between;width: 100%;">
                <button @click="modalIsOpen = !modalIsOpen">Close</button>
                <button @click="modalIsOpen = !modalIsOpen">My action</button>
            </div>
        </template>
      </AdModal>
    `}),args:{heading:"My modal heading",stickyHeader:!0,stickyFooter:!0,desktopPadding:"0 48px"},parameters:{viewport:{defaultViewport:"mobile2"}}};var f,b,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AdModal
    },
    setup() {
      const modalIsOpen = ref(false);
      return {
        modalIsOpen,
        args
      };
    },
    template: \`
          <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
          <AdModal 
            v-if="modalIsOpen"
            @isClosing="modalIsOpen = value"
            :heading="args.heading"
            :stickyHeader="args.stickyHeader"
            :stickyFooter="args.stickyFooter"
            :desktopPadding="args.desktopPadding">
            <template #default>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
                <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
            </template>
            <template #footer>
                <div style="display: flex;justify-content: space-between;width: 100%;">
                    <button @click="modalIsOpen = !modalIsOpen">Close</button>
                    <button @click="modalIsOpen = !modalIsOpen">My action</button>
                </div>
            </template>
          </AdModal>
        \`
  }),
  args: {
    heading: "My modal heading",
    // Default args
    stickyHeader: true,
    stickyFooter: true,
    desktopPadding: "0 48px"
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,y,q;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AdModal
    },
    setup() {
      const modalIsOpen = ref(false);
      return {
        modalIsOpen,
        args
      };
    },
    template: \`
      <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
      <AdModal 
        v-if="modalIsOpen"
        @isClosing="modalIsOpen = value"
        :heading="args.heading"
        :stickyHeader="args.stickyHeader"
        :stickyFooter="args.stickyFooter"
        :desktopPadding="args.desktopPadding">
        <template #default>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Etiam accumsan turpis sed magna efficitur imperdiet. Etiam pretium, sem vel porta pharetra, elit nisi laoreet dolor, non placerat felis ex ac orci. Duis sit amet turpis a augue molestie facilisis. Pellentesque fringilla auctor lacus, vel tristique turpis molestie in. Fusce vel bibendum elit, sed maximus nulla. Donec ac nibh ullamcorper, bibendum mi in, tempor lacus. Maecenas eu nunc enim. Vivamus in diam congue, auctor justo at, semper lorem. Praesent suscipit enim sed est tincidunt, quis semper magna congue. Pellentesque ornare ut urna id fringilla. Suspendisse pretium quam eget magna bibendum sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at dui egestas, tincidunt orci eget, euismod velit. Fusce at felis velit.</p>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
            <p style="font-size: 16px; line-height: 175%; font-family: 'Inter'">Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
        </template>
        <template #footer>
            <div style="display: flex;justify-content: space-between;width: 100%;">
                <button @click="modalIsOpen = !modalIsOpen">Close</button>
                <button @click="modalIsOpen = !modalIsOpen">My action</button>
            </div>
        </template>
      </AdModal>
    \`
  }),
  args: {
    heading: "My modal heading",
    // Default args
    stickyHeader: true,
    stickyFooter: true,
    desktopPadding: "0 48px"
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Uses Storybook's built-in mobile viewport
    }
  }
}`,...(q=(y=r.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};const T=["Desktop","Mobile"];export{o as Desktop,r as Mobile,T as __namedExportsOrder,L as default};
