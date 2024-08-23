# Art Quiz App

Simple quiz app that asks what the place of origin, date created, artist, and title are for a random artwork. All artwork is sourced form the Art Institute of Chicago's *[API](https://api.artic.edu/docs/#get-vs-post)*.

## Front-End Stack

- React
- React-router
- TailwindCSS
- react-hook-form

## Routes

### /

Simple home page where you can request your first question.

### /quiz

Loads quiz information and renders. Also includes the results page.

### /details

Shows details for artwork from the most recent quiz.

### /search/:query

Shows search results based off of query. Currently only Artist names are clickable links to 'search'.
