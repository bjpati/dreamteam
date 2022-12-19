# dreamteam
## About dreamTeam

Dream Team is an application used for users to have information about their favourite players. Users are able to build a team from 10 players and one goalkeeper. The user can choose the players that are provided by API and get them to the team to build thier own team. Then it is possible to see the player information such as image, name, nationality, team, last transitions and other highlighted information that can be interesting. 


## Project file structure

####  DreamTeam 
The DreamTeam will represent the data in the project. For instance, it contains all the players the user has chosen to be in the team in the project.  In the addition, the file contains important functions that will be needed when we deal with the data. For instance, the function addToTeam(player).

#### StadionPresenter & StadionView

These two files are connected with each other where in presents there are, among other things, various callbacks that are called to retrieve data from the App. We then send this data to View to be able to display it. You can summarize it to a link that sends data and information from App to View via Presenter.


#### SearchPlayers
This file is the most important in the whole project because here we work with the API. The file contains a main function "myAPICall" which first checks the response status and that it is 200. Then a fetch is made to process the "Base URL" and endpoint that is retrieved from the API.

#### SearchResultsView & SearchFormView & SearchPresenter
The purpose of these files is to handle the search process. The search process makes that the user will be able to search for a player. In the presenter, we have the functions that we need to make the search process works such as fetching what the user wrote in the search field and sending it to the API to get the result. In the SearchResultsView and SearchFormView we will display what we want the user to see. 

#### DetialsView & DetialsPresenter
These files are used to display player details retrieved from the API. The API offers many details but the group decided to show the ones they feel are important to a user. In the same way as searchResultsView, searchFormView and searchPresenter, we could write the details we want in DetailsView and then call the functions in Presenter. After that we could reach to the model to save all the information wanted.

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
