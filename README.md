# got-showcase

This project contains an angular application. This application display all houses of Game of Thrones in an overview 
to the user. By clicking on one house there are further information on a details page.

# Start and run application

**Local web server:**

**Important** - Node.js and npm has to be installed on the running machine

**Angular is installed:** 

1. If Angular is installed run `ng build`, within the app source folder, to build the project
3. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
4. Copy all files within the `dist/`folder to a local directory
6. Run `npx http-serve` in the local directory
7. Navigate to `http://localhost:8080/`

**Without angular installed:**

1. Go to the `/release` folder within this repo and copy the resource to a local folder.
2. Run `npx http-serve` in the local directory
3. Navigate to `http://localhost:8080/`

**Run angular application in dev mode:**

1. Run `ng serve`, within the app source folder, for a dev server. 
2. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# APIs and Resources

Game Of Thrones API
https://anapioficeandfire.com/

Source of all picture resources within the app
https://awoiaf.westeros.org/index.php/List_of_houses

# License 
This is licensed by the MIT license - for details see: [License](https://opensource.org/licenses/MIT)



