(window.webpackJsonp=window.webpackJsonp||[]).push([[0,8],{278:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDFMMSAxMU0xMSAxMUwxIDEuMDAwMDEiIHN0cm9rZT0iIzNEM0Y0MyIgc3Ryb2tlLXdpZHRoPSIxLjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="},291:function(t,e,o){var content=o(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("3a6db8af",content,!0,{sourceMap:!1})},297:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgBndLBDYJAEAXQ3R3uGGhggQYsQTuwBEuwBW+W4M1YgkdP2oEVQKiAcPRC8I+RBJXdHf3JhGGBdxhGKcRaO1N/ZvhWo7FEdEPfdl23rBEpUhTFAZc1l4miyKJhlcELwz8iqu/7jJqmqdM01bhfMGiMWcVxfGoRCYIcq6raEHfArlLsEynL8tnT8IIEcyFvUAjzIV+QC0uSZO5DJqEpDDX3IRytPMnz/Ka1HhCFPctce2ZcCM9kjHB8e2ZciBrNBOD21TuXlkIIz0SyGhRChmchjCSIBCMpEsIIyAoHOwniwTRBu+NPLHFwliATWIbaPwDferBeMDCnpwAAAABJRU5ErkJggg=="},298:function(t,e,o){"use strict";o.r(e);o(31);var r=o(8),n=(o(45),o(15),o(38),o(39),o(40),o(201),o(200),o(26),o(44),o(63),o(60),{middleware:["geoData"],data:function(){var t=this.$route.query.external_id||null,e=this.$route.query.url||"",o=document.referrer||"",r=this.$route.query.sub1||null,n=this.$route.query.sub2||null,c=this.$route.query.sub3||null,l=this.$route.query.sub4||null,d=this.$route.query.sub5||null,m=this.$route.query.sub6||null,v=this.$route.query.sub7||null,f=this.$route.query.apps_id||null,h=this.$route.query.gaid||null,x=this.$route.query.bundle||null;return{form:{name:"",second_name:"",email:"",phone:"",personal_data:!0,country:this.$store.state.geoData.logcountry,ip:this.$store.state.geoData.ipcl,subid:t,utm:e,_ref:o,sub1:r,sub2:n,sub3:c,sub4:l,sub5:d,sub6:m,sub7:v,apps:f,onesignal:h,bundle:x,messager:"WhatsApp"},emailError:!1,nameError:!1,secondNameError:!1,phoneNumberError:!1,modalThanksActive:!1,geoData:this.$store.state.geoData,clientIp:this.$store.state.clientIp}},computed:{modalFormActive:function(){return this.$store.state.modalFormActive}},methods:{handleCheckboxChange:function(t,e){e.target.checked?(this.form.messager=t,this.resetOtherCheckboxes(t)):this.form.messager=""},resetOtherCheckboxes:function(t){this.$el.querySelectorAll(".checkbox-messenger").forEach((function(e){e.name!==t&&(e.checked=!1)}))},submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.emailError||t.nameError||t.secondNameError||t.phoneNumberError||""===t.form.name||""===t.form.second_name||""===t.form.email||15!==t.form.phone.length?(t.validateFirstName(),t.validateSecondName(),t.validateEmail(),t.validatePhone()):fetch("https://google.comms",{method:"post",mode:"no-cors",body:new URLSearchParams(t.form)}).finally((function(){t.modalThanksActive=!0,t.$store.commit("setModalFormActive",!1),t.$store.commit("setModalThanksActive",t.modalThanksActive)}));case 1:case"end":return e.stop()}}),e)})))()},validateEmail:function(){var t=new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);this.emailError=!t.test(this.form.email.toLowerCase())},validateFirstName:function(){var t=new RegExp(/^[а-яА-ЯёЁa-zA-Z ]{2,40}$/);this.nameError=!t.test(this.form.name)},validateSecondName:function(){var t=new RegExp(/^[а-яА-ЯёЁa-zA-Z ]{2,40}$/);this.secondNameError=!t.test(this.form.second_name)},validatePhone:function(){var t=this.form.phone.replace(/\s/g,""),e=new RegExp(/^\+\d{11}$/);this.phoneNumberError=!e.test(t)},mask:function(t){this.keyCode=t.keyCode,t.target.selectionStart<3&&"blur"!==t.type&&(t.target.setSelectionRange(3,3),t.preventDefault());var e="+1 ___ ___ ____",i=0,o=e.replace(/\D/g,""),r=this.form.phone.replace(/\D/g,""),n=e.replace(/[_\d]/g,(function(a){return i<r.length?r.charAt(i++)||o.charAt(i):a}));-1!==(i=n.indexOf("_"))&&(i<3&&(i=3),n=n.slice(0,i));var c=e.substring(0,this.form.phone.length).replace(/_+/g,(function(a){return"\\d{1,"+a.length+"}"})).replace(/[+()]/g,"\\$&");if((!(c=new RegExp("^"+c+"$")).test(this.form.phone)||this.form.phone.length<6||this.keyCode>47&&this.keyCode<58)&&(this.form.phone=n),"blur"==t.type&&this.form.phone.length<3&&(this.form.phone=""),"blur"==t.type){var l=this.form.phone.replace(/\s/g,""),d=new RegExp(/^\+\d{11}$/);this.phoneNumberError=!d.test(l)}}}}),c=(o(325),o(30)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"form",class:{active:t.modalFormActive},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("input",{attrs:{type:"hidden",id:"country",name:"country"},domProps:{value:t.form.country}}),t._v(" "),e("input",{attrs:{type:"hidden",id:"ip",name:"ip"},domProps:{value:t.form.ip}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"subid",id:"subid"},domProps:{value:t.form.externalId}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"utm"},domProps:{value:t.form.url}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"_ref"},domProps:{value:t.form.httpReferer}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub1"},domProps:{value:t.form.sub1}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub2"},domProps:{value:t.form.sub2}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub3"},domProps:{value:t.form.sub3}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub4"},domProps:{value:t.form.sub4}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub5"},domProps:{value:t.form.sub5}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub6"},domProps:{value:t.form.sub6}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"sub7"},domProps:{value:t.form.sub7}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"apps"},domProps:{value:t.form.appsId}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"onesignal"},domProps:{value:t.form.gaid}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"bundle"},domProps:{value:t.form.bundle}}),t._v(" "),e("div",{staticClass:"wrapper-container-names"},[e("div",{staticClass:"input-container"},[e("label",{staticClass:"input-label",attrs:{for:"name"}},[t._v("Имя")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input",class:{isError:t.nameError},attrs:{type:"text",id:"name",required:""},domProps:{value:t.form.name},on:{blur:t.validateFirstName,input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.nameError?e("div",{staticClass:"input-error"},[t._v("Введите имя!")]):t._e()]),t._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"input-label",attrs:{for:"second_name"}},[t._v("Фамилия")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.second_name,expression:"form.second_name"}],staticClass:"input",class:{isError:t.secondNameError},attrs:{type:"text",id:"second_name",required:""},domProps:{value:t.form.second_name},on:{blur:t.validateSecondName,input:function(e){e.target.composing||t.$set(t.form,"second_name",e.target.value)}}}),t._v(" "),t.secondNameError?e("div",{staticClass:"input-error"},[t._v("\n          Введите фамилию!\n        ")]):t._e()])]),t._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"input-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",class:{isError:t.emailError},attrs:{type:"email",id:"email",required:""},domProps:{value:t.form.email},on:{blur:t.validateEmail,input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.emailError?e("div",{staticClass:"input-error"},[t._v("Введите email!")]):t._e()]),t._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"input-label",attrs:{for:"phone"}},[t._v("Телефон")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"input phone",class:{isError:t.phoneNumberError},attrs:{type:"text",id:"phone",inputmode:"tel",placeholder:"+1 ___ ___ ____",required:""},domProps:{value:t.form.phone},on:{input:[function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)},t.mask],focus:t.mask,blur:t.mask,keydown:t.mask}}),t._v(" "),t.phoneNumberError?e("div",{staticClass:"input-error"},[t._v("\n        Введите телефон!\n      ")]):t._e()]),t._v(" "),e("button",{staticClass:"button",class:{hiden:t.modalFormActive},attrs:{type:"submit"}},[t._v("Начать торговать")]),t._v(" "),e("button",{staticClass:"button modal",class:{active:t.modalFormActive},attrs:{type:"submit"}},[t._v("Начать торговать")]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"checkbox-container"},[e("div",{staticClass:"custom-checkbox-container"},[e("input",{staticClass:"checkbox",attrs:{type:"checkbox",name:"personalData",id:"presonalData",required:"",checked:""}}),t._v(" "),e("span",{staticClass:"checkmark"}),t._v(" "),e("span",{staticClass:"checkbox-info"},[t._v("Я ознакомлен и согласен с нашей политикой конфиденциальности")])]),t._v(" "),e("div",{staticClass:"custom-checkbox-container"},[e("input",{staticClass:"checkbox",attrs:{type:"checkbox",name:"personalData2",id:"presonalData2",required:"",checked:""}}),t._v(" "),e("span",{staticClass:"checkmark"}),t._v(" "),e("span",{staticClass:"checkbox-info"},[t._v("Мне больше 18 лет")])])])}],!1,null,"6805bf98",null);e.default=component.exports},325:function(t,e,o){"use strict";o(291)},326:function(t,e,o){var r=o(83)((function(i){return i[1]}));r.push([t.i,'.no-underline[data-v-6805bf98]{-webkit-text-decoration:none!important;text-decoration:none!important}.form[data-v-6805bf98]{background:#fff;background-color:transparent;border-radius:calc(.94118px + 1.88235vw);box-shadow:calc(.47059px + .94118vw) calc(.47059px + .94118vw) calc(1.17647px + 2.35294vw) rgba(15,23,42,.05);display:flex;flex-direction:column;padding:calc(2.94118px + 5.88235vw) calc(3.52941px + 7.05882vw)}.form .title-bg[data-v-6805bf98]{color:#272d37;font-family:"Nunito Sans",sans-serif;font-size:calc(1.88235px + 3.76471vw);font-style:normal;font-weight:500;letter-spacing:calc(-.01176px - .02353vw);line-height:calc(2.82353px + 5.64706vw);padding-bottom:calc(2.35294px + 4.70588vw)}.form .title-bg.active[data-v-6805bf98]{display:none}.form .input-container[data-v-6805bf98]{margin-bottom:calc(2.82353px + 5.64706vw);position:relative}.form .input-container .input[data-v-6805bf98],.form .input-container .input-label[data-v-6805bf98]{color:#0e0f0f;color:var(--black100,#0e0f0f);font-family:"Inter",sans-serif;font-size:calc(1.64706px + 3.29412vw);font-style:normal;font-weight:500;letter-spacing:calc(-.01647px - .03294vw);line-height:calc(2.58824px + 5.17647vw)}.form .input-container .input[data-v-6805bf98]{background-color:#fff;border:calc(.11765px + .23529vw) solid #d1d2d4;border-radius:calc(.70588px + 1.41176vw);box-sizing:border-box;color:#3f4853;padding:calc(1.41176px + 2.82353vw) calc(1.88235px + 3.76471vw);width:100%}.form .input-container .input[data-v-6805bf98]::-webkit-input-placeholder{color:#babbbd}.form .input-container .input[data-v-6805bf98]:-moz-placeholder,.form .input-container .input[data-v-6805bf98]::-moz-placeholder{color:#babbbd}.form .input-container .input[data-v-6805bf98]:-ms-input-placeholder{color:#babbbd}.form .input-container .input.isError[data-v-6805bf98]{border:calc(.11765px + .23529vw) solid #e60000}.form .input-container .input-error[data-v-6805bf98]{color:#e60000;font-family:"Inter",sans-serif;font-size:calc(1.41176px + 2.82353vw);font-style:normal;font-weight:500;line-height:calc(1.64706px + 3.29412vw);padding-left:calc(1.17647px + 2.35294vw);position:absolute}.form .button[data-v-6805bf98]{background:#171a20;border:none;border-radius:calc(1.17647px + 2.35294vw);box-shadow:0 calc(.11765px + .23529vw) calc(.23529px + .47059vw) rgba(16,24,40,.04);color:#fff;cursor:pointer;font-family:"Inter",sans-serif;font-size:calc(1.76471px + 3.52941vw);font-style:normal;font-weight:600;line-height:calc(2.58824px + 5.17647vw);margin-top:calc(2.82353px + 5.64706vw);order:3;padding:calc(1.41176px + 2.82353vw) calc(2.11765px + 4.23529vw);transition:.3s;width:100%}.form .button[data-v-6805bf98]:active,.form .button[data-v-6805bf98]:hover{background:#171a20;box-shadow:0 0 calc(.35294px + .70588vw) #171a20}.form .button.modal[data-v-6805bf98]{display:none}.form .checkbox-container .custom-checkbox-container[data-v-6805bf98]{display:flex;position:relative}.form .checkbox-container .custom-checkbox-container[data-v-6805bf98]:not(:last-child){padding-bottom:calc(1.17647px + 2.35294vw)}.form .checkbox-container .custom-checkbox-container .checkbox[data-v-6805bf98]{cursor:pointer;height:calc(2.35294px + 4.70588vw)!important;opacity:0;position:absolute;width:calc(2.35294px + 4.70588vw);z-index:1}.form .checkbox-container .custom-checkbox-container .checkmark[data-v-6805bf98]{background-color:#fff;border:calc(.23529px + .47059vw) solid #171a20;border-radius:calc(.58824px + 1.17647vw);display:inline-block;height:calc(2.35294px + 4.70588vw);left:0;max-width:calc(2.35294px + 4.70588vw);position:relative;top:0;width:100%}.form .checkbox-container .custom-checkbox-container .checkbox:hover~.checkmark[data-v-6805bf98]{box-shadow:inset 0 0 calc(.58824px + 1.17647vw) 0 #171a20}.form .checkbox-container .custom-checkbox-container .checkbox:checked~.checkmark[data-v-6805bf98]{background-color:#171a20}.form .checkbox-container .custom-checkbox-container .checkmark[data-v-6805bf98]:after{content:"";display:none;position:absolute}.form .checkbox-container .custom-checkbox-container .checkbox:checked~.checkmark[data-v-6805bf98]:after{display:block}.form .checkbox-container .custom-checkbox-container .checkmark[data-v-6805bf98]:after{border:solid #fff;border-width:0 calc(.4px + .8vw) calc(.35294px + .70588vw) 0;height:calc(.94118px + 1.88235vw);left:calc(.38824px + .77647vw);top:calc(.23529px + .47059vw);transform:rotate(45deg) rotateY(-40deg);width:calc(.70588px + 1.41176vw)}.form .checkbox-container .custom-checkbox-container .checkbox-info[data-v-6805bf98]{color:#0e0f0f;color:var(--black100,#0e0f0f);display:inline-block;font-family:"Inter",sans-serif;font-size:calc(1.17647px + 2.35294vw);font-style:normal;font-weight:500;letter-spacing:calc(-.01176px - .02353vw);line-height:150%;padding-left:calc(1.41176px + 2.82353vw)}@media only screen and (min-width:800px){.form[data-v-6805bf98]{background:#fff;border-radius:0;box-shadow:none;display:flex;flex-direction:column;padding:0}.form .title-bg[data-v-6805bf98]{font-size:calc(0px + 1.59722vw);font-weight:700;line-height:130%;padding-bottom:calc(0px + 2.22222vw);text-align:center}.form .title-bg.active[data-v-6805bf98]{display:none}.form .input-container[data-v-6805bf98]{margin-bottom:calc(0px + 1.38889vw)}.form .input-container .input-label[data-v-6805bf98]{color:#0e0f0f;font-family:"Inter",sans-serif;font-size:calc(0px + 1.11111vw);font-style:normal;font-weight:500;letter-spacing:calc(0px - .01111vw);line-height:calc(0px + 1.52778vw)}.form .input-container .input[data-v-6805bf98]{border:calc(0px + .13889vw) solid #dae0e6;border-radius:calc(0px + .41667vw);font-size:calc(0px + 1.04167vw);font-weight:400;line-height:calc(0px + 1.52778vw);padding:calc(0px + .83333vw) calc(0px + 1.11111vw)}.form .input-container .input.isError[data-v-6805bf98]{border:calc(0px + .06944vw) solid red}.form .input-container .input-error[data-v-6805bf98]{color:red;font-size:calc(0px + .83333vw);line-height:calc(0px + 1.11111vw);padding-left:calc(0px + .69444vw)}.form .button[data-v-6805bf98]{background:#171a20;border-radius:calc(0px + .41667vw);box-shadow:0 calc(0px + .06944vw) calc(0px + .13889vw) 0 rgba(16,24,40,.04);cursor:pointer;font-size:calc(0px + 1.04167vw);font-style:normal;font-weight:600;line-height:calc(0px + 1.52778vw);margin-bottom:0;margin-top:3.75vw;order:4;padding:calc(0px + .83333vw) 1.25vw}.form .button[data-v-6805bf98]:hover{box-shadow:0 0 calc(0px + .69444vw) #323232}.form .button.hiden[data-v-6805bf98],.form .button.modal[data-v-6805bf98]{display:none}.form .button.modal.active[data-v-6805bf98]{display:block;margin-top:calc(0px + 1.52778vw)}.form .checkbox-container .custom-checkbox-container[data-v-6805bf98]{display:flex;position:relative}.form .checkbox-container .custom-checkbox-container[data-v-6805bf98]:not(:last-child){padding-bottom:calc(0px + .69444vw)}.form .checkbox-container .custom-checkbox-container .checkbox[data-v-6805bf98]{height:calc(0px + 1.38889vw)!important;width:calc(0px + 1.38889vw)}.form .checkbox-container .custom-checkbox-container .checkmark[data-v-6805bf98]{border:calc(0px + .13889vw) solid #171a20;border-radius:calc(0px + .34722vw);height:calc(0px + 1.38889vw);max-width:calc(0px + 1.38889vw)}.form .checkbox-container .custom-checkbox-container .checkbox:hover~.checkmark[data-v-6805bf98]{box-shadow:inset 0 0 calc(0px + .34722vw) 0 #171a20}.form .checkbox-container .custom-checkbox-container .checkmark[data-v-6805bf98]:after{border-width:0 calc(0px + .27778vw) calc(0px + .20833vw) 0;height:calc(0px + .55556vw);left:calc(0px + .27778vw);position:absolute;top:calc(0px + .13889vw);width:calc(0px + .41667vw)}.form .checkbox-container .custom-checkbox-container .checkbox-info[data-v-6805bf98]{font-size:calc(0px + .97222vw);font-weight:500;line-height:150%;padding-left:calc(0px + .83333vw)}.form .messager-container .messager-title-bg[data-v-6805bf98]{font-size:calc(0px + 1.18056vw);font-style:normal;font-weight:500;line-height:150%;padding:calc(0px + 1.66667vw) 0 calc(0px + 1.38889vw)}.form .messager-container .checkbox-wrapper .custom-checkbox-container[data-v-6805bf98]{padding-right:calc(0px + .90278vw)}.form .messager-container .checkbox-wrapper .custom-checkbox-container .checkbox-messenger[data-v-6805bf98]{height:calc(0px + 1.38889vw)!important;width:calc(0px + 1.38889vw)}.form .messager-container .checkbox-wrapper .custom-checkbox-container .checkmark[data-v-6805bf98]{border:calc(0px + .06944vw) solid #171a20;border-radius:calc(0px + .34722vw);height:1.25vw;max-width:1.25vw;width:1.25vw}.form .messager-container .checkbox-wrapper .custom-checkbox-container .checkmark[data-v-6805bf98]:after{border:calc(.11765px + .23529vw) solid #fff;border-radius:calc(0px + .41667vw);height:1.25vw;position:absolute;width:1.25vw}.form .messager-container .checkbox-wrapper .custom-checkbox-container .checkbox-info[data-v-6805bf98]{font-size:calc(0px + .97222vw);font-weight:400;line-height:150%;padding:0 calc(0px + .55556vw)}}',""]),r.locals={},t.exports=r},341:function(t,e,o){var content=o(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("63760553",content,!0,{sourceMap:!1})},383:function(t,e,o){"use strict";o(341)},384:function(t,e,o){var r=o(83)((function(i){return i[1]}));r.push([t.i,'.no-underline[data-v-6329a564]{-webkit-text-decoration:none!important;text-decoration:none!important}.modalFormContainer[data-v-6329a564]{display:none}.modalFormContainer.active[data-v-6329a564]{align-items:flex-start;background-color:#fff;display:flex;height:100vh;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:100}.modalFormContainer.active .modal-wrapper[data-v-6329a564]{background-color:#fff;max-height:100vh;overflow-y:auto;position:relative;scrollbar-width:none}.modalFormContainer.active .modal-wrapper[data-v-6329a564]::-webkit-scrollbar{background:transparent;width:0}.modalFormContainer.active .modal-wrapper .header-title .button-back[data-v-6329a564]{background-color:transparent;border:none;padding:calc(1.76471px + 3.52941vw);position:absolute;right:calc(1.17647px + 2.35294vw);top:calc(1.17647px + 2.35294vw);z-index:1000}.modalFormContainer.active .modal-wrapper .header-title .button-back img[data-v-6329a564]{display:flex;height:calc(1.64706px + 3.29412vw);width:calc(1.64706px + 3.29412vw)}.modalFormContainer.active .modal-wrapper .modal-header[data-v-6329a564]{padding:calc(1.76471px + 3.52941vw) calc(4.11765px + 8.23529vw) 0;position:relative}.modalFormContainer.active .modal-wrapper .modal-header .title[data-v-6329a564]{color:#0e0f0f;color:var(--black100,#0e0f0f);display:flex;font-family:"Inter",sans-serif;font-size:calc(2.35294px + 4.70588vw);font-style:normal;font-weight:500;justify-content:center;letter-spacing:calc(-.04706px - .09412vw);line-height:130%;text-align:center}.modalFormContainer.active .modal-wrapper .modal-header .actions .close-modal[data-v-6329a564]{background-color:transparent;border:none;position:absolute;right:calc(2.35294px + 4.70588vw);top:calc(3.52941px + 7.05882vw)}.modalFormContainer.active .modal-wrapper .modal-header .actions .close-modal img[data-v-6329a564]{cursor:pointer;display:flex;width:calc(2.35294px + 4.70588vw)}.modalFormContainer.active .form[data-v-6329a564]{background-color:#fff}@media screen and (min-width:800px){.modalFormContainer[data-v-6329a564]{display:none}.modalFormContainer.active[data-v-6329a564]{align-items:center;background-color:rgba(0,0,0,.745);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0}.modalFormContainer.active .modal-wrapper[data-v-6329a564]{background-color:#fff;border-radius:calc(0px + .69444vw);padding:calc(0px + 2.08333vw);width:calc(0px + 36.80556vw)}.modalFormContainer.active .modal-wrapper .modal-header[data-v-6329a564]{display:flex;justify-content:center;padding:0;width:100%}.modalFormContainer.active .modal-wrapper .modal-header .title[data-v-6329a564]{font-size:calc(0px + 1.38889vw);font-weight:600;letter-spacing:calc(0px - .02778vw);line-height:130%;padding:0 calc(0px + 1.38889vw);text-align:center}.modalFormContainer.active .modal-wrapper .modal-header .actions .close-modal[data-v-6329a564]{background-color:transparent;border:none;cursor:pointer;position:absolute;right:calc(0px + 1.38889vw);top:calc(0px + .69444vw)}.modalFormContainer.active .modal-wrapper .modal-header .actions .close-modal img[data-v-6329a564]{display:flex;width:calc(0px + 1.04167vw)}.modalFormContainer.active .form[data-v-6329a564]{background-color:#fff}}',""]),r.locals={},t.exports=r},425:function(t,e,o){"use strict";o.r(e);o(298);var r={name:"ModalForm",computed:{modalFormActive:function(){return this.$store.state.modalFormActive}},methods:{closeModalFormActive:function(){this.$store.commit("setModalFormActive",!1)}}},n=(o(383),o(30)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modalFormContainer",class:{active:t.modalFormActive}},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"header-title mobile"},[e("div",{staticClass:"actions mobile"},[e("button",{staticClass:"button-back mobile",on:{click:function(e){return e.preventDefault(),t.closeModalFormActive.apply(null,arguments)}}},[e("img",{attrs:{src:o(297),loading:"lazy",alt:"d2d1d21s"}})])])]),t._v(" "),e("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"actions desktop"},[e("button",{staticClass:"close-modal desktop",on:{click:function(e){return e.preventDefault(),t.closeModalFormActive.apply(null,arguments)}}},[e("img",{attrs:{src:o(278),loading:"lazy",alt:"dsa213"}})])])]),t._v(" "),e("FormComponent",{staticClass:"modal form-costomized"})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title desktop"},[t._v("\n        Введите свои данные, чтобы открыть"),e("br"),t._v("\n        инвестиционный счет\n      ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title mobile"},[t._v("\n        Введите свои данные,"),e("br"),t._v("\n        чтобы открыть счет\n      ")])}],!1,null,"6329a564",null);e.default=component.exports;installComponents(component,{FormComponent:o(298).default})}}]);