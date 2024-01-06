let buttonOne = document.querySelector(".offer1")
let buttonTwo = document.querySelector(".offer2")
let buttonThree = document.querySelector(".offer3")
let offerSection = document.querySelector(".offer-container-switcher")

buttonOne.addEventListener('click', function(){
    buttonOne.setAttribute("style", "background-color: orangered; color:white")
    buttonTwo.setAttribute("style", "")
    buttonThree.setAttribute("style", "")

    offerSection.innerHTML = ``
    
    offerSection.innerHTML = `  <div class="col-6 shadow-container d-flex flex-column bg-black m-auto py-5 my-5 offers-section px-4 border border-5 rounded-5 border-black">

    <i class="fa-solid fa-cube offers-section-icons  offers-section-words"></i>

    <div>
      <h3 class="fw-bolder mt-3 text-white plan-name">Economy Plan</h3>
    </div>

    <h2 class="fw-bolder offers-section-words">1500EGP</h2>

    <div class="w-100 hr1 bg-white"></div>

    <h3 class="pt-3 offers-section-words">Three-month follow-up with Dr. Adel.</h2>


      <div class="d-flex justify-content-start align-items-start pt-3">
        <i class="fa-solid fa-circle-check pe-2 text-white "></i><p class="text-white">Comprehensive dietary system that includes vitamins and minerals, designed based on each trainee's goal.</p>

      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Trainee's financial situation.                  </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Work and sleep schedules.                  </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Daily physical effort.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Preferred and non-preferred foods.


        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Calculating exercise intensity based on the trainee's current level.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Dealing with injuries.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Warm-up exercises.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Developing weak muscles and increasing strong muscles for muscular symmetry.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Gym or home training programs.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Ability to periodically modify and evolve exercises.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Daily monitoring and answering questions during the follow-up period at a fixed time.

        </p>
        
      </div>

    
      <a href="#nav"><button onclick="offerPage()" class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-lg-3  col-md-6 ">Choose Plan</button></a>


  </div>`
})

buttonTwo.addEventListener('click', function(){
    buttonTwo.setAttribute("style", "background-color: orangered; color:white")
    buttonOne.setAttribute("style", "")
    buttonThree.setAttribute("style", "")
    offerSection.innerHTML = ``

    offerSection.innerHTML = ` <div class="col-6 shadow-container d-flex flex-column bg-black m-auto py-5 my-5 offers-section px-4 border border-5 rounded-5 border-black">

    <i class="fa-solid fa-bolt offers-section-icons  offers-section-words"></i>

    <div>
      <h3 class="fw-bolder mt-3 text-white plan-name">Premuim Plan</h3>
    </div>

    <h2 class="fw-bolder offers-section-words">2500EGP</h2>

    <div class="w-100 hr1 bg-white"></div>

    <h3 class="pt-3 offers-section-words">Four-month follow-up with Dr. Adel.   </h2>


      <div class="d-flex justify-content-start align-items-start pt-3">
        <i class="fa-solid fa-circle-check pe-2 text-white "></i><p class="text-white">Comprehensive dietary system that includes vitamins and minerals, designed based on each trainee's goal.</p>

      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Trainee's financial situation.                  </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Work and sleep schedules.                  </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Daily physical effort.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Preferred and non-preferred foods.


        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Calculating exercise intensity based on the trainee's current level.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Dealing with injuries.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Warm-up exercises.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Developing weak muscles and increasing strong muscles for muscular symmetry.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Gym or home training programs.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Ability to periodically modify and evolve exercises.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Daily monitoring and answering questions during the follow-up period at a fixed time.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-warning">Scheduled phone calls during the follow-up period.


        </p>
        
      </div>

    
      <a href="#nav"><button onclick="offerPage()" class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-lg-3  col-md-6 ">Choose Plan</button></a>


  </div>`


})


buttonThree.addEventListener('click', function(){
    buttonThree.setAttribute("style", "background-color: orangered; color:white")
    buttonOne.setAttribute("style", "")
    buttonTwo.setAttribute("style", "")

    offerSection.innerHTML = ``

    offerSection.innerHTML = `<div class="col-6 shadow-container d-flex flex-column bg-black m-auto py-5 my-5 offers-section px-4 border border-5 rounded-5 border-black">

    <i class="fa-solid fa-shield-halved offers-section-icons  offers-section-words"></i>

    <div>
      <h3 class="fw-bolder mt-3 text-white plan-name">VIP Plan</h3>
    </div>

    <h2 class="fw-bolder offers-section-words">5000EGP</h2>

    <div class="w-100 hr1 bg-white"></div>

    <h3 class="pt-3 offers-section-words">Six-month follow-up with Dr. Adel.              </h2>


      <div class="d-flex justify-content-start align-items-start pt-3">
        <i class="fa-solid fa-circle-check pe-2 text-white "></i><p class="text-white">Comprehensive dietary system that includes vitamins and minerals, designed based on each trainee's goal.</p>

      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Trainee's financial situation.                  </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Work and sleep schedules.                  </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Daily physical effort.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Preferred and non-preferred foods.


        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Calculating exercise intensity based on the trainee's current level.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Dealing with injuries.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Warm-up exercises.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Developing weak muscles and increasing strong muscles for muscular symmetry.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Gym or home training programs.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Ability to periodically modify and evolve exercises.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-white">Daily monitoring and answering questions during the follow-up period at a fixed time.

        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-warning">Scheduled phone calls during the follow-up period.


        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-warning">Monthly video call for evaluating the trainee's physical and training level.


        </p>
        
      </div>

      <div class="d-flex justify-content-start align-items-start">
        <i class="fa-solid fa-circle-check pe-2 text-white"></i><p class="text-warning">Certificate of appreciation with each trainee's name at the end of the follow-up period.


        </p>
        
      </div>

      <a href="#nav"><button onclick="offerPage()" class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-lg-3  col-md-6 ">Choose Plan</button></a>



  </div>`
})


