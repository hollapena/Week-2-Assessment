/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a version control program on your computer that allows you to track your changes and save your work as well as every version that was saved to git previously in a repository. This way you can work on your project without as much fear of losing something or breaking something'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'Github is a website where you can store your repositories remotely. It serves dual purposes. First it allows multiple collaborators to access and work on the same coding project, and secondly, it can serve as a back up in case of file loss or damage on your machine.'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init ={
    description: "tells your computer to initialize a git repo in the folder you're currently in.",
    code:'git init',
};
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description:'this command copies a repo from Github and puts it on your computer',
    code:'git clone REPO_URL',
};
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description:'tells you the current status of your git repo and if you have any changes that have not been added or pushed yet',
    code: 'git status',
};
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description:'adds files to be tracked',
    code:'git add  -or-  git add .  to track all of the files contained in the folder',
};
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description:'creates a snapshot of the files that you are tracking',
    code:'git commit -m "A message" ',
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description:'pushes your local commits to github',
    code:'git push REPO_NAME',
};