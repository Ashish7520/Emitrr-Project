# Emitrr-Project

<h2>Fullstack Quiz App</h2>

<h3>Database Logic</h3>
There are total 3 table 1)User, 2)Questions, 3)userQuestions

1) User table --> there are total 6 column username, email, password, totalScore, correctAnswer, incorrectAnswer
2) Questions --> there are total 8 column question, option_a, option_b, option_c, option_d, correct_option, language, difficulty
3) userQuestion --> it is used for do many to many relation between User and Question


<h3>Backend Logics</h3>
There are many API endpoins routes we will see all one by one. <br/>

First one is User routes <br/>
In user routes there are 4 API endpoint <br/>
1) user/signup --> it is for doing sign up of new user <br/>
    in singup process we took username, email and password from the user, and in backend we save all the details in the database, here we use the bcrypt library to securly save the password of user
2) user/login --> it is for login the existing user <br/>
   in login process we took email and password from user, first we find the user using email, if we got the user then we use bcrypt to compare password, if password matches then we allow user to login, during this we send the JWT token in response which will use for user authentication
3) user/reset --> it is for reseting the user profile <br/>
   in this we delete totalScore, correctAnswer and incorrectAnswer in the user table of database,
   and we also delete the userQuestion for this given user
    
4) user/leaderboard --> it is for geting leaderboard of all user <br/>
   in this we just retrieve all the user and order them by total score.


Second route is quiz route <br/>
There are total 4 API end point <br/>

1) quiz/questions (post req) --> it is used to post all the quiz questions in the database <br/>
2) qui/questions (delete req) --> it is used to delete all the quiz questions from database <br/>
3) quiz/questions/:language/:questionNumber --> in this we send one question to the frontend <br/>
   in this we get userId from authentication and language and questionNumber from the request parameters, <br/>
   Now for sending the question we don't want to send repeated question, for this we mark the question as attempted if we send the question, <br/>
   In this route we first retrieve all the attempted question for give userId, now we find one question which questionId is not equal to these attempted questionId, then we mark this question as attempted and send in response <br/>
   we also made one logic, first we send easy question, if user give right answer again and again then we go for medium and hard so on other wise we only give easy question. <br/>
   For this we user correcAnswer and incorrectAnswer from the user table database. <br/>
   For this <br/>
   if correctAnswer - incorrectAnswer <=1 then we send easy questions <br/>
   if correctAnswer - incorrectAnswer <=3 then we send medium questions <br/>
   if correctAnswer - incorrectAnswer >3 then we send hard questions <br/>
4) quiz/answer/:questionId/:selectedOption --> in this we send true and false for given question <br/>
   from the request we got selected option and questionId, and we got userId from user authentication, first of all we find question from the database using questionId, <br/>
   now there is score system for incorrect answer 0 mark, for easy question 1, for medium question 3 and for hard question 5 marks <br/>
   now we compare the selectedOption and correct option and give score accordigly and increase total in the database user table and increase correctAnswer and incorrectAnswer in database accordingly. <br/>

<h3>Frontend Logics</h3>
In frontend we have made single page application in which we have total 4 pages 1) leaderboard, 2)user, 3)profile, 4)quiz

1)leaderboad --> we fetch data from the backend and show them in UI
2)user --> this is for signup and login the user 
3)quiz --> this page is for playing quiz, here we have total 6 questions asked, here we make request for question from backend and show them in UI, here we have radio button and we submit the answer, this answer also make request for at backend for cheking the answer and we got answer and we show them in UI. here we also have progress bar at bottom.
4)Profile --> it shows user profile, where there are two button, one is reset which is use for reset user profile, and second button is start quiz, if we click it shows the language selection for quiz, after selecting language quiz will start. <br/>
To start the quiz we need to select the language <br/>

<br/>

In frontend we use redux to manage application level state. where we use redux toolkit. in this project we use two slice. <br/>
1)auth slice --> which is used for saving JWT token in localstorage and marking isLogin to true when user make login and when user logout it will erase JWT token and make isLogin as false.<br/>
2)quiz slice --> it has three reducer 1)language --> to use language selection in various components, 2)progress --> to make progress bar of user, 3) question --> it will count the question 

<br/>

In this project we used react-router for routing purpose. 
In this project we used css modules for styling.
   
   
