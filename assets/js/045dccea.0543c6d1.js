"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"graphql-context-factory",title:"GraphQLContextFactory"},s=void 0,c={unversionedId:"server/graphql-context-factory",id:"version-4.x.x/server/graphql-context-factory",title:"GraphQLContextFactory",description:"If you are using graphql-kotlin-spring-server, see the Spring specific documentation.",source:"@site/versioned_docs/version-4.x.x/server/graphql-context-factory.md",sourceDirName:"server",slug:"/server/graphql-context-factory",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-context-factory",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/graphql-context-factory.md",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1663956126,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"graphql-context-factory",title:"GraphQLContextFactory"},sidebar:"version-4.x.x/docs",previous:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-request-parser"},next:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-request-handler"}},p={},u=[{value:"Nullable Context",id:"nullable-context",level:2},{value:"Suspendable Factory",id:"suspendable-factory",level:2},{value:"Server-Specific Abstractions",id:"server-specific-abstractions",level:2},{value:"HTTP Headers and Cookies",id:"http-headers-and-cookies",level:2},{value:"Federated Tracing",id:"federated-tracing",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-graphql-context"},"Spring specific documentation"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," is a generic method for generating a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," for each request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface GraphQLContextFactory<out Context : GraphQLContext, Request> {\n    suspend fun generateContext(request: Request): Context?\n}\n")),(0,o.kt)("p",null,"Given the generic server request, the interface should create a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," class to be used for every new operation.\nThe context must implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," interface from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/contextual-data"},"execution context")," for more info on how the context can be used in the schema functions."),(0,o.kt)("h2",{id:"nullable-context"},"Nullable Context"),(0,o.kt)("p",null,"The factory may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if a context is not required for execution. This allows the library to have a default factory that just returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".\nIf your custom factory never returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", then there is no need to use nullable arguments.\nHowever, if your custom factory may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", you must define the context argument as nullable in the schema functions or a runtime exception will be thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class CustomContext(val value: String) : GraphQLContext\n\nclass CustomFactory : GraphQLContextFactory<CustomContext, ServerRequest> {\n    suspend fun generateContext(request: Request): Context? {\n        if (isSpecialRequest(request)) {\n            return null\n        }\n\n        val value = callSomeSuspendableService(request)\n        return CustomContext(value)\n    }\n}\n\nclass MyQuery : Query {\n\n    fun getResults(context: CustomContext?, input: String): String {\n        if (context != null) {\n            return getDataWithContext(input, context)\n        }\n\n        return getBasicData(input)\n    }\n}\n")),(0,o.kt)("h2",{id:"suspendable-factory"},"Suspendable Factory"),(0,o.kt)("p",null,"The interface is marked as a ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," function to allow the asynchronous fetching of context data.\nThis may be helpful if you need to call some other services to calculate a context value."),(0,o.kt)("h2",{id:"server-specific-abstractions"},"Server-Specific Abstractions"),(0,o.kt)("p",null,"A specific ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*-server")," library may provide an abstract class on top of this interface so users only have to be concerned with the context class and not the server class type.\nFor example the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides the following class, which sets the request type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class SpringGraphQLContextFactory<out T : GraphQLContext> : GraphQLContextFactory<T, ServerRequest>\n")),(0,o.kt)("h2",{id:"http-headers-and-cookies"},"HTTP Headers and Cookies"),(0,o.kt)("p",null,"For common use cases around authorization, authentication, or tracing you may need to read HTTP headers and cookies.\nThis should be done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," and relevant data should be added to the context to be accessible during schema exectuion."),(0,o.kt)("h2",{id:"federated-tracing"},"Federated Tracing"),(0,o.kt)("p",null,"If you need ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federation-tracing"},"federation tracing support"),", the context must implement the separate ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),"."),(0,o.kt)("p",null,"The reference server implementation ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-graphql-context"},"supports federated tracing in the context"),"."))}h.isMDXComponent=!0}}]);