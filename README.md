# not-create-react-electron-app
Script to create an Electron app with TypeScript and React (but without all the `create-react-app` scripts)

## How
In an empty directory, run:

```
npx not-create-react-electron-app <name>
```

## Structure
```
./
├─ node_modules/
├─ config/
│  ├─ electron-builder.json
│  ├─ electron-webpack.js
│  ├─ react-webpack.js
│  ├─ tsconfig.json
├─ src/
│  ├─ electron.preload.ts
│  ├─ electron.ts
│  ├─ index.html
│  ├─ react.tsx
├─ .gitignore
├─ package.json
```

## Scripts
* `dev`: compiles both Electron and React, then launches an Electron window (that updates on React changes) with a developer tools popout (which includes React dev tools)
* `build`: compiles both Electron and React for production
* `dist-*`: compiles the application for the specified operating system (see your `package.json`)