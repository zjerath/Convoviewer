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

To run the app locally after setting up Firebase, do the following:

1. Navigate to the directory where you want the project:

```
cd path/to/your/projects
```

2. Clone the repository:

```
git clone https://github.com/zjerath/Convoviewer.git
```

3. Follow steps for pasting the correct Firebase config in the instructions above if not already completed.

4. Navigate into the project:

```
cd Convoviewer
```

5. Install dependencies:

```
npm install
```

6. Then:

```
npm run dev
```

Further scripts are provided below.

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

## Contact

For any questions, please contact:

Zain Jerath - zainjerath@gmail.com

Chris Riesbeck - c-riesbeck@northwestern.edu.
