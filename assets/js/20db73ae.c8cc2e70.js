"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6637],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return t?r.createElement(h,o(o({ref:n},m),{},{components:t})):r.createElement(h,o({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7932:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],s={title:"Using MikroORM with AdminJS",sidebar_label:"Usage with AdminJS"},l=void 0,p={unversionedId:"usage-with-adminjs",id:"version-4.5/usage-with-adminjs",title:"Using MikroORM with AdminJS",description:"Installation",source:"@site/versioned_docs/version-4.5/usage-with-adminjs.md",sourceDirName:".",slug:"/usage-with-adminjs",permalink:"/docs/4.5/usage-with-adminjs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/usage-with-adminjs.md",tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1644174568,formattedLastUpdatedAt:"2/6/2022",frontMatter:{title:"Using MikroORM with AdminJS",sidebar_label:"Usage with AdminJS"},sidebar:"version-4.5/docs",previous:{title:"Usage with Babel",permalink:"/docs/4.5/usage-with-babel"},next:{title:"Using Entity Constructors",permalink:"/docs/4.5/entity-constructors"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"MikroORM + Express Plugin",id:"mikroorm--express-plugin",children:[],level:3},{value:"MikroORM + Hapi Plugin",id:"mikroorm--hapi-plugin",children:[],level:3}],level:2},{value:"Authentication",id:"authentication",children:[{value:"Express",id:"express",children:[],level:3},{value:"Hapi",id:"hapi",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To use MikroORM with AdminJS you need to install:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SoftwareBrothers/adminjs"},(0,i.kt)("inlineCode",{parentName:"a"},"AdminJS Core")),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add adminjs\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SoftwareBrothers/adminjs-mikroorm"},(0,i.kt)("inlineCode",{parentName:"a"},"MikroORM Adapter")),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @adminjs/mikroorm\n# A MikroORM driver and core package, choose the one which suits you:\n$ yarn add @mikro-orm/core @mikro-orm/mongodb     # for mongo\n$ yarn add @mikro-orm/core @mikro-orm/mysql       # for mysql\n$ yarn add @mikro-orm/core @mikro-orm/mariadb     # for mariadb\n$ yarn add @mikro-orm/core @mikro-orm/postgresql  # for postgresql\n$ yarn add @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"A plugin specific to your server's framework:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SoftwareBrothers/adminjs-expressjs"},(0,i.kt)("inlineCode",{parentName:"a"},"Express Plugin")),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @adminjs/express\n# Peer dependencies\n$ yarn add express express-formidable express-session\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SoftwareBrothers/adminjs-hapijs"},(0,i.kt)("inlineCode",{parentName:"a"},"Hapi Plugin")),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @adminjs/hapi\n# Peer dependencies\n$ yarn add @hapi/boom @hapi/cookie @hapi/hapi @hapi/inert\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Once the installation process is completed, we need to set up AdminJS endpoints and database connection.\nThe process is straightforward but differs based on which ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," you are using. Below you can find examples specific to supported frameworks:"),(0,i.kt)("h3",{id:"mikroorm--express-plugin"},"MikroORM + Express Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import AdminJS from 'adminjs';\nimport { Database, Resource } from '@adminjs/mikroorm';\nimport AdminJSExpress from '@adminjs/express';\nimport { MikroORM } from '@mikro-orm/core';\nimport { validate } from 'class-validator'; // optional\n\nconst PORT = process.env.PORT ?? 3000;\n\nconst run = async () => {\n  /* Initialize MikroORM like you would do normally, you can also import your MikroORM instance from a separate file */\n  const orm = await MikroORM.init({\n    entities: [User, Car, Seller], // use your own entities\n    dbName: process.env.DATABASE_NAME,\n    type: 'postgresql',\n    clientUrl: process.env.DATABASE_URL,\n  });\n\n  /* Optional: if you're using class-validator, assign it to Resource */\n  Resource.validate = validate;\n  /* Tell AdminJS which adapter to use */\n  AdminJS.registerAdapter({ Database, Resource });\n\n  const app = express();\n\n  /* Create AdminJS instance */\n  const admin = new AdminJS({\n    databases: [orm],\n  });\n\n  const router = AdminJSExpress.buildRouter(admin);\n\n  app.use(admin.options.rootPath, router);\n\n  app.listen(PORT, () => {\n    console.log(`App listening at http://localhost:${PORT}`);\n  });\n}\n\nrun();\n")),(0,i.kt)("h3",{id:"mikroorm--hapi-plugin"},"MikroORM + Hapi Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import AdminJS from 'adminjs';\nimport { Database, Resource } from '@adminjs/mikroorm';\nimport AdminJSHapi from '@adminjs/hapi';\nimport { MikroORM } from '@mikro-orm/core';\nimport { validate } from 'class-validator'; // optional\n\nconst PORT = process.env.PORT ?? 3000;\n\nconst run = async () => {\n  /* Initialize MikroORM like you would do normally, you can also import your MikroORM instance from a separate file */\n  const orm = await MikroORM.init({\n    entities: [User, Car, Seller], // use your own entities\n    dbName: process.env.DATABASE_NAME,\n    type: 'postgresql',\n    clientUrl: process.env.DATABASE_URL,\n  });\n\n  /* Optional: if you're using class-validator, assign it to Resource */\n  Resource.validate = validate;\n  /* Tell AdminJS which adapter to use */\n  AdminJS.registerAdapter({ Database, Resource });\n\n  const server = Hapi.server({ port: PORT })\n\n  /* Configure AdminJS */\n  const adminOptions = {\n    databases: [orm],\n  };\n\n  /* Register AdminJS as a Hapi server's plugin */\n  await server.register({\n    plugin: AdminJSHapi,\n    options: adminOptions,\n  });\n\n  await server.start();\n  console.log(`App listening at ${server.info.uri}`);\n}\n\nrun();\n")),(0,i.kt)("p",null,"You can start your server afterwards and the admin panel will be available at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:{PORT}/admin"),". If you followed the example setup thoroughly, you should be able to see all of your entities in the sidebar and you should be able to perform basic ",(0,i.kt)("strong",{parentName:"p"},"CRUD")," operations on them."),(0,i.kt)("p",null,"To further customize your AdminJS panel, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://adminjs.co/docs.html"},(0,i.kt)("inlineCode",{parentName:"a"},"official documentation")),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The examples above set up AdminJS with unauthenticated access. To require your users to authenticate before accessing the admin panel, some plugin-specific modifications are required:"),(0,i.kt)("h3",{id:"express"},"Express"),(0,i.kt)("p",null,"You need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminJSExpress.buildAuthenticatedRouter")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"AdminJS.buildRouter"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  const router = AdminJSExpress.buildRouter(admin);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"After"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const ADMIN_EMAIL = 'example@test.com';\nconst ADMIN_PASSWORD = 'password';\n\nconst router = AdminJSExpress.buildAuthenticatedRouter(admin, {\n  authenticate: async (email, password) => {\n    /* Your code for verifying email & password goes here */\n    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD\n      ? { email } // the function should return an object containg user's data if authenticated successfully\n      : null;\n  },\n  cookiePassword: process.env.COOKIE_PASSWORD ?? 'makesurepasswordissecure',\n});\n")),(0,i.kt)("h3",{id:"hapi"},"Hapi"),(0,i.kt)("p",null,"You need to simply add ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," property to AdminJS options."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const adminOptions = {\n  databases: [orm],\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"After"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const ADMIN_EMAIL = 'example@test.com';\nconst ADMIN_PASSWORD = 'password';\n\nconst adminOptions = {\n  databases: [orm],\n  auth: {\n    authenticate: async (email, password) => {\n      /* Your code for verifying email & password goes here */\n      return email === ADMIN_EMAIL && password === ADMIN_PASSWORD\n        ? { email } // the function should return an object containg user's data if authenticated successfully\n        : null;\n    },\n    strategy: 'session',\n    cookiePassword: process.env.COOKIE_PASSWORD ?? 'makesurepasswordissecure',\n    isSecure: false, // only https requests\n  },\n};\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"An example app using MikroORM with AdminJS can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SoftwareBrothers/adminjs-mikroorm/tree/master/example-app"},"here")))}d.isMDXComponent=!0}}]);