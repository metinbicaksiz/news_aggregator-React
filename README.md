- The application uses tailwind ad React for the front-end. We are consuming 3 different APIs here, New York Times, The Guardian and NEWS API. The page lets you choose the api you want to get the news from. Then, you can sort them based on the date and author of the article.
- The navigation bar also has a search area, which will let you search both in the title and the description part of the article.


Finally, you by using the docker-compose up command, you can containerize the whole application on your local machine. 

If you are using Linux or a Mac, you might want to consider adding volume info at the end of the docker-compose.yaml file.
If on windows, try not to enter volumes info after ports information. 