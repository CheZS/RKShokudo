/*
 * Create a context for all tests files below the test folder and all sub-folders.
 */
var context = require.context('./test', true, /\.spec\.js$/);

/*
 * For each file, call the context function that will require the file and load it up here.
 */
context.keys().forEach(context);
