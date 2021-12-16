"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74649],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84102:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),i=["components"],s={title:"Cascading persist, merge and remove",sidebar_label:"Cascading"},l=void 0,c={unversionedId:"cascading",id:"version-2.7/cascading",title:"Cascading persist, merge and remove",description:"When persisting or removing entity, all your references are by default cascade persisted.",source:"@site/versioned_docs/version-2.7/cascading.md",sourceDirName:".",slug:"/cascading",permalink:"/docs/2.7/cascading",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/cascading.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1639684938,formattedLastUpdatedAt:"12/16/2021",frontMatter:{title:"Cascading persist, merge and remove",sidebar_label:"Cascading"},sidebar:"version-2.7/docs",previous:{title:"Transactions and concurrency",permalink:"/docs/2.7/transactions"},next:{title:"Smart Nested Populate",permalink:"/docs/2.7/nested-populate"}},p=[{value:"Cascade persist",id:"cascade-persist",children:[],level:2},{value:"Cascade merge",id:"cascade-merge",children:[],level:2},{value:"Cascade remove",id:"cascade-remove",children:[],level:2},{value:"Orphan removal",id:"orphan-removal",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When persisting or removing entity, all your references are by default cascade persisted.\nThis means that by persisting any entity, ORM will automatically persist all of its\nassociations. "),(0,r.kt)("p",null,"You can control this behaviour via ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," attribute of ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne")," fields."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"New entities without primary key will be always persisted, regardless of ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," value. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// cascade persist & merge is default value\n@OneToMany({ entity: () => Book, mappedBy: 'author' })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.MERGE] })\nbooks = new Collection<Book>(this);\n\n// only cascade remove\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n\n// cascade persist and remove (but not merge)\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n\n// no cascade\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [] })\nbooks = new Collection<Book>(this);\n\n// cascade all (persist, merge and remove)\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.ALL] })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.MERGE, Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n")),(0,r.kt)("h2",{id:"cascade-persist"},"Cascade persist"),(0,r.kt)("p",null,"Here is example of how cascade persist works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 'id', ['author', 'tags']);\nbook.author.name = 'Foo Bar';\nbook.tags[0].name = 'new name 1';\nbook.tags[1].name = 'new name 2';\nawait orm.em.persistAndFlush(book); // all book tags and author will be persisted too\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When cascade persisting collections, keep in mind only fully initialized collections\nwill be cascade persisted.")),(0,r.kt)("h2",{id:"cascade-merge"},"Cascade merge"),(0,r.kt)("p",null,"When you want to merge entity and all its associations, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.MERGE"),". This\ncomes handy when you want to clear identity map (e.g. when importing large number of entities),\nbut you also have to keep your parent entities managed (because otherwise they would be considered\nas new entities and insert-persisted, which would fail with non-unique identifier)."),(0,r.kt)("p",null,"In following example, without having ",(0,r.kt)("inlineCode",{parentName:"p"},"Author.favouriteBook")," set to cascade merge, you would\nget an error because it would be cascade-inserted with already taken ID. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const a1 = new Author(...);\na1.favouriteBook = new Book('the best', ...);\nawait orm.em.persistAndFlush(a1); // cascade persists favourite book as well\n\nfor (let i = 1; i < 1000; i++) {\n  const book = new Book('...', a1);\n  orm.em.persistLater(book);\n  \n  // persist every 100 records\n  if (i % 100 === 0) {\n    await orm.em.flush();\n    orm.em.clear(); // this makes both a1 and his favourite book detached\n    orm.em.merge(a1); // so we need to merge them to prevent cascade-inserts\n    \n    // without cascade merge, you would need to manually merge all his associations\n    orm.em.merge(a1.favouriteBook); // not needed with Cascade.MERGE\n  }\n}\n\nawait orm.em.flush();\n")),(0,r.kt)("h2",{id:"cascade-remove"},"Cascade remove"),(0,r.kt)("p",null,"Cascade remove works same way as cascade persist, just for removing entities. Following\nexample assumes that ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.publisher")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that cascade remove for collections can be inefficient as it will fire 1 query\nfor each entity in collection.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.removeEntity(book); // this will also remove book.publisher\n")),(0,r.kt)("p",null,"Keep in mind that cascade remove ",(0,r.kt)("strong",{parentName:"p"},"can be dangerous")," when used on ",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," fields,\nas cascade removed entity can stay referenced in another entities that were not removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const publisher = new Publisher(...);\n// all books with same publisher\nbook1.publisher = book2.publisher = book3.publisher = publisher;\nawait orm.em.removeEntity(book1); // this will remove book1 and its publisher\n\n// but we still have reference to removed publisher here\nconsole.log(book2.publisher, book3.publisher);\n")),(0,r.kt)("h2",{id:"orphan-removal"},"Orphan removal"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", there is also additional and more aggressive remove\ncascading mode which can be specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"orphanRemoval")," flag of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"@OneToMany")," properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Author {\n  @OneToMany({ entity: () => Book, mappedBy: 'author', orphanRemoval: true })\n  books = new Collection<Book>(this);\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"orphanRemoval")," flag behaves just like ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," for remove operation, so specifying\nboth is redundant.")),(0,r.kt)("p",null,"With simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", you wound need to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," entity to cascade\nthe operation down to all loaded ",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"s. By enabling orphan removal on the collection,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"s will be also removed when they get disconnected from the collection (either via\n",(0,r.kt)("inlineCode",{parentName:"p"},"remove()"),", or by replacing collection items via ",(0,r.kt)("inlineCode",{parentName:"p"},"set()"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await author.books.set([book1, book2]); // replace whole collection\nawait author.books.remove(book1); // remove book from collection\nawait orm.em.persistAndFlush(author); // book1 will be removed, as well as all original items (before we called `set()`)\n")),(0,r.kt)("p",null,"In this example, no ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," would be removed with simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," as no remove operation\nwas executed."))}m.isMDXComponent=!0}}]);