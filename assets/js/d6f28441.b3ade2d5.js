"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4975],{1678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o=(n(8561),["components"]),r={id:"client-customization",title:"Client Customization",original_id:"client-customization"},s=void 0,u={unversionedId:"client/client-customization",id:"version-3.x.x/client/client-customization",title:"Client Customization",description:"Ktor HTTP Client Customization",source:"@site/versioned_docs/version-3.x.x/client/client-customization.md",sourceDirName:"client",slug:"/client/client-customization",permalink:"/graphql-kotlin/docs/3.x.x/client/client-customization",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/client/client-customization.md",tags:[],version:"3.x.x",lastUpdatedBy:"Andreas Denkmayr",lastUpdatedAt:1676043494,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{id:"client-customization",title:"Client Customization",original_id:"client-customization"},sidebar:"version-3.x.x/docs",previous:{title:"Client Features",permalink:"/graphql-kotlin/docs/3.x.x/client/client-features"},next:{title:"Gradle Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"}},p={},c=[{value:"Ktor HTTP Client Customization",id:"ktor-http-client-customization",level:2},{value:"Global Client Customization",id:"global-client-customization",level:3},{value:"Per Request Customization",id:"per-request-customization",level:3},{value:"Custom GraphQL client",id:"custom-graphql-client",level:3},{value:"Jackson Customization",id:"jackson-customization",level:2},{value:"Deprecated Field\xa0Usage",id:"deprecated-fieldusage",level:2},{value:"Custom GraphQL\xa0Scalars",id:"custom-graphqlscalars",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ktor-http-client-customization"},"Ktor HTTP Client Customization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," uses the Ktor HTTP Client to execute the underlying queries. Clients can be customized with different\nengines (defaults to Coroutine-based IO) and HTTP client features. Custom configurations can be applied through Ktor DSL\nstyle builders."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client documentation")," for additional details."),(0,l.kt)("h3",{id:"global-client-customization"},"Global Client Customization"),(0,l.kt)("p",null,"A single instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," can be used to power many GraphQL operations. You can specify a target engine factory and\nconfigure it through the corresponding ",(0,l.kt)("a",{parentName:"p",href:"https://api.ktor.io/1.3.2/io.ktor.client/-http-client-config/index.html"},"HttpClientConfig"),".\nKtor also provides a number of ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/features.html"},"standard HTTP features")," and\nallows you to easily create custom ones that can be configured globally."),(0,l.kt)("p",null,"The below example configures a new ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"OkHttp")," engine with custom timeouts, adds a default ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MY-API-KEY"),"\nheader to all requests, and enables basic logging of the requests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nval client = GraphQLClient(\n        url = URL("http://localhost:8080/graphql"),\n        engineFactory = OkHttp\n) {\n    engine {\n        config {\n            connectTimeout(10, TimeUnit.SECONDS)\n            readTimeout(60, TimeUnit.SECONDS)\n            writeTimeout(60, TimeUnit.SECONDS)\n        }\n    }\n    defaultRequest {\n        header("X-MY-API-KEY", "someSecretApiKey")\n    }\n    install(Logging) {\n        logger = Logger.DEFAULT\n        level = LogLevel.INFO\n    }\n}\n\n')),(0,l.kt)("h3",{id:"per-request-customization"},"Per Request Customization"),(0,l.kt)("p",null,"Individual GraphQL requests can be customized through ",(0,l.kt)("a",{parentName:"p",href:"https://api.ktor.io/1.3.2/io.ktor.client.request/-http-request-builder/"},"HttpRequestBuilder"),".\nYou can use this mechanism to specify custom headers, update target url to include custom query parameters, configure\nattributes that can be accessed from the pipeline features as well specify timeouts per request."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nval helloWorldQuery = HelloWorldQuery(client)\nval result = helloWorldQuery.execute(variables = HelloWorldQuery.Variables(name = null)) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n\n')),(0,l.kt)("h3",{id:"custom-graphql-client"},"Custom GraphQL client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," is an open class which means you can also extend it to provide custom ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," logic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass CustomGraphQLClient(url: URL) : GraphQLClient<CIOEngineConfig>(url = url, engineFactory = CIO) {\n\n    override suspend fun <T> execute(query: String, operationName: String?, variables: Any?, resultType: Class<T>, requestBuilder: HttpRequestBuilder.() -> Unit): GraphQLResponse<T> {\n        // custom init logic\n        val result = super.execute(query, operationName, variables, resultType, requestBuilder)\n        // custom finalize logic\n        return result\n    }\n}\n\n")),(0,l.kt)("h2",{id:"jackson-customization"},"Jackson Customization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," relies on Jackson to handle polymorphic types and default enum values. You can specify your own custom\nobject mapper configured with some additional serialization/deserialization features but due to the necessary logic to\nhandle the above, currently we don't support other JSON libraries."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nval customObjectMapper = jacksonObjectMapper()\nval client = GraphQLClient(url = URL("http://localhost:8080/graphql"), mapper = customObjectMapper)\n\n')),(0,l.kt)("h2",{id:"deprecated-fieldusage"},"Deprecated Field\xa0Usage"),(0,l.kt)("p",null,"Build plugins will automatically fail generation of a client if any of the specified query files are referencing\ndeprecated fields. This ensures that your clients have to explicitly opt-in into deprecated usage by specifying\n",(0,l.kt)("inlineCode",{parentName:"p"},"allowDeprecatedFields")," configuration option."),(0,l.kt)("h2",{id:"custom-graphqlscalars"},"Custom GraphQL\xa0Scalars"),(0,l.kt)("p",null,"By default, custom GraphQL scalars are serialized and ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/type-aliases.html"},"type-aliased"),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."),(0,l.kt)("p",null,"In order to automatically convert between custom GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID")," scalar type and ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID"),", we first need to create\nour custom ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarConverter"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\npackage com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: String): UUID = UUID.fromString(rawValue)\n    override fun toJson(value: UUID): String = value.toString()\n}\n\n")),(0,l.kt)("p",null,"And then configure build plugin by specifying"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom GraphQL scalar name"),(0,l.kt)("li",{parentName:"ul"},"Target class name"),(0,l.kt)("li",{parentName:"ul"},"Converter that provides logic to map between GraphQL and Kotlin type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\ngraphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    converters.put("UUID", ScalarConverterMapping("java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"},"Gradle"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"},"Maven"),"\nplugin documentation for additional details."))}m.isMDXComponent=!0}}]);