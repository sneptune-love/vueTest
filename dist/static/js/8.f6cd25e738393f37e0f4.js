webpackJsonp([8],{112:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{listArray:[]}},computed:{listArry:function(){return this.listArray}},methods:{createLabel:function(t){"img"===t?this.listArray.push({type:"img",content:"i am picture label"}):"txt"===t&&this.listArray.push({type:"txt",content:"i am txt label"})}}}},122:function(t,e,a){e=t.exports=a(89)(!1),e.push([t.i,".create-label h2[data-v-181bafac]{margin-bottom:.2rem}.create-label .imgBox[data-v-181bafac],.create-label .txtBox[data-v-181bafac]{width:3rem;height:.5rem;border:1px solid #ddd;margin:0 auto;margin-bottom:.1rem}.create-label .txtBox[data-v-181bafac]{line-height:.5rem}.create-label .txtBox p[data-v-181bafac]{height:100%}.create-label .create-btn[data-v-181bafac]{display:-webkit-box;display:-ms-flexbox;display:flex;height:.3rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.create-label .create-btn span[data-v-181bafac]{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#f99;font-size:.16rem}",""])},135:function(t,e,a){var i=a(122);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(90)("6fd9e32c",i,!0)},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-label txt-center"},[a("v-header",{attrs:{title:"新建标签",prev:"true"}}),t._v(" "),t._l(t.listArry,function(e,i){return a("div",{key:i,staticClass:"newLabel"},["img"===e.type?a("div",{staticClass:"imgBox"},[a("img",{attrs:{src:"",alt:""}}),t._v(" "),a("p",[t._v(t._s(e.content))])]):t._e(),t._v(" "),"txt"===e.type?a("div",{staticClass:"txtBox"},[a("p",[t._v(t._s(e.content))])]):t._e()])}),t._v(" "),a("div",{staticClass:"create-btn"},[a("span",{staticClass:"create-img",on:{click:function(e){t.createLabel("img")}}},[t._v("新建图片")]),t._v(" "),a("span",{staticClass:"create-txt",on:{click:function(e){t.createLabel("txt")}}},[t._v("新建内容")])])],2)},staticRenderFns:[]}},95:function(t,e,a){function i(t){a(135)}var r=a(7)(a(112),a(150),i,"data-v-181bafac",null);t.exports=r.exports}});