function offerPage(){

    let PlanName = document.querySelector(".plan-name").innerHTML
    
    
    let changer = document.querySelector(".changer")

    changer.setAttribute('style', 'background-color:black')
    
    changer.innerHTML = `<nav id="nav" class="navbar navbar-expand-sm nav-main mb-5 ">
    <div class="container  ">
      <a class="navbar-brand logo" href="#"><img class="w-100" src="img/2.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-auto " id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item pe-3">
            <a class="nav-link active text-white fw-bolder " aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item pe-3">
            <a class="nav-link text-white fw-bolder" href="#">Plans & Pricings</a>
          </li>
          <li class="nav-item pe-3">
            <a class="nav-link text-white fw-bolder" href="#">About Us</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-white fw-bolder" href="#">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>

  <section class="container">
    <div class="form-control bg-black w-75 m-auto p-5 border border-5">

        <h2 class="text-center  pb-5 fw-bolder offers-section-words">${PlanName}</h2>
        <label for="Name" class="text-white pb-3 fs-5">Name :</label>
        <input id="Name" class="form-control mb-4" type="text" placeholder="Your Name" aria-label="default input example">
        
        <label for="Weight" class="text-white pb-3 fs-5">Weight :</label>
        <input id="Weight" class="form-control mb-4" type="text" placeholder="Your Weight" aria-label="default input example">
        
        <label for="Weight" class="text-white pb-3 fs-5">Age :</label>
        <input id="Weight" class="form-control mb-4" type="text" placeholder="Your Age" aria-label="default input example">

        <label for="injuries" class="text-white pb-3 fs-5">Any injuries? :</label>
        <select onclick="injuries()"  class="form-select mb-4 FalseOption" aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
            <option   value="1">yes</option>
            <option  value="2">no</option>
          </select>
          <div class="injuries">
          </div>


          <label for="" class="text-white pb-3 fs-5">Any medical conditions or health problems? :</label>
          <select onclick="medical()"  class="form-select mb-4 FalseOption2" aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
              <option   value="1">yes</option>
              <option  value="2">no</option>
            </select>
            <div class="medical">
            </div>


            <label for="" class="text-white pb-3 fs-5">Any allergies to specific types of food? :</label>
          <select onclick="food()"  class="form-select mb-4 FalseOption3" aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
              <option   value="1">yes</option>
              <option  value="2">no</option>
            </select>
            <div class="food">
            </div>

            <label for="" class="text-white pb-3 fs-5">Favorite food :</label>
            <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>

            <label for="" class="text-white pb-3 fs-5 ">Least favorite food :</label>
            <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>

            <label for="" class="text-white pb-3 fs-5">Any experience with exercises and gym equipment? :</label>
          <select   class="form-select mb-4 " aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
              <option   value="1">yes</option>
              <option  value="2">no</option>
            </select>

          

            <label for="xp" class="text-white pb-3 fs-5">Total duration of experience :</label>
            <input id="xp" class="form-control mb-4" type="text" placeholder="Year of experience" aria-label="default input example">

            <label for="" class="text-white pb-3 fs-5 ">Specify and describe your goal in full :</label>
            <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>

            <label for="" class="text-primary pb-3 fs-5 ">Write everything you want to tell Dr. Adel. :</label>
            <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>

            <button  class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-lg-3  col-md-6 ">Choose Plan</button>
            



      </div>

  </section>
  
 



<script src="js folder/bootstrap.bundle.min.js"></script>
<script src="js folder/java.js"></script>`
}

function injuries(){
    let injuriesFunction = document.querySelector(".injuries")
    let FalseOption = document.querySelector(".FalseOption")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan" class=" pb-3 fs-5 text-warning">explan :</label>
        <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>`
    }
    
    
}


function medical(){
    let injuriesFunction = document.querySelector(".medical")
    let FalseOption = document.querySelector(".FalseOption2")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan" class=" pb-3 fs-5 text-warning">explan :</label>
        <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>`
    }
    
    
}

function food(){
    let injuriesFunction = document.querySelector(".food")
    let FalseOption = document.querySelector(".FalseOption3")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan " class=" pb-3 fs-5 text-warning">explan :</label>
        <textarea  class="form-control mb-4" id="explan" placeholder="Explan Here" rows="3"></textarea>`
    }
    
    
}

