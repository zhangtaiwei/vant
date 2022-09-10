import{A as S,H as U,x as B,r as F,o as f,a as p,e as t,w as l,C as e,h as s,t as i,d as h,F as x,b as y,c as R,W as D}from"./vue-libs.34a885a4.js";import{V as n}from"./index.bcf5d764.js";import{V as r}from"./index.d545554a.js";import{V}from"./index.d3837f2c.js";import{V as L}from"./index.e1be8e50.js";import{V as N}from"./index.e45b9adc.js";import{c as _}from"./index.a54b3812.js";import{u as w}from"./use-refs.f3963423.js";import{a as G}from"./use-translate.4bd55976.js";import"./with-install.4d0ca77e.js";import"./use-expose.2b4664c4.js";import"./Checker.fc6667c7.js";import"./index.43c21584.js";import"./index.3e55758c.js";import"./constant.80c6de18.js";import"./use-route.d291d507.js";import"./index.cef67cd8.js";const T=["src"],$={class:"demo-checkbox-buttons"},ce=S({__name:"index",setup(H){const o=G({"zh-CN":{checkbox:"\u590D\u9009\u6846",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customIconSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customShape:"\u81EA\u5B9A\u4E49\u5F62\u72B6",title3:"\u590D\u9009\u6846\u7EC4",title4:"\u9650\u5236\u6700\u5927\u53EF\u9009\u6570",title5:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",toggleAll:"\u5168\u9009\u4E0E\u53CD\u9009",checkAll:"\u5168\u9009",inverse:"\u53CD\u9009",horizontal:"\u6C34\u5E73\u6392\u5217",disableLabel:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}}),c=U({checkbox1:!0,checkbox2:!0,checkbox3:!0,checkboxShape:!0,checkboxLabel:!0,checkboxIcon:!0,list:["a","b"],result:["a","b"],result2:[],result3:[],checkAllResult:[],horizontalResult:[]}),C=_("user-active.png"),g=_("user-inactive.png"),b=B(),[A,v]=w(),E=m=>{A.value[m].toggle()},I=()=>{var m;(m=b.value)==null||m.toggleAll(!0)},z=()=>{var m;(m=b.value)==null||m.toggleAll()};return(m,a)=>{const d=F("demo-block");return f(),p(x,null,[t(d,{title:e(o)("basicUsage")},{default:l(()=>[t(e(n),{modelValue:c.checkbox1,"onUpdate:modelValue":a[0]||(a[0]=u=>c.checkbox1=u)},{default:l(()=>[s(i(e(o)("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("disabled")},{default:l(()=>[t(e(n),{"model-value":!1,disabled:""},{default:l(()=>[s(i(e(o)("checkbox")),1)]),_:1}),t(e(n),{"model-value":!0,disabled:""},{default:l(()=>[s(i(e(o)("checkbox")),1)]),_:1})]),_:1},8,["title"]),t(d,{title:e(o)("customShape")},{default:l(()=>[t(e(n),{modelValue:c.checkboxShape,"onUpdate:modelValue":a[1]||(a[1]=u=>c.checkboxShape=u),shape:"square"},{default:l(()=>[s(i(e(o)("customShape")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("customColor")},{default:l(()=>[t(e(n),{modelValue:c.checkbox2,"onUpdate:modelValue":a[2]||(a[2]=u=>c.checkbox2=u),"checked-color":"#ee0a24"},{default:l(()=>[s(i(e(o)("customColor")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("customIconSize")},{default:l(()=>[t(e(n),{modelValue:c.checkboxIcon,"onUpdate:modelValue":a[3]||(a[3]=u=>c.checkboxIcon=u),"icon-size":"24px"},{default:l(()=>[s(i(e(o)("customIconSize")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("customIcon")},{default:l(()=>[t(e(n),{modelValue:c.checkbox3,"onUpdate:modelValue":a[4]||(a[4]=u=>c.checkbox3=u)},{icon:l(({checked:u})=>[h("img",{src:u?e(C):e(g)},null,8,T)]),default:l(()=>[s(i(e(o)("customIcon"))+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("disableLabel")},{default:l(()=>[t(e(n),{modelValue:c.checkboxLabel,"onUpdate:modelValue":a[5]||(a[5]=u=>c.checkboxLabel=u),"label-disabled":""},{default:l(()=>[s(i(e(o)("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("title3")},{default:l(()=>[t(e(r),{modelValue:c.result,"onUpdate:modelValue":a[6]||(a[6]=u=>c.result=u)},{default:l(()=>[t(e(n),{name:"a"},{default:l(()=>[s(i(e(o)("checkbox"))+" a",1)]),_:1}),t(e(n),{name:"b"},{default:l(()=>[s(i(e(o)("checkbox"))+" b",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("horizontal")},{default:l(()=>[t(e(r),{modelValue:c.horizontalResult,"onUpdate:modelValue":a[7]||(a[7]=u=>c.horizontalResult=u),direction:"horizontal"},{default:l(()=>[t(e(n),{name:"a"},{default:l(()=>[s(i(e(o)("checkbox"))+" a",1)]),_:1}),t(e(n),{name:"b"},{default:l(()=>[s(i(e(o)("checkbox"))+" b",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("title4")},{default:l(()=>[t(e(r),{modelValue:c.result2,"onUpdate:modelValue":a[8]||(a[8]=u=>c.result2=u),max:2},{default:l(()=>[t(e(n),{name:"a"},{default:l(()=>[s(i(e(o)("checkbox"))+" a",1)]),_:1}),t(e(n),{name:"b"},{default:l(()=>[s(i(e(o)("checkbox"))+" b",1)]),_:1}),t(e(n),{name:"c"},{default:l(()=>[s(i(e(o)("checkbox"))+" c",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(d,{title:e(o)("toggleAll")},{default:l(()=>[t(e(r),{modelValue:c.checkAllResult,"onUpdate:modelValue":a[9]||(a[9]=u=>c.checkAllResult=u),ref_key:"group",ref:b},{default:l(()=>[t(e(n),{name:"a"},{default:l(()=>[s(i(e(o)("checkbox"))+" a",1)]),_:1}),t(e(n),{name:"b"},{default:l(()=>[s(i(e(o)("checkbox"))+" b",1)]),_:1}),t(e(n),{name:"c"},{default:l(()=>[s(i(e(o)("checkbox"))+" c",1)]),_:1})]),_:1},8,["modelValue"]),h("div",$,[t(e(V),{type:"primary",onClick:I},{default:l(()=>[s(i(e(o)("checkAll")),1)]),_:1}),t(e(V),{type:"primary",onClick:z},{default:l(()=>[s(i(e(o)("inverse")),1)]),_:1})])]),_:1},8,["title"]),t(d,{title:e(o)("title5")},{default:l(()=>[t(e(r),{modelValue:c.result3,"onUpdate:modelValue":a[11]||(a[11]=u=>c.result3=u)},{default:l(()=>[t(e(L),{inset:""},{default:l(()=>[(f(!0),p(x,null,y(c.list,(u,k)=>(f(),R(e(N),{clickable:"",key:k,title:`${e(o)("checkbox")} ${u}`,onClick:M=>E(k)},{"right-icon":l(()=>[t(e(n),{ref_for:!0,ref:e(v)(k),name:u,onClick:a[10]||(a[10]=D(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{ce as default};
