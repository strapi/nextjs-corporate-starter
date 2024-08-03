Getting started.

```
➜  backend git:(main) ✗ npx @strapi/upgrade@rc codemods run --project-path ./src/plugins/todo
```

```
➜  backend git:(main) ✗ npx @strapi/upgrade@rc codemods run --project-path ./src/plugins/todo
[WARN]  [2024-07-25T01:45:59.336Z] Please make sure you've created a backup of your codebase and files before running the codemods
? Choose the codemods you would like to run: ›
Instructions:
    ↑/↓: Highlight option
    ←/→/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer

Filtered results for: Enter something to filter

◉  (5.0.0) dependency remove strapi plugin i18n
◉  (5.0.0) dependency upgrade react router dom
◉  (5.0.0) dependency upgrade styled components
◉  (5.0.0) entity service document service
◉  (5.0.0) s3 keys wrapped in credentials
◉  (5.0.0) sqlite3 to better sqlite3
◉  (5.0.0) strapi public interface
◉  (5.0.0) use uid for config namespace
◉  (5.0.0) utils public interface
```

```
┌────┬─────────┬──────┬──────────────────────────────────────┬──────────┬───────────┬─────────────────────┐
│ N° │ Version │ Kind │ Name                                 │ Affected │ Unchanged │ Duration            │
├────┼─────────┼──────┼──────────────────────────────────────┼──────────┼───────────┼─────────────────────┤
│ 0  │ 5.0.0   │ json │ dependency remove strapi plugin i18n │ 0        │ 1         │ 0.195s (cold start) │
│ 1  │ 5.0.0   │ json │ dependency upgrade react router dom  │ 1        │ 0         │ 0.005s              │
│ 2  │ 5.0.0   │ json │ dependency upgrade styled components │ 1        │ 0         │ 0.003s              │
│ 3  │ 5.0.0   │ code │ entity service document service      │ 0        │ 0         │ 0.000s              │
│ 4  │ 5.0.0   │ code │ s3 keys wrapped in credentials       │ 0        │ 0         │ 0.000s              │
│ 5  │ 5.0.0   │ json │ sqlite3 to better sqlite3            │ 0        │ 1         │ 0.003s              │
│ 6  │ 5.0.0   │ code │ strapi public interface              │ 0        │ 0         │ 0.000s              │
│ 7  │ 5.0.0   │ code │ use uid for config namespace         │ 0        │ 0         │ 0.000s              │
│ 8  │ 5.0.0   │ code │ utils public interface               │ 0        │ 0         │ 0.000s              │
└────┴─────────┴──────┴──────────────────────────────────────┴──────────┴───────────┴─────────────────────┘

```

```
✔ Building build context (58ms)
⠋ Building admin panel
✖ Building admin panel
[ERROR]  There seems to be an unexpected error, try again with --debug for more information

┌────────────────────────────────────────────────────────────────────────────────────────────────┐│                                                                                                ││   RollupError: .strapi/client/app.js (7:7): "default" is not exported by                       ││   "src/plugins/todo/strapi-admin.js", imported by ".strapi/client/app.js".                     ││   file: /Users/paulbratslavsky/Desktop/migration/migration-test-example/backend/.strapi/clie   ││   nt/app.js:7:7                                                                                ││   5: import email from "@strapi/email/strapi-admin";                                           ││   6: import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";             ││   7: import todo from "../../src/plugins/todo/strapi-admin";                                   ││   ^                                                                                            ││   8: import { renderAdmin } from "@strapi/strapi/admin";                                       ││   at getRollupError (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/   ││   backend/node_modules/rollup/dist/es/shared/parseAst.js:392:41)                               ││   at error (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/backend/n   ││   ode_modules/rollup/dist/es/shared/parseAst.js:388:42)                                        ││   at Module.error (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/ba   ││   ckend/node_modules/rollup/dist/es/shared/node-entry.js:13886:16)                             ││   at Module.traceVariable (file:///Users/paulbratslavsky/Desktop/migration/migration-test-ex   ││   ample/backend/node_modules/rollup/dist/es/shared/node-entry.js:14334:29)                     ││   at ModuleScope.findVariable (file:///Users/paulbratslavsky/Desktop/migration/migration-tes   ││   t-example/backend/node_modules/rollup/dist/es/shared/node-entry.js:12038:39)                 ││   at Identifier.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example   ││   /backend/node_modules/rollup/dist/es/shared/node-entry.js:6932:40)                           ││   at Property.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/b   ││   ackend/node_modules/rollup/dist/es/shared/node-entry.js:4799:23)                             ││   at ObjectExpression.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-e   ││   xample/backend/node_modules/rollup/dist/es/shared/node-entry.js:4795:28)                     ││   at Property.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/b   ││   ackend/node_modules/rollup/dist/es/shared/node-entry.js:4799:23)                             ││   at ObjectExpression.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-e   ││   xample/backend/node_modules/rollup/dist/es/shared/node-entry.js:4795:28)                     ││                                                                                                │└────────────────────────────────────────────────────────────────────────────────────────────────┘
error Command failed with exit code 1.
```

