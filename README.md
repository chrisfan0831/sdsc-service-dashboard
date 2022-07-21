# Important!
This development environment is built by "Create React App" (https://create-react-app.dev/)

Please ensure you have Node.js and NPM installed on your machine. You can check them by running <code>node -v</code> and <code>npm -v</code> in your command line.

To run the app on you local, navigate to this app's folder in command line and run <code>npm start</code>.

## File Structure:
* **public**
  * index.html (root)
* **src**
  * **components** 
    * React components
  * **styles**
    * Style sheets for components
  * **recources**
    * external components (e.g images) 
  * **data**
    * arbitrary data for testing functionalities
* **App.js:** 'App' component that takes in other compoennets
* **App.css:** Style sheet for the 'App' component
* **index.js:** Render the 'App' component to html root

## File Path:
The root of path is setted as 'src' for convenience, and every files's path should be relative to the root. 
* Thus, path from an outer-level file in src (e.g App.js) to other inner-level files (e.g components/Header.js) is <code>./components/Header.js</code>.
* Path from one inner-level file (e.g components/Header.js) to aother inner-level file (e.g resources/avatar.png) is <code>../resources/avatar.png</code>.
