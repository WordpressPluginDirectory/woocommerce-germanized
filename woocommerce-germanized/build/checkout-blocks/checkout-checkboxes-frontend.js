(self.webpackWcBlocksJsonp=self.webpackWcBlocksJsonp||[]).push([[131],{225:function(e,t,c){"use strict";c.r(t),c.d(t,{default:function(){return f}});var n=c(196),o=c(307),a=c(818),r=c(554),s=c(819),d=c.n(s),l=c(801),i=function(e){let{icon:t,size:c=24,...n}=e;return(0,o.cloneElement)(t,{width:c,height:c,...n})},h=c(444),u=(0,o.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(h.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),m=({show:e,url:t,onClose:c,content:a})=>{const[r,s]=(0,o.useState)(!0),[d,l]=(0,o.useState)("");let h="";if(a)l(a),s(!1);else if(t)try{const e=new URL(t);h=t.toString().substring(e.origin.length)}catch{}return(0,o.useEffect)((()=>{e?document.body.classList.add("checkout-modal-open"):document.body.classList.remove("checkout-modal-open"),h&&(s(!0),l(""),fetch(h,{method:"get"}).then((e=>e.text())).then((e=>{l(e),s(!1)})).catch((function(e){s(!1)})))}),[h,l,e]),e?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"wc-gzd-checkout-modal-bg"}),(0,n.createElement)("div",{className:"wc-gzd-checkout-modal-wrapper"},(0,n.createElement)("div",{className:"wc-gzd-checkout-modal"},(0,n.createElement)("div",{className:"actions"},(0,n.createElement)("a",{className:"wc-gzd-checkout-modal-close",onClick:e=>{document.body.classList.remove("checkout-modal-open"),c(e)}},(0,n.createElement)(i,{className:"wc-gzd-checkout-modal-close-icon",icon:u,size:24}))),r?(0,n.createElement)("div",{className:"content is-loading"},(0,n.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})):(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"content",dangerouslySetInnerHTML:{__html:d}}))))):null},k=c(184),_=c.n(k),b=({checkbox:e,setShowModal:t,setModalUrl:c,onChangeCheckbox:s})=>{const d="checkbox-"+e.id,{setValidationErrors:i,clearValidationError:h}=(0,a.useDispatch)(l.VALIDATION_STORE_KEY),u=!!e.hidden&&e.hidden,m=(0,a.useSelect)((e=>e(l.VALIDATION_STORE_KEY).getValidationError(d))),k=!(!m?.message||m?.hidden);(0,o.useEffect)((()=>{if(e.has_checkbox)return!0===e.checked||!0===e.hidden?h(d):e.is_required&&i({[d]:{message:e.error_message,hidden:!0}}),()=>{h(d)}}),[e.is_required,e.checked,e.hidden,d,h,i]);const b={id:`checkbox-${e.html_id}`,className:"wc-gzd-checkbox",name:`${e.name}`,checked:!!e.checked,hasError:e.is_required&&k,required:e.is_required};return u?null:(0,n.createElement)("div",{className:_()(`wc-gzd-block-checkout-checkboxes__${e.id}`,Object.values(e.wrapper_classes).join(" ")),key:`wrapper-${e.id}`},e.has_checkbox?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.CheckboxControl,{key:`checkbox-${e.id}`,...b,onChange:t=>{s({...e,checked:t})}},(0,n.createElement)("span",{onClick:e=>{const n=e.target.closest("a");if(n&&e.currentTarget.contains(n)&&n.classList.contains("wc-gzd-modal")){e.stopPropagation(),e.preventDefault();let o=n.getAttribute("href");o&&(c(o),t(!0))}},dangerouslySetInnerHTML:{__html:e.label}}))):(0,n.createElement)("div",{className:"wc-gzd-checkbox has-no-checkbox"},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:e.label}})))},g=c(617),p=e=>{const{onChangeCheckbox:t,checkbox:c}=e,{shouldCreateAccount:r,customerId:s}=(0,a.useSelect)((e=>{const t=e(l.CHECKOUT_STORE_KEY);return{customerId:t.getCustomerId(),shouldCreateAccount:t.getShouldCreateAccount()}})),d=!1===(0,g.getSetting)("checkoutAllowsGuest",!1)&&!s;return(0,o.useEffect)((()=>{t(r||d?{...c,hidden:!1}:{...c,hidden:!0})}),[r]),(0,n.createElement)(b,{...e})},E=e=>{const[t,c]=(0,o.useState)({}),{onChangeCheckbox:r,checkbox:s}=e,{billingAddress:d,paymentData:i,currentPaymentMethod:h}=(0,a.useSelect)((e=>{const t=e(l.CART_STORE_KEY),c=e(l.PAYMENT_STORE_KEY);return{billingAddress:t.getCartData().billingAddress,paymentData:c.getPaymentMethodData(),currentPaymentMethod:c.getActivePaymentMethod()}}));return(0,o.useEffect)((()=>{const e={country:d.country,postcode:d.postcode,city:d.city,street:d.address_1,address_2:d.address_2,account_holder:i.hasOwnProperty("direct_debit_account_holder")?i.direct_debit_account_holder:"",account_iban:i.hasOwnProperty("direct_debit_account_iban")?i.direct_debit_account_iban:"",account_swift:i.hasOwnProperty("direct_debit_account_bic")?i.direct_debit_account_bic:""};c(e),r("direct-debit"===h&&e.account_holder&&e.account_iban&&e.account_swift?{...s,hidden:!1}:{...s,hidden:!0})}),[d,i,h]),(0,n.createElement)(b,{...e,setModalUrl:c=>{c+="&"+new URLSearchParams(t).toString(),e.setModalUrl(c)}})},f=({children:e,checkoutExtensionData:t,extensions:c,cart:s})=>{const[i,h]=(0,o.useState)(!1),{setExtensionData:u}=t,k=c.hasOwnProperty("woocommerce-germanized")?c["woocommerce-germanized"]:{},_=k.hasOwnProperty("checkboxes")?k.checkboxes:[],g=_.reduce(((e,t)=>({...e,[t.id]:{...t,hidden:t.default_hidden,checked:t.default_checked}})),{}),[f,w]=(0,o.useState)(g),[y,x]=(0,o.useState)(""),S=(0,o.useRef)(!1),{currentPaymentMethod:C}=(0,a.useSelect)((e=>({currentPaymentMethod:e(l.PAYMENT_STORE_KEY).getActivePaymentMethod()}))),v=e=>Object.values(e).filter((e=>e.checked||!e.has_checkbox&&!e.hidden?e:null));(0,o.useEffect)((()=>{u("woocommerce-germanized","checkboxes",v(f))}),[f]),(0,o.useEffect)((()=>{Object.keys(f).map((e=>{f[e].show_for_payment_methods.length>0&&O(f[e])}))}),[C]);const O=(0,o.useCallback)((e=>{w((t=>{const c=t&&t.hasOwnProperty(e.id)&&t[e.id].checked!==e.checked;if(e.show_for_payment_methods.length>0){let t=e.default_hidden;e.hidden=t||!d().includes(e.show_for_payment_methods,C)}const n={...t,[e.id]:{...e}};return c&&(0,r.extensionCartUpdate)({namespace:"woocommerce-germanized-checkboxes",data:{checkboxes:v(n)}}),n}))}),[u,f,w,r.extensionCartUpdate,C]);return(0,o.useEffect)((()=>{if(S.current){let e={};Object.keys(g).map((t=>{const c=f.hasOwnProperty(t)?f[t]:{},n=f.hasOwnProperty(t)?{checked:f[t].checked,hidden:f[t].hidden}:{};e[t]={...g[t],...n},e[t]!==c&&O(e[t])}))}S.current=!0}),[_]),(0,n.createElement)("div",{className:"wc-gzd-checkboxes"},(0,n.createElement)(m,{show:i,url:y,onClose:()=>{h(!1)}}),Object.keys(f).map((e=>{const t={...f[e]};return"sepa"===t.id?(0,n.createElement)(E,{checkbox:t,setShowModal:h,setModalUrl:x,key:t.id,onChangeCheckbox:O}):"privacy"===t.id?(0,n.createElement)(p,{checkbox:t,setShowModal:h,setModalUrl:x,key:t.id,onChangeCheckbox:O}):(0,n.createElement)(b,{checkbox:t,setShowModal:h,setModalUrl:x,key:t.id,onChangeCheckbox:O})})))}},184:function(e,t){var c;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var a=typeof c;if("string"===a||"number"===a)e.push(c);else if(Array.isArray(c)){if(c.length){var r=o.apply(null,c);r&&e.push(r)}}else if("object"===a)if(c.toString===Object.prototype.toString)for(var s in c)n.call(c,s)&&c[s]&&e.push(s);else e.push(c.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(c=function(){return o}.apply(t,[]))||(e.exports=c)}()}}]);