/*! For license information please see 3.215ff9af.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{83:function(e,t,r){"use strict";e.exports=r(87)},84:function(e,t,r){},85:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(86),i=(n=o)&&n.__esModule?n:{default:n};Number.isInteger=Number.isInteger||function(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e},t.default=i.default},86:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=s(r(83)),i=s(r(17)),a=s(r(88));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,r,n;l(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={highestStarHovered:-1/0},n.fillId="starGrad"+Math.random().toFixed(15).slice(2),n.hoverOverStar=function(e){return function(){n.setState({highestStarHovered:e})}},n.unHoverOverStar=function(){n.setState({highestStarHovered:-1/0})},u(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"stopColorStyle",value:function(e){var t={stopColor:e,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:t}},{key:"render",value:function(){var e=this.props,t=e.starRatedColor,r=e.starEmptyColor;return o.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},o.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},o.default.createElement("defs",null,o.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(t)}),o.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(t)}),o.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(r)}),o.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(r)})))),this.renderStars)}},{key:"starRatingsStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"starGradientStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function(){var e=this.props,t=e.typeOfWidget,r=e.rating,n=this.state.highestStarHovered,o=n>0?n:r,i=parseFloat(o.toFixed(2)).toString();Number.isInteger(o)&&(i=String(o));var a=t+"s";return"1"===i&&(a=t),i+" "+a}},{key:"offsetValue",get:function(){var e=this.props.rating,t="0%";Number.isInteger(e)||(t=e.toFixed(2).split(".")[1].slice(0,2)+"%");return t}},{key:"renderStars",get:function(){var e=this,t=this.props,r=t.changeRating,n=t.rating,i=t.numberOfStars,s=t.starDimension,l=t.starSpacing,u=t.starRatedColor,c=t.starEmptyColor,f=t.starHoverColor,d=t.gradientPathName,p=t.ignoreInlineStyles,v=t.svgIconPath,y=t.svgIconViewBox,h=t.name,m=this.state.highestStarHovered;return Array.apply(null,Array(i)).map((function(t,g){var b=g+1,S=b<=n,j=m>0,_=b<=m,O=b===m,x=b>n&&b-1<n,R=1===b,C=b===i;return o.default.createElement(a.default,{key:b,fillId:e.fillId,changeRating:r?function(){return r(b,h)}:null,hoverOverStar:r?e.hoverOverStar(b):null,unHoverOverStar:r?e.unHoverOverStar:null,isStarred:S,isPartiallyFullStar:x,isHovered:_,hoverMode:j,isCurrentHoveredStar:O,isFirstStar:R,isLastStar:C,starDimension:s,starSpacing:l,starHoverColor:f,starRatedColor:u,starEmptyColor:c,gradientPathName:d,ignoreInlineStyles:p,svgIconPath:v,svgIconViewBox:y})}))}}]),t}(o.default.Component);c.propTypes={rating:i.default.number.isRequired,numberOfStars:i.default.number.isRequired,changeRating:i.default.func,starHoverColor:i.default.string.isRequired,starRatedColor:i.default.string.isRequired,starEmptyColor:i.default.string.isRequired,starDimension:i.default.string.isRequired,starSpacing:i.default.string.isRequired,gradientPathName:i.default.string.isRequired,ignoreInlineStyles:i.default.bool.isRequired,svgIconPath:i.default.string.isRequired,svgIconViewBox:i.default.string.isRequired,name:i.default.string},c.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"},t.default=c},87:function(e,t,r){"use strict";var n=r(24),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"===typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function S(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=S.prototype;var O=_.prototype=new j;O.constructor=_,n(O,S.prototype),O.isPureReactComponent=!0;var x={current:null},R=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)R.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:x.current}}function k(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,E=[];function I(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function q(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case a:s=!0}}if(s)return r(n,e,""===t?"."+H(e,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+H(o=e[l],l);s+=q(o,u,r,n)}else if(null===e||"object"!==typeof e?u=null:u="function"===typeof(u=h&&e[h]||e["@@iterator"])?u:null,"function"===typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)s+=q(o=o.value,u=t+H(o,l++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return s}function D(e,t,r){return null==e?0:q(e,"",t,r)}function H(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(P,"$&/")+"/"),D(e,$,t=I(t,i,n,o)),N(t)}var A={current:null};function B(){var e=A.current;if(null===e)throw Error(m(321));return e}var T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,F,t=I(null,null,t,r)),N(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(m(143));return e}},t.Component=S,t.Fragment=s,t.Profiler=u,t.PureComponent=_,t.StrictMode=l,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(m(267,e));var o=n({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)R.call(t,c)&&!C.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return B().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,r){return B().useReducer(e,t,r)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.14.0"},88:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=s(r(83)),i=s(r(89)),a=s(r(17));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e=this.props,t=e.changeRating,r=e.hoverOverStar,n=e.unHoverOverStar,i=e.svgIconViewBox,a=e.svgIconPath;return o.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:r,onMouseLeave:n,onClick:t},o.default.createElement("svg",{viewBox:i,className:this.starClasses,style:this.starSvgStyle},o.default.createElement("path",{className:"star",style:this.pathStyle,d:a})))}},{key:"starContainerStyle",get:function(){var e=this.props,t=e.changeRating,r=e.starSpacing,n=e.isFirstStar,o=e.isLastStar;return e.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?void 0:r,paddingRight:o?void 0:r,cursor:t?"pointer":void 0}}},{key:"starSvgStyle",get:function(){var e=this.props,t=e.ignoreInlineStyles,r=e.isCurrentHoveredStar,n=e.starDimension;return t?{}:{width:n,height:n,transition:"transform .2s ease-in-out",transform:r?"scale(1.1)":void 0}}},{key:"pathStyle",get:function(){var e=this.props,t=e.isStarred,r=e.isPartiallyFullStar,n=e.isHovered,o=e.hoverMode,i=e.starEmptyColor,a=e.starRatedColor,s=e.starHoverColor,l=e.gradientPathName,u=e.fillId,c=void 0;return c=o?n?s:i:r?"url('"+l+"#"+u+"')":t?a:i,e.ignoreInlineStyles?{}:{fill:c,transition:"fill .2s ease-in-out"}}},{key:"starClasses",get:function(){var e=this.props,t=e.isSelected,r=e.isPartiallyFullStar,n=e.isHovered,o=e.isCurrentHoveredStar,a=e.ignoreInlineStyles,s=(0,i.default)({"widget-svg":!0,"widget-selected":t,"multi-widget-selected":r,hovered:n,"current-hovered":o});return a?{}:s}}]),t}(o.default.Component);c.propTypes={fillId:a.default.string.isRequired,changeRating:a.default.func,hoverOverStar:a.default.func,unHoverOverStar:a.default.func,isStarred:a.default.bool.isRequired,isPartiallyFullStar:a.default.bool.isRequired,isHovered:a.default.bool.isRequired,hoverMode:a.default.bool.isRequired,isCurrentHoveredStar:a.default.bool.isRequired,isFirstStar:a.default.bool.isRequired,isLastStar:a.default.bool.isRequired,starDimension:a.default.string.isRequired,starSpacing:a.default.string.isRequired,starHoverColor:a.default.string.isRequired,starRatedColor:a.default.string.isRequired,starEmptyColor:a.default.string.isRequired,gradientPathName:a.default.string.isRequired,ignoreInlineStyles:a.default.bool.isRequired,svgIconPath:a.default.string.isRequired,svgIconViewBox:a.default.string.isRequired},t.default=c},89:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},91:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(6),i=r.n(o),a=r(9),s=r(10),l=r(0),u=r(4),c=(r(84),r(40)),f=r(26),d=r(85),p=r.n(d),v=function(e){var t=e.movie,r=e.credits;return Object(n.jsx)("div",{className:"movieDetails",children:Object(n.jsxs)("div",{className:"movieDetails__body",children:[Object(n.jsx)("div",{className:"movieDetails__upper",children:Object(n.jsx)("div",{className:"movieDetails__back",children:Object(n.jsxs)(f.b,{to:"/movies",children:[Object(n.jsx)("div",{className:"movieDetails__arrow"}),Object(n.jsx)("span",{children:"Back"})]})})}),Object(n.jsxs)("div",{className:"movieDetails__main",children:[Object(n.jsx)("div",{className:"movieDetails__left",children:Object(n.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):c.a,alt:"poster",width:"382",height:"574"})}),Object(n.jsxs)("div",{className:"movieDetails__right",children:[Object(n.jsxs)("div",{className:"movieDetails__title",children:[Object(n.jsx)("span",{children:t.title}),Object(n.jsx)("i",{className:"fas fa-heart ".concat(t.isFavorite?"fa-heart_active":""),onClick:function(){return e.changeIsFavorite()}})]}),Object(n.jsxs)("div",{className:"movieDetails__stars",children:[Object(n.jsx)("span",{children:t.vote_average}),Object(n.jsx)(p.a,{rating:t.vote_average,starRatedColor:"#FFB800",starHoverColor:"#FFB800",changeRating:function(t){e.changeRating(t)},numberOfStars:10,starDimension:"20px",starSpacing:"4px",name:"rating"})]}),Object(n.jsxs)("div",{className:"movieDetails__about",children:[Object(n.jsxs)("div",{className:"movieDetails__genre",children:[Object(n.jsx)("span",{className:"movieDetails__nameCategories",children:"Genre: "})," ",t.genres.map((function(e,r){return r+1!==t.genres.length?"".concat(e.name,"/"):"".concat(e.name)}))]}),Object(n.jsxs)("div",{className:"movieDetails__year",children:[Object(n.jsx)("span",{className:"movieDetails__nameCategories",children:"Year:"})," ",t.release_date.split("-")[0]]}),Object(n.jsxs)("div",{className:"movieDetails__runningTime",children:[Object(n.jsx)("span",{className:"movieDetails__nameCategories",children:"Running Time:"})," ",t.runtime," minutes"]}),Object(n.jsxs)("div",{className:"movieDetails__starring",children:[Object(n.jsx)("span",{className:"movieDetails__nameCategories",children:" Starring: "})," ",r.map((function(e,t){return 0===t?"".concat(e.name,","):t+1!==r.length?" ".concat(e.name,","):" ".concat(e.name)}))]})]}),Object(n.jsx)("div",{className:"movieDetails__description",children:t.overview})]})]})]})})},y=r(5),h=r(18);t.default=Object(u.g)((function(e){var t=Object(y.c)((function(e){return e.detailsPage.movie})),r=Object(y.c)((function(e){return e.detailsPage.credits})),o=Object(l.useState)(!0),u=Object(s.a)(o,2),c=u[0],f=u[1],d=Object(y.b)(),p=e.match.params.id;function m(){return(m=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Object(h.f)(p,t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Object(h.e)(p));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)(Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Object(h.c)(p));case 2:f(!1);case 3:case"end":return e.stop()}}),e)}))),[]),c?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(v,{movie:t,credits:r,changeRating:function(e){return m.apply(this,arguments)},changeIsFavorite:function(){return g.apply(this,arguments)}})})}))}}]);
//# sourceMappingURL=3.215ff9af.chunk.js.map