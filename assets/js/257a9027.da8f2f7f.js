"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[578],{3848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),o=(n(8561),["components"]),l={id:"excluding-fields",title:"Excluding Fields"},r=void 0,c={unversionedId:"schema-generator/customizing-schemas/excluding-fields",id:"schema-generator/customizing-schemas/excluding-fields",title:"Excluding Fields",description:"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:",source:"@site/docs/schema-generator/customizing-schemas/excluding-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/excluding-fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/excluding-fields",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/excluding-fields.md",tags:[],version:"current",lastUpdatedBy:"Andreas Denkmayr",lastUpdatedAt:1676043494,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"excluding-fields",title:"Excluding Fields"},sidebar:"docs",previous:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/documenting-schema"},next:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/renaming-fields"}},d={},m=[],u={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first is by marking the field as non-",(0,s.kt)("inlineCode",{parentName:"li"},"public")," scope (",(0,s.kt)("inlineCode",{parentName:"li"},"private"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"protected"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"internal"),")"),(0,s.kt)("li",{parentName:"ul"},"The second method is by annotating the field with ",(0,s.kt)("inlineCode",{parentName:"li"},"@GraphQLIgnore"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SimpleQuery {\n  @GraphQLIgnore\n  fun notPartOfSchema() = "ignore me!"\n\n  private fun privateFunctionsAreNotVisible() = "ignored private function"\n\n  fun doSomething(value: Int): Boolean = true\n}\n')),(0,s.kt)("p",null,"The above query would produce the following GraphQL schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  doSomething(value: Int!): Boolean!\n}\n")),(0,s.kt)("p",null,"Note that the public method ",(0,s.kt)("inlineCode",{parentName:"p"},"notPartOfSchema")," is not included in the schema."))}h.isMDXComponent=!0}}]);