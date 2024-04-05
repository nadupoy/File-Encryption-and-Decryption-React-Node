# File Encryption and Decryption (React, Node):

## Table of Contents:

- [Introduction](#introduction)
- [What I Learnt](#what-i-learnt)
  - [Setting up Client - Server Architecture](#setting-up-client---server-architecture)
  - [CORS Errors](#cors-errors)
- [Further Study](#further-study)

## Introduction:

- A file encryption and decryption app that is a follow up to [this](https://github.com/nadupoy/File-Encryption-and-Decryption-HTML-CSS-JavaScript) previous rendition.

- Tools and technologies used are:
  - [Vite](https://vitejs.dev/)
  - [React](https://react.dev/)
  - [Node](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)

## What I Learnt:

### Setting up Client - Server Architecture:

- This is my first time working on a full-stack application in React and Node.js.
  I guess I can call my self a full-stack developer now (jk). 😎

- I found [this](https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js#project_setup)
  article to be a simple and helpful introduction to integrating the client and
  server side of an application and transferring data between the frontend and backend.

### CORS Errors:

- While trying to send input data for calculation from the front-end to the back-end, the following event handler produced an error in the console:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();

  // const input = document.getElementsByTagName('form')[0].value;
  const data = "Hello World";
  const serializedBody = JSON.stringify(data);
  const fetchOptions = {
    method: "POST",
    body: serializedBody,
  };

  fetch("http://localhost/8080", fetchOptions);
};
```

- This is the error message produced in the browser console:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost/8080. (Reason: CORS request did not succeed). Status code: (null).

Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.
```

- A solution is provided here in [this](https://stackoverflow.com/questions/67525595/cross-origin-request-blocked-the-same-origin-policy-disallows-reading-the-remot) Stack Overflow Question.

  It seems to be an issue on the Firefox browser. Unfortunately I was unable
  to get the above solution to work as Firefox couldn't make an exception for
  the server API address I was using i.e. http://localhost/8080.

## Further Study:

- Below are subjects and concepts that I have added to my learning list after
  working on this project. I have also included some introductory resources:
  - Cross-Origin Resource Sharing (CORS): [auth0.com](https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/)
  - [Axios](https://axios-http.com/docs/intro)
  - [Express](https://expressjs.com/en/starter/installing.html)
  - JavaScript's Fetch API: [javascript.info](https://javascript.info/fetch)
