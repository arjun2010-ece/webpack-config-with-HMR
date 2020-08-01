# webpack-config-with-HMR


This is a working version with bundle.js file as output file.

Still need to create fully functional webpack configs in other versions.

One thing to note here is that ​ webpack-dev-server​ never outputs the bundle on the
hard disk but it serves it straight from memory.


mini-css-extract-plugin should be used only in production build and not on development build otherwise you will loose reloading of dev server.

===================
for setting up testing in webpack
+++++++++++++++++++++++++++++++++++
npm i jest enzyme babel-jest enzyme-adapter-react-16 react-test-renderer
npm installl core-js

in .babelrc file add these::
 [
      "@babel/preset-env",
      {
        "corejs": {
          "version": 3,
          "proposals": true
       }
      }
      ],
and in jest.config.js and in enzyme.config.js add the contents mentioned.

add in package.json scripts::

"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage --colors",
========================================================================
https://www.freecodecamp.org/news/how-to-set-up-jest-enzyme-like-a-boss-8455a2bc6d56/
============================================

With webpack either we can have jest and enzyme or react-testing library.

for setting up react-testing library in webpack::
++++++++++++++++++++++++++++++++++++++++++++++++

in the jest.config.js file::
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
};

in the setUpTests.js file add the following::

import '@testing-library/jest-dom/extend-expect';


and we can start using with only "npm run test" cmd.


NOTEEEEE::
just observe that for using enzyme, particularly jest.config.js configuration file content is different
same for testing library.(check the commented out code.).





