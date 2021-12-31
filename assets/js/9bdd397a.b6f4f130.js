"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26871],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return p}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),y=s(t),p=i,f=y["".concat(l,".").concat(p)]||y[p]||c[p]||o;return t?n.createElement(f,u(u({ref:r},d),{},{components:t})):n.createElement(f,u({ref:r},d))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,u=new Array(o);u[0]=y;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var s=2;s<o;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},31559:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return y}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),u=["components"],a={title:"Query Builder API"},l=void 0,s={unversionedId:"query-builder-api",id:"version-4.0/query-builder-api",title:"Query Builder API",description:"QueryBuilder provides fluent interface with these methods:",source:"@site/versioned_docs/version-4.0/query-builder-api.md",sourceDirName:".",slug:"/query-builder-api",permalink:"/docs/4.0/query-builder-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/query-builder-api.md",tags:[],version:"4.0",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1640899346,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Query Builder API"},sidebar:"version-4.0/docs",previous:{title:"EntityRepository API",permalink:"/docs/4.0/repositories-api"},next:{title:"Decorators",permalink:"/docs/4.0/decorators"}},d=[],c={toc:d};function y(e){var r=e.components,t=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"select(fields: Field<T> | Field<T>[], distinct?: boolean): QueryBuilder;\naddSelect(fields: string | string[]): QueryBuilder;\ninsert(data: any): QueryBuilder;\nupdate(data: any): QueryBuilder;\ndelete(cond?: QBFilterQuery): QueryBuilder;\ntruncate(): QueryBuilder;\ncount(field?: string | string[], distinct?: boolean): QueryBuilder;\njoin(field: string, alias: string, cond?: QBFilterQuery, type?: 'leftJoin' | 'innerJoin' | 'pivotJoin', path?: string): QueryBuilder;\nleftJoin(field: string, alias: string, cond?: QBFilterQuery): QueryBuilder;\nwithSubQuery(subQuery: KnexQueryBuilder, alias: string): QueryBuilder;\nwhere(cond: QBFilterQuery<T>, operator?: keyof typeof GroupOperator): QueryBuilder;\nwhere(cond: string, params?: any[], operator?: keyof typeof GroupOperator): QueryBuilder;\nandWhere(cond: QBFilterQuery<T>): QueryBuilder;\nandWhere(cond: string, params?: any[]): QueryBuilder;\norWhere(cond: QBFilterQuery<T>): QueryBuilder;\norWhere(cond: string, params?: any[]): QueryBuilder;\norderBy(orderBy: QueryOrderMap): QueryBuilder;\ngroupBy(fields: (string | keyof T) | (string | keyof T)[]): QueryBuilder;\nhaving(cond?: QBFilterQuery | string, params?: any[]): QueryBuilder;\nraw(sql: string): Raw;\nlimit(limit?: number, offset?: number): QueryBuilder;\noffset(offset?: number): QueryBuilder;\nwithSchema(schema?: string): QueryBuilder;\nsetLockMode(mode?: LockMode): QueryBuilder;\nsetFlag(flag: QueryFlag): QueryBuilder;\nunsetFlag(flag: QueryFlag): QueryBuilder;\ngetKnexQuery(): KnexQueryBuilder;\ngetQuery(): string;\ngetParams(): readonly Value[];\ngetAliasForJoinPath(path: string): string | undefined;\ngetNextAlias(prefix?: string): string;\nexecute<U = any>(method?: 'all' | 'get' | 'run', mapResults?: boolean): Promise<U>;\ngetResult(): Promise<T[]>;\ngetResultList(): Promise<T[]>;\ngetSingleResult(): Promise<T | null>;\n/**\n * Returns knex instance with sub-query aliased with given alias.\n * You can provide `EntityName.propName` as alias, then the field name will be used based on the metadata\n */\nas(alias: string): KnexQueryBuilder;\nclone(): QueryBuilder<T>;\ngetKnex(): KnexQueryBuilder;\n")))}y.isMDXComponent=!0}}]);