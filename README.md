# dreamteam
## About dreamTeam

Dream Team is an application used for users to have information about their favourite players. Users are able to build a team from 10 players and one goalkeeper. The user can choose the players that are provided by API and get them to the team to build thier own team. Then it is possible to see the player information such as image, name, nationality, team, last transitions and other highlighted information that can be interesting. 
## Done until now

Until know we have deployed the App and can extract data from the API. We have chosen an existing free API which fulfill the requirements that we set up in this project. We have created most of the files such as sideparPresenter, SidebarView, searchPresenter and so on. The structure of our project is almost the same as what we did in the labs. As we did in the labs, we have some function for promises. 

## To Do

We will fix the search sidebar that is shown on the left side of the home page. And the information sidebar that is shown on the right side of the page and provides the player's information. In addtion, we should creaet the login/ signup app side and save the user data in the database using the firebase real-time database

## project file structure

###  DreamTeam 
The DreamTeam will represent the data in the project. For instance, it contains all the players the user has chosen to be in the team in the project.  In the addition, the file contains important functions that will be needed when we deal with the data. For instance, the function addToTeam(player).

### StadionPresenter & StadionView

These two files are connected with each other where in presents there are, among other things, various callbacks that are called to retrieve data from the App. We then send this data to View to be able to display it. You can summarize it to a link that sends data and information from App to View via Presenter.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
