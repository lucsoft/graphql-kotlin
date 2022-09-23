"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"federated-directives",title:"Federated Directives"},d=void 0,s={unversionedId:"schema-generator/federation/federated-directives",id:"version-6.x.x/schema-generator/federation/federated-directives",title:"Federated Directives",description:"graphql-kotlin supports a number of directives that can be used to annotate a schema and direct certain behaviors.",source:"@site/versioned_docs/version-6.x.x/schema-generator/federation/federated-directives.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federated-directives",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/federated-directives",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/federation/federated-directives.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1663956126,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"federated-directives",title:"Federated Directives"},sidebar:"docs",previous:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/federated-schemas"},next:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/type-resolution"}},p={},c=[{value:"<code>@contact</code> directive",id:"contact-directive",level:2},{value:"Example usage on the schema class:",id:"example-usage-on-the-schema-class",level:4},{value:"<code>@extends</code> directive",id:"extends-directive",level:2},{value:"Example",id:"example",level:4},{value:"<code>@external</code> directive",id:"external-directive",level:2},{value:"Example",id:"example-1",level:4},{value:"<code>@inaccessible</code> directive",id:"inaccessible-directive",level:2},{value:"Example",id:"example-2",level:4},{value:"<code>@key</code> directive",id:"key-directive",level:2},{value:"Basic Example",id:"basic-example",level:4},{value:"Referencing External Entities",id:"referencing-external-entities",level:4},{value:"<code>@link</code> directive",id:"link-directive",level:2},{value:"<code>@override</code> directive",id:"override-directive",level:2},{value:"Example",id:"example-3",level:4},{value:"<code>@provides</code> directive",id:"provides-directive",level:2},{value:"Example 1:",id:"example-1-1",level:4},{value:"Example 2:",id:"example-2-1",level:4},{value:"<code>@requires</code> directive",id:"requires-directive",level:2},{value:"Example",id:"example-4",level:4},{value:"<code>@shareable</code> directive",id:"shareable-directive",level:2},{value:"Example",id:"example-5",level:4},{value:"<code>@tag</code> directive",id:"tag-directive",level:2},{value:"Example",id:"example-6",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," supports a number of directives that can be used to annotate a schema and direct certain behaviors."),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/federation-spec/"},"Apollo Federation Specification"),"."),(0,r.kt)("h2",{id:"contact-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@contact")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @contact(\n  "Contact title of the subgraph owner"\n  name: String!\n  "URL where the subgraph\'s owner can be reached"\n  url: String\n  "Other relevant notes can be included here; supports markdown links"\n  description: String\n) on SCHEMA\n')),(0,r.kt)("p",null,"Contact schema directive can be used to provide team contact information to your subgraph schema. This information is automatically parsed and displayed by Apollo Studio.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/studio/federated-graphs/#subgraph-contact-info"},"Subgraph Contact Information")," for additional details."),(0,r.kt)("h4",{id:"example-usage-on-the-schema-class"},"Example usage on the schema class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ContactDirective(\n  name = "My Team Name",\n  url = "https://myteam.slack.com/archives/teams-chat-room-url",\n  description = "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall)."\n)\nclass MySchema\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'schema @contact(description : "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall).", name : "My Team Name", url : "https://myteam.slack.com/archives/teams-chat-room-url"){\n  query: Query\n}\n')),(0,r.kt)("h2",{id:"extends-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@extends")," directive"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While Federation v2 no longer requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@extends")," directive due to the smart entity type merging. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," still\nrequires ",(0,r.kt)("inlineCode",{parentName:"p"},"@extends")," directive to programmatically locate all federated  entity types in order to add them to the schema.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @extends on OBJECT | INTERFACE\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@extends")," directive is used to represent type extensions in the schema. Native type extensions are currently\nunsupported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," libraries. Federated extended types should have corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive\ndefined that specifies primary key required to fetch the underlying object."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n   fun newFunctionality(): String = "whatever"\n}\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),(0,r.kt)("h2",{id:"external-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@external")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @external on FIELD_DEFINITION\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is used to mark a field as owned by another service. This allows service A to use fields from\nservice B while also knowing at runtime the types of that field. ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is only applicable on federated\nextended types. All the external fields should either be referenced from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides"),"\ndirectives field sets."),(0,r.kt)("p",null,"Due to the smart merging of entity types, ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is no longer required on ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," fields and can be omitted\nfrom the schema. ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is only required on fields referenced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newFunctionality(): String = "whatever"\n}\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),(0,r.kt)("h2",{id:"inaccessible-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@inaccessible")," directive"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only available in Federation v2.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @inaccessible on FIELD_DEFINITION\n    | OBJECT\n    | INTERFACE\n    | UNION\n    | ENUM\n    | ENUM_VALUE\n    | SCALAR\n    | INPUT_OBJECT\n    | INPUT_FIELD_DEFINITION\n    | ARGUMENT_DEFINITION\n")),(0,r.kt)("p",null,"Inaccessible directive marks location within schema as inaccessible from the GraphQL Gateway. This allows you to incrementally add schema elements (e.g. fields) to multiple subgraphs without breaking composition.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/inaccessible/v0.2"},"@inaccessible specification")," for additional details."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Location within schema will be inaccessible from the GraphQL Gateway as long as ",(0,r.kt)("strong",{parentName:"p"},"ANY")," of the subgraphs marks that location as ",(0,r.kt)("inlineCode",{parentName:"p"},"@inacessible"),".")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Product(\n  val id: String,\n  @InaccessibleDirective\n  val secret: String\n)\n")),(0,r.kt)("p",null,"will be generated by the subgraph as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  id: String!\n  secret: String! @inaccessible\n}\n")),(0,r.kt)("p",null,"but will be exposed on the GraphQL Gateway as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  id: String!\n}\n")),(0,r.kt)("h2",{id:"key-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@key")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"# federation v1 definition\ndirective @key(fields: _FieldSet!) repeatable on OBJECT | INTERFACE\n\n# federation v2 definition\ndirective @key(fields: FieldSet!, resolvable: Boolean = true) repeatable on OBJECT | INTERFACE\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive is used to indicate a combination of fields that can be used to uniquely identify and fetch an\nobject or interface. The specified field set can represent single field (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"id"'),"), multiple fields (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"id name"'),") or\nnested selection sets (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"id user { name }"'),"). Multiple keys can be specified on a target type."),(0,r.kt)("p",null,"Key directives should be specified on the root base type as well as all the corresponding federated (i.e. extended)\ntypes. Key fields specified in the directive field set should correspond to a valid field on the underlying GraphQL\ninterface/object. Federated extended types should also instrument all the referenced key fields with ",(0,r.kt)("inlineCode",{parentName:"p"},"@external"),"\ndirective."),(0,r.kt)("h4",{id:"basic-example"},"Basic Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@KeyDirective(FieldSet("upc"))\nclass Product(val id: String, val upc: String, val name: String)\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") @key(fields: "upc") {\n  id: String!\n  name: String!\n  upc: String!\n}\n')),(0,r.kt)("h4",{id:"referencing-external-entities"},"Referencing External Entities"),(0,r.kt)("p",null,"Entity types can be referenced from other subgraphs without contributing any additional fields, i.e. we can update type within our schema with a reference to a federated type. In order to generate\na valid schema, we need to define ",(0,r.kt)("strong",{parentName:"p"},"stub")," for federated entity that contains only key fields and also mark it as not resolvable within our subgraph. For example, if we have ",(0,r.kt)("inlineCode",{parentName:"p"},"Review")," entity defined\nin our supergraph, we can reference it in our product schema using following code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\nclass Product(val id: String, val name: String, val reviews: List<Review>)\n\n// review stub referencing just the key fields\n@KeyDirective(fields = FieldSet("id"), resolvable = false)\nclass Review(val id: String)\n')),(0,r.kt)("p",null,"which will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n  id: String!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review @key(fields: "id", resolvable: false) {\n  id: String!\n}\n')),(0,r.kt)("p",null,"This allows end users to query GraphQL Gateway for any product review fields and they will be resolved by calling the appropriate subgraph."),(0,r.kt)("h2",{id:"link-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@link")," directive"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only available in Federation v2.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @link(url: String, import: [String!]) repeatable on SCHEMA\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@link")," directive links definitions within the document to external schemas. See ",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/link/v1.0"},"@link specification")," for details."),(0,r.kt)("p",null,"External schemas are identified by their ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", which optionally ends with a name and version with the following format: ",(0,r.kt)("inlineCode",{parentName:"p"},"{NAME}/v{MAJOR}.{MINOR}"),"."),(0,r.kt)("p",null,"By default, external types should be namespaced (prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"<namespace>__"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," directive should be namespaced as ",(0,r.kt)("inlineCode",{parentName:"p"},"federation__key"),") unless they are explicitly imported.\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," automatically imports ALL federation directives to avoid the need for namespacing."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We currently DO NOT support full ",(0,r.kt)("inlineCode",{parentName:"p"},"@link")," directive capability as it requires support for namespacing and renaming imports. This functionality may be added in the future releases. See\n",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/link/v1.0"},"@link specification")," for details.")),(0,r.kt)("h2",{id:"override-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@override")," directive"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only available in Federation v2.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @override(from: String!) on FIELD_DEFINITION\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," directive is used to indicate that the current subgraph is taking responsibility for resolving the marked field away from the subgraph specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," argument,\ni.e. it is used for migrating a field from one subgraph to another. Name of the subgraph to be overriden has to match the name of the subgraph that was used to publish their schema. See\n",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/rover/subgraphs/#publishing-a-subgraph-schema-to-apollo-studio"},"Publishing schema to Apollo Studio")," for additional details."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only one subgraph can ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," any given field. If multiple subgraphs attempt to ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," the same field, a composition error occurs.")),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"SubgraphA")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n    id: String!\n    description: String!\n}\n')),(0,r.kt)("p",null,"We can override gateway ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," field resolution to resolve it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubgraphB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n    id: String!\n    name: String!\n    description: String! @override(from: "SubgraphA")\n}\n')),(0,r.kt)("h2",{id:"provides-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@provides")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"# federation v1 definition\ndirective @provides(fields: _FieldSet!) on FIELD_DEFINITION\n\n# federation v2 definition\ndirective @provides(fields: FieldSet!) on FIELD_DEFINITION\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive is used to annotate the expected returned field set from a field on a base type that is\nguaranteed to be selectable by the gateway. This allows you to expose only a subset of fields from the underlying\nfederated object type to be selectable from the federated schema. Provided fields specified in the directive field set\nshould correspond to a valid field on the underlying GraphQL interface/object type. ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive can only be\nused on fields returning federated extended objects."),(0,r.kt)("h4",{id:"example-1-1"},"Example 1:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Due to the smart entity type merging, Federation v2 does not require ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive if field can always be resolved locally.")),(0,r.kt)("p",null,"We might want to expose only name of the user that submitted a review."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\nclass Review(val id: String) {\n  @ProvidesDirective(FieldSet("name"))\n  fun user(): User = getUserByReviewId(id)\n}\n\n@KeyDirective(FieldSet("userId"))\n@ExtendsDirective\nclass User(\n  @ExternalDirective val userId: String,\n  @ExternalDirective val name: String\n)\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Review @key(fields : "id") {\n  id: String!\n  user: User! @provides(fields : "name")\n}\n\ntype User @key(fields : "userId") @extends {\n  userId: String! @external\n  name: String! @external\n}\n')),(0,r.kt)("h4",{id:"example-2-1"},"Example 2:"),(0,r.kt)("p",null,"Within our service, one of the queries could resolve all fields locally while other requires resolution from other subgraph"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  remoteResolution: Foo\n  localOnly: Foo @provides("baz")\n}\n\ntype Foo @key("id") {\n  id: ID!\n  bar: Bar\n  baz: Baz @external\n}\n')),(0,r.kt)("p",null,"In the example above, if user selects ",(0,r.kt)("inlineCode",{parentName:"p"},"baz")," field, it will be resolved locally from ",(0,r.kt)("inlineCode",{parentName:"p"},"localOnly")," query but will require another subgraph invocation from ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteResolution")," query."),(0,r.kt)("h2",{id:"requires-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@requires")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"# federation v1 definition\ndirective @requires(fields: _FieldSet!) on FIELD_DEFINITON\n\n# federation v2 definition\ndirective @requires(fields: FieldSet!) on FIELD_DEFINITON\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," directive is used to annotate the required input field set from a base type for a resolver. It is used\nto develop a query plan where the required fields may not be needed by the client, but the service may need additional\ninformation from other services. Required fields specified in the directive field set should correspond to a valid field\non the underlying GraphQL interface/object and should be instrumented with ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires"),"\ndirective specifies additional fields (besides the one specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive) that are required to resolve\nfederated type fields, this directive can only be specified on federated extended objects fields."),(0,r.kt)("p",null,"Fields specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," directive will only be specified in the queries that reference those fields.\nThis is problematic for Kotlin as the non nullable primitive properties have to be initialized when they are declared.\nSimplest workaround for this problem is to initialize the underlying property to some dummy value that will be used if\nit is not specified. This approach might become problematic though as it might be impossible to determine whether fields\nwas initialized with the default value or the invalid/default value was provided by the federated query. Another\npotential workaround is to rely on delegation to initialize the property after the object gets created. This will ensure\nthat exception will be thrown if queries attempt to resolve fields that reference the uninitialized property."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  @ExternalDirective\n  var weight: Double by Delegates.notNull()\n\n  @RequiresDirective(FieldSet("weight"))\n  fun shippingCost(): String { ... }\n\n  fun additionalInfo(): String { ... }\n}\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends  {\n  additionalInfo: String!\n  id: String! @external\n  shippingCost: String! @requires(fields : "weight")\n  weight: Float! @external\n}\n')),(0,r.kt)("h2",{id:"shareable-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@shareable")," directive"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only available in Federation v2.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @shareable on FIELD_DEFINITION | OBJECT\n")),(0,r.kt)("p",null,"Shareable directive indicates that given object and/or field can be resolved by multiple subgraphs. If an object is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"@shareable")," then all its fields are automatically shareable without the\nneed for explicitly marking them with ",(0,r.kt)("inlineCode",{parentName:"p"},"@shareable")," directive. All fields referenced from ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive are automatically shareable as well."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Objects/fields have to specify same shareability (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"@shareable")," or not) mode across ALL subgraphs.")),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n  id: ID!                           # shareable because id is a key field\n  name: String                      # non-shareable\n  description: String @shareable    # shareable\n}\n\ntype User @key(fields: "email") @shareable {\n  email: String                    # shareable because User is marked shareable\n  name: String                     # shareable because User is marked shareable\n}\n')),(0,r.kt)("h2",{id:"tag-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@tag")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @tag(name: String!) repeatable on FIELD_DEFINITION\n    | OBJECT\n    | INTERFACE\n    | UNION\n    | ARGUMENT_DEFINITION\n    | SCALAR\n    | ENUM\n    | ENUM_VALUE\n    | INPUT_OBJECT\n    | INPUT_FIELD_DEFINITION\n")),(0,r.kt)("p",null,"Tag directive allows users to annotate fields and types with additional metadata information. Used by ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/studio/contracts/"},"Apollo Contracts")," to expose\ndifferent graph variants to different customers. See ",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/tag/v0.2/"},"@tag specification")," for details."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @tag(name: "MyCustomTag") {\n    id: String!\n    name: String!\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Apollo Contracts behave slightly differently depending on which version of Apollo Federation your graph uses (1 or 2). See ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/studio/contracts/#federation-1-limitations"},"documentation")," for details.")))}u.isMDXComponent=!0}}]);