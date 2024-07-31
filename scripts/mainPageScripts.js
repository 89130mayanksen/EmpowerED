import { icons } from "./data/icons.js";


let iconsHTML = '';

icons.forEach((iconElement)=>{
  iconsHTML += 
  `
        <div class="icon js-icon-${iconElement.number}}" data-icon-id="${iconElement.number}" style="background-color: ${iconElement.color};">
          <div class="sdg-number">${iconElement.number}</div>
          <div class="sdg-name">${iconElement.name}</div>
        </div>
        <div class="div-on-click js-div-on-click-${iconElement.number}">
            <div class="info-topic">${iconElement.name}</div>
            <div class="info-on-click js-info-on-click-${iconElement.number}">${iconElement.para}</div>        
            <button class="close-button" data-close-id = "${iconElement.number}">X</button>
        </div>
  `
});

document.querySelector('.js-sdg-icons')
  .innerHTML = iconsHTML;

  //Tests whether the SDG icons loaded successfully
  console.log('Test Suite: Main Page tests');

  console.log('check whether the SDG icons loaded successfully');
  if(iconsHTML !== ''){
    console.log('Passed');
  }else{
    console.log('Failed');
  }
  //First test of main page

  document.querySelectorAll(`.icon`)
  .forEach((iconElement)=>{
    iconElement.addEventListener('click',()=>{  
      const sdgNumber = iconElement.dataset.iconId;    
      
      const container = document.querySelector(`.js-div-on-click-${sdgNumber}`);
      container.classList.add("is-editing-quantity");

      // Test to check the interactivity of the SDG icons
      console.log('Check whether the interactivity of SDG icons applied or not');
      if(container.classList.contains("is-editing-quantity")){
        console.log('Passed');        
      }else{
        console.log('Failed');
      }
      //Second Test of the main page
    });
  });

  document.querySelectorAll(`.close-button`)
  .forEach((buttonElement)=>{
    buttonElement.addEventListener('click',()=>{
      const sdgNumber = buttonElement.dataset.closeId; 

      const container = document.querySelector(`.js-div-on-click-${sdgNumber}`);
      container.classList.remove("is-editing-quantity");

      // Test to check the interactivity of the close button
      console.log('Check whether the interactivity of close button applied or not');
      if(container.classList.contains("is-editing-quantity")){
        console.log('Failed');        
      }else{
        console.log('Passed');
      }
      //Third Test of the main page
    });
  });


  document.querySelectorAll('.article')
    .forEach((articleElement)=>{
      articleElement.addEventListener('click',()=>{
        window.open('articlePageLayout.html', '_blank');
      });
  });

  document.querySelector('.js-message-button')
    .addEventListener('click',()=>{
      alert(`We're working on this feature`);
    });

  document.querySelector('.login-link')
    .addEventListener('click',()=>{
      window.location.assign('loginPage.html');
    });

  document.querySelector('.resource-list')
    .addEventListener('click',()=>{
      alert(`We can't provide content of the book due to copyright policies.`);
    });