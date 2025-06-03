# Convoviewer for COPA

<img width="878" alt="Screen Shot 2025-06-02 at 10 53 52 PM" src="https://github.com/user-attachments/assets/7574397d-05ab-456e-b834-154cdfd8a1e4" />

## Requirements

[Node](https://nodejs.org/en) 20 or greater.

## Getting Started

This app is solely for viewing conversations corresponding to [COPA (Code Paraphraser)](https://walkthrough-gpt.vercel.app/). Setup instructions are available in the repository README.
Once complete, the following steps are necessary to support viewing conversations:
1. The same [Firebase](https://firebase.google.com/) project will need to be linked to this app. Another DB service can be integrated but must be the same as COPA.
    - To integrate the database with Firebase, paste the corresponding Firebase config for COPA into src/firebase.js.
    - The app can then be run locally using the instructions below, and conversations will be displayed in a more navigatable and readable format than on Firebase.

To run the app locally, run:

```
npm install
```

```
npm run start
```

Further instructions are below under Usage. 

## Contact

For any questions, please contact:

Zain Jerath - zainjerath@gmail.com

Chris Riesbeck - c-riesbeck@northwestern.edu.

## Usage

```
mkdir your-app-name
cd your-app-name
npx degit criesbeck/react-vitest
npm install
```
If the third step hangs after printing ``> cloned criesbeck/react-vitest#HEAD``, 
just control-C to exit then run ``npm install``.

## Test

Verify that the initial app works. Run

```
npm start
```

and open the URL displayed.

Verify that the unit tests work with

```
npm test
```

Two tests should run and pass. 

## Scripts

**package.json** defines the following scripts:

| Script           | Description                                         |
| -----------------| --------------------------------------------------- |
| npm start        | Runs the app in the development mode.               |
| npm run dev      | Runs the app in the development mode.               |
| npm run build    | Builds the app for production to the `dist` folder. |
| npm run serve    | Serves the production build from the `dist` folder. |
| npm test         | Starts a Jest-like test loop                        |
| npm run coverage | Runs the tests, displays code coverage results      |


## Git

If everything is working, set up [your local and remote repositories](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## Folder Structure

```
your-app-name
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Credits

React-Vitest built and maintained by [Chris Riesbeck](https://github.com/criesbeck).

Inspired by [SafdarJamal/vite-template-react](https://github.com/SafdarJamal/vite-template-react).
Expanded to include Vitest and some sample tests.

Thanks to Rich Harris for [degit](https://www.npmjs.com/package/degit).

Gitignore file created with [the Toptal tool](https://www.toptal.com/developers/gitignore/api/react,firebase,visualstudiocode,macos,windows).


## License

This project is licensed under the terms of the [MIT license](./LICENSE).
