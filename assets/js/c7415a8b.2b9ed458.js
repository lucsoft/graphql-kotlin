"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5818],{2489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=(n(8561),["components"]),i={id:"async-models",title:"Async Models",original_id:"async-models"},s=void 0,c={unversionedId:"schema-generator/execution/async-models",id:"version-3.x.x/schema-generator/execution/async-models",title:"Async Models",description:"By default, graphql-kotlin-schema-generator will resolve all functions synchronously, i.e. it will block the",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/async-models.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/async-models",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/async-models.md",tags:[],version:"3.x.x",lastUpdatedBy:"Andreas Denkmayr",lastUpdatedAt:1676043494,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"async-models",title:"Async Models",original_id:"async-models"},sidebar:"version-3.x.x/docs",previous:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data"},next:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/exceptions"}},p={},u=[{value:"Coroutines",id:"coroutines",level:2},{value:"CompletableFuture",id:"completablefuture",level:2},{value:"RxJava/Reactor",id:"rxjavareactor",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will resolve all functions synchronously, i.e. it will block the\nunderlying thread while executing the target function. While you could configure your GraphQL server with execution\nstrategies that execute each query in parallel on some thread pools, instead we highly recommend to utilize asynchronous\nprogramming models."),(0,r.kt)("h2",{id:"coroutines"},"Coroutines"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has built-in support for Kotlin coroutines. Provided default\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nwill automatically asynchronously execute suspendable functions and convert the result to ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," expected\nby ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java"),"."),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class User(val id: String, val name: String)\n\nclass Query {\n    suspend fun getUser(id: String): User {\n        // Your coroutine logic to get user data\n    }\n}\n\n")),(0,r.kt)("p",null,"will produce the following schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  getUser(id: String!): User\n}\n\ntype User {\n  id: String!\n  name: String!\n}\n\n")),(0,r.kt)("h2",{id:"completablefuture"},"CompletableFuture"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java")," relies on Java ",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," for asynchronously processing the requests. In order to simplify the\ninterop with ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-java"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," has a built-in hook which will automatically unwrap a\n",(0,r.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," and use the inner class as the return type in the schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class User(val id: String, val name: String)\n\nclass Query {\n    fun getUser(id: String): CompletableFuture<User> {\n        // Your logic to get data asynchronously\n    }\n}\n\n")),(0,r.kt)("p",null,"will result in the exactly the same schema as in the coroutine example above."),(0,r.kt)("h2",{id:"rxjavareactor"},"RxJava/Reactor"),(0,r.kt)("p",null,"If you want to use a different monad type, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Single")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJava"},"RxJava")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Mono")," from\n",(0,r.kt)("a",{parentName:"p",href:"https://projectreactor.io/"},"Project Reactor"),", you have to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create custom ",(0,r.kt)("inlineCode",{parentName:"li"},"SchemaGeneratorHook")," that implements ",(0,r.kt)("inlineCode",{parentName:"li"},"willResolveMonad")," to provide the necessary logic\nto correctly unwrap the monad and return the inner class to generate valid schema")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass MonadHooks : SchemaGeneratorHooks {\n    override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n        Mono::class -> type.arguments.firstOrNull()?.type\n        else -> type\n    } ?: type\n}\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Provide custom data fetcher that will properly process those monad types.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass CustomFunctionDataFetcher(target: Any?, fn: KFunction<*>, objectMapper: ObjectMapper) : FunctionDataFetcher(target, fn, objectMapper) {\n  override fun get(environment: DataFetchingEnvironment): Any? = when (val result = super.get(environment)) {\n    is Mono<*> -> result.toFuture()\n    else -> result\n  }\n}\n\nclass CustomDataFetcherFactoryProvider(\n    private val objectMapper: ObjectMapper\n) : SimpleKotlinDataFetcherFactoryProvider(objectMapper) {\n\n  override fun functionDataFetcherFactory(target: Any?, kFunction: KFunction<*>): DataFetcherFactory<Any> = DataFetcherFactory<Any> {\n    CustomFunctionDataFetcher(\n      target = target,\n      fn = kFunction,\n      objectMapper = objectMapper)\n  }\n}\n\n")),(0,r.kt)("p",null,"With the above you can then create your schema as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass ReactorQuery {\n    fun asynchronouslyDo(): Mono<Int> = Mono.just(1)\n}\n\nval configWithReactorMonoMonad = SchemaGeneratorConfig(\n  supportedPackages = listOf("myPackage"),\n  hooks = MonadHooks(),\n  dataFetcherFactoryProvider = CustomDataFetcherFactoryProvider())\n\ntoSchema(queries = listOf(TopLevelObject(ReactorQuery())), config = configWithReactorMonoMonad)\n\n')),(0,r.kt)("p",null,"This will produce"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  asynchronouslyDo(): Int\n}\n\n")),(0,r.kt)("p",null,"You can find additional example on how to configure the hooks in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/test/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorAsyncTests.kt"},"unit\ntests"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/AsyncQuery.kt"},"example app"),"."))}h.isMDXComponent=!0}}]);