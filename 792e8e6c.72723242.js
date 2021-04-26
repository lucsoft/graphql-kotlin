(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(182)),c={id:"enums",title:"Enums",original_id:"enums"},s={unversionedId:"schema-generator/writing-schemas/enums",id:"version-3.x.x/schema-generator/writing-schemas/enums",isDocsHomePage:!1,title:"Enums",description:"Enums are automatically mapped to GraphQL enum type.",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/enums.md",slug:"/schema-generator/writing-schemas/enums",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/enums",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/enums.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619471277,sidebar:"version-3.x.x/docs",previous:{title:"Scalars",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/scalars"},next:{title:"Lists",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/lists"}},u=[{value:"Converting a Java enum to a GraphQL Enum",id:"converting-a-java-enum-to-a-graphql-enum",children:[]}],i={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Enums are automatically mapped to GraphQL enum type."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nenum class MyEnumType {\n  ONE,\n  TWO\n}\n\n")),Object(o.b)("p",null,"Above enum will be generated as following GraphQL object"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\nenum MyEnumType {\n  ONE\n  TWO\n}\n\n")),Object(o.b)("h3",{id:"converting-a-java-enum-to-a-graphql-enum"},"Converting a Java enum to a GraphQL Enum"),Object(o.b)("p",null,"If you want to use Java enums from another package, but you ",Object(o.b)("strong",{parentName:"p"},"don't")," want\ninclude everything from that package using ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},Object(o.b)("inlineCode",{parentName:"a"},"supportedPackages"))," or you want\nto customize the GraphQL type, you can use ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"schema generator hooks")," to\nassociate the Java enum with a runtime ",Object(o.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/index.html"},Object(o.b)("inlineCode",{parentName:"a"},"GraphQLEnumType")),"."),Object(o.b)("p",null,"Step 1: Create a GraphQLEnumType using the Java enum values"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"\n// in some other package\npublic enum Status {\n  APPROVED,\n  DECLINED\n}\n\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval statusEnumType = GraphQLEnumType.newEnum()\n    .name("Status")\n    .values(Status.values().map {\n      GraphQLEnumValueDefinition.newEnumValueDefinition()\n          .value(it.name)\n          .build()\n    })\n    .build()\n\n')),Object(o.b)("p",null," Step 2: Add a schema generation hook"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? {\n    return when (type.classifier as? KClass<*>) {\n      Status::class.java -> statusEnumType\n      else -> super.willGenerateGraphQLType(type)\n    }\n  }\n}\n\n")),Object(o.b)("p",null,"Step 3. Use your Java enum anywhere in your schema"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass StatusQuery : Query {\n  fun currentStatus: Status = getCurrentStatus()\n}\n\n")))}p.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(t),b=a,g=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return t?r.a.createElement(g,s(s({ref:n},i),{},{components:t})):r.a.createElement(g,s({ref:n},i))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);