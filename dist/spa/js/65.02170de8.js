"use strict";(globalThis["webpackChunkarticle_search"]=globalThis["webpackChunkarticle_search"]||[]).push([[65],{9065:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var l=r(9835);const i=(0,l._)("div",{class:"text-h3 q-pa-lg"},"Artikelsøgning",-1);function n(e,t,r,n,a,s){const c=(0,l.up)("SearchField"),o=(0,l.up)("ArticleList"),u=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(u,{class:"flex column flex-center"},{default:(0,l.w5)((()=>[i,(0,l.Wm)(c,{modelValue:e.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),label:"Søg efter artikler",class:"search"},null,8,["modelValue"]),(0,l.Wm)(o,{url:e.searchUrl},null,8,["url"])])),_:1})}function a(e,t,r,i,n,a){const s=(0,l.up)("q-icon"),c=(0,l.up)("q-input");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c,{ref:"qinput",standout:"bg-blue-grey-6 text-white",modelValue:e.searchQuery,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.searchQuery=t),t[1]||(t[1]=t=>e.$emit("update:modelValue",t))],label:e.label,dense:"dense"},{append:(0,l.w5)((()=>[""!==e.searchQuery?((0,l.wg)(),(0,l.j4)(s,{key:0,name:"cancel",onClick:e.clear,class:"cursor-pointer"},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(s,{name:"search"})])),_:1},8,["modelValue","label"])])}const s=(0,l.aZ)({name:"SearchField",data(){return{searchQuery:""}},methods:{clear(){console.log("clear"),this.searchQuery="",this.$emit("update:modelValue",this.searchQuery),this.$refs.qinput.focus()}},props:{label:{type:String,default:"Søgeord"}},emits:["update:modelValue"]});var c=r(1639),o=r(6867),u=r(2857),d=r(9984),m=r.n(d);const h=(0,c.Z)(s,[["render",a]]),p=h;m()(s,"components",{QInput:o.Z,QIcon:u.Z});const g={class:"q-pa-md row items-start content-start q-gutter-md"},y={key:0,class:"row justify-center wide"},f={key:1,class:"row justify-center wide q-py-xl"};function w(e,t,r,i,n,a){const s=(0,l.up)("ArticleListItem"),c=(0,l.up)("q-spinner"),o=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)("div",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.articles,(e=>((0,l.wg)(),(0,l.j4)(s,{id:e.uuid,headline:e.title,summary:e.summary,link:e.canonical,media:e.media,key:e.uuid},null,8,["id","headline","summary","link","media"])))),128)),e.loading?((0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(c,{class:"q-ma-xl center",color:"primary",size:"4em",thickness:2})])):(0,l.kq)("",!0),e.hasMore&&!e.loading?((0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(o,{color:"primary",size:"lg",icon:"refresh",label:"Hent flere",onClick:e.getMoreArticles},null,8,["onClick"])])):(0,l.kq)("",!0)])}function k(e,t){let r;return function(...l){r&&clearTimeout(r);const i=this;r=setTimeout((()=>{e.apply(i,l)}),t)}}var q=r(6970);const b=(0,l._)("div",{class:"absolute-full flex flex-center"}," Intet billede ",-1),Q={class:"text-h6"};function v(e,t,r,i,n,a){const s=(0,l.up)("q-img"),c=(0,l.up)("q-card-section"),o=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(o,{flat:"",bordered:"",class:"cursor-pointer article-card",onClick:e.goto},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{src:e.imageUrl||"sdf",ratio:1},{error:(0,l.w5)((()=>[b])),_:1},8,["src"]),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",Q,(0,q.zw)(e.headline),1)])),_:1}),(0,l.Wm)(c,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,q.zw)(e.summary),1)])),_:1})])),_:1},8,["onClick"])}const Z=(0,l.aZ)({name:"ArticleListItem",props:{id:{type:String,required:!0},headline:{type:String,required:!0},summary:{type:String,required:!0},link:{type:String,required:!0},media:{type:Object}},computed:{imageUrl(){let e=this.media.find((e=>"Image"===e.type))||null;return e?e=e?.content?.image?.download_url||null:(e=this.media.find((e=>"Video"===e.type))||null,e=e?.content?.video?.thumbnail?.download_url||null),e=e?`${e}/s/512/jpg`:null,e}},methods:{goto(){document.location=this.link}}});var x=r(4458),A=r(335),S=r(3190);const _=(0,c.Z)(Z,[["render",v]]),U=_;m()(Z,"components",{QCard:x.Z,QImg:A.Z,QCardSection:S.Z});const C=(0,l.aZ)({name:"ArticleList",components:{ArticleListItem:U},props:{url:{type:String,default:""}},watch:{url(e,t){e!==t&&(this.articles=[],this.nextPageUrl="",this.loading=""!==e,this.debouncedGetArticles(e))}},computed:{hasMore(){return""!==this.nextPageUrl}},created(){this.getArticles=e=>{if(""===e)return this.articles=[],void(this.loading=!1);fetch(e).then((e=>e.json())).then((e=>{this.nextPageUrl=e.links.next||"",this.articles=this.articles.concat(e.data),this.loading=!1}))},this.debouncedGetArticles=k(this.getArticles,1e3)},methods:{getMoreArticles(){this.loading=!0,this.getArticles(this.nextPageUrl)}},data(){return{articles:[],nextPageUrl:"",loading:!1}}});var V=r(3940),j=r(7065);const W=(0,c.Z)(C,[["render",w]]),I=W;m()(C,"components",{QSpinner:V.Z,QBtn:j.Z});const P=(0,l.aZ)({name:"ArticleSearchPage",components:{SearchField:p,ArticleList:I},data(){return{searchQuery:""}},computed:{searchUrl(){return 0===this.searchQuery.length?"":`https://public.lorry.bazo.dk/v1/articles?filter[title]=${this.searchQuery}`}}});var L=r(9885);const z=(0,c.Z)(P,[["render",n]]),D=z;m()(P,"components",{QPage:L.Z})}}]);