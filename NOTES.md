TODO:
- Setup user login
- Create forms
- Create home page

Specifications:
- User logs in
- User creates a form (user, timeline, priority, title, body, screenshots, deal-id)
- Sticky notes based on times
- Form can be a template
- Home page is Trello like columns
- Integration with Github to create issues
- Integration with Github to update issue status (heroku scheduler -> rake)
- Slack comments to the issues
- Nice history, searchable
- Slack bot to move across the board


App setup:
* [Why is my ruby/rails broken](https://medium.com/@Sudhagar/rbenv-how-it-works-e5a0e4fa6e76)
* [App starter](https://jeremykratz.com/blog/using-react-with-rails-and-webpack/)

Models:
User can have multiple projects
Projects can have multiple Lists
Lists can have multiple Cards