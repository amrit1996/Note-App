# Note-App
### Library needs to install
* npm init
* chalk
* yargs
* fs(File System)
#### What library works
* npm init is basically create a package.json file in this application.
* chalk library used for showing the ouptput message in the colored format.
   Example:- If the output is in the success message the green color will be shown using this library or any color you want to    show.
* Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
   npm i yargs
   or
   npm i yargs@15.1.0
* fs(File System) is a inbuilt lirary in node.js.
### Commands to run the Note Application
* To create note:
* node app.js add --title="title" --body="body"
* Remove Note:
* node app.js remove --title="title"
* List Note:
* node app.js list - This command will show all list of the note app.
* Read Note:
* node app.js read --title="title"
* This read command will read the specified data that are given by user.

 
