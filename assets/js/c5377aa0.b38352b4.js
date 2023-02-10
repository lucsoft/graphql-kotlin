"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6812],{58:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>g});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(8561),["components"]),p={id:"spring-graphql-context",title:"Generating GraphQL Context",original_id:"spring-graphql-context"},s=void 0,l={unversionedId:"spring-server/spring-graphql-context",id:"version-3.x.x/spring-server/spring-graphql-context",title:"Generating GraphQL Context",description:"graphql-kotlin-spring-server provides a simple mechanism to build a GraphQL context per query execution through",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-graphql-context.md",sourceDirName:"spring-server",slug:"/spring-server/spring-graphql-context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-graphql-context.md",tags:[],version:"3.x.x",lastUpdatedBy:"Andreas Denkmayr",lastUpdatedAt:1676043494,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"spring-graphql-context",title:"Generating GraphQL Context",original_id:"spring-graphql-context"},sidebar:"version-3.x.x/docs",previous:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema"},next:{title:"Access the HTTP Request-Response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response"}},c={},g=[],h={toc:g};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a simple mechanism to build a ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"},"GraphQL context")," per query execution through\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/GraphQLContextFactory.kt"},"GraphQLContextFactory"),".\nOnce a context factory bean is available, it will then be used in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ContextWebFilter.kt"},"ContextWebFilter"),"\nto populate the GraphQL context based on the incoming request and make it available during query execution."),(0,o.kt)("p",null,"For example if we define our custom context as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyGraphQLContext(val myCustomValue: String) : GraphQLContext\n")),(0,o.kt)("p",null,"We can generate the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," bean:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass MyGraphQLContextFactory: GraphQLContextFactory<MyGraphQLContext> {\n    override suspend fun generateContext(\n        request: ServerHttpRequest,\n        response: ServerHttpResponse\n    ): MyGraphQLContext = MyGraphQLContext(\n        myCustomValue = request.headers.getFirst("MyHeader") ?: "defaultValue"\n    )\n}\n')),(0,o.kt)("p",null,"Once your application is configured to build your custom ",(0,o.kt)("inlineCode",{parentName:"p"},"MyGraphQLContext"),", we can then specify it as function argument but it will not be included in the schema.\nWhile executing the query, the corresponding GraphQL context will be read from the environment and automatically injected to the function input arguments."),(0,o.kt)("p",null,"For more details see the ",(0,o.kt)("a",{parentName:"p",href:"../schema-generator/execution/contextual-data"},"Contextual Data documentation"),"."))}u.isMDXComponent=!0}}]);