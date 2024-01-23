### Total Learning of the Backend

- npm init - To initialize the project, contains the package.json.
- Create folder public and src with .env, .gitignore(use .gitignore generator to generate all set the files) and also readme.md.
- Install nodemon and prettier with the dev dependencies like "npm i -D packagename"
- Initialize git repo to update regularly.
- Change "type": "module" to import the modules, otherwise to get require("packagename") use "type": "commonjs".
- Change the script according to the setting. "dev": "nodemon src/index.js".
- Always use git bash or linux machine to easily create folders using touch, mkdir commands.
- Use mongodb atlas for db and login into it. Create a cluster with the db and network access.
- Install express, mongoose and dotenv packages

- While connecting to db always there will be a problem

1.  Therefore always wrap the code in "try and catch block or promises". There will be time taking in db operations therefore use "async and await".
2.  Create a folder db and export all the code. This process uses distributed approach.

- Install package cookie-parser and cors(cross origin resource sharing)

- Remember that it is the best practice to create reusable code therefore we are continuously talking to the DB. We are making an util to call the function and it will give the output.

- To standardize the error message we use nodejs error class. We created functions like asyncHandler, apiError and apiResponse. To handle the errors and responses. asyncHandler is a helper file.

- Create User and Video model in the models folder.
- In the production grade app, mongodb uses mongodb aggregation pipeline. Therefore install package mongoose-aggregate-paginate-v2. This package is used to write the middleware, we are using plugin hook to aggregate the pipeline. Because of this package the project will become advance level.
- Install bcrypt (not bcryptjs) to hash the password and also JWT(JsonWebToken) both the packages are based on cryptography.
- Use "pre" hook just before saving the data to encrypt the data. "pre" uses callback fn, don't use ()=>{}. Use function(next){}, always put next to flag
- We use async bcoz the encryption method takes time.
- JWT is a bearer token, it means that it baer the data which is if somebody has the key then he will be able to access the data.
- We have used multer(is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.) and cloudinary(is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery.)

- Creating a user registration for that the logic will be as follows:

1. Get user details from frontend
2. Validate the details - it should be not empty
3. Check if user already exists through username and email
4. Check for images and avatar
5. Upload them to the cloudinary
6. Create user object and object entry in db
7. Remove the password and refresh token field from response
8. Check for user creation
9. Return response

- Access Tokens are long lived tokens and Refresh Tokens are short lived tokens. Refresh tokens are given to user and db also therefore if the user has hit the endpoint through refresh token then the user has been validated through the access token

- Creating user login flow:

  1. get data from req body
  2. validate the user by username or email
  3. find the user
  4. Check password
  5. access and refresh token
  6. send cookies
  7. response

- Logout User: This is very easy, with removing the tokens and cookies. But you don't have any access to get the user as in login we have a form that contains the fields. Therefore the middleware concept(Jaate waqt milke jaana) comes into picture. We are making our own middleware.
