"use strict";(self.webpackChunkapex_fp_docs=self.webpackChunkapex_fp_docs||[]).push([[818],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},s="Basic concepts",l={unversionedId:"basic-concepts",id:"basic-concepts",isDocsHomePage:!1,title:"Basic concepts",description:"Apex is a very static language. There is a very small surface of the language where something dynamic can happen and it\u2019s mostly related to the SObject class which is a syntactic sugar over a Map. With Apex, we have to write imperative code in loops to transform data.",source:"@site/docs/basic-concepts.md",sourceDirName:".",slug:"/basic-concepts",permalink:"/basic-concepts",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/"},next:{title:"SObjectCollection",permalink:"/api/collection/sobject-collection"}},p=[{value:"Functional interfaces",id:"functional-interfaces",children:[]},{value:"Function factories",id:"function-factories",children:[]},{value:"Higher order functions",id:"higher-order-functions",children:[]},{value:"Putting it all together",id:"putting-it-all-together",children:[]}],u={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("p",null,"Apex is a very static language. There is a very small surface of the language where something dynamic can happen and it\u2019s mostly related to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SObject")," class which is a syntactic sugar over a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map<String, Object>"),". With Apex, we have to write imperative code in loops to transform data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex",metastring:'title="Apex imperative style filtering"',title:'"Apex',imperative:!0,style:!0,'filtering"':!0},"List<Opportunity> opportunities = [SELECT ...];\nList<Opportunity> largeOpportunities = new List<Opportunity>();\nfor (Opportunity opp : opportunities) {\n    if (opp.Amount > 10000) {\n        largeOpportunities.add(opp);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Apex FP")," implements common operations on ",(0,i.kt)("inlineCode",{parentName:"p"},"SObject")," instances, and allows functional (declarative) transformation of data. Here\u2019s how filtering looks like with Apex FP:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex",metastring:'title="Apex FP declarative style filtering"',title:'"Apex',FP:!0,declarative:!0,style:!0,'filtering"':!0},"List<Opportunity> opportunities = [SELECT ...];\nList<Opportunity> largeOpportunities = SObjectCollection.of(opportunities).filter(Match.field(Opportunity.Amount).greaterThan(10000));\n")),(0,i.kt)("p",null,"To enable functional programming, Apex FP provides three things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Functional interfaces")," "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Function factories")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Classes that use functions"))),(0,i.kt)("h2",{id:"functional-interfaces"},"Functional interfaces"),(0,i.kt)("p",null,"First, Apex FP defines a reasonable set of ",(0,i.kt)("strong",{parentName:"p"},"functional interfaces"),' for functions. Unlike most modern languages, Apex does not support functions as "first class citizens". Apex FP therefore provides interfaces for common classes of functions out of the box, like "functions that take an ',(0,i.kt)("inlineCode",{parentName:"p"},"SObject")," and return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),'":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex",metastring:'title="apex-fp/main/classes/function/SObjectPredicate.cls"',title:'"apex-fp/main/classes/function/SObjectPredicate.cls"'},"public interface SObjectPredicate {\n    Boolean apply(SObject record);\n}\n")),(0,i.kt)("p",null,'or "functions that take an ',(0,i.kt)("inlineCode",{parentName:"p"},"SObject")," and return an ",(0,i.kt)("inlineCode",{parentName:"p"},"SObject"),'":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex",metastring:'title="apex-fp/main/classes/function/SObjectToSObjectFunction.cls"',title:'"apex-fp/main/classes/function/SObjectToSObjectFunction.cls"'},"public interface SObjectToSObjectFunction {\n    SObject apply(SObject record);\n}\n")),(0,i.kt)("h2",{id:"function-factories"},"Function factories"),(0,i.kt)("p",null,"Second, because we cannot define anonymous classes or functions in Apex, Apex FP provides ",(0,i.kt)("strong",{parentName:"p"},"function factories")," that can create common functions which respect Apex FP\u2019s functional interfaces. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Match")," can be used to build a function which tests if a record matches some criteria."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex"},"SObjectPredicate isNameFoo = Match.field(Opportunity.Name).equals('Foo');\n")),(0,i.kt)("h2",{id:"higher-order-functions"},"Higher order functions"),(0,i.kt)("p",null,"Finally, Apex FP provides classes with ",(0,i.kt)("strong",{parentName:"p"},"higher order functions")," as methods. Higher order functions are functions that take functions as arguments and use them to transform data. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"SObjectCollection")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SObjectStream")," both have a ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," method. It accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"SObjectPredicate")," function instance and uses it to test whether records satisfy the predicate, and keeps just the ones that do. ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," is therefore a higher order function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex",metastring:'title="main/classes/collection/SObjectCollection.cls"',title:'"main/classes/collection/SObjectCollection.cls"'},"public class SObjectCollection {\n    public SObjectCollection filter(SObjectPredicate predicate)\n}\n")),(0,i.kt)("p",null,"You can use Apex FP\u2019s function factories, write your own functions or mix and match."),(0,i.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"functional interfaces"),", ",(0,i.kt)("strong",{parentName:"p"},"function factories")," and a nice set of classes for working with ",(0,i.kt)("inlineCode",{parentName:"p"},"SObject")," collections with ",(0,i.kt)("strong",{parentName:"p"},"higher order functions")," , we finally get to data transformation expressions like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-apex"},"List<Opportunity> largeOpportunities = SObjectCollection.of(opportunities).filter(Match.field(Opportunity.Amount).greaterThan(10000)).asList();\n")))}f.isMDXComponent=!0}}]);