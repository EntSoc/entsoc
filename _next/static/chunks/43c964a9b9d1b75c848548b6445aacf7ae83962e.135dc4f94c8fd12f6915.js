(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"0iCA":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(c(t)),t.handleErrored=t.handleErrored.bind(c(t)),t.handleChange=t.handleChange.bind(c(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(c(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,a){e.executionResolve=t,e.executionReject=a,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return r.a.createElement("div",s({},t,{ref:this.handleRecaptchaRef}))},n}(r.a.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:o.a.string.isRequired,onChange:o.a.func,grecaptcha:o.a.object,theme:o.a.oneOf(["dark","light"]),type:o.a.oneOf(["image","audio"]),tabindex:o.a.number,onExpired:o.a.func,onErrored:o.a.func,size:o.a.oneOf(["compact","normal","invisible"]),stoken:o.a.string,hl:o.a.string,badge:o.a.oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var d=a("2mql"),u=a.n(d);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m={},h=0;var f,v,g=(f=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},v=(v={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,r;function i(e,a){var n;return(n=t.call(this,e,a)||this).state={},n.__scriptURL="",n}r=t,(a=i).prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r;var o=i.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+h++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof f?f():f,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[v.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),n=v,r=n.globalName,i=n.callbackName,o=n.scriptId;if(r&&"undefined"!==typeof window[r]&&(m[t]={loaded:!0,observers:{}}),m[t]){var s=m[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:c};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,v.attributes)l.setAttribute(d,v.attributes[d]);o&&(l.id=o);var u=function(e){if(m[t]){var a=m[t].observers;for(var n in a)e(a[n])&&delete a[n]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=m[t];e&&(e.loaded=!0,u((function(t){return!i&&(t(e),!0)})))},l.onerror=function(){var e=m[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(l)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===v.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var n=m[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===v.removeOnUnmount&&delete m[e])},o.render=function(){var t=v.globalName,a=this.props,r=(a.asyncScriptOnLoad,a.forwardedRef),i=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=r,Object(n.createElement)(e,i)},i}(n.Component),r=Object(n.forwardRef)((function(e,t){return Object(n.createElement)(a,p({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:o.a.func},u()(r,e)})(l);t.a=g},"4VY1":function(e,t,a){"use strict";var n,r=a("lSNA"),i=a.n(r),o=a("q1tI"),s=a.n(o),c=a("nOHt"),l=a("bWLx"),d=a("ofer"),u=a("Z3vd"),p=a("0iCA");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=(n={name:"",email:"",title:"",description:"",typeTags:new Array(9).fill(!1),termTags:new Array(3).fill(!1),duration:""},i()(n,"email",""),i()(n,"instagram",""),i()(n,"facebook",""),i()(n,"linkedin",""),i()(n,"website",""),i()(n,"roles",[{roleName:"",numPositions:"",description:"",responsibilities:"",qualifications:"",timeCommitment:""}]),i()(n,"projectTags",new Array(13).fill(!1)),i()(n,"expiryDate",""),i()(n,"howDidYouHearAboutUs",""),n),v=function(e,t){var a=t.payload;return h(h({},e),a)},g=a("Cps2"),b=a("tRbT"),y=a("kKAo"),w=(a("TljZ"),a("S2tT"),o.createElement),N=function(e){var t=e.header,a=e.subheader,n=e.onChange,r=e.onChangeRoles,i=e.value,s=e.name,c=Object(o.useState)(i),l=c[0],u=c[1],p=function(e){u(e.target.value),n?n(e.target):r&&r(e.target.value)};return w("div",{className:"short-response"},w(d.a,{className:"header",variant:"h5",color:"primary"},t),a&&w(d.a,{className:"subheader",variant:"body2",color:"primary"},a),w("input",{type:"text",className:"response-input",name:s,onChange:function(e){return p(e)},value:l}))},C=(a("bKt3"),s.a.createElement),x=function(e){var t=e.media,a=e.placeholderInfo,n=e.onChange,r=e.name,i=e.value,s=Object(o.useState)(i),c=s[0],l=s[1],d=function(e){l(e.target.value),n(e.target)};return C("div",{className:"flex-row"},C("div",{className:"contact-container"},C("div",{className:"contact valign-text-middle"},t)),C("input",{type:"text",className:"input-text",placeholder:a,name:r,value:c,onChange:function(e){return d(e)}}))},O=function(e){var t=e.onChange,a=e.form;return C("div",null,C(d.a,{className:"header",variant:"h5",color:"primary"},"Contact Information"),C(d.a,{className:"subheader",variant:"body2",color:"primary"},"How applicants will get in touch with you."),C(x,{media:"Email",onChange:t,name:"email",value:a.email}),C(x,{media:"Instagram",onChange:t,name:"instagram",value:a.instagram}),C(x,{media:"Facebook",onChange:t,name:"facebook",value:a.facebook}),C(x,{media:"LinkedIn",onChange:t,name:"linkedin",value:a.linkedin}),C(x,{media:"Website",onChange:t,name:"website",value:a.website}))},j=(a("btZB"),o.createElement),R=function(e){var t=e.header,a=e.subheader,n=e.onChange,r=e.onChangeRoles,i=e.value,s=e.name,c=Object(o.useState)(i),l=c[0],u=c[1],p=function(e){u(e.target.value),n?n(e.target):r&&r(e.target.value)};return j("div",{className:"long-response"},j(d.a,{className:"header",variant:"h5",color:"primary"},t),a&&j(d.a,{className:"subheader",variant:"body2",color:"primary"},a),j("textarea",{type:"text",className:"response-area",name:s,onChange:function(e){return p(e)},value:l}))},T=a("nTux"),S=a("P6Tf"),k=s.a.createElement,E=function(e){var t=e.formType,a=e.handleFormWithName,n=e.handleFormWithTarget,r=e.form,i="individual"===t?["Business","Social Initiative","Development","Student-run","Engineering","Design","For-profit","Non-profit","Other"]:["Political and Social Awareness","Academic","Cultural","Engineering","Games, Recreational and Social","Design","Art","Other"],s=["Fall 2021","Winter 2022","Spring 2022"],c=Object(o.useState)(r.typeTags),l=c[0],u=c[1],p=Object(o.useState)(r.termTags),m=p[0],h=p[1];Object(o.useEffect)((function(){f()}),[l]),Object(o.useEffect)((function(){v()}),[m]);var f=function(){a&&a("typeTags",l)},v=function(){a&&a("termTags",m)};return k(y.a,{className:"registration-form"},k(N,{header:"Full Name",onChange:n,value:r.name,name:"name"}),k(N,{header:"Waterloo Email",onChange:n,value:r.email,name:"email"}),k(N,{header:"".concat("individual"===t?"Project Title":"Club Name"),onChange:n,value:r.title,name:"title"}),k(R,{header:"".concat("individual"===t?"Project Description":"Club Description"),subheader:"Things to include: Mission, goals, deliverables of the project, benefits of taking part, and etc.",onChange:n,value:r.description,name:"description"}),k(d.a,{className:"header",variant:"h5",color:"primary"},"individual"===t?"Project Type":"Club Type"),k(b.a,{container:!0,spacing:1,alignItems:"center"},i&&i.map((function(e,t){return k(b.a,{item:!0,key:e},k(T.a,{colour:Object(S.e)(t),title:e,clickable:!0,name:"typetags",onSelect:function(){u(l.map((function(e,a){return t===a?!e:e}))),f()},selected:l[t]}))}))),"individual"===t?k(N,{header:"Project Duration",onChange:n,value:r.duration,name:"duration"}):k("div",{className:"long-response"},k(d.a,{className:"header",variant:"h5",color:"primary"},"Club Term"),k(d.a,{className:"subheader",variant:"body2",color:"primary"},"Please specify what term you are recruiting for."),k(b.a,{container:!0,spacing:1,alignItems:"center"},s&&s.map((function(e,t){return k(b.a,{item:!0,key:e},k(T.a,{colour:Object(S.e)(t),title:e,clickable:!0,name:"termtags",onSelect:function(){h(m.map((function(e,a){return t===a?!e:e}))),v()},selected:m[t]}))})))),k(O,{onChange:n,form:r}))},I=a("RIqP"),P=a.n(I),L=(a("Q0bV"),a("r9w1")),_=(a("VgmO"),o.createElement),D=function(e){var t=e.header,a=e.subheader,n=e.onChange,r=e.value,i=e.name,s=Object(o.useState)(r),c=s[0],l=s[1],u=function(e){l(e.target.value),n(e.target)};return _("div",{className:"short-response"},_(d.a,{className:"header",variant:"h5",color:"primary"},t),a&&_(d.a,{className:"subheader",variant:"body2",color:"primary"},a),_(L.a,{id:"date",type:"date",className:"textField",InputLabelProps:{shrink:!0},name:i,onChange:function(e){return u(e)},value:c}))},H=a("H7qK"),A=a("hlFM"),W=s.a.createElement,F=function(e){var t=e.handleFormWithTarget,a=e.handleFormWithName,n=e.form,r=Object(o.useState)(n.roles),i=r[0],s=r[1];Object(o.useEffect)((function(){m()}),[i]);var c=["Student organization","Co-founder","Start-up","Program lead","Internal project manager","Application designer","Artist","Zero experience","Logistics coordinator","Year 1","Year 2","Year 3","Year 4"],l=Object(o.useState)(n.projectTags),u=l[0],p=l[1];Object(o.useEffect)((function(){f()}),[u]);var m=function(){a("roles",i)},h=function(e,t,a){var n=P()(i);n[t][a]=e,s(n)},f=function(){a&&a("projectTags",u)},v=i.map((function(e,t){return W(A.a,{className:"role-container",key:e.name},W(d.a,{variant:"h3",color:"primary"},"Role #",t+1),W(N,{header:"Role name",value:e.roleName,onChangeRoles:function(e){return h(e,t,"roleName")}}),W(N,{header:"Number of positions",value:e.numPositions,onChangeRoles:function(e){return h(e,t,"numPositions")}}),W(R,{header:"Description",value:e.description,onChangeRoles:function(e){return h(e,t,"description")}}),W(R,{header:"Responsibilities & Duties",subheader:"Place each point on a new line.",value:e.responsibilities,onChangeRoles:function(e){return h(e,t,"responsibilities")}}),W(R,{header:"Qualifications",subheader:"Things to include: Year of study, field of study, expected level of experience, skills and traits required, etc. Place each point on a new line.",value:e.qualifications,onChangeRoles:function(e){return h(e,t,"qualifications")}}),W(N,{header:"Expected time commitment",subheader:"E.g. how many hours per week.",value:e.timeCommitment,onChangeRoles:function(e){return h(e,t,"timeCommitment")}}))}));return W(y.a,{className:"role-form"},v,W("div",{className:"role-buttons"},W(H.a,{onClick:function(){s([].concat(P()(i),[{roleName:"",numPositions:"",description:"",responsibilities:"",qualifications:"",timeCommitment:""}]))},text:"Add new role",buttonClassName:"role-button",textClassName:"role-button-text"}),W(H.a,{onClick:function(){s(i.slice(0,-1))},text:"Remove role",buttonClassName:"role-button",textClassName:"role-button-text"})),W(d.a,{className:"header",variant:"h5",color:"primary"},"Project Tags"),W(b.a,{container:!0,spacing:1,alignItems:"center"},c&&c.map((function(e,t){return W(b.a,{item:!0,key:e},W(T.a,{colour:Object(S.e)(t),title:e,clickable:!0,name:"projectTags",onSelect:function(){p(u.map((function(e,a){return t===a?!e:e}))),f()},selected:u[t]}))}))),W(D,{header:"Listing expiry date",onChange:t,value:n.expiryDate,name:"expiryDate"}),W(N,{header:"How did you hear about us?",onChange:t,value:n.howDidYouHearAboutUs,name:"howDidYouHearAboutUs"}))},q=s.a.createElement,U=function(e){var t=e.reviewHeader,a=e.reviewContent;return q("div",null,q(d.a,{className:"header",variant:"h5",color:"primary"},t),q(d.a,{className:"subheader",variant:"body2",color:"primary"},a))},Y=function(e){var t=e.reviewHeader,a=e.reviewContent.map((function(e){return q(d.a,{className:"subheader",variant:"body2",color:"primary",key:e},e," ",q("br",null))}));return q("div",null,q(d.a,{className:"header",variant:"h5",color:"primary"},t),q("div",null,a))},M=function(e){var t=e.role,a=e.index;return q("div",null,q(d.a,{className:"header",variant:"h5",color:"primary"},"Role #".concat(a+1)),q(d.a,{className:"subheader",variant:"body2",color:"primary"},"Role name and number of positions"),q("div",null,"".concat(t.roleName," (").concat(t.numPositions,")")),q(d.a,{className:"subheader",variant:"body2",color:"primary"},"Description"),q("div",null,t.description),q(d.a,{className:"subheader",variant:"body2",color:"primary"},"Responsibilities"),q("div",null,t.responsibilities),q(d.a,{className:"subheader",variant:"body2",color:"primary"},"Qualifications"),q("div",null,t.qualifications),q(d.a,{className:"subheader",variant:"body2",color:"primary"},"Time commitment"),q("div",null,t.timeCommitment))},B=function(e){var t=e.reviewHeader,a=e.allTags,n=e.selectedTags;return q("div",null,q(d.a,{className:"header",variant:"h5",color:"primary"},t),q(b.a,{container:!0,spacing:1,alignItems:"center"},a&&a.map((function(e,t){return q(b.a,{item:!0,key:e},q(T.a,{colour:Object(S.e)(t),title:e,selected:n[t]}))}))))},z=function(e){var t=e.form,a=e.formType,n="individual"===a?"Project ":"Club ",r="individual"===a?["Business","Social Initiative","Development","Student-run","Engineering","Design","For-profit","Non-profit","Other"]:["Political and Social Awareness","Academic","Cultural","Engineering","Games, Recreational and Social","Design","Art","Other"];return q("div",{className:"registration-form"},q(U,{reviewHeader:"Full Name",reviewContent:t.name}),q(U,{reviewHeader:"Waterloo Email",reviewContent:t.email}),q(U,{reviewHeader:n+"Name",reviewContent:t.title}),q(U,{reviewHeader:n+"Description",reviewContent:t.description}),q(B,{reviewHeader:n+"Type",allTags:r,selectedTags:t.typeTags}),"individual"===a?q(U,{reviewHeader:"Project Duration",reviewContent:t.duration}):q(B,{reviewHeader:"Club Term",allTags:["Fall 2021","Winter 2022","Spring 2022"],selectedTags:t.termTags}),q(Y,{reviewHeader:"Contact Information",reviewContent:["Email: "+t.email,"Instagram: "+t.instagram,"Facebook: "+t.facebook,"LinkedIn: "+t.linkedin,"Website: "+t.website]}),t.roles.map((function(e,t){return q(M,{role:e,index:t,key:e.roleName})})),q(B,{reviewHeader:"Project Tags",allTags:["Student organization","Co-founder","Start-up","Program lead","Internal project manager","Application designer","Artist","Zero experience","Logistics coordinator","Year 1","Year 2","Year 3","Year 4"],selectedTags:t.projectTags}),q(U,{reviewHeader:"Listing expiry date",reviewContent:t.expiryDate}),q(U,{reviewHeader:"How did you hear about us?",reviewContent:t.howDidYouHearAboutUs}))},Z=(a("ucKM"),s.a.createElement),K=function(e){var t=e.progress,a=["details","description","review"],n=function(e){return a.indexOf(e)===t?"current-".concat(e):""};return Z("div",{className:"progress-container"},Z("div",{className:"details progress-step"},Z("div",{className:"progress-num-cont ".concat(n("details"))},Z(d.a,{variant:"body1",className:"progress-num"},"1")),Z(d.a,{variant:"body1",className:"progress-title"},"Project Details")),Z("div",{className:"progress-line ".concat(n("details"))}),Z("div",{className:"description progress-step"},Z("div",{className:"progress-num-cont ".concat(n("description"))},Z(d.a,{variant:"body1",className:"progress-num"},"2")),Z(d.a,{variant:"body1",className:"progress-title"},"Role Description")),Z("div",{className:"progress-line ".concat(n("description"))}),Z("div",{className:"review progress-step"},Z("div",{className:"progress-num-cont ".concat(n("review"))},Z(d.a,{variant:"body1",className:"progress-num"},"3")),Z(d.a,{variant:"body1",className:"progress-title"},"Review ","&"," Submit")))};K.defaultProps={progress:1};var Q=K,V=(a("eQUh"),a("+Mj3")),G=(a("9HnT"),s.a.createElement),J=function(e){var t=e.currentStage;return G("div",{className:"bar-container"},G(Q,{progress:t}))};t.a=function(e){var t=e.formType,a=Object(o.useReducer)(v,f),n=a[0],r=a[1],s=function(e){r({payload:i()({},e.name,e.value)})},m=function(e,t){r({payload:i()({},e,t)})},h=Object(o.useState)(0),b=h[0],y=h[1],w=Object(c.useRouter)(),N={individual:[G(E,{formType:"individual",handleFormWithTarget:s,form:n,handleFormWithName:m}),G(F,{handleFormWithTarget:s,form:n,handleFormWithName:m}),G(z,{formType:"individual",form:n})],club:[G(E,{formType:"club",handleFormWithName:m,form:n,handleFormWithTarget:s}),G(F,{handleFormWithName:m,form:n,handleFormWithTarget:s}),G(z,{formType:"club",form:n})]},C=Object(o.useState)(!1),x=C[0],O=C[1];return G(g.a,null,G(l.a,{theme:V.b},G("div",{className:"janus-registration-club"},G("div",null,G(d.a,{variant:"h3",color:"primary"},{individual:["Individual Posting - Project Details","Individual Posting - Roles","Individual Posting - Review & Submit"],club:["Club Posting - Club Details","Club Posting - Roles","Club Posting - Review & Submit"]}[t][b]),G(J,{currentStage:b}),N[t][b],G("div",{className:"recaptcha-container"},2==b&&G(p.a,{sitekey:"6LeLrqQbAAAAAMMur4uQwObltgk3aaO5HhWlIf4p",onChange:function(){return O(!0)}})),G("div",{className:"button-container"},b>0&&G(u.a,{variant:"outlined",color:"primary",className:"button-back",onClick:function(){b>0&&y(b-1)}},"Back"),G(u.a,{variant:"contained",color:"primary",className:"button-next",onClick:function(){b<N[t].length-1?(y(b+1),window.scrollTo(0,0)):w.push("/janus/registration/success")},disabled:2===b&&!x},2===b?"Submit":"Next"))))))}},"9HnT":function(e,t,a){e.exports={topBarHeight:"72px",footerHeight:"48px",primary:"#141c5a",blue:"#a4e1ea",yellow:"#ffba52",red:"#e34d59"}},H7qK:function(e,t,a){"use strict";var n=a("RD7I"),r=a("Z3vd"),i=a("v3sT"),o=a.n(i),s=a("q1tI"),c=a.n(s).a.createElement,l=Object(n.a)({squareButton:{borderRadius:"2px",paddingLeft:"40px",paddingRight:"40px",margin:"auto",textTransform:"none"},buttonText:{fontSize:"24px",fontWeight:500,padding:"5px"}});t.a=function(e){var t=e.onClick,a=e.text,n=e.buttonClassName,i=e.textClassName,s=l();return c(r.a,{className:"".concat(n," ").concat(s.squareButton),variant:"contained",color:"default",onClick:t},c(o.a,{className:"".concat(i," ").concat(s.buttonText),variant:"h5",color:"primary"},a))}},Q0bV:function(e,t,a){},S2tT:function(e,t,a){},TljZ:function(e,t,a){},VgmO:function(e,t,a){},bKt3:function(e,t,a){},btZB:function(e,t,a){},hlFM:function(e,t,a){"use strict";var n=a("HO1X"),r=a("MIS5"),i=a("6bl3"),o=a("duIU"),s=a("UHX9"),c=a("g0zJ"),l=a("V8uu"),d=a("REiy"),u=a("2Bbb"),p=a("03aJ"),m=a("+Hmc"),h=a("yS7Z"),f=a("wx14"),v=a("/P46"),g=a("cNwE"),b=function(e){var t=Object(v.a)(e);return function(e,a){return t(e,Object(f.a)({defaultTheme:g.a},a))}},y=Object(n.b)(Object(r.a)(i.h,o.a,s.d,c.a,l.b,d.c,u.a,p.b,m.b,h.a)),w=b("div")(y,{name:"MuiBox"});t.a=w},ucKM:function(e,t,a){e.exports={primary:"#141c5a",blue:"#a4e1ea",yellow:"#ffba52",red:"#e34d59"}}}]);