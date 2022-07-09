import{c as x,e as C,a as _}from"./use-translate.85b7fc27.js";import{d as k,b as p,n as h,t as F,w}from"./with-install.d26e13af.js";import{B as A}from"./index.b8ee6b0a.js";import{R as B,a as S}from"./index.d7cdfac7.js";import{T as v}from"./index.6b53781f.js";import{I as y}from"./index.33ef0a36.js";import{C as L}from"./index.e53f50c0.js";import{A as T,e as s,Q as D,x as I,r as V,o as j,c as $,w as P,C as n}from"./vue-libs.a3cd7f61.js";import{s as g}from"./index.bf09c1cb.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";import"./index.4d0d76f2.js";import"./Checker.433fd059.js";import"./index.c08165fc.js";import"./interceptor.de8ff612.js";import"./use-expose.b85ae184.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.754c99d2.js";import"./mount-component.a164bc7b.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[O,c]=x("address-item");var R=T({name:O,props:{address:k(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:t,emit:u}){const m=()=>{e.switchable&&u("select"),u("click")},l=()=>s(y,{name:"edit",class:c("edit"),onClick:d=>{d.stopPropagation(),u("edit"),u("click")}},null),b=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return s(v,{type:"primary",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:i,switchable:r}=e,o=[s("div",{class:c("name")},[`${d.name} ${d.tel}`,b()]),s("div",{class:c("address")},[d.address])];return r&&!i?s(B,{name:d.id,iconSize:18},N(o)?o:{default:()=>[o]}):o};return()=>{var i;const{disabled:d}=e;return s("div",{class:c({disabled:d}),onClick:m},[s(L,{border:!1,titleClass:c("title")},{title:a,"right-icon":l}),(i=t.bottom)==null?void 0:i.call(t,C({},e.address,{disabled:d}))])}}});function U(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[z,f,q]=x("address-list"),G={list:p(),modelValue:h,switchable:F,disabledText:String,disabledList:p(),addButtonText:String,defaultTagText:String};var J=T({name:z,props:G,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:t,emit:u}){const m=(a,d,i)=>{const r=()=>u(i?"editDisabled":"edit",a,d),o=()=>u("clickItem",a,d),E=()=>{u(i?"selectDisabled":"select",a,d),i||u("update:modelValue",a.id)};return s(R,{key:a.id,address:a,disabled:i,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:r,onClick:o,onSelect:E},{bottom:t["item-bottom"],tag:t.tag})},l=(a,d)=>{if(a)return a.map((i,r)=>m(i,r,d))},b=()=>s("div",{class:[f("bottom"),"van-safe-area-bottom"]},[s(A,{round:!0,block:!0,type:"primary",text:e.addButtonText||q("add"),class:f("add"),onClick:()=>u("add")},null)]);return()=>{var r,o;const a=l(e.list),d=l(e.disabledList,!0),i=e.disabledText&&s("div",{class:f("disabled-text")},[e.disabledText]);return s("div",{class:f()},[(r=t.top)==null?void 0:r.call(t),s(S,{modelValue:e.modelValue},U(a)?a:{default:()=>[a]}),i,d,(o=t.default)==null?void 0:o.call(t),b()])}}});const Q=w(J);const fe=T({__name:"index",setup(e){const t=_({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),u=I("1"),m=()=>{g(t("add"))},l=(b,a)=>{g(`${t("edit")}:${a}`)};return(b,a)=>{const d=V("demo-block");return j(),$(d,{title:n(t)("basicUsage")},{default:P(()=>[s(n(Q),{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=i=>u.value=i),list:n(t)("list"),"disabled-list":n(t)("disabledList"),"disabled-text":n(t)("disabledText"),"default-tag-text":n(t)("defaultTagText"),onAdd:m,onEdit:l},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{fe as default};
