# webpack-config-with-HMR


This is a working version with bundle.js file as output file.

Still need to create fully functional webpack configs in other versions.

One thing to note here is that ​ webpack-dev-server​ never outputs the bundle on the
hard disk but it serves it straight from memory.


mini-css-extract-plugin should be used only in production build and not on development build otherwise you will loose reloading of dev server.