Error do to incorrect exports

old:

```
'use strict';
module.exports = require('./admin/src').default;
```

should be this:

```
import admin from './admin/src';
export default admin;
```

The next issue I was referencing was the "@strapi/helper-plugin," which has been deprecated.

Here is the resources needed to see what has changed

https://github.com/strapi/strapi/blob/v5/main/HELPER_PLUGIN_MIGRATION_GUIDE.md

```
prefixPluginTranslations

This util has been removed and not replaced. If you feel like you need this util, please open an issue on the Strapi repository to discuss your usecase.
```

if you need to use it still, you can use this function directly

```


const prefixPluginTranslations = (trad, pluginId) => {
	if (!pluginId) {
		throw new TypeError("pluginId can't be empty");
	}

	return Object.keys(trad).reduce((acc, current) => {
		acc[`${pluginId}.${current}`] = trad[current];
		return acc;
	}, {});
};


export { prefixPluginTranslations };
```

```
import { NotFound } from '@strapi/helper-plugin';
```

NotFound does not exist

Use Custom Component

```
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
```

````
### LoadingIndicatorPage

[](https://github.com/strapi/strapi/blob/v5/main/HELPER_PLUGIN_MIGRATION_GUIDE.md#loadingindicatorpage)

This component has been removed and refactored to be part of the `Page` component exported from `@strapi/strapi/admin`. You should use the `Page` component from there:

```tsx
// Before
import { LoadingIndicatorPage } from '@strapi/helper-plugin';

// After
import { Page } from '@strapi/strapi/admin';

const MyPage = () => {
  // ...

  if (isLoading) {
    return <Page.Loading />;
  }

  // ...
};
````

```

If your plugin so old, rename all js files to jsx extension

Design system change

```

import Brush from '@strapi/icons/Brush';

```

to

```

import { Brush } from "@strapi/icons";

```

import { EmptyStateLayout } from "@strapi/design-system";
```

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";

DATA fetching

super old way. - import { request } from "@strapi/helper-plugin";

```
import { request } from "@strapi/helper-plugin";



const todoRequests = {
	getTodoCount: async () => {
		return await request(`/todo/count`, {
		method: "GET",
		});
	},


	addTodo: async (data) => {
		return await request(`/todo/create`, {
			method: "POST",
			body: { data: data },
		});
	},


	getAllTodos: async () => {
		return await request(`/todo/find`, {
			method: "GET",
		});
	},



	toggleTodo: async (id) => {
		return await request(`/todo/toggle/${id}`, {
			method: "PUT",
		});
	},


	editTodo: async (id, data) => {
		return await request(`/todo/update/${id}`, {
			method: "PUT",
			body: { data: data },
		});
	},


	deleteTodo: async (id) => {
		return await request(`/todo/delete/${id}`, {
			method: "DELETE",
		});
	}
};



export default todoRequests;
```

Instead you should use

import { useFetchClient } from "@strapi/strapi/admin";

```
const { get, put, del, post } = useFetchClient();


```

```jsx

Getting started.

```

➜ backend git:(main) ✗ npx @strapi/upgrade@rc codemods run --project-path ./src/plugins/todo

```

```

➜ backend git:(main) ✗ npx @strapi/upgrade@rc codemods run --project-path ./src/plugins/todo
[WARN] [2024-07-25T01:45:59.336Z] Please make sure you've created a backup of your codebase and files before running the codemods
? Choose the codemods you would like to run: ›  
Instructions:
↑/↓: Highlight option
←/→/[space]: Toggle selection
[a,b,c]/delete: Filter choices
enter/return: Complete answer

Filtered results for: Enter something to filter

◉ (5.0.0) dependency remove strapi plugin i18n
◉ (5.0.0) dependency upgrade react router dom
◉ (5.0.0) dependency upgrade styled components
◉ (5.0.0) entity service document service
◉ (5.0.0) s3 keys wrapped in credentials
◉ (5.0.0) sqlite3 to better sqlite3
◉ (5.0.0) strapi public interface
◉ (5.0.0) use uid for config namespace
◉ (5.0.0) utils public interface

```

```

┌────┬─────────┬──────┬──────────────────────────────────────┬──────────┬───────────┬─────────────────────┐
│ N° │ Version │ Kind │ Name │ Affected │ Unchanged │ Duration │
├────┼─────────┼──────┼──────────────────────────────────────┼──────────┼───────────┼─────────────────────┤
│ 0 │ 5.0.0 │ json │ dependency remove strapi plugin i18n │ 0 │ 1 │ 0.195s (cold start) │
│ 1 │ 5.0.0 │ json │ dependency upgrade react router dom │ 1 │ 0 │ 0.005s │
│ 2 │ 5.0.0 │ json │ dependency upgrade styled components │ 1 │ 0 │ 0.003s │
│ 3 │ 5.0.0 │ code │ entity service document service │ 0 │ 0 │ 0.000s │
│ 4 │ 5.0.0 │ code │ s3 keys wrapped in credentials │ 0 │ 0 │ 0.000s │
│ 5 │ 5.0.0 │ json │ sqlite3 to better sqlite3 │ 0 │ 1 │ 0.003s │
│ 6 │ 5.0.0 │ code │ strapi public interface │ 0 │ 0 │ 0.000s │
│ 7 │ 5.0.0 │ code │ use uid for config namespace │ 0 │ 0 │ 0.000s │
│ 8 │ 5.0.0 │ code │ utils public interface │ 0 │ 0 │ 0.000s │
└────┴─────────┴──────┴──────────────────────────────────────┴──────────┴───────────┴─────────────────────┘

```


```

✔ Building build context (58ms)
⠋ Building admin panel
✖ Building admin panel
[ERROR] There seems to be an unexpected error, try again with --debug for more information

┌────────────────────────────────────────────────────────────────────────────────────────────────┐│ ││ RollupError: .strapi/client/app.js (7:7): "default" is not exported by ││ "src/plugins/todo/strapi-admin.js", imported by ".strapi/client/app.js". ││ file: /Users/paulbratslavsky/Desktop/migration/migration-test-example/backend/.strapi/clie ││ nt/app.js:7:7 ││ 5: import email from "@strapi/email/strapi-admin"; ││ 6: import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin"; ││ 7: import todo from "../../src/plugins/todo/strapi-admin"; ││ ^ ││ 8: import { renderAdmin } from "@strapi/strapi/admin"; ││ at getRollupError (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/ ││ backend/node_modules/rollup/dist/es/shared/parseAst.js:392:41) ││ at error (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/backend/n ││ ode_modules/rollup/dist/es/shared/parseAst.js:388:42) ││ at Module.error (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/ba ││ ckend/node_modules/rollup/dist/es/shared/node-entry.js:13886:16) ││ at Module.traceVariable (file:///Users/paulbratslavsky/Desktop/migration/migration-test-ex ││ ample/backend/node_modules/rollup/dist/es/shared/node-entry.js:14334:29) ││ at ModuleScope.findVariable (file:///Users/paulbratslavsky/Desktop/migration/migration-tes ││ t-example/backend/node_modules/rollup/dist/es/shared/node-entry.js:12038:39) ││ at Identifier.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example ││ /backend/node_modules/rollup/dist/es/shared/node-entry.js:6932:40) ││ at Property.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/b ││ ackend/node_modules/rollup/dist/es/shared/node-entry.js:4799:23) ││ at ObjectExpression.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-e ││ xample/backend/node_modules/rollup/dist/es/shared/node-entry.js:4795:28) ││ at Property.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-example/b ││ ackend/node_modules/rollup/dist/es/shared/node-entry.js:4799:23) ││ at ObjectExpression.bind (file:///Users/paulbratslavsky/Desktop/migration/migration-test-e ││ xample/backend/node_modules/rollup/dist/es/shared/node-entry.js:4795:28) ││ │└────────────────────────────────────────────────────────────────────────────────────────────────┘
error Command failed with exit code 1.

```


Error do to incorrect exports

old:

```

'use strict';
module.exports = require('./admin/src').default;

```

should be this:

```

import admin from './admin/src';
export default admin;

```

The next issue I was referencing was the "@strapi/helper-plugin," which has been deprecated.

Here is the resources needed to see what has changed

https://github.com/strapi/strapi/blob/v5/main/HELPER_PLUGIN_MIGRATION_GUIDE.md

```

prefixPluginTranslations

This util has been removed and not replaced. If you feel like you need this util, please open an issue on the Strapi repository to discuss your usecase.

```

if you need to use it still, you can use this function directly

```

const prefixPluginTranslations = (trad, pluginId) => {
if (!pluginId) {
throw new TypeError("pluginId can't be empty");
}

    return Object.keys(trad).reduce((acc, current) => {
    	acc[`${pluginId}.${current}`] = trad[current];
    	return acc;
    }, {});

};

export { prefixPluginTranslations };

```


```

import { NotFound } from '@strapi/helper-plugin';

```

NotFound does not exist

Use Custom Component

```

import { LoadingIndicatorPage } from "@strapi/helper-plugin";

```

```

### LoadingIndicatorPage

[](https://github.com/strapi/strapi/blob/v5/main/HELPER_PLUGIN_MIGRATION_GUIDE.md#loadingindicatorpage)

This component has been removed and refactored to be part of the `Page` component exported from `@strapi/strapi/admin`. You should use the `Page` component from there:

```tsx
// Before
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

// After
import { Page } from "@strapi/strapi/admin";

const MyPage = () => {
  // ...

  if (isLoading) {
    return <Page.Loading />;
  }

  // ...
};
```

```

If your plugin so old, rename all js files to jsx extension

Design system change

```

import Brush from '@strapi/icons/Brush';

```

to

```

import { Brush } from "@strapi/icons";

```

import { EmptyStateLayout } from "@strapi/design-system";
```

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";

DATA fetching

super old way. - import { request } from "@strapi/helper-plugin";

```
import { request } from "@strapi/helper-plugin";



const todoRequests = {
	getTodoCount: async () => {
		return await request(`/todo/count`, {
		method: "GET",
		});
	},


	addTodo: async (data) => {
		return await request(`/todo/create`, {
			method: "POST",
			body: { data: data },
		});
	},


	getAllTodos: async () => {
		return await request(`/todo/find`, {
			method: "GET",
		});
	},



	toggleTodo: async (id) => {
		return await request(`/todo/toggle/${id}`, {
			method: "PUT",
		});
	},


	editTodo: async (id, data) => {
		return await request(`/todo/update/${id}`, {
			method: "PUT",
			body: { data: data },
		});
	},


	deleteTodo: async (id) => {
		return await request(`/todo/delete/${id}`, {
			method: "DELETE",
		});
	}
};



export default todoRequests;
```

Instead you should use

import { useFetchClient } from "@strapi/strapi/admin";

``` jsx
const { get, put, del, post } = useFetchClient();


 const handleAddTodo = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!value) {
      setErrorMessage("Todo text is required");
      return;
    }

    try {
      const response = await post("/todo/create", { data: { name: value } });
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }

    setValue("");
    setErrorMessage("");
    setOpen(false);
  };

  const handleDeleteTodo = async (data) => {
    const confirmation = confirm(
      "Are you sure you want to delete this todo? " + data.name
    );

    if (confirmation === false) return;

    try {
      const response = await del(`/todo/delete/${data.documentId}`);
      console.log(response, "response");
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleTodo = async (documentId) => {
    try {
      const response = await put(`/todo/toggle/${documentId}`);
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTodo = async (documentId, data) => {
    try {
      const response = await put(`/todo/update/${documentId}`, data);
      console.log(response, "response");
      if (!response) setErrorMessage("Something went wrong");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

```


``` bash
┌────┬─────────┬──────┬──────────────────────────────────────┬──────────┬───────────┬─────────────────────┐
│ N° │ Version │ Kind │ Name                                 │ Affected │ Unchanged │ Duration            │
├────┼─────────┼──────┼──────────────────────────────────────┼──────────┼───────────┼─────────────────────┤
│ 0  │ 5.0.0   │ json │ dependency remove strapi plugin i18n │ 0        │ 1         │ 0.195s (cold start) │
│ 1  │ 5.0.0   │ json │ dependency upgrade react router dom  │ 1        │ 0         │ 0.005s              │
│ 2  │ 5.0.0   │ json │ dependency upgrade styled components │ 1        │ 0         │ 0.003s              │
│ 3  │ 5.0.0   │ code │ entity service document service      │ 1        │ 0         │ 0.185s              │
│ 4  │ 5.0.0   │ code │ s3 keys wrapped in credentials       │ 0        │ 0         │ 0.000s              │
│ 5  │ 5.0.0   │ json │ sqlite3 to better sqlite3            │ 0        │ 1         │ 0.003s              │
│ 6  │ 5.0.0   │ code │ strapi public interface              │ 0        │ 0         │ 0.000s              │
│ 7  │ 5.0.0   │ code │ use uid for config namespace          │ 0        │ 0         │ 0.000s              │
│ 8  │ 5.0.0   │ code │ utils public interface               │ 0        │ 0         │ 0.000s              │
└────┴─────────┴──────┴──────────────────────────────────────┴──────────┴───────────┴─────────────────────┘


```