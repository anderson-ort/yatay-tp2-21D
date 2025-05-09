import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

const ROOT_DIR = 'root-project-parcialito';

const folders = [
  'src/db',
  'src/config',
  'src/routes',
  'src/controllers',
  'src/services',
  'src/models',
  'src/repositories',
  'src/middlewares',
  'src/utils'
];

const packageJsonContent = {
  name: "root-project-parcialito",
  type: "module",
  version: "1.0.0",
  main: "app.js",
  scripts: {
    start: "node app.js"
  },
  dependencies: {
    express: "^4.18.2",
    dotenv: "^16.3.1"
  }
};

const appJsContent = `import express from 'express';

const app = express();


app.listen(PORT, () => {
});
`;

const appJsContent = `
node_modules
.env
`;




// Main function
async function createStructure() {
  try {
    // Create root folder
    await mkdir(ROOT_DIR, { recursive: true });

    // Create subfolders with .gitkeep
    for (const folder of folders) {
      const fullPath = path.join(ROOT_DIR, folder);
      await mkdir(fullPath, { recursive: true });
      await writeFile(path.join(fullPath, '.gitkeep'), '');
    }

    const packageJsonPath = path.join(ROOT_DIR, 'package.json');
    await writeFile(packageJsonPath, JSON.stringify(packageJsonContent, null, 2));

    const envPath = path.join(ROOT_DIR, '.env');
    await writeFile(envPath, 'PORT=3000\n');

    const appJsPath = path.join(ROOT_DIR, 'app.js');
    await writeFile(appJsPath, appJsContent);

    const appJsPath = path.join(ROOT_DIR, '.gitignore');
    await writeFile(appJsPath, gitIgnoreContent);

    console.log('✅ Project structure and files created successfully!');
    console.log('📦 To install dependencies, run:');
    console.log(`   cd ${ROOT_DIR} && npm install`);
  } catch (err) {
    console.error('❌ Error creating structure:', err);
  }
}

createStructure();
