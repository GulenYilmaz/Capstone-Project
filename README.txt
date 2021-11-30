information about my project

I'm A Meme
Purpose
This web app is a simple and easy to use social media content generation platform. It's aimed at those who wish to create their own funny or unique meme's, but do not have access, ability or time > to use photo editing software. This app eliminates the need to have to learn how to use eve paint in order to make new memes.

Languages
Main languages used include: HTML, CSS and Javascript

Main Features
Images can be uploaded from a device or a link to the URL. To upload an image, simply click on the “Browse”/”Choose File” button. For an online image, copy the image URL and paste it into the text area under the Choose Image header, and then click submit.

Adding text to your desired image is equally simple. The top text input field, labeled as such, will insert a sentence at the top of the image. The bottom input field will add a sentence to the bottom of the image. Either field can be used, or both at the same time. The only caveat is that since absolute positioning is used to place the image on the screen, text cannot be added first. An alert box will pop up if text is being added without an image added first. However, the text fields will not clear, so that no retyping is necessary when the image is finally loaded to the screen. The only other limitation is that text wrapping on the text is not available, so a limit of 39 characters is applied to both the top and bottom text input fields. To add the chosen text to the image, just hit the submit button under the text heading.

If after submitting the text you decide you would like to edit it, click the Reset Text button displayed either to the right or bottom of the image (position may vary depending on the device used to interact with the app). If you decide you don’t want to use the selected image after all, click the Clear All button to reset the canvas. When you’re happy with your chosen design, the Download button will download a hard copy your image as a PNG file. From there, you can share your new photo on any social media platform of your choosing.

Dependencies
The back-end server makes use of Express and CORS

Axios is used for front end DOM manipulation

One of the main alternative tools use to build out this project is html2canvas. This module was added to support the download feature in the app. Unlike a typical screenshot, the html2canvas does not capture the screen, but instead recreates the elements found in the DOM. This unique tool allows the program to capture just the information contained in the specified area of the DOM and export it to the user. The default settings in html2canvas do not support exporting of images that are not from the same source. According to the creators, it taints the canvas. However, the settings can be configured to allow taint so that any image can be imported and subsequently exported.

Links
Check out the demo on YouTube

Visit the live app






Project Summary
This project is designed to give you an opportunity to build something from scratch and to connect HTML, CSS, and JavaScript in one project.

Your mentors will be providing minimal help, as this is a chance to push yourself. They can point you in the right direction, but won't help you write the syntax to make it happen. This project is a chance for you to combine the skills you've learned so far.

Good luck and work hard!

Setup
Fork and clone this repository (this will get you easy access to the icon images). Make sure to commit and push your code often. It's not fun to lose any of your work.

You will need to create the HTML, CSS, and JavaScript files and connect them yourself to get started.

Design
Here is what your application should look like. Try to copy the styling as closely as you can.








Idea
UCanoeIt is a mock up of an ecommerce site that specializes in canoe and kayak sales.

MVP
Users can access a list of products per category
Users can view each product
Users can conduct transactions
Future features
Admin can login and update product listing
Users can login and purchase information can be cached
Connect to Google Maps api to list kayak launch points near the user


Pitch: A recipe website where users can upload and share recipes, as well as “fork” other user’s recipes to be modified for their own uses


Required Features: 
1. Users can register an account
2. Users can upload recipes with instructions
3. Users can share the recipes
4. A central “Recipe Hub” where all public recipes can be viewed
5. Ability to save recipes as private
6. Ability to scale measurements up and down based on serving size wanted
7. Ability to “Fork” others User’s recipes to make small changes
Extras that would be nice:
1. An iOS/Android app
2. Scanning feature for handwritten recipes (Using camera + OCR)
3. Shopping list feature, to tell you what to buy at the store