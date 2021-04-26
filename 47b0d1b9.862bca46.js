(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(182)),o={id:"annotations",title:"Annotations"},c={unversionedId:"schema-generator/writing-schemas/annotations",id:"schema-generator/writing-schemas/annotations",isDocsHomePage:!1,title:"Annotations",description:"graphql-kotlin-schema-generator ships with a number of annotation classes to allow you to enhance your GraphQL schema",source:"@site/docs/schema-generator/writing-schemas/annotations.md",slug:"/schema-generator/writing-schemas/annotations",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/annotations",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/annotations.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619471277,sidebar:"docs",previous:{title:"Unions",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions"},next:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nested-arguments"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," ships with a number of annotation classes to allow you to enhance your GraphQL schema\nfor things that can't be directly derived from Kotlin reflection."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../customizing-schemas/documenting-fields"},"@GraphQLDescription")," - Provide a description for a GraphQL field"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../customizing-schemas/directives"},"@GraphQLDirective")," - Registers directive on a GraphQL field"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../customizing-schemas/excluding-fields"},"@GraphQLIgnore")," - Exclude field from the GraphQL schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../customizing-schemas/renaming-fields"},"@GraphQLName")," - Override the name used for the type"),Object(i.b)("li",{parentName:"ul"},"Kotlin built in ",Object(i.b)("a",{parentName:"li",href:"../customizing-schemas/deprecating-schema"},"@Deprecated")," - Apply the GraphQL ",Object(i.b)("inlineCode",{parentName:"li"},"@deprecated")," directive on the field")))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);