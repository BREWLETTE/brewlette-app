# Grading Notes
AMAZING work team! I love this app -- I'm so impressed with the work you all did. The roulette wheel is great (even though it was using React Hooks, you still managed to get it working!). Your styling / branding is excellent. The code is clean and easy to read. Fantastic work. 

## Front End

-   If you pass a callback to `onStopSpinning`, you can prevent the brewery information from showing up until after the wheel has stopped spinning -- I added some code to show you how to do that
-   Because of the issue with the double routes defined on your backed, the profile page appears to be showing everyone's data, not just the logged in user

## Backend

-   You have 2 routes defined as `app.get('/api/breweries',()=>{...}` -- only the second one will work so you can remove the [first](https://github.com/BREWLETTE/brewlette-app-backend/blob/9d83803e076ae4c5083ba4258ddafb67d2540dd2/lib/app.js#L34)

## Database

-   You can use postgres [date types](https://www.postgresql.org/docs/current/datatype-datetime.html) rather than VARCHAR to make your date life a little easier

## Other Notes

-   Remember to remove the generic README on the backend repo and add instructions for starting the app locally (plus maybe the link to the deployed frontend)
-   Error states would be helpful on the sign in / sign up
-   Similarly, if there are no breweries returned from the search, you should let the user know (otherwise it appears your app is broken)
-   You should probably update the placeholder text on the Search bar as "City, State" doesn't seem to work -- I tried "Portland, OR" and it returned nothing but just typing "Portland" worked

|                                                                                                         | Possible Points | Brewlette |
| ------------------------------------------------------------------------------------------------------- | --------------- | --------- |
| **Good & Proper Use of HTML / CSS**                                                                         | 5               | 5         |
| **Good and proper use of JavaScript and Reat Components**                                                   |                 |           |
| Clear / readable code                                                                                   | 5               | 5         |
| Uses async JS properly                                                                                  | 5               | 5         |
| Uses react components to "compose" the UI and follows data-down/events-up                               | 5               | 5         |
| Contains no unnecessary or commented-out code                                                           | 5               | 5         |
| **React Router List / Detail pages**                                                                        | 10              | 10         |
| **Third Party API**                                                                                         |                 |           |
| Project incorporates API                                                                                | 3               | 3         |
| Project stores API info in database & associates with users                                             | 2               | 2         |
| **Server Side Code**                                                                                        |                 |           |
| Routes should follow standard REST conventions                                                          | 5               | 5         |
| /get list                                                                                               | 3               | 3         |
| /get detail                                                                                             | 3               | 3         |
| /post create single item                                                                                | 3               | 3         |
| /delete destroy single item                                                                             | 3               | 3         |
| Proxy route                                                                                             | 3               | 3         |
| **Database**                                                                                                |                 |           |
| PostgreSQL database provisioned on the Heroku instance                                                  | 1               | 1         |
| Logical schemas with appropriate data types                                                             | 1               | 1         |
| Data model that maps to the problem domain and uses relational connections, such as joins, as necessary | 2               | 2         |
| Ability to read, create, update resources and persist them in database                                  | 6               | 6         |
| **Testing**                                                                                                 | 5               | 5         |
| **Documentation**                                                                                           | 5               | 5         |
| **General Functionality**                                                                                  | 10              | 8         |
| Team Score (Out of 90)                                                                                  | 90              | 88        |