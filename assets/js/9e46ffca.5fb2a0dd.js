"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,v=e.values,h=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==C&&!k.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),U=y.tabGroupChoices,N=y.setTabGroupChoices,z=(0,r.useState)(C),w=z[0],D=z[1],S=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=U[h];null!=T&&T!==w&&k.some((function(e){return e.value===T}))&&D(T)}var x=function(e){var t=e.currentTarget,n=S.indexOf(t),a=k[n].value;a!==w&&(I(t),D(a),null!=h&&N(h,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var l,i=S.indexOf(e.currentTarget)-1;n=null!=(l=S[i])?l:S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return S.push(e)},onKeyDown:L,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},32039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),s=["components"],c={id:"client-customization",title:"Client Customization"},u=void 0,p={unversionedId:"client/client-customization",id:"version-5.x.x/client/client-customization",title:"Client Customization",description:"Ktor HTTP Client Customization",source:"@site/versioned_docs/version-5.x.x/client/client-customization.mdx",sourceDirName:"client",slug:"/client/client-customization",permalink:"/graphql-kotlin/docs/5.x.x/client/client-customization",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/client/client-customization.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Bryan Alejandro S\xe1nchez Ram\xedrez",lastUpdatedAt:1665551733,formattedLastUpdatedAt:"Oct 12, 2022",frontMatter:{id:"client-customization",title:"Client Customization"},sidebar:"version-5.x.x/docs",previous:{title:"Client Features",permalink:"/graphql-kotlin/docs/5.x.x/client/client-features"},next:{title:"Client Serialization",permalink:"/graphql-kotlin/docs/5.x.x/client/client-serialization"}},d={},m=[{value:"Ktor HTTP Client Customization",id:"ktor-http-client-customization",level:2},{value:"Global Client Customization",id:"global-client-customization",level:3},{value:"Per Request Customization",id:"per-request-customization",level:3},{value:"Spring WebClient Customization",id:"spring-webclient-customization",level:2},{value:"Global Client Customization",id:"global-client-customization-1",level:3},{value:"Per Request Customization",id:"per-request-customization-1",level:3},{value:"Custom GraphQL Client",id:"custom-graphql-client",level:2},{value:"Deprecated Field Usage",id:"deprecated-field-usage",level:2},{value:"Custom GraphQL Scalars",id:"custom-graphql-scalars",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ktor-http-client-customization"},"Ktor HTTP Client Customization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," is a thin wrapper on top of ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/docs/client.html"},"Ktor HTTP Client")," and supports fully\nasynchronous non-blocking communication. It is highly customizable and can be configured with any supported Ktor HTTP\n",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/engines.html"},"engine")," and ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/features.html"},"features"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client documentation")," for additional details."),(0,l.kt)("h3",{id:"global-client-customization"},"Global Client Customization"),(0,l.kt)("p",null,"A single instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," can be used to handle many GraphQL operations. You can specify a custom instance\nof Ktor ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient")," and a target ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientSerializer"),"."),(0,l.kt)("p",null,"The below example configures a new ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"OkHttp")," engine with custom timeouts, adds a default ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MY-API-KEY"),"\nheader to all requests, and enables basic logging of the requests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val okHttpClient = HttpClient(engineFactory = OkHttp) {\n    engine {\n        config {\n            connectTimeout(10, TimeUnit.SECONDS)\n            readTimeout(60, TimeUnit.SECONDS)\n            writeTimeout(60, TimeUnit.SECONDS)\n        }\n    }\n    defaultRequest {\n        header("X-MY-API-KEY", "someSecretApiKey")\n    }\n    install(Logging) {\n        logger = Logger.DEFAULT\n        level = LogLevel.INFO\n    }\n}\nval client = GraphQLKtorClient(\n    url = URL("http://localhost:8080/graphql"),\n    httpClient = okHttpClient\n)\n')),(0,l.kt)("h3",{id:"per-request-customization"},"Per Request Customization"),(0,l.kt)("p",null,"Individual GraphQL requests can be customized through ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/docs/request.html#customizing-requests"},"HttpRequestBuilder"),".\nYou can use this mechanism to specify custom headers, update target url to include custom query parameters, configure\nattributes that can be accessed from the pipeline features as well specify timeouts per request."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val helloWorldQuery = HelloWorldQuery(variables = HelloWorldQuery.Variables(name = "John Doe"))\nval result = client.execute(helloWorldQuery) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n')),(0,l.kt)("h2",{id:"spring-webclient-customization"},"Spring WebClient Customization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," is a thin wrapper on top of ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/function/client/WebClient.html"},"Spring WebClient"),"\nthat relies on Reactor Netty for fully asynchronous non-blocking communications. If you want to use Jetty instead you will\nneed to exclude provided ",(0,l.kt)("inlineCode",{parentName:"p"},"io.projectreactor.netty:reactor-netty")," dependency and instead add ",(0,l.kt)("inlineCode",{parentName:"p"},"org.eclipse.jetty:jetty-reactive-httpclient"),"\ndependency."),(0,l.kt)("h3",{id:"global-client-customization-1"},"Global Client Customization"),(0,l.kt)("p",null,"A single instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," can be used to handle many GraphQL operations and you can customize it by providing\na custom instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"WebClient.Builder"),". See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient-customization"},"Spring documentation"),"\nfor additional details."),(0,l.kt)("p",null,"Example below configures ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," with custom timeouts and adds a default ",(0,l.kt)("inlineCode",{parentName:"p"},"X-MY-API-KEY")," header to all requests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val httpClient: HttpClient = HttpClient.create()\n    .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10_000)\n    .responseTimeout(Duration.ofMillis(10_000))\nval connector: ClientHttpConnector = ReactorClientHttpConnector(httpClient.wiretap(true))\nval webClientBuilder = WebClient.builder()\n    .clientConnector(connector)\n    .defaultHeader("X-MY-API-KEY", "someSecretApiKey")\n\nval client = GraphQLWebClient(\n    url = "http://localhost:8080/graphql",\n    builder = webClientBuilder\n)\n')),(0,l.kt)("h3",{id:"per-request-customization-1"},"Per Request Customization"),(0,l.kt)("p",null,"Individual GraphQL requests can be customized by providing ",(0,l.kt)("inlineCode",{parentName:"p"},"WebClient.RequestBodyUriSpec")," lambda. You can use this mechanism\nto specify custom headers or include custom attributes or query parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val helloWorldQuery = HelloWorldQuery(variables = HelloWorldQuery.Variables(name = "John Doe"))\nval result = client.execute(helloWorldQuery) {\n    header("X-B3-TraceId", "0123456789abcdef")\n}\n')),(0,l.kt)("h2",{id:"custom-graphql-client"},"Custom GraphQL Client"),(0,l.kt)("p",null,"GraphQL Kotlin libraries provide generic a ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," interface as well as Ktor HTTP Client and Spring WebClient based\nreference implementations. Both ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLKtorClient")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," are open classes which means you can also\nextend them to provide some custom ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," logic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomGraphQLClient(url: URL) : GraphQLKtorClient(url = url) {\n\n    override suspend fun <T: Any> execute(request: GraphQLClientRequest<T>, requestCustomizer: HttpRequestBuilder.() -> Unit): GraphQLClientResponse<T> {\n        // custom init logic\n        val result = super.execute(request, requestCustomizer)\n        // custom finalize logic\n        return result\n    }\n}\n")),(0,l.kt)("h2",{id:"deprecated-field-usage"},"Deprecated Field Usage"),(0,l.kt)("p",null,"Build plugins will automatically fail generation of a client if any of the specified query files are referencing\ndeprecated fields. This ensures that your clients have to explicitly opt-in into deprecated usage by specifying\n",(0,l.kt)("inlineCode",{parentName:"p"},"allowDeprecatedFields")," configuration option."),(0,l.kt)("h2",{id:"custom-graphql-scalars"},"Custom GraphQL Scalars"),(0,l.kt)("p",null,"By default, custom GraphQL scalars are serialized and ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/type-aliases.html"},"type-aliased"),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."),(0,l.kt)("p",null,"In order to automatically convert between custom GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID")," scalar type and ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID"),", we first need to create\nour custom ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarConverter"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): Any = value.toString()\n}\n")),(0,l.kt)("p",null,"And then configure build plugin by specifying"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom GraphQL scalar name"),(0,l.kt)("li",{parentName:"ul"},"Target JVM class name"),(0,l.kt)("li",{parentName:"ul"},"Converter that provides logic to map between GraphQL and Kotlin type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'graphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')),(0,l.kt)("p",null,"Custom scalar fields will then be automatically converted to a ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID")," type using appropriate converter/serializer."),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("p",null,"Following converters will be generated under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\npublic class AnyToUUIDConverter : StdConverter<Any, UUID>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: Any): UUID = converter.toScalar(value)\n}\n\n@Generated\npublic class UUIDToAnyConverter : StdConverter<UUID, Any>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: UUID): Any = converter.toJson(value)\n}\n")),(0,l.kt)("p",null,"Custom scalars fields will then be annotated with Jackson annotations referencing the above converters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\npublic data class Result(\n  @JsonSerialize(converter = UUIDToAnyConverter::class)\n  @JsonDeserialize(converter = AnyToUUIDConverter::class)\n  public val custom: UUID,\n  @JsonSerialize(contentConverter = UUIDToAnyConverter::class)\n  @JsonDeserialize(contentConverter = AnyToUUIDConverter::class)\n  public val customList: List<UUID>\n)\n"))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("p",null,"Following serializer will be generated under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\npublic object UUIDSerializer : KSerializer<UUID> {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("UUID", STRING)\n\n  public override fun serialize(encoder: Encoder, `value`: UUID): Unit {\n    val encoded = converter.toJson(value)\n    encoder.encodeString(encoded.toString())\n  }\n\n  public override fun deserialize(decoder: Decoder): UUID {\n    val jsonDecoder = decoder as JsonDecoder\n    val element = jsonDecoder.decodeJsonElement()\n    val rawContent = element.jsonPrimitive.content\n    return converter.toScalar(rawContent)\n  }\n}\n')),(0,l.kt)("p",null,"Custom scalars fields will then be annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Serializable")," annotation referencing the above serializer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\n@Serializable\npublic data class Result(\n  @Serializable(with = UUIDSerializer::class)\n  public val custom: UUID,\n  public val customList: List<@Serializable(with = UUIDSerializer::class) UUID>\n)\n")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-goals"},"Maven")," plugin documentation for additional details."))}h.isMDXComponent=!0}}]);