# Harry Potter Friend Finder

## Purpose
The purpose of this app was to work with express to set up a server that served different HTML pages.  It would ask the user to answer questions and then compile that data with data stored on a "database" (not an actual data base in this assignment, just local data).  The app would then find your most compatible friend based on your responses and display your friend via a modal.

## Theme
For this app I went with a Harry Potter theme.  Stored in the code are 4 different Harry Potter characters that you can be matched with.  (Yes, just four)  I took the quiz as if in the character's shoes and stored their answers as possible matches.

## Compatibility
The friend is calculated based on the difference between user input and the stored values.  So each question is compared to the user's input and a numeric difference is calculated.  This difference is then added up over all questions in the survey.  The friend who had the most similar responses, and therefore had the least difference is then selected as the most compatible friend.