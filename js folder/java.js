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
      <h3 class="fw-bolder mt-3 text-white">Economy Plan</h3>
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

    
      <button class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-6">Choose Plan</button>


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
      <h3 class="fw-bolder mt-3 text-white">Premuim Plan</h3>
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

    
      <button class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-6">Choose Plan</button>


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
      <h3 class="fw-bolder mt-3 text-white">VIP Plan</h3>
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

      <button class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-6">Choose Plan</button>



  </div>`
})

