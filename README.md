# Posterr

Posterr a new social media application called Posterr. Posterr is very similar to Twitter, but it has far fewer features

# Steps for running the project locally:

First and foremost, those are the steps for running the project locally:

- You need to have the package [JSON-SERVER](https://www.npmjs.com/package/json-server) installed globally
- From the root go to the folder **/api** and run `json-server mock.json`
- Let a terminal running the Api Mock referred above
- Install the dependencies
- Now just run the command `serve` with npm or yarn

# Technologies and packages utilized:

- Vue.js `@3.2.31`
- Vue Router `@4.0.3`
- SCSS
- Axios
- Moment

# Planning:

Product Manager questions about the implementation of the new mentioning feature

- Will have a limit of mentionings a user can do in a Post?
- Will the user be able to disable mentioning his username?
- The last-mentioned users will appear first and order alphabetically as soon as the user starts typing "@"?

How this feature could be achieved?

First of all it needs to have a listener for the "@" character, and as soon as is typed
it needs to fetch users and match the one with the username typed, using a regular expression
The next part would be shown for the mentioned user a notification since it's a real-time feature
The best way to achieve this would be using WebSockets. The biggest concern that this feature brings up
is the performance for sure, because the requests made to search the users could be very demanding for the server.

# Critique

What could have been improved with more time?

A lot!

- The componentization could have gone further
- It could have been implemented Server-Side Rendering
- Unit Tests could have been written since the project is prepared for that

Those are all things that would help the project to have better maintainability and better scaling
