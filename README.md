Austin Exclusive Member Society

Link to project: http://recruiters-love-seeing-live-demos.com/

alt tag

How It's Made:
I applied the concept of Model View Controller architecture to bring this project to a reality. Express was used to create a server that listens for incoming requests. Express's middleware functionlity checks whether the current user is logged in with it's correct credential. once confirmed, express takes the help of controllers to provide them with a view that displays all the current posts made by all the users. once a correct passcode is passed by the current logged in user, another view(member.ejs) displays all the posts with their authors and the date it was created. I also created a checkbox while signing up that asks if the current user is Admin or not. if user checks it, it will provide the current administrator with the ability to delete the posts as well.

Tech used: HTML, CSS, JavaScript, Express, Nodejs, MongoDb

(optional)

Lessons Learned:

one of the most important lesson I learned while working on this project was the need to create a different categories of routes such as I could create a different routes for each models(Post, User) that strictly deals with manipulating only the same model. it was a great aha moment that I discovered to avoid potentially generating conflicts in paths to the site.

Examples:

Take a look at these couple examples that I have in my own portfolio:

Palettable: https://github.com/alecortega/palettable

Twitter Battle: https://github.com/alecortega/twitter-battle

Patch Panel: https://github.com/alecortega/patch-panel
