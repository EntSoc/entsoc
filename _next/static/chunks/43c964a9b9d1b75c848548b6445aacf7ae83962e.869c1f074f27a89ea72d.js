(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"+Mj3":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("SUMQ"),a={main:"#141C5A",dark:"#3F1DCB",divider:"#D3D3D3"};t.b=Object(n.createMuiTheme)({palette:{primary:{main:a.main,dark:a.dark},secondary:{main:"#3F1DCB"}},overrides:{MuiButtonBase:{root:{display:"block",width:"100%",justifyContent:"flex-end"}},MuiDrawer:{paper:{background:a.main,color:"white",top:"20vh",display:"inline-block",flexDirection:"column",justifyContent:"flex-end"},paperAnchorRight:{left:"20vh"}}},typography:{fontFamily:['"Montserrat", sans-serif'],title:{fontWeight:400,fontSize:27,lineHeight:1.5},caption:{fontSize:14,lineHeight:1.4},h2:{fontWeight:600,fontSize:60,lineHeight:1.6},h3:{fontWeight:600,fontSize:35,lineHeight:1.2},h4:{fontSize:21,color:"#fff"},h5:{fontSize:22,lineHeight:1.4,fontWeight:500},h6:{fontSize:22,lineHeight:1.3},body1:{fontWeight:400,fontSize:24,lineHeight:3,color:"#fff"},body2:{fontWeight:400,fontSize:15,lineHeight:1.4},overline:{fontSize:14,lineHeight:1.4},subtitle1:{fontSize:14,lineHeight:1.4,fontWeight:400},subtitle2:{fontSize:13,lineHeight:1.4,fontWeight:400,color:"#fff"}}})},"0iCA":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("17x9"),o=r.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(s(t)),t.handleErrored=t.handleErrored.bind(s(t)),t.handleChange=t.handleChange.bind(s(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(s(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},n}(a.a.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:o.a.string.isRequired,onChange:o.a.func,grecaptcha:o.a.object,theme:o.a.oneOf(["dark","light"]),type:o.a.oneOf(["image","audio"]),tabindex:o.a.number,onExpired:o.a.func,onErrored:o.a.func,size:o.a.oneOf(["compact","normal","invisible"]),stoken:o.a.string,hl:o.a.string,badge:o.a.oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var u=r("2mql"),d=r.n(u);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f={},m=0;var h,v,g=(h=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},v=(v={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,a;function i(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}a=t,(r=i).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var o=i.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+m++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof h?h():h,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=f[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[v.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=v,a=n.globalName,i=n.callbackName,o=n.scriptId;if(a&&"undefined"!==typeof window[a]&&(f[t]={loaded:!0,observers:{}}),f[t]){var c=f[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},f[t]={loaded:!1,observers:s};var l=document.createElement("script");for(var u in l.src=t,l.async=!0,v.attributes)l.setAttribute(u,v.attributes[u]);o&&(l.id=o);var d=function(e){if(f[t]){var r=f[t].observers;for(var n in r)e(r[n])&&delete r[n]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=f[t];e&&(e.loaded=!0,d((function(t){return!i&&(t(e),!0)})))},l.onerror=function(){var e=f[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(l)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===v.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=f[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===v.removeOnUnmount&&delete f[e])},o.render=function(){var t=v.globalName,r=this.props,a=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=a,Object(n.createElement)(e,i)},i}(n.Component),a=Object(n.forwardRef)((function(e,t){return Object(n.createElement)(r,p({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:o.a.func},d()(a,e)})(l);t.a=g},"4VY1":function(e,t,r){"use strict";var n,a=r("lSNA"),i=r.n(a),o=r("q1tI"),c=r.n(o),s=r("nOHt"),l=r("bWLx"),u=r("ofer"),d=r("Z3vd"),p=r("0iCA");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(n={name:"",email:"",title:"",description:"",typeTags:new Array(9).fill(!1),termTags:new Array(3).fill(!1),duration:""},i()(n,"email",""),i()(n,"instagram",""),i()(n,"facebook",""),i()(n,"linkedin",""),i()(n,"website",""),i()(n,"roles",[{roleName:"",numPositions:"",description:"",responsibilities:"",qualifications:"",timeCommitment:""}]),i()(n,"projectTags",new Array(13).fill(!1)),i()(n,"expiryDate",""),i()(n,"howDidYouHearAboutUs",""),n),v=function(e,t){var r=t.payload;return m(m({},e),r)},g=r("Cps2"),b=r("tRbT"),y=r("kKAo"),w=(r("TljZ"),r("S2tT"),o.createElement),O=function(e){var t=e.header,r=e.subheader,n=e.onChange,a=e.onChangeRoles,i=e.value,c=e.name,s=Object(o.useState)(i),l=s[0],d=s[1],p=function(e){d(e.target.value),n?n(e.target):a&&a(e.target.value)};return w("div",{className:"short-response"},w(u.a,{className:"header",variant:"h5",color:"primary"},t),r&&w(u.a,{className:"subheader",variant:"body2",color:"primary"},r),w("input",{type:"text",className:"response-input",name:c,onChange:function(e){return p(e)},value:l}))},C=(r("bKt3"),c.a.createElement),S=function(e){var t=e.media,r=e.placeholderInfo,n=e.onChange,a=e.name,i=e.value,c=Object(o.useState)(i),s=c[0],l=c[1],u=function(e){l(e.target.value),n(e.target)};return C("div",{className:"flex-row"},C("div",{className:"contact-container"},C("div",{className:"contact valign-text-middle"},t)),C("input",{type:"text",className:"input-text",placeholder:r,name:a,value:s,onChange:function(e){return u(e)}}))},j=function(e){var t=e.onChange,r=e.form;return C("div",null,C(u.a,{className:"header",variant:"h5",color:"primary"},"Contact Information"),C(u.a,{className:"subheader",variant:"body2",color:"primary"},"How applicants will get in touch with you."),C(S,{media:"Email",onChange:t,name:"email",value:r.email}),C(S,{media:"Instagram",onChange:t,name:"instagram",value:r.instagram}),C(S,{media:"Facebook",onChange:t,name:"facebook",value:r.facebook}),C(S,{media:"LinkedIn",onChange:t,name:"linkedin",value:r.linkedin}),C(S,{media:"Website",onChange:t,name:"website",value:r.website}))},N=(r("btZB"),o.createElement),x=function(e){var t=e.header,r=e.subheader,n=e.onChange,a=e.onChangeRoles,i=e.value,c=e.name,s=Object(o.useState)(i),l=s[0],d=s[1],p=function(e){d(e.target.value),n?n(e.target):a&&a(e.target.value)};return N("div",{className:"long-response"},N(u.a,{className:"header",variant:"h5",color:"primary"},t),r&&N(u.a,{className:"subheader",variant:"body2",color:"primary"},r),N("textarea",{type:"text",className:"response-area",name:c,onChange:function(e){return p(e)},value:l}))},T=r("nTux"),P=r("P6Tf"),R=c.a.createElement,k=function(e){var t=e.formType,r=e.handleFormWithName,n=e.handleFormWithTarget,a=e.form,i="individual"===t?["Business","Social Initiative","Development","Student-run","Engineering","Design","For-profit","Non-profit","Other"]:["Political and Social Awareness","Academic","Cultural","Engineering","Games, Recreational and Social","Design","Art","Other"],c=["Fall 2021","Winter 2022","Spring 2022"],s=Object(o.useState)(a.typeTags),l=s[0],d=s[1],p=Object(o.useState)(a.termTags),f=p[0],m=p[1];Object(o.useEffect)((function(){h()}),[l]),Object(o.useEffect)((function(){v()}),[f]);var h=function(){r&&r("typeTags",l)},v=function(){r&&r("termTags",f)};return R(y.a,{className:"registration-form"},R(O,{header:"Full Name",onChange:n,value:a.name,name:"name"}),R(O,{header:"Waterloo Email",onChange:n,value:a.email,name:"email"}),R(O,{header:"".concat("individual"===t?"Project Title":"Club Name"),onChange:n,value:a.title,name:"title"}),R(x,{header:"".concat("individual"===t?"Project Description":"Club Description"),subheader:"Things to include: Mission, goals, deliverables of the project, benefits of taking part, and etc.",onChange:n,value:a.description,name:"description"}),R(u.a,{className:"header",variant:"h5",color:"primary"},"individual"===t?"Project Type":"Club Type"),R(b.a,{container:!0,spacing:1,alignItems:"center"},i&&i.map((function(e,t){return R(b.a,{item:!0,key:e},R(T.a,{colour:Object(P.e)(t),title:e,clickable:!0,name:"typetags",onSelect:function(){d(l.map((function(e,r){return t===r?!e:e}))),h()},selected:l[t]}))}))),"individual"===t?R(O,{header:"Project Duration",onChange:n,value:a.duration,name:"duration"}):R("div",{className:"long-response"},R(u.a,{className:"header",variant:"h5",color:"primary"},"Club Term"),R(u.a,{className:"subheader",variant:"body2",color:"primary"},"Please specify what term you are recruiting for."),R(b.a,{container:!0,spacing:1,alignItems:"center"},c&&c.map((function(e,t){return R(b.a,{item:!0,key:e},R(T.a,{colour:Object(P.e)(t),title:e,clickable:!0,name:"termtags",onSelect:function(){m(f.map((function(e,r){return t===r?!e:e}))),v()},selected:f[t]}))})))),R(j,{onChange:n,form:a}))},E=r("RIqP"),_=r.n(E),L=(r("Q0bV"),r("r9w1")),H=(r("VgmO"),o.createElement),I=function(e){var t=e.header,r=e.subheader,n=e.onChange,a=e.value,i=e.name,c=Object(o.useState)(a),s=c[0],l=c[1],d=function(e){l(e.target.value),n(e.target)};return H("div",{className:"short-response"},H(u.a,{className:"header",variant:"h5",color:"primary"},t),r&&H(u.a,{className:"subheader",variant:"body2",color:"primary"},r),H(L.a,{id:"date",type:"date",className:"textField",InputLabelProps:{shrink:!0},name:i,onChange:function(e){return d(e)},value:s}))},M=r("H7qK"),D=r("hlFM"),A=c.a.createElement,F=function(e){var t=e.handleFormWithTarget,r=e.handleFormWithName,n=e.form,a=Object(o.useState)(n.roles),i=a[0],c=a[1];Object(o.useEffect)((function(){f()}),[i]);var s=["Student organization","Co-founder","Start-up","Program lead","Internal project manager","Application designer","Artist","Zero experience","Logistics coordinator","Year 1","Year 2","Year 3","Year 4"],l=Object(o.useState)(n.projectTags),d=l[0],p=l[1];Object(o.useEffect)((function(){h()}),[d]);var f=function(){r("roles",i)},m=function(e,t,r){var n=_()(i);n[t][r]=e,c(n)},h=function(){r&&r("projectTags",d)},v=i.map((function(e,t){return A(D.a,{className:"role-container",key:e.name},A(u.a,{variant:"h3",color:"primary"},"Role #",t+1),A(O,{header:"Role name",value:e.roleName,onChangeRoles:function(e){return m(e,t,"roleName")}}),A(O,{header:"Number of positions",value:e.numPositions,onChangeRoles:function(e){return m(e,t,"numPositions")}}),A(x,{header:"Description",value:e.description,onChangeRoles:function(e){return m(e,t,"description")}}),A(x,{header:"Responsibilities & Duties",subheader:"Place each point on a new line.",value:e.responsibilities,onChangeRoles:function(e){return m(e,t,"responsibilities")}}),A(x,{header:"Qualifications",subheader:"Things to include: Year of study, field of study, expected level of experience, skills and traits required, etc. Place each point on a new line.",value:e.qualifications,onChangeRoles:function(e){return m(e,t,"qualifications")}}),A(O,{header:"Expected time commitment",subheader:"E.g. how many hours per week.",value:e.timeCommitment,onChangeRoles:function(e){return m(e,t,"timeCommitment")}}))}));return A(y.a,{className:"role-form"},v,A("div",{className:"role-buttons"},A(M.a,{onClick:function(){c([].concat(_()(i),[{roleName:"",numPositions:"",description:"",responsibilities:"",qualifications:"",timeCommitment:""}]))},text:"Add new role",buttonClassName:"role-button",textClassName:"role-button-text"}),A(M.a,{onClick:function(){c(i.slice(0,-1))},text:"Remove role",buttonClassName:"role-button",textClassName:"role-button-text"})),A(u.a,{className:"header",variant:"h5",color:"primary"},"Project Tags"),A(b.a,{container:!0,spacing:1,alignItems:"center"},s&&s.map((function(e,t){return A(b.a,{item:!0,key:e},A(T.a,{colour:Object(P.e)(t),title:e,clickable:!0,name:"projectTags",onSelect:function(){p(d.map((function(e,r){return t===r?!e:e}))),h()},selected:d[t]}))}))),A(I,{header:"Listing expiry date",onChange:t,value:n.expiryDate,name:"expiryDate"}),A(O,{header:"How did you hear about us?",onChange:t,value:n.howDidYouHearAboutUs,name:"howDidYouHearAboutUs"}))},q=c.a.createElement,W=function(e){var t=e.reviewHeader,r=e.reviewContent;return q("div",null,q(u.a,{className:"header",variant:"h5",color:"primary"},t),q(u.a,{className:"subheader",variant:"body2",color:"primary"},r))},z=function(e){var t=e.reviewHeader,r=e.reviewContent.map((function(e){return q(u.a,{className:"subheader",variant:"body2",color:"primary",key:e},e," ",q("br",null))}));return q("div",null,q(u.a,{className:"header",variant:"h5",color:"primary"},t),q("div",null,r))},U=function(e){var t=e.role,r=e.index;return q("div",null,q(u.a,{className:"header",variant:"h5",color:"primary"},"Role #".concat(r+1)),q(u.a,{className:"subheader",variant:"body2",color:"primary"},"Role name and number of positions"),q("div",null,"".concat(t.roleName," (").concat(t.numPositions,")")),q(u.a,{className:"subheader",variant:"body2",color:"primary"},"Description"),q("div",null,t.description),q(u.a,{className:"subheader",variant:"body2",color:"primary"},"Responsibilities"),q("div",null,t.responsibilities),q(u.a,{className:"subheader",variant:"body2",color:"primary"},"Qualifications"),q("div",null,t.qualifications),q(u.a,{className:"subheader",variant:"body2",color:"primary"},"Time commitment"),q("div",null,t.timeCommitment))},Y=function(e){var t=e.reviewHeader,r=e.allTags,n=e.selectedTags;return q("div",null,q(u.a,{className:"header",variant:"h5",color:"primary"},t),q(b.a,{container:!0,spacing:1,alignItems:"center"},r&&r.map((function(e,t){return q(b.a,{item:!0,key:e},q(T.a,{colour:Object(P.e)(t),title:e,selected:n[t]}))}))))},B=function(e){var t=e.form,r=e.formType,n="individual"===r?"Project ":"Club ",a="individual"===r?["Business","Social Initiative","Development","Student-run","Engineering","Design","For-profit","Non-profit","Other"]:["Political and Social Awareness","Academic","Cultural","Engineering","Games, Recreational and Social","Design","Art","Other"];return q("div",{className:"registration-form"},q(W,{reviewHeader:"Full Name",reviewContent:t.name}),q(W,{reviewHeader:"Waterloo Email",reviewContent:t.email}),q(W,{reviewHeader:n+"Name",reviewContent:t.title}),q(W,{reviewHeader:n+"Description",reviewContent:t.description}),q(Y,{reviewHeader:n+"Type",allTags:a,selectedTags:t.typeTags}),"individual"===r?q(W,{reviewHeader:"Project Duration",reviewContent:t.duration}):q(Y,{reviewHeader:"Club Term",allTags:["Fall 2021","Winter 2022","Spring 2022"],selectedTags:t.termTags}),q(z,{reviewHeader:"Contact Information",reviewContent:["Email: "+t.email,"Instagram: "+t.instagram,"Facebook: "+t.facebook,"LinkedIn: "+t.linkedin,"Website: "+t.website]}),t.roles.map((function(e,t){return q(U,{role:e,index:t,key:e.roleName})})),q(Y,{reviewHeader:"Project Tags",allTags:["Student organization","Co-founder","Start-up","Program lead","Internal project manager","Application designer","Artist","Zero experience","Logistics coordinator","Year 1","Year 2","Year 3","Year 4"],selectedTags:t.projectTags}),q(W,{reviewHeader:"Listing expiry date",reviewContent:t.expiryDate}),q(W,{reviewHeader:"How did you hear about us?",reviewContent:t.howDidYouHearAboutUs}))},Z=(r("ucKM"),c.a.createElement),G=function(e){var t=e.progress,r=["details","description","review"],n=function(e){return r.indexOf(e)===t?"current-".concat(e):""};return Z("div",{className:"progress-container"},Z("div",{className:"details progress-step"},Z("div",{className:"progress-num-cont ".concat(n("details"))},Z(u.a,{variant:"body1",className:"progress-num"},"1")),Z(u.a,{variant:"body1",className:"progress-title"},"Project Details")),Z("div",{className:"progress-line ".concat(n("details"))}),Z("div",{className:"description progress-step"},Z("div",{className:"progress-num-cont ".concat(n("description"))},Z(u.a,{variant:"body1",className:"progress-num"},"2")),Z(u.a,{variant:"body1",className:"progress-title"},"Role Description")),Z("div",{className:"progress-line ".concat(n("description"))}),Z("div",{className:"review progress-step"},Z("div",{className:"progress-num-cont ".concat(n("review"))},Z(u.a,{variant:"body1",className:"progress-num"},"3")),Z(u.a,{variant:"body1",className:"progress-title"},"Review ","&"," Submit")))};G.defaultProps={progress:1};var K=G,V=r("+Mj3"),Q=(r("9HnT"),c.a.createElement),J=function(e){var t=e.currentStage;return Q("div",{className:"bar-container"},Q(K,{progress:t}))};t.a=function(e){var t=e.formType,r=Object(o.useReducer)(v,h),n=r[0],a=r[1],c=function(e){a({payload:i()({},e.name,e.value)})},f=function(e,t){a({payload:i()({},e,t)})},m=Object(o.useState)(0),b=m[0],y=m[1],w=Object(s.useRouter)(),O={individual:[Q(k,{formType:"individual",handleFormWithTarget:c,form:n,handleFormWithName:f}),Q(F,{handleFormWithTarget:c,form:n,handleFormWithName:f}),Q(B,{formType:"individual",form:n})],club:[Q(k,{formType:"club",handleFormWithName:f,form:n,handleFormWithTarget:c}),Q(F,{handleFormWithName:f,form:n,handleFormWithTarget:c}),Q(B,{formType:"club",form:n})]},C=Object(o.useState)(!1),S=C[0],j=C[1];return Q(g.a,null,Q(l.a,{theme:V.b},Q("div",{className:"janus-registration-club"},Q("div",null,Q(u.a,{variant:"h3",color:"primary"},{individual:["Individual Posting - Project Details","Individual Posting - Roles","Individual Posting - Review & Submit"],club:["Club Posting - Club Details","Club Posting - Roles","Club Posting - Review & Submit"]}[t][b]),Q(J,{currentStage:b}),O[t][b],Q("div",{className:"recaptcha-container"},2==b&&Q(p.a,{sitekey:"6LeLrqQbAAAAAMMur4uQwObltgk3aaO5HhWlIf4p",onChange:function(){return j(!0)}})),Q("div",{className:"button-container"},b>0&&Q(d.a,{variant:"outlined",color:"primary",className:"button-back",onClick:function(){b>0&&y(b-1)}},"Back"),Q(d.a,{variant:"contained",color:"primary",className:"button-next",onClick:function(){b<O[t].length-1?(y(b+1),window.scrollTo(0,0)):w.push("/janus/registration/success")},disabled:2===b&&!S},2===b?"Submit":"Next"))))))}},"9HnT":function(e,t,r){e.exports={topBarHeight:"72px",footerHeight:"48px",primary:"#141c5a",blue:"#a4e1ea",yellow:"#ffba52",red:"#e34d59"}},"9M0U":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("pVnL")),i=r("04ZO"),o=n(r("HWkK")),c=function(e){var t=(0,i.styled)(e);return function(e,r){return t(e,(0,a.default)({defaultTheme:o.default},r))}};t.default=c},H7qK:function(e,t,r){"use strict";var n=r("RD7I"),a=r("Z3vd"),i=r("v3sT"),o=r.n(i),c=r("q1tI"),s=r.n(c).a.createElement,l=Object(n.a)({squareButton:{borderRadius:"2px",paddingLeft:"40px",paddingRight:"40px",margin:"auto",textTransform:"none"},buttonText:{fontSize:"24px",fontWeight:500,padding:"5px"}});t.a=function(e){var t=e.onClick,r=e.text,n=e.buttonClassName,i=e.textClassName,c=l();return s(a.a,{className:"".concat(n," ").concat(c.squareButton),variant:"contained",color:"default",onClick:t},s(o.a,{className:"".concat(i," ").concat(c.buttonText),variant:"h5",color:"primary"},r))}},KM4l:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return i.default.apply(void 0,[(0,a.deepmerge)({unstable_strictMode:!0},e)].concat(r))};var a=r("5UwM"),i=n(r("q0Gq"))},Q0bV:function(e,t,r){},"Rq+t":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0;return(0,a.useTheme)()||i.default};var a=r("04ZO"),i=(n(r("q1tI")),n(r("HWkK")))},S2tT:function(e,t,r){},SUMQ:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0});var a={createMuiTheme:!0,unstable_createMuiStrictModeTheme:!0,createStyles:!0,makeStyles:!0,responsiveFontSizes:!0,styled:!0,useTheme:!0,withStyles:!0,withTheme:!0,createGenerateClassName:!0,jssPreset:!0,ServerStyleSheets:!0,StylesProvider:!0,MuiThemeProvider:!0,ThemeProvider:!0};Object.defineProperty(t,"createMuiTheme",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"unstable_createMuiStrictModeTheme",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"createStyles",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"makeStyles",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"responsiveFontSizes",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"styled",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"useTheme",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"withStyles",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"withTheme",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"createGenerateClassName",{enumerable:!0,get:function(){return v.createGenerateClassName}}),Object.defineProperty(t,"jssPreset",{enumerable:!0,get:function(){return v.jssPreset}}),Object.defineProperty(t,"ServerStyleSheets",{enumerable:!0,get:function(){return v.ServerStyleSheets}}),Object.defineProperty(t,"StylesProvider",{enumerable:!0,get:function(){return v.StylesProvider}}),Object.defineProperty(t,"MuiThemeProvider",{enumerable:!0,get:function(){return v.ThemeProvider}}),Object.defineProperty(t,"ThemeProvider",{enumerable:!0,get:function(){return v.ThemeProvider}});var i=r("wClv");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var o=n(r("q0Gq")),c=n(r("KM4l")),s=n(r("az50")),l=n(r("e45s")),u=n(r("gsnl")),d=n(r("9M0U")),p=r("yAQS");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var f=n(r("Rq+t")),m=n(r("Hk+Y")),h=n(r("A3JV")),v=r("04ZO")},TljZ:function(e,t,r){},VgmO:function(e,t,r){},"Yxp+":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.isUnitless=function(e){return String(parseFloat(e)).length===String(e).length},t.getUnit=i,t.toUnitless=o,t.convertLength=function(e){return function(t,r){var n=i(t);if(n===r)return t;var a=o(t);if("px"!==n)if("em"===n)a=o(t)*o(e);else if("rem"===n)return a=o(t)*o(e),t;var c=a;if("px"!==r)if("em"===r)c=a/o(e);else{if("rem"!==r)return t;c=a/o(e)}return parseFloat(c.toFixed(5))+r}},t.alignProperty=function(e){var t=e.size,r=e.grid,n=t-t%r,a=n+r;return t-n<a-t?n:a},t.fontGrid=function(e){var t=e.lineHeight,r=e.pixels,n=e.htmlFontSize;return r/(t*n)},t.responsiveProperty=function(e){var t=e.cssProperty,r=e.min,n=e.max,i=e.unit,o=void 0===i?"rem":i,c=e.breakpoints,s=void 0===c?[600,960,1280]:c,l=e.transform,u=void 0===l?null:l,d=(0,a.default)({},t,"".concat(r).concat(o)),p=(n-r)/s[s.length-1];return s.forEach((function(e){var n=r+p*e;null!==u&&(n=u(n)),d["@media (min-width:".concat(e,"px)")]=(0,a.default)({},t,"".concat(Math.round(1e4*n)/1e4).concat(o))})),d};var a=n(r("lSNA"));function i(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function o(e){return parseFloat(e)}},az50:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.createStyles)(e)};var n=r("04ZO")},bKt3:function(e,t,r){},btZB:function(e,t,r){},e45s:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("pVnL")),i=r("04ZO"),o=n(r("HWkK"));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.makeStyles)(e,(0,a.default)({defaultTheme:o.default},t))};t.default=c},gsnl:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.breakpoints,n=void 0===r?["sm","md","lg"]:r,c=t.disableAlign,s=void 0!==c&&c,l=t.factor,u=void 0===l?2:l,d=t.variants,p=void 0===d?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:d,f=(0,a.default)({},e);f.typography=(0,a.default)({},f.typography);var m=f.typography,h=(0,o.convertLength)(m.htmlFontSize),v=n.map((function(e){return f.breakpoints.values[e]}));return p.forEach((function(e){var t=m[e],r=parseFloat(h(t.fontSize,"rem"));if(!(r<=1)){var n=r,c=1+(n-1)/u,l=t.lineHeight;if(!(0,o.isUnitless)(l)&&!s)throw new Error((0,i.formatMuiErrorMessage)(6));(0,o.isUnitless)(l)||(l=parseFloat(h(l,"rem"))/parseFloat(r));var d=null;s||(d=function(e){return(0,o.alignProperty)({size:e,grid:(0,o.fontGrid)({pixels:4,lineHeight:l,htmlFontSize:m.htmlFontSize})})}),m[e]=(0,a.default)({},t,(0,o.responsiveProperty)({cssProperty:"fontSize",min:c,max:n,unit:"rem",breakpoints:v,transform:d}))}})),f};var a=n(r("pVnL")),i=r("5UwM"),o=r("Yxp+")},hlFM:function(e,t,r){"use strict";var n=r("q5mb"),a=r("MIS5"),i=r("6bl3"),o=r("duIU"),c=r("UHX9"),s=r("g0zJ"),l=r("V8uu"),u=r("REiy"),d=r("2Bbb"),p=r("03aJ"),f=r("+Hmc"),m=r("yS7Z"),h=r("wx14"),v=r("/P46"),g=r("cNwE"),b=function(e){var t=Object(v.a)(e);return function(e,r){return t(e,Object(h.a)({defaultTheme:g.a},r))}},y=Object(n.a)(Object(a.a)(i.h,o.a,c.d,s.a,l.b,u.c,d.a,p.b,f.b,m.a)),w=b("div")(y,{name:"MuiBox"});t.a=w},nTux:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("ofer"),o=r("RD7I"),c=r("P6Tf"),s=a.a.createElement,l={blue:c.c.BLUE,yellow:c.c.YELLOW,red:c.c.RED},u=Object(o.a)({roleContainer:{border:function(e){var t=e.colour;return"1px solid ".concat(l[t])},borderRadius:3,paddingLeft:16,paddingRight:16,paddingTop:4,paddingBottom:4,background:function(e){var t=e.selected,r=e.hovered,n=e.colour;return t||r?l[n]:"inherit"}},clickable:{cursor:"pointer"},roleTextColour:{color:function(e){var t=e.selected,r=e.hovered,n=e.colour;return t||r?c.c.PRIMARY:l[n]}}}),d=function(e){var t=e.title,r=e.colour,a=e.clickable,o=e.onSelect,c=e.selected,l=Object(n.useState)(!1),d=l[0],p=l[1],f=u({colour:r,selected:c,hovered:d}),m=a?f.clickable:"";return s("div",{className:"".concat(f.roleContainer," ").concat(m),onClick:function(){a&&o&&o()},onMouseEnter:function(){a&&p(!0)},onMouseLeave:function(){a&&p(!1)}},s(i.a,{variant:"body2",className:f.roleTextColour},t))};d.defaultProps={clickable:!1},t.a=d},ucKM:function(e,t,r){e.exports={primary:"#141c5a",blue:"#a4e1ea",yellow:"#ffba52",red:"#e34d59"}}}]);