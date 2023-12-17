```
homes
├─ backend
│  ├─ .env
│  ├─ knexfile.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ app.js
│     ├─ db
│     │  ├─ connection.js
│     │  ├─ migrations
│     │  │  ├─ 20231129115258_realtors.js
│     │  │  └─ 20231129115259_homes.js
│     │  └─ seeds
│     │     ├─ 01_realtors.js
│     │     └─ 02_homes.js
│     ├─ errors
│     │  ├─ asyncErrorBoundary.js
│     │  ├─ errorHandler.js
│     │  ├─ methodNotAllowed.js
│     │  └─ notFound.js
│     ├─ homes
│     │  ├─ homes.controller.js
│     │  ├─ homes.router.js
│     │  └─ homes.service.js
│     ├─ realtors
│     │  ├─ realtors.controller.js
│     │  ├─ realtors.router.js
│     │  └─ realtors.service.js
│     └─ server.js
├─ frontend
│  ├─ build
│  │  ├─ asset-manifest.json
│  │  ├─ index.html
│  │  └─ static
│  │     └─ js
│  │        ├─ main.f655c322.js
│  │        ├─ main.f655c322.js.LICENSE.txt
│  │        └─ main.f655c322.js.map
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