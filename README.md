# Unit 11: Note Taker

Here is a Note Taker, created with Javascript, Node Js, Express. When run in the command line, the user starts at the landing page. When the "Get Started" buton is pressed, a new page appears and the user can make a new note with title, save, edit existing notes. Most of the app was built, my object was to make sure all the routes are working via back end using express.

## Take aways! 

1. After chatting with Mahisha and Kerwin about my troubles in linking the css and index.js scripts to the html pages. "app.use(express.static("public"));" OMG, this was the only thing was needed. You guys said all my routes were there, I just needed that line in my "server.js" to have the beginning route for all in the public folder. 
 
2. After chatting with Kerwin, I was wondering why the third "app.use" wasn't working correctly. I placed it after my "app.get("*"), which was in the second position. Kerwin mentioned that this should be placed last because it would take presidence and go back to the index file.

3. The fs read and write I was halfway there, got assistance from my tutor and help me under stand stringify the json file and splice it when fs read/write is used. 
  

### Prerequisites

Any web browser can access or view Heroku link, repository. Use Command line or Terminal with Node JS installed to view index.js file.

## Built With
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [NodeJs] (https://nodejs.org/en/about/)
* [NPM] (https://www.npmjs.com/)

## Deployed Link
* Link to Site: 


## Authors
Dexter Valencia 

- [Link to Portfolio Site](https://github.com/itsmedexter/unit11_Note-Taker)
- [Link to Github](https://github.com/itsmedexter)
- [Link to LinkedIn](https://www.linkedin.com/in/dextervalencia/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Thanks to Mahisha and Kerwin for the help.  
