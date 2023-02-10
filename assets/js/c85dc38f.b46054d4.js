"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9012],{4818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=(t(8561),["components"]),s={id:"unions",title:"Unions"},l=void 0,d={unversionedId:"schema-generator/writing-schemas/unions",id:"version-5.x.x/schema-generator/writing-schemas/unions",title:"Unions",description:"GraphQL Kotlin allows for two ways of defining unions in the schema",source:"@site/versioned_docs/version-5.x.x/schema-generator/writing-schemas/unions.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/unions",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/unions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/writing-schemas/unions.md",tags:[],version:"5.x.x",lastUpdatedBy:"Andreas Denkmayr",lastUpdatedAt:1676043494,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"unions",title:"Unions"},sidebar:"version-5.x.x/docs",previous:{title:"Interfaces",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/interfaces"},next:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/nested-arguments"}},h={},c=[{value:"Marker Interfaces",id:"marker-interfaces",level:2},{value:"<code>@GraphQLUnion</code>",id:"graphqlunion",level:2},{value:"Example Usage",id:"example-usage",level:3},{value:"Limitations",id:"limitations",level:3}],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Kotlin allows for two ways of defining unions in the schema"),(0,o.kt)("h2",{id:"marker-interfaces"},"Marker Interfaces"),(0,o.kt)("p",null,"Marker interfaces (i.e. interfaces without any common fields or methods) are exposed as GraphQL union types. All the\ntypes that implement the marker interface, and are available on the classpath, will be automatically exposed as\nobjects in the schema."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Unions"},"The GraphQL spec")," does not allow unions to be used as input.\nThis means that while it is valid Kotlin code to have a marker inteface as an argument, upon schema generation, an exception will be thrown.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface BodyPart\n\nclass LeftHand(val field: String): BodyPart\n\nclass RightHand(val property: Int): BodyPart\n\nclass PolymorphicQuery {\n    fun whichHand(whichHand: String): BodyPart = when (whichHand) {\n        "right" -> RightHand(12)\n        else -> LeftHand("hello world")\n    }\n}\n')),(0,o.kt)("p",null,"The above will generate following GraphQL schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union BodyPart = LeftHand | RightHand\n\ntype LeftHand {\n  field: String!\n}\n\ntype RightHand {\n  property: Int!\n}\n\ntype Query {\n  whichHand(whichHand: String!): BodyPart!\n}\n")),(0,o.kt)("h2",{id:"graphqlunion"},(0,o.kt)("inlineCode",{parentName:"h2"},"@GraphQLUnion")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Instead of this custom annotation, the ",(0,o.kt)("a",{parentName:"p",href:"../customizing-schemas/custom-type-reference"},"@GraphQLType")," annotation may be a better option")),(0,o.kt)("p",null,"The downside to marker interface unions is that you can not edit classes included in dependencies to implement new schema unions.\nFor example in an SDL-First world you could have this Kotlin class defined in some library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SharedModel(val foo: String)\n")),(0,o.kt)("p",null,"And then write your schema as the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# From library\ntype SharedModel {\n  foo: String!\n}\n\n# Defined in our schema\ntype ServiceModel {\n  bar: String!\n}\n\n# Defined in our schema\nunion CustomUnion = SharedModel | ServiceModel\n\ntype Query {\n    getModel: CustomUnion\n}\n")),(0,o.kt)("p",null,"But this is not currently possible in the full code-generation approach. Instead, you will need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@GraphQLUnion")," annotation on your functions or properties."),(0,o.kt)("h3",{id:"example-usage"},"Example Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Defined in some other library\nclass SharedModel(val foo: String)\n\n// Our code\nclass ServiceModel(val bar: String)\n\nclass Query {\n    @GraphQLUnion(\n        name = "CustomUnion",\n        possibleTypes = [SharedModel::class, ServiceModel::class],\n        description = "Return one or the other model"\n    )\n    fun getModel(): Any = ServiceModel("abc")\n}\n')),(0,o.kt)("p",null,"The annotation requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the new union to create and the ",(0,o.kt)("inlineCode",{parentName:"p"},"possibleTypes")," that this union can return.\nHowever since we can not enforce the type checks anymore, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," as the return type."),(0,o.kt)("h3",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Since this union is defined with an added annotation it is not currently possible to add directives directly to this union definition.\nYou will have to modify the type with ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/generator-config"},"schema generator hooks"),"."),(0,o.kt)("p",null,"This limitations can be met with the ",(0,o.kt)("a",{parentName:"p",href:"../customizing-schemas/custom-type-reference"},"@GraphQLType")," annotation."))}m.isMDXComponent=!0}}]);