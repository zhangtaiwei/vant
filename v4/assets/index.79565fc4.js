import{c as d,b as m,E as p,u as V,p as g}from"./use-translate.4bd55976.js";import{n as h,u as f,w as u}from"./with-install.4d0ca77e.js";import{A as c,y as k,e as s,B as R}from"./vue-libs.34a885a4.js";import{c as b,C}from"./Checker.fc6667c7.js";const[l,P]=d("radio-group"),w={disabled:Boolean,iconSize:h,direction:String,modelValue:f,checkedColor:String},i=Symbol(l),G=c({name:l,props:w,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){const{linkChildren:o}=m(i),r=a=>t("update:modelValue",a);return k(()=>e.modelValue,a=>t("change",a)),o({props:e,updateValue:r}),p(()=>e.modelValue),()=>{var a;return s("div",{class:P([e.direction]),role:"radiogroup"},[(a=n.default)==null?void 0:a.call(n)])}}}),S=u(G),x=S,[v,_]=d("radio"),y=c({name:v,props:b,emits:["update:modelValue"],setup(e,{emit:t,slots:n}){const{parent:o}=V(i),r=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):t("update:modelValue",e.name)};return()=>s(C,R({bem:_,role:"radio",parent:o,checked:r(),onToggle:a},e),g(n,["default","icon"]))}}),A=u(y),z=A;export{A as R,x as V,S as a,z as b};
