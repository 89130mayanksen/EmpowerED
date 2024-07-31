import { article } from "./data/article.js";

let articleHtml = '';

article.forEach((articleElement)=>{
  articleHtml += `
          <div class="article">
            <h2>${articleElement.topic}</h2>
            <div class = "article-content js-article-content-${articleElement.number}">
              ${articleElement.content}
              <div class="article-video-div">
                <video class="article-video" controls src="${articleElement.video}">
                </video>   
              </div>
            </div>          
            <p class="read-more-link js-read-more-link" data-article-id = ${articleElement.number}>Read More</p>
            <p class="read-less-link js-less-more-link" data-article-id = ${articleElement.number}>Read Less</p>
          </div>
  `;
});

document.querySelector('.container')
 .innerHTML = articleHtml;

//  Test to check whether the HTML loaded successfully or not for Article page
console.log('Test suite: Article page tests');

console.log('Checks page loaded successfully');
if(articleHtml !== ''){
  console.log('Passed');
}else{
  console.log('Failed');
}
// First test of the page

document.querySelectorAll('.read-more-link')
  .forEach((link)=>{
    link.addEventListener('click',()=>{
      const articleNumber = link.dataset.articleId;

      const contentContainer = document.querySelector(`.js-article-content-${articleNumber}`);
      
      contentContainer.classList.add("read-more");

      // Test to check the interactivity of the read more element
      console.log('Checks whether the interactivity of read more element applied or not');
      if(contentContainer.classList.contains("read-more")){
        console.log('Passed');        
      }else{
        console.log('Failed');
      }
      //Second Test of the page
            
    });
  });

  document.querySelectorAll('.read-less-link')
  .forEach((link)=>{
    link.addEventListener('click',()=>{
      const articleNumber = link.dataset.articleId;

      const contentContainer = document.querySelector(`.js-article-content-${articleNumber}`);

      contentContainer.classList.remove("read-more");

      // Test to check the interactivity of the read less element
      console.log('Checks whether the interactivity of read less element applied or not');
      if(contentContainer.classList.contains("read-more")){
        console.log('Failed');        
      }else{
        console.log('Passed');
      }
      //Third Test of the page

    });
  });

  document.querySelector('.home-page-link')
  .addEventListener('click',()=>{
    window.location.assign('index.html');
  });