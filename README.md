Use these commands to spin up a local server and run this app

## Local Server

On a terminal in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

I am faking authentication for the purposes of this test. On login, I do everything that is expected up until actually calling a service for a token, For the purposes of this test I just check if the username is one in our list and then authenticate the client until they logout.

I hardcoded some users into the system, you can use the usernames admin, motor, or cat to login.