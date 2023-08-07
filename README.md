## GIF Image Storage App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## About the App
This Angular application allows users to store and manage their collection of GIF images conveniently. The app provides a user-friendly interface with two components, enabling users to search for GIFs using the Giphy API and add them to their collection. Users can also search for and sort their saved GIFs by name, date added, or custom sorting through drag and drop. Additionally, they have the option to download the GIFs as files. The app ensures that the state is preserved even if the page is reloaded, as the images are stored locally in the browser's local storage.

### Components
1. Search and Add Component
This component provides users with text input to search for GIFs using the public Giphy API. Upon entering search terms, the app displays the relevant GIFs in the search results. Users can then select their desired GIF and add it to their collection by providing a name for the GIF. Adding images to the user's store can be done through a button or any other intuitive method.

2. User's GIF Collection Component
The User's GIF Collection component displays the GIF images added by the user to their collection. Users can search for specific GIFs in their collection by name and apply sorting options, such as sorting by date added or custom sorting via drag and drop. Additionally, users have the option to download the GIFs, saving them as files.

### UI/UX Design and CSS
The app's user interface and user experience are designed to be intuitive and user-friendly. The components are visually appealing, and the layout ensures seamless navigation and interaction. The design incorporates CSS styling to enhance the app's aesthetics and provide a consistent and engaging user experience.

### Local Storage
To store the GIF images locally, the app utilizes the browser's local storage feature. Each GIF image is stored with its name and URL, allowing easy retrieval and display within the User's GIF Collection component.

### Technologies Used
The app is built using Angular, taking advantage of its robust features for creating dynamic web applications. To fetch GIFs from the Giphy API, the app leverages HTTP requests. Additionally, the app utilizes various libraries and tools from the Angular ecosystem and other open-source resources available on the internet to enhance its functionality and improve the user experience.

Happy coding! 😊 👍
