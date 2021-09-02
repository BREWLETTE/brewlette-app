![Screen Shot 2021-09-01 at 3 51 49 PM](https://user-images.githubusercontent.com/80484840/131755700-591ca056-73a3-42bd-8ad8-2e668822fae6.png)

# still need clearly defined end points with examples------

# BREWLETTE APP VERSION 1.0.0

## DEV TEAM: Triana Cerda, Simon Kaine, Alice Retz, Aemilius Morgan, Cristian Montes
In a 5 day sprint our team brainstormed, planned, and delivered a mobile friendly Brewlette app. Working remotely, the team utilized multiple tools to stay connected and openly communicate on project plans. Our team utilized highly practiced and desired frameworks, libraries, etc. to create an easy fun app that randomly finds you a place to drink. 

# REFERENCES
## react-custom-roulette
--This roulete spinner and function was used within our roulette page to spin while random function ran. 
- https://www.npmjs.com/package/react-custom-roulette

## API
--This API was used to to render breweries within an array based on location query. Our built random function picked a brewery with the array length based on query and returned one random brewery object to display on page. 
- https://beermapping.com/api/examples/
- https://beermapping.com/api/reference/
- https://beermapping.com/?lat=42.36008&lon=-71.05888&z=13

see API return below

[
    {
        address: “2220 Blake Street”,
        brewery_id: 199,
        brewery_name: “Breckenridge Ball Park Brew Pub”,
        city: “Denver”,
        five_mile_proxylink: “http://beermapping.com/maps/proxymaps.php?locid=199&amp;d=5”,
        phone_number: “(303) 297-3644”,
        state: “CO”,
        url: “breckbrew.com/”,
        zip_code: “80205",
        [[Prototype]]: Object
    },
    {
        address: “471 Kalamath St.“,
        brewery_id: 200,
        brewery_name: “Breckenridge BBQ and Brew Pub”,
        city: “Denver”,
        five_mile_proxylink: “http://beermapping.com/maps/proxymaps.php?locid=200&amp;d=5”,
        phone_number: “(303) 623-2739”,
        state: “CO”,
        url: “breckbrew.com/”,
        zip_code: “80204”,
        [[Prototype]]: Object
    },
    {
        address: “4700 Cherry Creek Dr. South”,
        brewery_id: 238,
        brewery_name: “Bull and Bush Pub and Brewery”,
        city: “Denver”,
        five_mile_proxylink: “http://beermapping.com/maps/proxymaps.php?locid=238&amp;d=5”,
        phone_number: “(303) 759-0333”,
        state: “CO”,
        url: “bullandbush.com/”,
        zip_code: “80246”
    }
]

Query Parameters:
Key	Default	Description
page	1	page based on perPage offset
perPage	25	amount of results per page
name	n/a	


# TECH STACK

## Frameworks
- ReactJS

## Libraries
- Node-fetch 
- React-router-dom 
- React-custom-roulette
- Express 

## Languages
- JavaScript 
- CSS 

## Testing
- Jest Suite 
- TDD
- CI 

## Databases
- PostgreSQL

## Tools
- VS Code
- Heroku
- Netlify
- Miro 
- Postman
- Thunder Client
- Coolors 
- InkScape
- Git 
- GitHub 
- Slack
- Zoom

# DESCRIPTION
Brewlette is a major problem solving app built for you by major problem solvers. Have you ever been in a cool new or previous spot but no one will make a deicision on where to grab a brew? You (21 and over) are who we had in mind when we created this app!! Brewlette is a roulette randomizer that will get you a place to enjoy a drink in no time. With a couple clicks you will be able to get some details about a brewery picked by yours truly, Brewlette. It’s as simple as logging in or signing up(if you’re 21 or over), inputting your location, and clicking spin! There are features for you to save breweries you enjoyed so you can visit them again! Brewlette, version 1.0.0 — solving your brewery selections spin by spin. 

# MISSION STATEMENT
'An easy fun app that randomly finds you a place to drink'

# GROUP AGREEMENTS
- majority rules with tough decisions
- if you have nothing nice to say, don't say it
- address things as soon as you can, don't let it linger
- be constructive as much as possible
- if you disagree, be ready to explain
- be open minded and suggestions/openly communicate
- intuitive breaks: annouce to group *DONT GO PAST 2 HOURS*
- min 15 minute breaks/ take them as YOU need them too
- pair programming or more-- no need for solo work
- don't struggle for more than 15 mins to maximize time
- communicate about merges with smaller features, pull often with fresh code
- 3 scrums daily: that's when you merge to main
- good commits when ACP(P)


# SCHEDULE

## 9-915 SCRUM
What is the objective for today?
merge into MAIN (if needed)
everyone pull MAIN

## 1150-12 SCRUM
quick check in
set up for after lunch tasks
merge final commits into DEV

## 12-1 LUNCH

## 545-6 REFLECTION
merge into final commits into DEV || MAIN
- Who is working on what EXACTLY after hours?
- One thing that went well today?
- One thing we would like to improve on?
- One thing to continue for tomorrow?
- One thing we learned today?


# DEPLOYABLE EXPECTATIONS
- end points for the back to grab API info
- working buttons that use token to access
- LS working and utilized 
- working roulette wheel
- mobile friendly 
- smooth pagination 
- clean code 

# STRETCH
- Distance drop down
- Different themes for accessibility
- Ratings
- Favorites/History
- Places you've been
- Thumbs up or thumbs down saved to your account
- Exclude places I've been


# NOTES
![Screen Shot 2021-09-01 at 3 58 33 PM](https://user-images.githubusercontent.com/80484840/131756278-7630ddf8-45f3-4341-af75-f9d31b7e8e5e.png)


![Screen Shot 2021-09-01 at 3 36 19 PM](https://user-images.githubusercontent.com/80484840/131754359-6e016dbd-c599-46be-a744-b868c9128eb3.png)


