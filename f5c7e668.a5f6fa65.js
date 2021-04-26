(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(182)),a={id:"subscriptions",title:"Subscriptions"},s={unversionedId:"schema-generator/execution/subscriptions",id:"schema-generator/execution/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/docs/schema-generator/execution/subscriptions.md",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/schema-generator/execution/subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/subscriptions.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619471277,sidebar:"docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/schema-generator/execution/introspection"}},c=[{value:"Flow Support",id:"flow-support",children:[]},{value:"Subscription Hooks",id:"subscription-hooks",children:[]},{value:"Server Implementation",id:"server-implementation",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Subscriptions are supported with ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-java"),". See their documentation first:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/subscriptions/"},"https://www.graphql-java.com/documentation/v16/subscriptions/")),Object(i.b)("p",null,"To make a function a subscription function you just have to have the return type wrapped in an implementation of a\nreactive-streams ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher<T>"),". As an example, here is a function that uses Spring WebFlux to return a random number every\nsecond. Since ",Object(i.b)("inlineCode",{parentName:"p"},"Flux")," is an implementation of ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher")," this is a valid method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n")),Object(i.b)("p",null,"Then in the ",Object(i.b)("inlineCode",{parentName:"p"},"toSchema")," method you just have to provide a ",Object(i.b)("inlineCode",{parentName:"p"},"List<TopLevelObject>")," the same way as queries and mutations\nare provided with the ",Object(i.b)("inlineCode",{parentName:"p"},"subscriptions")," argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"toSchema(\n    config = schemaConfig,\n    queries = queries.toTopLevelObjects(),\n    mutations = mutations.toTopLevelObjects(),\n    subscriptions = subscriptions.toTopLevelObjects()\n)\n")),Object(i.b)("h3",{id:"flow-support"},"Flow Support"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," provides support for Kotlin ",Object(i.b)("inlineCode",{parentName:"p"},"Flow")," through ",Object(i.b)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),". Thanks to the Kotlin\ncoroutines interoperability, this strategy also works with any ",Object(i.b)("inlineCode",{parentName:"p"},"Publisher")," and will automatically convert them to a ",Object(i.b)("inlineCode",{parentName:"p"},"Flow"),"."),Object(i.b)("h3",{id:"subscription-hooks"},"Subscription Hooks"),Object(i.b)("h4",{id:"didgeneratesubscriptiontype"},Object(i.b)("inlineCode",{parentName:"h4"},"didGenerateSubscriptionType")),Object(i.b)("p",null,"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator hooks are still called so you can add logic for the types and\nvalidation of subscriptions the same as queries and mutations."),Object(i.b)("h4",{id:"isvalidsubscriptionreturntype"},Object(i.b)("inlineCode",{parentName:"h4"},"isValidSubscriptionReturnType")),Object(i.b)("p",null,"This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes can be used as the return type. By default, graphql-java supports ",Object(i.b)("inlineCode",{parentName:"p"},"org.reactivestreams.Publisher"),"."),Object(i.b)("p",null,"To effectively use this hook, you should also override the ",Object(i.b)("inlineCode",{parentName:"p"},"willResolveMonad")," hook, and if you are using ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," you should override the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQL")," bean to specify a custom subscription execution strategy."),Object(i.b)("h3",{id:"server-implementation"},"Server Implementation"),Object(i.b)("p",null,"The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a default WebSocket based implementation. See more details in the\n",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/server-subscriptions"},"server documentation"),"."))}l.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);