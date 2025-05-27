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