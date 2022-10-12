"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,h=u["".concat(d,".").concat(f)]||u[f]||c[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"type-resolution",title:"Federated Type Resolution"},d=void 0,l={unversionedId:"schema-generator/federation/type-resolution",id:"version-4.x.x/schema-generator/federation/type-resolution",title:"Federated Type Resolution",description:"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of",source:"@site/versioned_docs/version-4.x.x/schema-generator/federation/type-resolution.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/type-resolution",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/type-resolution",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/federation/type-resolution.md",tags:[],version:"4.x.x",lastUpdatedBy:"Bryan Alejandro S\xe1nchez Ram\xedrez",lastUpdatedAt:1665551733,formattedLastUpdatedAt:"Oct 12, 2022",frontMatter:{id:"type-resolution",title:"Federated Type Resolution"},sidebar:"version-4.x.x/docs",previous:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federated-directives"},next:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federation-tracing"}},p={},c=[{value:"<code>_entities</code> query",id:"_entities-query",level:2},{value:"Federated Type Resolver",id:"federated-type-resolver",level:3}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In traditional (i.e. non-federated) GraphQL servers, each one of the output types is accessible through a traversal of\nthe GraphQL schema from a corresponding query, mutation or subscription root type. Since federated GraphQL types might\nbe accessed outside of the query path we need a mechanism to access them in a consistent manner."),(0,o.kt)("h2",{id:"_entities-query"},(0,o.kt)("inlineCode",{parentName:"h2"},"_entities")," query"),(0,o.kt)("p",null,"A federated GraphQL server provides a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query that allows retrieving any of the federated extended types.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities"),' query accept list of "representation" objects that provide all required fields to resolve the type and\nreturn an ',(0,o.kt)("inlineCode",{parentName:"p"},"_Entity")," union type of all supported federated types. Representation objects are just a map of all the fields\nreferenced in ",(0,o.kt)("inlineCode",{parentName:"p"},"@key")," directives as well as the target ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," information. If federated query type fragments also\nreference fields with ",(0,o.kt)("inlineCode",{parentName:"p"},"@requires")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@provides")," directives, then those referenced fields should also be specified in\nthe target representation object."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," queries are automatically generated by the federated gateway and their usage is transparent for the gateway clients.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query ($_representations: [_Any!]!) {\n  _entities(representations: $_representations) {\n    ... on SomeFederatedType {\n      fieldA\n      fieldB\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"federated-type-resolver"},"Federated Type Resolver"),(0,o.kt)("p",null,"In order to simplify the integrations, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," provides a default ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query resolver that\nretrieves the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/execution/FederatedTypeResolver.kt"},"FederatedTypeResolver"),"\nthat is used to resolve the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolver.typeName")," specifies the GraphQL type name that should match up to the ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_entities")," query."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTypeResolver.resolve")," accepts a list of representations of the target types which should be resolved in the same order\nas they were specified in the list of representations. Each passed in representation should either be resolved to a\ntarget entity or ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," if entity cannot be resolved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// This service does not own the "Product" type but is extending it with new fields\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newField(): String = getNewFieldByProductId(id)\n}\n\n// This is how the "Product" class is created from the "_entities" query\nclass ProductResolver : FederatedTypeResolver<Product> {\n    override val typeName: String = "Product"\n\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map {\n        val id = it["id"]?.toString()\n\n        // Instantiate product using id, otherwise return null\n        if (id != null) {\n            Product(id)\n        } else {\n            null\n        }\n    }\n}\n\n// If you are using "graphql-kotlin-spring-server", your FederatedTypeResolvers can be marked as Spring beans\n// and will automatically be added to the hooks\nval resolvers = listOf(productResolver)\nval hooks = FederatedSchemaGeneratorHooks(resolvers)\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = hooks)\nval schema = toFederatedSchema(config)\n')))}f.isMDXComponent=!0}}]);