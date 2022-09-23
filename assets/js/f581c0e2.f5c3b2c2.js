"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(86010);const r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),i=a(67294),r=a(86010),o=a(72389),l=a(67392),s=a(7094),d=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a,o=e.lazy,c=e.block,m=e.defaultValue,h=e.values,k=e.groupId,g=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),x=b.tabGroupChoices,w=b.setTabGroupChoices,C=(0,i.useState)(v),D=C[0],L=C[1],E=[],q=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=x[k];null!=T&&T!==D&&y.some((function(e){return e.value===T}))&&L(T)}var I=function(e){var t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==D&&(q(t),L(n),null!=k&&w(k,String(n)))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,i=E.indexOf(e.currentTarget)+1;a=null!=(n=E[i])?n:E[0];break;case"ArrowLeft":var r,o=E.indexOf(e.currentTarget)-1;a=null!=(r=E[o])?r:E[E.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},y.map((function(e){var t=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,o.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},16052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(65488),l=a(85162),s=["components"],d={id:"data-loader-instrumentation",title:"Data Loader Instrumentations"},p=void 0,u={unversionedId:"server/data-loader/data-loader-instrumentation",id:"server/data-loader/data-loader-instrumentation",title:"Data Loader Instrumentations",description:"graphql-kotlin-dataloader-instrumentation is set of custom Instrumentations",source:"@site/docs/server/data-loader/data-loader-instrumentation.mdx",sourceDirName:"server/data-loader",slug:"/server/data-loader/data-loader-instrumentation",permalink:"/graphql-kotlin/docs/server/data-loader/data-loader-instrumentation",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/data-loader/data-loader-instrumentation.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1663956126,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"data-loader-instrumentation",title:"Data Loader Instrumentations"},sidebar:"docs",previous:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/server/data-loader/"},next:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/server/spring-server/spring-overview"}},c={},m=[{value:"Dispatching by level",id:"dispatching-by-level",level:2},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Dispatching by synchronous execution exhaustion",id:"dispatching-by-synchronous-execution-exhaustion",level:2},{value:"Example",id:"example-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Multiple data loaders per field data fetcher",id:"multiple-data-loaders-per-field-data-fetcher",level:2},{value:"DispatchIfNeeded",id:"dispatchifneeded",level:3},{value:"Example",id:"example-2",level:3}],h={toc:m};function k(e){var t=e.components,d=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader-instrumentation")," is set of custom ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/instrumentation/"},"Instrumentations"),"\nthat will calculate when is the right moment to dispatch ",(0,r.kt)("inlineCode",{parentName:"p"},"KotlinDataLoader"),"s across single and batch GraphQL operations."),(0,r.kt)("p",null,"These custom instrumentations follow the similar approach as the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/instrumentation/dataloader/DataLoaderDispatcherInstrumentation.java"},"DataLoaderDispatcherInstrumentation"),"\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java"),", the main difference is that regular instrumentations apply to a single ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionInput")," aka ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/execution#queries"},"GraphQL Operation"),",\nwhereas these custom instrumentations apply to multiple GraphQL operations (say a BatchRequest) and stores their state in the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLContext"),"\nallowing batching and deduplication of transactions across those multiple GraphQL operations."),(0,r.kt)("p",null,"By default, each GraphQL operation is processed independently of each other. Multiple operations can be processed\ntogether as if they were single GraphQL request if they are part of the same batch request."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader-instrumentation")," module contains 2 custom ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader")," instrumentations."),(0,r.kt)("h2",{id:"dispatching-by-level"},"Dispatching by level"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaderLevelDispatchedInstrumentation")," tracks the state of all ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionInputs")," across operations. When a certain\nfield dispatches, it will check if all fields across all operations for a particular level were dispatched and if the condition is met,\nit will dispatch all the data loaders."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"You can find additional examples in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader-instrumentation/src/test/kotlin/com/expediagroup/graphql/dataloader/instrumentation/level/DataLoaderLevelDispatchedInstrumentationTest.kt"},"unit tests"),"."),(0,r.kt)(o.Z,{defaultValue:"by-level-queries",values:[{label:"Queries",value:"by-level-queries"},{label:"Execution",value:"by-level-execution"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"by-level-queries",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Q1 {\n    astronaut(id: 1) { # async\n        id\n        name\n        missions { # async\n            id\n            designation\n        }\n    }\n}\n\nquery Q2 {\n    astronaut(id: 2) { # async\n        id\n        name\n        missions { # async\n            id\n            designation\n        }\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"by-level-execution",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image of data loader level dispatched instrumentation",src:a(4356).Z,width:"1213",height:"571"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFetcher")," uses a ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," which will be dispatched when ",(0,r.kt)("strong",{parentName:"li"},"Level 1")," of those 2 operations\nis dispatched, causing the ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," to load 2 astronauts."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"missions")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFetcher")," uses a ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," which will be dispatched when ",(0,r.kt)("strong",{parentName:"li"},"Level 2")," of those 2 operations\nis dispatched, causing the ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," to load 2 lists of missions by astronaut.")))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In order to enable batching by level, you need to configure your GraphQL instance with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaderLevelDispatchedInstrumentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQL = GraphQL.Builder()\n    .doNotAddDefaultInstrumentations()\n    .instrumentation(DataLoaderLevelDispatchedInstrumentation())\n    // configure schema, type wiring, etc.\n    .build()\n")),(0,r.kt)("p",null,"This data loader instrumentation relies on a global state object that needs be stored in the GraphQLContext map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQLContext = mapOf(\n    ExecutionLevelDispatchedState::class to ExecutionLevelDispatchedState(queries.size)\n)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides convenient integration of batch loader functionality through simple configuration.\nBatching by level can be enabled by configuring following properties:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  batching:\n   enabled: true\n   strategy: LEVEL_DISPATCHED\n"))),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"This instrumentation is a good option if your ",(0,r.kt)("strong",{parentName:"p"},"GraphQLServer")," will receive a batched request with operations of the same type,\nin those cases batching by level is enough, however, this solution is far from being the most optimal as we don't necessarily want to dispatch by level."),(0,r.kt)("h2",{id:"dispatching-by-synchronous-execution-exhaustion"},"Dispatching by synchronous execution exhaustion"),(0,r.kt)("p",null,"The most optimal time to dispatch all data loaders is when all possible synchronous execution paths across all batch\noperations were exhausted. Synchronous execution path is considered exhausted (or completed) when all currently processed\ndata fetchers were either resolved to a scalar or a future promise."),(0,r.kt)("p",null,"Let's analyze how GraphQL execution works, but first lets check some GraphQL concepts:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DataFetcher")),(0,r.kt)("p",null,"Each field in GraphQL has a resolver aka ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetcher")," associated with it, some fields will use specialized ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetcher"),"s\nthat knows how to go to a database or make a network request to get field information while most simply take\ndata from the returned memory objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Execution Strategy")),(0,r.kt)("p",null,"The process of finding values for a list of fields from the GraphQL Query, using a recursive strategy."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"You can find additional examples in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader-instrumentation/src/test/kotlin/com/expediagroup/graphql/dataloader/instrumentation/syncexhaustion/DataLoaderSyncExecutionExhaustedInstrumentationTest.kt"},"unit tests"),"."),(0,r.kt)(o.Z,{defaultValue:"by-sync-exhaustion-queries",values:[{label:"Queries",value:"by-sync-exhaustion-queries"},{label:"Execution",value:"by-sync-exhaustion-execution"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"by-sync-exhaustion-queries",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Q1 {\n    astronaut(id: 1) { # async\n        id\n        name\n        missions { # async\n            id\n            designation\n        }\n    }\n}\n\nquery Q2 {\n    nasa { #sync\n        astronaut(id: 2) { # async\n            id\n            name\n            missions { # async\n                id\n                designation\n            }\n        }\n        address { # sync\n            street\n            zipCode\n        }\n        phoneNumber\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"by-sync-exhaustion-execution",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image of data loader level dispatched instrumentation",src:a(46306).Z,width:"1375",height:"759"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The order of execution of the queries will be:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q1"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query, to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," field.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<Astronaut>")," so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q2"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query, to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will synchronously return a ",(0,r.kt)("inlineCode",{parentName:"li"},"Nasa")," object, so we can descend more that path."))),(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"phoneNumber"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher"),"  will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"AstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<Astronaut>")," so we can consider this path exhausted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will synchronously return an ",(0,r.kt)("inlineCode",{parentName:"li"},"Address")," object, so we can descend more that path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"phoneNumber")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."))),(0,r.kt)("li",{parentName:"ol"},"Start an ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"street")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"zipCode"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"street")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zipCode")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"At this point we can consider the synchronous execution exhausted and the ",(0,r.kt)("inlineCode",{parentName:"strong"},"AstronautDataLoader")," has 2 keys to be dispatched,\nif we proceed dispatching all data loaders the execution will continue as following:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q1"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," field of the query to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mission")," fields.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"missions")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<List<Mission>>")," so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"for Q2"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecutionStrategy")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"astronaut")," field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"nasa")," field of the query to concurrently resolve ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mission")," fields.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will return a scalar, so we can consider this path exhausted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"missions")," ",(0,r.kt)("strong",{parentName:"li"},"DataFetcher")," will invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"MissionsByAstronautDataLoader")," and will return a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture<List<Mission>>")," so we can consider this path exhausted.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"At this point we can consider the synchronous execution exhausted and the ",(0,r.kt)("inlineCode",{parentName:"strong"},"MissionsByAstronautDataLoader")," has 2 keys to be dispatched,\nif we proceed dispatching all data loaders the execution will continue to just resolve scalar fields.")))),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"In order to enable batching by synchronous execution exhaustion, you need to configure your GraphQL instance with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaderSyncExecutionExhaustedInstrumentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQL = GraphQL.Builder()\n    .doNotAddDefaultInstrumentations()\n    .instrumentation(DataLoaderSyncExecutionExhaustedInstrumentation())\n    // configure schema, type wiring, etc.\n    .build()\n")),(0,r.kt)("p",null,"This data loader instrumentation relies on a global state object that needs be stored in the GraphQLContext map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val graphQLContext = mapOf(\n    SyncExecutionExhaustedState::class to SyncExecutionExhaustedState(\n        queries.size,\n        kotlinDataLoaderRegistry\n    )\n)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides convenient integration of batch loader functionality through simple configuration.\nBatching by synchronous execution exhaustion can be enabled by configuring following properties:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  batching:\n   enabled: true\n   strategy: SYNC_EXHAUSTION\n"))),(0,r.kt)("h2",{id:"multiple-data-loaders-per-field-data-fetcher"},"Multiple data loaders per field data fetcher"),(0,r.kt)("p",null,"There are some cases when a GraphQL Schema doesn't match the data source schema, a field can require data from multiple\nsources to be fetched and you will still want to do batching with data loaders."),(0,r.kt)("h3",{id:"dispatchifneeded"},"DispatchIfNeeded"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-dataloader-instrumentation")," includes a helpful extension function of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," class\nso that you can easily instruct the ",(0,r.kt)("a",{parentName:"p",href:"./data-loader-instrumentation#dispatching-by-level"},"previously selected data loader instrumentation"),"\nthat you want to apply batching and deduplication to a chained ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetcher")," (resolver)."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    astronaut(id: ID!): Astronaut\n}\n\n# In the data source, let's say a database,\n# an `Astronaut` can have multiple `Mission`s and a `Mission` can have multiple `Planet`s.\ntype Astronaut {\n    id: ID!\n    name: String!\n    # The schema exposes the `Astronaut` `Planet`s, without traversing his `Mission`s.\n    planets: [Planet!]!\n}\n\ntype Planet {\n    id: ID!\n    name: String!\n}\n")),(0,r.kt)("p",null,"The  ",(0,r.kt)("inlineCode",{parentName:"p"},"Astronaut")," ",(0,r.kt)("inlineCode",{parentName:"p"},"planets")," data fetcher (resolver) will contain the logic to chain two data loaders,\nfirst collect missions by astronaut, and then, planets by mission."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DataLoaders")),(0,r.kt)("p",null,"For this specific example we would need 2 ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader"),"s"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MissionsByAstronaut:")," to retrieve ",(0,r.kt)("inlineCode",{parentName:"li"},"Mission"),"s by a given ",(0,r.kt)("inlineCode",{parentName:"li"},"Astronaut"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"PlanetsByMission:")," to retrieve ",(0,r.kt)("inlineCode",{parentName:"li"},"Planet"),"s by a given ",(0,r.kt)("inlineCode",{parentName:"li"},"Mission"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetching logic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Astronaut {\n    fun getPlanets(\n        astronautId: Int,\n        environment: DataFetchingEnvironment\n    ): CompletableFuture<List<Planet>> {\n        val missionsByAstronautDataLoader = environment.getDataLoader("MissionsByAstronautDataLoader")\n        val planetsByMissionDataLoader = environment.getDataLoader("PlanetsByMissionDataLoader")\n        return missionsByAstronautDataLoader\n            .load(astronautId)\n            // chain data loader\n            .thenCompose { missions ->\n                planetsByMissionDataLoader\n                    .loadMany(missions.map { mission -> mission.id })\n                    // extension function to schedule a dispatch of registry if needed\n                    .dispatchIfNeeded(environment)\n            }\n}\n')))}k.isMDXComponent=!0},4356:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-loader-level-dispatched-instrumentation-5aa0dcea159d7f614e3f9894936ce2a6.png"},46306:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-loader-level-sync-execution-exhausted-instrumentation-716af35282dac7cd02bf2d3541752dbf.png"}}]);