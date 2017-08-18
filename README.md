# Paper Boy!

### Welcome to Paper Boy
Paper Boy is a news aggregation application built using React Native powered by the Google News API.

### User stories
As a user, I can view the home page and see the headlines of the day and the articles recently posted by my last visited publication. <br />
As a user, I can navigate using the nav bar to the publications page and view all of the possible publications I can view. <br />
As a user, I can tap one of the aforementioned publications and view its latest articles. <br />
As a user, I can tap the refresh icon on the navigation bar and have the current page i'm viewing refreshed.

# Images
### The home page
On the home page, in the stories banner, the second part of the sentence is changed dynamically <br/> when a user visits a new publication on the publication page. <br/> For instance, if I were to visit 'The Verge' the banner would read, "Stories from The Verge"
![Home page](http://i.imgur.com/XBD0OK9.jpg)
### The loading page
The page that is rendered while the application is making requests to Google Api <br /> and is toggled off when the promise resolves, and the articles are set to the state.
![Loading page](http://i.imgur.com/6yxiVNA.jpg)
### The page containing all of the publications the user can view
The list of publications the user can tap on the view their latest articles.
![Publication links](http://i.imgur.com/SBh7wm0.jpg)