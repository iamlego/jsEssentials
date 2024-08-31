// Declare a variable named xhr to create a new XMLHttpRequest object as follows in health_article.js file:

var xhr = new XMLHttpRequest();

// Create another variable named url to define the URL of the JSON file and fetched as follows:
var url = './health_article.json';

// Now, you need to prepare a GET request to the specified URL, which you have saved in a variable named url in asynchronous mode in the health_article.js file as follows:
xhr.open('GET', url, true);

// Set the expected response type to JSON format
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles; //reading articles from the json
    var articlesDiv = document.getElementById('articles');
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.send();