
```
homes
├─ .gitignore
├─ backend
│  ├─ knexfile.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ app.js
│     ├─ db
│     │  ├─ connection.js
│     │  ├─ migrations
│     │  │  ├─ 20231129115259_homes.js
│     │  │  └─ 20231129161620_realtors.js
│     │  └─ seeds
│     │     ├─ realtors.js
│     │     └─ seed_homes.js
│     ├─ errors
│     │  ├─ asyncErrorBoundary.js
│     │  ├─ errorHandler.js
│     │  ├─ methodNotAllowed.js
│     │  └─ notFound.js
│     ├─ homes
│     │  ├─ homes.controller.js
│     │  ├─ homes.router.js
│     │  └─ homes.service.js
│     └─ server.js
├─ frontend
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ index.html
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.js
│  │  ├─ components
│  │  │  ├─ AddHomeForm.js
│  │  │  ├─ HomeDetails.js
│  │  │  ├─ HomeList.js
│  │  │  └─ SortHomes.js
│  │  ├─ data
│  │  │  └─ homes.json
│  │  ├─ index.css
│  │  ├─ index.js
│  │  └─ utils
│  │     └─ api.js
│  └─ __tests__
│     ├─ AddHomeForm.test.js
│     ├─ HomeDetails.test.js
│     ├─ HomeList.test.js
│     └─ SortHomes.test.js
└─ README.md

```