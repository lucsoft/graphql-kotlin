"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2895],{6573:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=s(7462),a=s(3366),r=(s(7294),s(3905)),i=(s(8561),["components"]),o={id:"lists",title:"Lists"},l=void 0,p={unversionedId:"schema-generator/writing-schemas/lists",id:"schema-generator/writing-schemas/lists",title:"Lists",description:"kotlin.collections.List is automatically mapped to the GraphQL List type. Type arguments provided to Kotlin collections",source:"@site/docs/schema-generator/writing-schemas/lists.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/lists",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/lists",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/lists.md",tags:[],version:"current",lastUpdatedBy:"Andreas Denkmayr",lastUpdatedAt:1676043494,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"lists",title:"Lists"},sidebar:"docs",previous:{title:"Enums",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/enums"},next:{title:"Interfaces",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/interfaces"}},c={},d=[{value:"Arrays and Unsupported Collection Types",id:"arrays-and-unsupported-collection-types",level:2}],h={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kotlin.collections.List")," is automatically mapped to the GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," type. Type arguments provided to Kotlin collections\nare used as the type arguments in the GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n    fun generateList(): List<String> {\n        // some logic here that generates list\n    }\n\n    fun doSomethingWithIntList(ints: List<Int>): String {\n        // some logic here that processes list\n    }\n}\n")),(0,r.kt)("p",null,"The above Kotlin class would produce the following GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    generateList: [String!]!\n    doSomethingWithIntList(ints: [Int!]!): String!\n}\n")),(0,r.kt)("h2",{id:"arrays-and-unsupported-collection-types"},"Arrays and Unsupported Collection Types"),(0,r.kt)("p",null,"Currently, the GraphQL spec only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Lists"),". Therefore, even though Java and Kotlin support number of other collection\ntypes, ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," only explicitly supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Lists"),". Other collection types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Sets")," (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/201"},"#201"),")\nand arbitrary ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," data structures are not supported out of the box. While we do not recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," in the schema,\nthey could be supported with the use of the schema hooks."),(0,r.kt)("p",null,"Due to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/pull/1379"},"argument deserialization issues"),", arrays are currently not supported"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n    Set::class -> List::class.createType(type.arguments)\n    else -> type\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/discussions/1110"},"Discussion #1110")," for more details."))}m.isMDXComponent=!0}}]);