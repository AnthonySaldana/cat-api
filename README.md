Once you've cloned this repo, navigate to it inside a terminal and run
### `npm install`

Once done, you can spin up a local server by running

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

I am faking authentication for the purposes of this test. On login, I do everything that is expected up until actually calling a service for a token, For the purposes of this test I just check if the username is one in our list and then authenticate the client until they logout.

I hardcoded some users into the system, you can use the usernames admin, motor, or cat to login.
