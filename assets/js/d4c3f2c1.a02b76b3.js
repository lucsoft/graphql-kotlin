"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1061],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?t.createElement(v,i(i({ref:r},u),{},{components:n})):t.createElement(v,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(67294),o=n(86010);const a="tabItem_Ymn6";function i(e){var r=e.children,n=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},r)}},65488:(e,r,n)=>{n.d(r,{Z:()=>m});var t=n(87462),o=n(67294),a=n(86010),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var r,n,i=e.lazy,d=e.block,m=e.defaultValue,v=e.values,h=e.groupId,f=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:k.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),y=(0,l.l)(g,(function(e,r){return e.value===r.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(r=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?r:k[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),x=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,o.useState)(b),S=C[0],P=C[1],O=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=x[h];null!=E&&E!==S&&g.some((function(e){return e.value===E}))&&P(E)}var G=function(e){var r=e.currentTarget,n=O.indexOf(r),t=g[n].value;t!==S&&(T(r),P(t),null!=h&&w(h,String(t)))},j=function(e){var r,n=null;switch(e.key){case"ArrowRight":var t,o=O.indexOf(e.currentTarget)+1;n=null!=(t=O[o])?t:O[0];break;case"ArrowLeft":var a,i=O.indexOf(e.currentTarget)-1;n=null!=(a=O[i])?a:O[O.length-1]}null==(r=n)||r.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var r=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:S===r?0:-1,"aria-selected":S===r,key:r,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:G,onClick:G},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":S===r})}),null!=n?n:r)}))),i?(0,o.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==S})}))))}function m(e){var r=(0,i.Z)();return o.createElement(d,(0,t.Z)({key:String(r)},e))}},44468:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(65488),l=n(85162),s=["components"],c={id:"hooks-provider",title:"Schema Generator Hooks Provider"},u=void 0,p={unversionedId:"plugins/hooks-provider",id:"version-4.x.x/plugins/hooks-provider",title:"Schema Generator Hooks Provider",description:"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan",source:"@site/versioned_docs/version-4.x.x/plugins/hooks-provider.mdx",sourceDirName:"plugins",slug:"/plugins/hooks-provider",permalink:"/graphql-kotlin/docs/4.x.x/plugins/hooks-provider",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/hooks-provider.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1663956126,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"hooks-provider",title:"Schema Generator Hooks Provider"},sidebar:"version-4.x.x/docs",previous:{title:"Usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-usage"}},d={},m=[{value:"Creating Custom Hooks Service Provider",id:"creating-custom-hooks-service-provider",level:2},{value:"Add dependency on graphql-kotlin-hooks-provider",id:"add-dependency-on-graphql-kotlin-hooks-provider",level:3},{value:"Create new SchemaGeneratorHooksProvider implementation",id:"create-new-schemageneratorhooksprovider-implementation",level:3},{value:"Create provider configuration file",id:"create-provider-configuration-file",level:3},{value:"Limitations",id:"limitations",level:2}],v={toc:m};function h(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},v,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan\nyour classpath for classes implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces\nand then generate corresponding GraphQL schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". By default, plugins will generate\nthe schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If your project uses custom hooks or needs to generate the federated GraphQL\nschema, you will need to provide an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," that will be used to create an instance of\nyour custom hooks."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," is a service provider interface that exposes a single ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," method to generate an instance\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," that will be used to generate your schema. By utilizing Java ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nwe can dynamically load your custom provider from the classpath. Service provider can be provided as part of your project\nsources, included inside of one of your project dependencies or through explicitly provided artifact. Since we need to be\nable to deterministically choose a single hooks provider, generation of schema will fail if there are multiple providers\non the classpath."),(0,a.kt)("h2",{id:"creating-custom-hooks-service-provider"},"Creating Custom Hooks Service Provider"),(0,a.kt)("h3",{id:"add-dependency-on-graphql-kotlin-hooks-provider"},"Add dependency on graphql-kotlin-hooks-provider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-hooks-provider")," module."),(0,a.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimplementation("com.expediagroup", "graphql-kotlin-hooks-provider", latestVersion)\n'))),(0,a.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-hooks-provider</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,a.kt)("h3",{id:"create-new-schemageneratorhooksprovider-implementation"},"Create new SchemaGeneratorHooksProvider implementation"),(0,a.kt)("p",null,"Service provider implementation has to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface that provides a way to instantiate\nschema generator hooks that will be used to generate the GraphQL schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nclass MyCustomSchemaGeneratorHooksProvider : SchemaGeneratorHooksProvider {\n    override fun hooks(): SchemaGeneratorHooks = MyCustomHooks()\n}\n")),(0,a.kt)("h3",{id:"create-provider-configuration-file"},"Create provider configuration file"),(0,a.kt)("p",null,"Service loader provider configuration file should be created under JAR ",(0,a.kt)("inlineCode",{parentName:"p"},"/META-INF/services")," directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services"),"\nin default project structure). Name of the provider configuration should be fully qualified service provider interface name, i.e.\n",(0,a.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider")," and contain single entry - a fully qualified\nname of the service provider implementation."),(0,a.kt)("p",null,"Using the example service provider implementation from the above, our project structure should look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my-project\n|- src\n  |- main\n    |- kotlin\n      |- com\n        |- example\n          |- MyCustomSchemaGeneratorHooksProvider.kt\n    |- resources\n      |- META-INF\n        |- services\n          |- com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider\n\n")),(0,a.kt)("p",null,"Our service provider configuration file should have following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"com.example.MyCustomSchemaGeneratorHooksProvider\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"We don't support Java 9 module mechanism for declaring ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," implementations. As a workaround, you have to define\nyour service providers in the provider configuration file under ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/services"),"."))}h.isMDXComponent=!0}}]);