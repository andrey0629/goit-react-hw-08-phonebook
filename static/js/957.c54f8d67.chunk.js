"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{1957:function(e,n,t){t.r(n),t.d(n,{default:function(){return ve}});var a=t(5705),r=t(6582),i=t(824),o=t(5550),s=t(9657),l=t(930),d=t(548),c=t(2437),u=t(4925),v=t(1413),f=t(9439),h=t(2791);var m=(0,t(9886).k)({name:"CheckboxGroupContext",strict:!1}),p=(0,f.Z)(m,2),b=(p[0],p[1]),k=t(5812),g=t(3329),y=["isIndeterminate","isChecked"];function x(e){return(0,g.jsx)(k.m.svg,(0,v.Z)((0,v.Z)({width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),{},{children:(0,g.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})}))}function w(e){return(0,g.jsx)(k.m.svg,(0,v.Z)((0,v.Z)({width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4}},e),{},{children:(0,g.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})}))}function C(e){var n=e.isIndeterminate,t=e.isChecked,a=(0,u.Z)(e,y),r=n?w:x;return t||n?(0,g.jsx)(k.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,g.jsx)(r,(0,v.Z)({},a))}):null}var Z=t(7762),P=t(4931),B=t(9205),j=t(5280),I=t(6367),S=t(4591),E=t(6992),L={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};var D=function(){return"undefined"!==typeof document};var M=!1,_=null,F=!1,N=!1,R=new Set;function K(e,n){R.forEach((function(t){return t(e,n)}))}var q="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function A(e){var n;F=!0,(n=e).metaKey||!q&&n.altKey||n.ctrlKey||"Control"===n.key||"Shift"===n.key||"Meta"===n.key||(_="keyboard",K("keyboard",e))}function z(e){if(_="pointer","mousedown"===e.type||"pointerdown"===e.type){F=!0;var n=e.composedPath?e.composedPath()[0]:e.target,t=!1;try{t=n.matches(":focus-visible")}catch(a){}if(t)return;K("pointer",e)}}function G(e){var n;(0===(n=e).mozInputSource&&n.isTrusted||0===n.detail&&!n.pointerType)&&(F=!0,_="virtual")}function O(e){e.target!==window&&e.target!==document&&(F||N||(_="virtual",K("virtual",e)),F=!1,N=!1)}function W(){F=!1,N=!0}function T(){return"pointer"!==_}function U(){if(D()&&!M){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){F=!0;for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];e.apply(this,t)},document.addEventListener("keydown",A,!0),document.addEventListener("keyup",A,!0),document.addEventListener("click",G,!0),window.addEventListener("focus",O,!0),window.addEventListener("blur",W,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",z,!0),document.addEventListener("pointermove",z,!0),document.addEventListener("pointerup",z,!0)):(document.addEventListener("mousedown",z,!0),document.addEventListener("mousemove",z,!0),document.addEventListener("mouseup",z,!0)),M=!0}}function H(e){U(),e(T());var n=function(){return e(T())};return R.add(n),function(){R.delete(n)}}var J=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function X(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object.assign({},e),r=(0,Z.Z)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;i in a&&delete a[i]}}catch(o){r.e(o)}finally{r.f()}return a}function V(e){e.preventDefault(),e.stopPropagation()}var Q=t(2554),Y=t(5597),$=t(6516),ee=t(2996),ne=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],te={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},ae={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},re=(0,Q.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),ie=(0,Q.F4)({from:{opacity:0},to:{opacity:1}}),oe=(0,Q.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),se=(0,Y.G)((function(e,n){var t=b(),a=(0,v.Z)((0,v.Z)({},t),e),r=(0,$.jC)("Checkbox",a),i=(0,ee.Lr)(e),o=i.spacing,s=void 0===o?"0.5rem":o,l=i.className,d=i.children,c=i.iconColor,m=i.iconSize,p=i.icon,y=void 0===p?(0,g.jsx)(C,{}):p,x=i.isChecked,w=i.isDisabled,Z=void 0===w?null==t?void 0:t.isDisabled:w,D=i.onChange,M=i.inputProps,_=(0,u.Z)(i,ne),F=x;(null==t?void 0:t.value)&&i.value&&(F=t.value.includes(i.value));var N=D;(null==t?void 0:t.onChange)&&i.value&&(N=(0,E.PP)(t.onChange,D));var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,P.K)(e),t=n.isDisabled,a=n.isReadOnly,r=n.isRequired,i=n.isInvalid,o=n.id,s=n.onBlur,l=n.onFocus,d=n["aria-describedby"],c=e.defaultChecked,m=e.isChecked,p=e.isFocusable,b=e.onChange,k=e.isIndeterminate,g=e.name,y=e.value,x=e.tabIndex,w=void 0===x?void 0:x,C=e["aria-label"],Z=e["aria-labelledby"],D=e["aria-invalid"],M=X((0,u.Z)(e,J),["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),_=(0,I.W)(b),F=(0,I.W)(s),N=(0,I.W)(l),R=(0,h.useState)(!1),K=(0,f.Z)(R,2),q=K[0],A=K[1],z=(0,h.useState)(!1),G=(0,f.Z)(z,2),O=G[0],W=G[1],T=(0,h.useState)(!1),U=(0,f.Z)(T,2),Q=U[0],Y=U[1],$=(0,h.useState)(!1),ee=(0,f.Z)($,2),ne=ee[0],te=ee[1];(0,h.useEffect)((function(){return H(A)}),[]);var ae=(0,h.useRef)(null),re=(0,h.useState)(!0),ie=(0,f.Z)(re,2),oe=ie[0],se=ie[1],le=(0,h.useState)(!!c),de=(0,f.Z)(le,2),ce=de[0],ue=de[1],ve=void 0!==m,fe=ve?m:ce,he=(0,h.useCallback)((function(e){a||t?e.preventDefault():(ve||ue(fe?e.target.checked:!!k||e.target.checked),null==_||_(e))}),[a,t,fe,ve,k,_]);(0,B.G)((function(){ae.current&&(ae.current.indeterminate=Boolean(k))}),[k]),(0,j.r)((function(){t&&W(!1)}),[t,W]),(0,B.G)((function(){var e=ae.current;if(null==e?void 0:e.form){var n=function(){ue(!!c)};return e.form.addEventListener("reset",n),function(){var t;return null==(t=e.form)?void 0:t.removeEventListener("reset",n)}}}),[]);var me=t&&!p,pe=(0,h.useCallback)((function(e){" "===e.key&&te(!0)}),[te]),be=(0,h.useCallback)((function(e){" "===e.key&&te(!1)}),[te]);(0,B.G)((function(){ae.current&&ae.current.checked!==fe&&ue(ae.current.checked)}),[ae.current]);var ke=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=function(e){O&&e.preventDefault(),te(!0)};return(0,v.Z)((0,v.Z)({},e),{},{ref:n,"data-active":(0,E.PB)(ne),"data-hover":(0,E.PB)(Q),"data-checked":(0,E.PB)(fe),"data-focus":(0,E.PB)(O),"data-focus-visible":(0,E.PB)(O&&q),"data-indeterminate":(0,E.PB)(k),"data-disabled":(0,E.PB)(t),"data-invalid":(0,E.PB)(i),"data-readonly":(0,E.PB)(a),"aria-hidden":!0,onMouseDown:(0,E.v0)(e.onMouseDown,r),onMouseUp:(0,E.v0)(e.onMouseUp,(function(){return te(!1)})),onMouseEnter:(0,E.v0)(e.onMouseEnter,(function(){return Y(!0)})),onMouseLeave:(0,E.v0)(e.onMouseLeave,(function(){return Y(!1)}))})}),[ne,fe,t,O,q,Q,k,i,a]),ge=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,v.Z)((0,v.Z)({},e),{},{ref:n,"data-active":(0,E.PB)(ne),"data-hover":(0,E.PB)(Q),"data-checked":(0,E.PB)(fe),"data-focus":(0,E.PB)(O),"data-focus-visible":(0,E.PB)(O&&q),"data-indeterminate":(0,E.PB)(k),"data-disabled":(0,E.PB)(t),"data-invalid":(0,E.PB)(i),"data-readonly":(0,E.PB)(a)})}),[ne,fe,t,O,q,Q,k,i,a]),ye=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,v.Z)((0,v.Z)((0,v.Z)({},M),e),{},{ref:(0,S.lq)(n,(function(e){e&&se("LABEL"===e.tagName)})),onClick:(0,E.v0)(e.onClick,(function(){var e;oe||(null==(e=ae.current)||e.click(),requestAnimationFrame((function(){var e;null==(e=ae.current)||e.focus({preventScroll:!0})})))})),"data-disabled":(0,E.PB)(t),"data-checked":(0,E.PB)(fe),"data-invalid":(0,E.PB)(i)})}),[M,t,fe,i,oe]),xe=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,v.Z)((0,v.Z)({},e),{},{ref:(0,S.lq)(ae,n),type:"checkbox",name:g,value:y,id:o,tabIndex:w,onChange:(0,E.v0)(e.onChange,he),onBlur:(0,E.v0)(e.onBlur,F,(function(){return W(!1)})),onFocus:(0,E.v0)(e.onFocus,N,(function(){return W(!0)})),onKeyDown:(0,E.v0)(e.onKeyDown,pe),onKeyUp:(0,E.v0)(e.onKeyUp,be),required:r,checked:fe,disabled:me,readOnly:a,"aria-label":C,"aria-labelledby":Z,"aria-invalid":D?Boolean(D):i,"aria-describedby":d,"aria-disabled":t,style:L})}),[g,y,o,he,F,N,pe,be,r,fe,me,a,C,Z,D,i,d,t,w]),we=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,v.Z)((0,v.Z)({},e),{},{ref:n,onMouseDown:(0,E.v0)(e.onMouseDown,V),"data-disabled":(0,E.PB)(t),"data-checked":(0,E.PB)(fe),"data-invalid":(0,E.PB)(i)})}),[fe,t,i]);return{state:{isInvalid:i,isFocused:O,isChecked:fe,isActive:ne,isHovered:Q,isIndeterminate:k,isDisabled:t,isReadOnly:a,isRequired:r},getRootProps:ye,getCheckboxProps:ke,getIndicatorProps:ge,getInputProps:xe,getLabelProps:we,htmlProps:M}}((0,v.Z)((0,v.Z)({},_),{},{isDisabled:Z,isChecked:F,onChange:N})),K=R.state,q=R.getInputProps,A=R.getCheckboxProps,z=R.getLabelProps,G=R.getRootProps,O=function(e){var n=(0,h.useState)(e),t=(0,f.Z)(n,2),a=t[0],r=t[1],i=(0,h.useState)(!1),o=(0,f.Z)(i,2),s=o[0],l=o[1];return e!==a&&(l(!0),r(e)),s}(K.isChecked),W=(0,h.useMemo)((function(){return(0,v.Z)({animation:O?K.isIndeterminate?"".concat(ie," 20ms linear, ").concat(oe," 200ms linear"):"".concat(re," 200ms linear"):void 0,fontSize:m,color:c},r.icon)}),[c,m,O,K.isIndeterminate,r.icon]),T=(0,h.cloneElement)(y,{__css:W,isIndeterminate:K.isIndeterminate,isChecked:K.isChecked});return(0,g.jsxs)(k.m.label,(0,v.Z)((0,v.Z)({__css:(0,v.Z)((0,v.Z)({},ae),r.container),className:(0,E.cx)("chakra-checkbox",l)},G()),{},{children:[(0,g.jsx)("input",(0,v.Z)({className:"chakra-checkbox__input"},q(M,n))),(0,g.jsx)(k.m.span,(0,v.Z)((0,v.Z)({__css:(0,v.Z)((0,v.Z)({},te),r.control),className:"chakra-checkbox__control"},A()),{},{children:T})),d&&(0,g.jsx)(k.m.span,(0,v.Z)((0,v.Z)({className:"chakra-checkbox__label"},z()),{},{__css:(0,v.Z)({marginStart:s},r.label),children:d}))]}))}));se.displayName="Checkbox";var le=t(9055),de=t(9434),ce=t(9273);function ue(){var e=(0,de.I0)();return(0,g.jsx)(r.k,{align:"center",justify:"center",children:(0,g.jsx)(i.xu,{bg:"inherit",p:6,rounded:"md",w:500,children:(0,g.jsx)(a.J9,{initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(n){e((0,ce.Ib)({email:n.email,password:n.password}))},children:function(e){var n=e.handleSubmit,t=e.errors,r=e.touched;return(0,g.jsx)("form",{onSubmit:n,children:(0,g.jsxs)(o.g,{spacing:4,align:"flex-start",children:[(0,g.jsxs)(s.NI,{children:[(0,g.jsx)(l.l,{htmlFor:"email",children:"Email Address"}),(0,g.jsx)(a.gN,{border:"1px",solid:"#787882 ",as:d.I,id:"email",name:"email",type:"email",variant:"filled"})]}),(0,g.jsxs)(s.NI,{isInvalid:!!t.password&&r.password,children:[(0,g.jsx)(l.l,{htmlFor:"password",children:"Password"}),(0,g.jsx)(a.gN,{border:"1px",solid:"#787882 ",as:d.I,id:"password",name:"password",type:"password",variant:"filled",validate:function(e){var n;return e.length<6&&(n="Password must contain at least 6 characters"),n}}),(0,g.jsx)(c.J1,{children:t.password})]}),(0,g.jsx)(a.gN,{border:"#787882 ",as:se,id:"rememberMe",name:"rememberMe",colorScheme:"purple",children:"Remember me?"}),(0,g.jsx)(le.z,{type:"submit",colorScheme:"purple",width:"full",children:"Login"})]})})}})})})}var ve=function(){return(0,g.jsx)("div",{children:(0,g.jsx)(ue,{})})}}}]);
//# sourceMappingURL=957.c54f8d67.chunk.js.map