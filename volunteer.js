const countStarter  =(endCount , elementId)=>{

  let count = 0;
  let target = endCount;
  let speed = 10;

  const updateCounter = ()=>{
   if(count < target){

    count += Math.ceil(target /100);
    document.getElementById(elementId).textContent = count + "+";
    setTimeout(updateCounter,speed);

   }else{
    document.getElementById(elementId).textContent = target + "+";
   }
  }

  updateCounter();
};




const countStatsOnScroll  = ()=>{
  const statsSection = document.getElementById('stats-card');
  const windowHeight   = window.innerHeight;
  const elementPosition = statsSection.getBoundingClientRect().bottom;

  if(windowHeight >= elementPosition){

    countStarter(50,'actionsCounter');
    countStarter(400,'attendeesCounter');
    countStarter(24,'clubCounter');
    window.removeEventListener("scroll", countStatsOnScroll);


  }
}

window.addEventListener("scroll",countStatsOnScroll)


// See more trigger function

document.querySelectorAll('.see-more').forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    let selected_card = event.target.closest('.review-card');

    if (selected_card) {
      selected_card.classList.toggle('expanded');
    }

    if(selected_card.classList.contains('expanded')){
      trigger.innerHTML = 'Show less'

    }else{
      trigger.innerHTML = 'See more'
    }

  });
});


// FAQ card trigger function

document.querySelectorAll(".faq-item").forEach((trigger)=>{
  trigger.addEventListener("click",()=>{

    trigger.classList.toggle("open");

    let selected_element = trigger.querySelector(".faq-icon");
  
    
    if(trigger.classList.contains("open")){
      selected_element.classList.add("minus");
      selected_element.innerHTML = "−";
      console.log("Done")
    }else{
      selected_element.classList.remove("minus");
      selected_element.innerHTML = "+";
      console.log("Done")

    }

  })
})