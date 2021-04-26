(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(182)),d={id:"federated-schemas",title:"Federated Schemas",original_id:"federated-schemas"},o={unversionedId:"federated/federated-schemas",id:"version-3.x.x/federated/federated-schemas",isDocsHomePage:!1,title:"Federated Schemas",description:"graphql-kotlin-federation library extends the functionality of the graphql-kotlin-schema-generator and allows you to",source:"@site/versioned_docs/version-3.x.x/federated/federated-schemas.md",slug:"/federated/federated-schemas",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-schemas",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/federated-schemas.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619471277,sidebar:"version-3.x.x/docs",previous:{title:"Apollo Federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},next:{title:"Federated Directives",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-directives"}},s=[{value:"Base Schema",id:"base-schema",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," library extends the functionality of the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and allows you to\neasily generate federated GraphQL schemas directly from the code. Federated schema is generated by calling\n",Object(i.b)("inlineCode",{parentName:"p"},"toFederatedSchema")," function that accepts federated configuration as well as a list of regular queries, mutations and\nsubscriptions exposed by the schema."),Object(i.b)("p",null,"All ",Object(i.b)("a",{parentName:"p",href:"federated-directives"},"federated directives")," are provided as annotations that are used to decorate your classes,\nproperties and functions. Since federated types might not be accessible through the regular query execution path, they\nare explicitly picked up by the schema generator based on their directives. Due to the above, we also need to provide\na way to instantiate the underlying federated objects by implementing corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"FederatedTypeResolvers"),". See\n",Object(i.b)("a",{parentName:"p",href:"type-resolution"},"type resolution wiki")," for more details on how federated types are resolved. Final federated schema\nis then generated by invoking the ",Object(i.b)("inlineCode",{parentName:"p"},"toFederatedSchema")," function\n(",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/toFederatedSchema.kt#L34"},"link"),")."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In order to generate valid federated schemas, you will need to annotate both your base schema and the one extending\nit"),". Federated Gateway (e.g. Apollo) will then combine the individual graphs to form single federated graph."),Object(i.b)("p",null,">"," NOTE: If you are using custom ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," type then all of you federated GraphQL services have to use the same type. It is\n",">"," not possible for federated services to have multiple definitions of ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," type."),Object(i.b)("h3",{id:"base-schema"},"Base Schema"),Object(i.b)("p",null,"Base schema defines GraphQL types that will be extended by schemas exposed by other GraphQL services. In the example\nbelow, we define base ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type with ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"description")," fields. ",Object(i.b)("inlineCode",{parentName:"p"},"id")," is the primary key that uniquely\nidentifies the ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type object and is specified in ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," directive. Since it is a base schema that doesn't expose\nany extended functionality our FederatedTypeRegistry does not include any federated resolvers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\ndata class Product(val id: Int, val description: String)\n\nclass ProductQuery {\n  fun product(id: Int): Product? {\n    // grabs product from a data source, might return null\n  }\n}\n\n// Generate the schema\nval federatedTypeRegistry = FederatedTypeRegistry(emptyMap())\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\nval queries = listOf(TopLevelObject(ProductQuery()))\n\ntoFederatedSchema(config, queries)\n\n')),Object(i.b)("p",null,"Example above generates the following schema with additional federated types:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'\nschema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @key(fields : "id") {\n  description: String!\n  id: Int!\n}\n\ntype Query @extends {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service\n  product(id: Int!): Product\n}\n\ntype _Service {\n  sdl: String!\n}\n\n')),Object(i.b)("h4",{id:"extended-schema"},"Extended Schema"),Object(i.b)("p",null,"Extended federated GraphQL schemas provide additional functionality to the types already exposed by other GraphQL\nservices. In the example below, ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type is extended to add new ",Object(i.b)("inlineCode",{parentName:"p"},"reviews")," field to it. Primary key needed to\ninstantiate the ",Object(i.b)("inlineCode",{parentName:"p"},"Product")," type (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"id"),") has to match the ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," definition on the base type. Since primary keys are\ndefined on the base type and are only referenced from the extended type, all of the fields that are part of the field\nset specified in ",Object(i.b)("inlineCode",{parentName:"p"},"@key")," directive have to be marked as ",Object(i.b)("inlineCode",{parentName:"p"},"@external"),'. Finally, we also need to specify an "entry point"\nfor the federated type\u200a-\u200awe need to create a FederatedTypeResolver that will be used to instantiate the federated\n',Object(i.b)("inlineCode",{parentName:"p"},"Product")," type when processing federated queries."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\n@ExtendsDirective\ndata class Product(@ExternalDirective val id: Int) {\n\n    fun reviews(): List<Review> {\n        // returns list of product reviews\n    }\n}\n\ndata class Review(val reviewId: String, val text: String)\n\n// Generate the schema\nval productResolver = object: FederatedTypeResolver<Product> {\n    override suspend fun resolve(representations: List<Map<String, Any>>): List<Product?> = representations.map { keys ->\n        keys["id"]?.toString()?.toIntOrNull()?.let { id ->\n            Product(id)\n    }\n    }\n}\nval federatedTypeRegistry = FederatedTypeRegistry(mapOf("Product" to productResolver))\nval config = FederatedSchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = FederatedSchemaGeneratorHooks(federatedTypeRegistry))\n\ntoFederatedSchema(config)\n\n')),Object(i.b)("p",null,"Our extended schema will then be generated as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'\nschema {\n  query: Query\n}\n\nunion _Entity = Product\n\ntype Product @extends @key(fields : "id") {\n  id: Int! @external\n  reviews: [Review!]!\n}\n\ntype Query @extends {\n  _entities(representations: [_Any!]!): [_Entity]!\n  _service: _Service\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype _Service {\n  sdl: String!\n}\n\n')),Object(i.b)("h4",{id:"federated-graphql-schema"},"Federated GraphQL schema"),Object(i.b)("p",null,"Once we have both base and extended GraphQL services up and running, we will also need to configure Federated Gateway\nto combine them into a single schema. Using the examples above, our final federated schema will be generated as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n}\n\ntype Product {\n  description: String!\n  id: Int!\n  reviews: [Review!]!\n}\n\ntype Review {\n  reviewId: String!\n  text: String!\n}\n\ntype Query {\n  product(id: String!): Product\n}\n\n")),Object(i.b)("p",null,"See our ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation"},"federation example")," for additional details."))}l.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(d,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(h,o(o({ref:t},c),{},{components:n})):a.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var c=2;c<i;c++)d[c]=n[c];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);