## PROCESS

Checked the schema and tried to figure the relations between them and their graphical representation.

The observations of the schema relations that drew were ::

No. of posts/series created in different months
No. posts created by user.
Likely topics and their likelihood of different posts by different user.
Complete and Incomplete tasks.

## DESIGN CHOICES

Represented 3 graphs for 3 observation draw from the data:

To show number of posts created by different user with the entry of per 10000 posts. Used Bar graph to represent the data that helps the user to draw direct analysis of which user has created what number of posts.

To show status of todo-tasks with entry of per 10000 tasks.Used pie chart, to represent that data, as the values are limited and it will show direct proportion.

To show number of posts created per 10000 posts in different months, have used line chart. Line Chat helps to show the rise and drop of post creation count in different months. To observe the analysis in a month, have provided the facility to select month and that will give the analysis for that particular month.

For code, I have used Apollo with React that will reduce the network call and increase the code efficiency.


## CHALLENGES
The data was scattered, and there were no relations between data other than user and posts to draw analysis.

Difficulty in understanding the reference for data values or their relative meaning.

