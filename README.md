# Tech-blog-MVC-Week-14

  ![](https://img.shields.io/badge/license-MIT-blue)

  ## Description
 For this week's challenge, we were asked to create a CMS-style blog site where developers could puplish blog posts and comment on other developer's posts as well.

 This challenge was unique compared to other previous challenges as there was not starter code provided, thus the project had to be completed from scratch. The main goal of this challenge was to practice the MVC (Model, View, Controller) paradigm. 

 I started out by creating the basic files needed for this project and made sure it could connect to express correctly. Then I used a Lorem Ipsum creater to create some dummy data for the posts and the usernames. 

 Next step was to create the Models. Using Sequelize, I imported the datatypes and used those to help create the model's definitions. 

 Then I was able to use that model structure to composes the Controllers. Created the routes needed to GET, POST, CREATE, and DELETE the data based on the given request from the client. 

 The final step was to display the information correctly (Views). We were insturcted to use the Handlebars framwork to load our pages and the correct data. 

 I decided to style my page slightly differently than the example provided as I thought the example colors were a bit bland and wanted to make mine stand out a bit better and provide a more vibrant expereince. 

 Scroll down to The User Story and Acceptance Criteria below to see how the app is expected to function.

  ## Table of Contents
  1. [Installation](##installation)
  2. [User Story](#user-story)
  3. [Acceptance Criteria](#acceptance-criteria)
  4. [Deployed Application](#deployed-application)
  5. [Technology](#technology)
  6. [Questions](#questions)
  7. [License](#license)
  

  ## Installation
  1. Fork this repository
  2. Clone repository to your local directory
  3. Make sure you have installed Node.js 
  4. Run npm install to install the necessary dependencies
  ```
  npm install
  ```
  5. Start the server by typing "npm start" and open localhost:3001
  ```
  npm start
  ```

  ## User Story
  ```
  AS A developer who writes about tech
  I WANT a CMS-style blog site
  SO THAT I can publish articles, blog posts, and my thoughts and opinions

  ```
  ## Acceptance Criteria
  ```
  GIVEN a CMS-style blog site
  WHEN I visit the site for the first time
  THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
  WHEN I click on the homepage option
  THEN I am taken to the homepage
  WHEN I click on any other links in the navigation
  THEN I am prompted to either sign up or sign in
  WHEN I choose to sign up
  THEN I am prompted to create a username and password
  WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
  WHEN I revisit the site at a later time and choose to sign in
  THEN I am prompted to enter my username and password
  WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the dashboard, and the option to log out
  WHEN I click on the homepage option in the navigation
  THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
  WHEN I click on an existing blog post
  THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
  WHEN I enter a comment and click on the submit button while signed in
  THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
  WHEN I click on the dashboard option in the navigation
  THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
  WHEN I click on the button to add a new blog post
  THEN I am prompted to enter both a title and contents for my blog post
  WHEN I click on the button to create a new blog post
  THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
  WHEN I click on one of my existing posts in the dashboard
  THEN I am able to delete or update my post and taken back to an updated dashboard
  WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
  WHEN I am idle on the site for more than a set time
  THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

  ```

  ## Deployed Application

  [The Tech Blog](https://still-cove-88939.herokuapp.com/)

  ## Technology Used
  **1. [Node.js](https://nodejs.org/en/)**

  **2. [MySQL2](https://www.npmjs.com/package/mysql2)**

  **3. [Sequelize](https://www.npmjs.com/package/sequelize)**

  **4. [dotenv](https://www.npmjs.com/package/dotenv)**

  **5. [handlebars.js](https://handlebarsjs.com/)**

  **6. [express-session](https://www.npmjs.com/package/express-session)**

  **7. [Heroku](https://www.heroku.com)**

  ## Questions

  If you have any questions regarding this project, you can reach me at my GitHub account or by email at:
  <br />
  Github: [rmartin1985](https://github.com/rmartin1985)
  <br />
  Email: rickmartinatx@gmail.com

  ## License
  Licensed under the [MIT License](LICENSE)