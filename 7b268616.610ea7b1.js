(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(182)),o={id:"directives",title:"Directives",original_id:"directives"},c={unversionedId:"schema-generator/customizing-schemas/directives",id:"version-3.x.x/schema-generator/customizing-schemas/directives",isDocsHomePage:!1,title:"Directives",description:"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/directives.md",slug:"/schema-generator/customizing-schemas/directives",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/directives",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/directives.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619471277,sidebar:"version-3.x.x/docs",previous:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/renaming-fields"},next:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema"}},l=[{value:"Default Directives",id:"default-directives",children:[]},{value:"Custom Directives",id:"custom-directives",children:[{value:"Naming Convention",id:"naming-convention",children:[]},{value:"Customizing Behavior",id:"customizing-behavior",children:[]}]},{value:"Directive Chaining",id:"directive-chaining",children:[]},{value:"Ignoring Directive Arguments",id:"ignoring-directive-arguments",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL directives can be used to transform the schema types, fields and arguments as well as modify the runtime\nbehavior of the query (e.g. implement access control, etc). Common use cases involve limiting functionality based on the\nuser authentication and authorization. While ",Object(a.b)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/draft/#sec-Type-System.Directives"},"GraphQL\nspec")," specifies two types of directives -\n",Object(a.b)("inlineCode",{parentName:"p"},"executable")," (aka query) and ",Object(a.b)("inlineCode",{parentName:"p"},"type system")," (aka schema) directives, only the latter one is supported by\n",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),Object(a.b)("h2",{id:"default-directives"},"Default Directives"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@deprecated")," - schema directive used to represent deprecated portion of the schema.\nSee ",Object(a.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/deprecating-schema"},"@Deprecated")," annotation documentation for more details"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n  deprecatedQuery: Boolean! @deprecated(reason: "No longer supported")\n}\n\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@skip")," - query directive that allows for conditional exclusion of fields or fragments"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery myQuery($shouldSkip: Boolean) {\n  myField @skip(if: $shouldSkip)\n}\n\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@include")," - query directive that allows for conditional inclusion of fields or fragments"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"\nquery myQuery($shouldInclude: Boolean) {\n  myField @include(if: $shouldInclude)\n}\n\n")),Object(a.b)("h2",{id:"custom-directives"},"Custom Directives"),Object(a.b)("p",null,"Custom directives can be added to the schema using custom annotations:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLDirective(\n        name = "awesome",\n        description = "This element is great",\n        locations = [FIELD_DEFINITION]\n)\nannotation class AwesomeDirective(val value: String)\n\nclass MyQuery {\n    @AwesomeDirective("cool stuff")\n    val somethingGreat: String = "Hello World"\n}\n\n')),Object(a.b)("p",null,"The directive will then added to the schema as:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'\n# This element is great\ndirective @awesome(value: String) on FIELD_DEFINITION\n\ntype MyQuery {\n   somethingGreat: String @awesome("cool stuff")\n}\n\n')),Object(a.b)("p",null,"Directives can be added to various places in the schema. See the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/v13.0/src/main/java/graphql/introspection/Introspection.java#L332"},"graphql.introspection.Introspection.DirectiveLocation"),"\nenum from ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-java")," for a full list of valid locations."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note that GraphQL directives are currently not available through introspection and you have to use SDL directly\ninstead (you can use convenient ",Object(a.b)("inlineCode",{parentName:"strong"},"print")," extension function of ",Object(a.b)("inlineCode",{parentName:"strong"},"GraphQLSchema"),")"),". See ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/graphql/issues/300"},"GraphQL\nissue")," and corresponding ",Object(a.b)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/issues/1017"},"graphql-java\nissue")," for more details about the introspection issue."),Object(a.b)("h3",{id:"naming-convention"},"Naming Convention"),Object(a.b)("p",null,"As described in the example above, the directive name in the schema will by default come from the\n",Object(a.b)("inlineCode",{parentName:"p"},"@GraphQLDirective.name")," attribute which should follow ",Object(a.b)("inlineCode",{parentName:"p"},"lowerCamelCase")," format. If this value is not specified, the\ndirective name will default to the normalized decapitalized name of the annotated annotation (eg: ",Object(a.b)("inlineCode",{parentName:"p"},"awesomeDirective")," in\nthe example above)."),Object(a.b)("h3",{id:"customizing-behavior"},"Customizing Behavior"),Object(a.b)("p",null,"Directives allow you to customize the behavior of your schema based on some predefined conditions. Simplest way to\nmodify the default behavior of your GraphQLTypes is by providing your custom ",Object(a.b)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveWiring")," through\n",Object(a.b)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," factory used by your ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks"),"."),Object(a.b)("p",null,"Example of a directive that converts field to lowercase"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLDirective(name = "lowercase", description = "Modifies the string field to lowercase")\nannotation class LowercaseDirective\n\nclass LowercaseSchemaDirectiveWiring : KotlinSchemaDirectiveWiring {\n\n    override fun onField(environment: KotlinFieldDirectiveEnvironment): GraphQLFieldDefinition {\n        val field = environment.element\n        val originalDataFetcher: DataFetcher<Any> = environment.getDataFetcher()\n\n        val lowerCaseFetcher = DataFetcherFactories.wrapDataFetcher(\n            originalDataFetcher,\n            BiFunction<DataFetchingEnvironment, Any, Any>{ _, value -> value.toString().toLowerCase() }\n        )\n        environment.setDataFetcher(lowerCaseFetcher)\n        return field\n    }\n}\n\n')),Object(a.b)("p",null,"While you can manually apply all the runtime wirings to the corresponding GraphQL types directly in\n",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks#onRewireGraphQLType"),", we recommend the usage of our\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/directives/KotlinDirectiveWiringFactory.kt"},"KotlinDirectiveWiringFactory"),"\nto simplify the integrations. ",Object(a.b)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory")," accepts a mapping of directives to corresponding wirings or\ncould be extended to provide the wirings through ",Object(a.b)("inlineCode",{parentName:"p"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring")," that accepts\n",Object(a.b)("inlineCode",{parentName:"p"},"KotlinSchemaDirectiveEnvironment"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval queries = ...\nval customWiringFactory = KotlinDirectiveWiringFactory(\n    manualWiring = mapOf<String, KotlinSchemaDirectiveWiring>("lowercase" to LowercaseSchemaDirectiveWiring()))\nval customHooks = object : SchemaGeneratorHooks {\n    override val wiringFactory: KotlinDirectiveWiringFactory\n        get() = customWiringFactory\n}\nval schemaGeneratorConfig = SchemaGeneratorConfig(hooks = customHooks)\nval schema = toSchema(queries = queries, config = schemaGeneratorConfig)\n\n')),Object(a.b)("p",null,"While providing directives on different schema elements you will be able to modify the underlying GraphQL types. Keep in\nmind though that data fetchers are used to resolve the fields so only field directives (and by association their\narguments directives) can modify runtime behavior based on the context and user input."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE: ",Object(a.b)("inlineCode",{parentName:"strong"},"graphql-kotlin")," prioritizes manual wiring mappings over the wirings provided by the\n",Object(a.b)("inlineCode",{parentName:"strong"},"KotlinDirectiveWiringFactory#getSchemaDirectiveWiring"),". This is a different behavior than ",Object(a.b)("inlineCode",{parentName:"strong"},"graphql-java")," which will\nfirst attempt to use ",Object(a.b)("inlineCode",{parentName:"strong"},"WiringFactory")," and then fallback to manual overrides.")),Object(a.b)("p",null,"For more details please refer to the example usage of directives in our ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/spring"},"example\napp"),"."),Object(a.b)("h2",{id:"directive-chaining"},"Directive Chaining"),Object(a.b)("p",null,"Directives are applied in the order annotations are declared on the given object. Given"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"\n  @Directive1\n  @Directive2\n  fun doSomething(): String {\n    // does something\n  }\n\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Directive1")," will be applied first followed by the ",Object(a.b)("inlineCode",{parentName:"p"},"Directive2"),"."),Object(a.b)("h2",{id:"ignoring-directive-arguments"},"Ignoring Directive Arguments"),Object(a.b)("p",null,"Normally if you wanted to exclude a field or argument from the schema, you could use ",Object(a.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore"),".\nHowever, due to reflection and kotlin limitations, the generated JVM code for interface arguments can only have annotations on getters."),Object(a.b)("p",null,"This is easily fixable though using the ",Object(a.b)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/annotations.html#annotation-use-site-targets"},Object(a.b)("inlineCode",{parentName:"a"},"@get:")," target prefix"),"\nSee ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/763"},"graphql-kotlin#763")," for more details."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@GraphQLDirective\nannotation class DirectiveWithIgnoredArgs(\n    val string: String,\n\n    @get:GraphQLIgnore\n    val ignoreMe: String\n)\n\n")),Object(a.b)("p",null,"This will generate the following schema"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"\ndirective @directiveWithIgnoredArgs(\n  string: String!\n) on ...\n\n")))}p.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||a;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);