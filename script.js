// In here, we've used the 'detect.js' Javascript library to detect the device, OS &
// browser of the client who'll making a request to the servers. It has been used since we
// need to make some changes to HTML pages being served depending upon the user device's platform.
// For instance, in our use case - (is it an Android device or an iOS device).
// If you wish to further read the documentation, you may access it from here - https://github.com/darcyclarke/Detect.jsf

// Here below:
// 1. We first downloaded the 'detect.js' Javascript library using 'npm i detect.js' command.
// 2. We used the 'require' function to get (import) that module (whatever that module exports) and storing that in the variable 'detect'. Now, we've access to the entire 'detect.js' library just through the variable we stored it in.
// let detect = require(["detect"]);

// The Navigator.userAgent read-only property returns the user agent string for the current browser.
const userAgent = detect.parse(navigator.userAgent);

// Creating a variable for our button
const button = document.querySelector("#mainButton");

// Creating a variable for accessing our paragraph tag
const paragraph = document.querySelector("p");

// This below will result into a null value if you use a browser (Desktop is what being talked about in here) to run this website and not some device - Android or say iOS device.
console.log(userAgent.device);

// This below will tall you about the browser being used to open this website.
console.log(userAgent.browser.family);

// Writing a conditional for what happens if the user open the Website on an iphone

if (userAgent.device.family == "iPhone") {
  paragraph.textContent = "This site has been opened using an iphone!";
} else if (userAgent.device.family == "android") {
  paragraph.textContent = "This site has been opened using an Android device!";
} else {
  paragraph.textContent =
    "You can only run this application on a browser using your Mobile Device. We're really sorry for the incovenience caused.";
}
