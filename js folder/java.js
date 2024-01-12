let buttonOne = document.querySelector(".offer1")
let buttonTwo = document.querySelector(".offer2")
let buttonThree = document.querySelector(".offer3")
let offerSection = document.querySelector(".offer-container-switcher")

buttonOne.addEventListener('click', function(){
    buttonOne.setAttribute("style", "background-color: orangered; color:white")
    buttonTwo.setAttribute("style", "")
    buttonThree.setAttribute("style", "")

    offerSection.innerHTML = ``
    
    offerSection.innerHTML = `  <div class="col-6 shadow-container d-flex flex-column section-two-bg2 m-auto py-5 my-5 offers-section px-4 border border-5 rounded-5 border-black">

    <i class="fa-solid fa-cube offers-section-icons  offers-section-words"></i>

    <div>
      <h3 class="fw-bolder mt-3 text-white plan-name">Economy Plan</h3>
    </div>

    <div class="d-flex justify-content-between py-2">
    <h2 class="fw-bolder offers-section-words">1500EGP</h2>
    <h2 class="fw-bolder offers-section-words">80$</h2>
  </div>

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

    offerSection.innerHTML = ` <div class="col-6 shadow-container d-flex flex-column section-two-bg2 m-auto py-5 my-5 offers-section px-4 border border-5 rounded-5 border-black">

    <i class="fa-solid fa-bolt offers-section-icons  offers-section-words"></i>

    <div>
      <h3 class="fw-bolder mt-3 text-white plan-name">Premuim Plan</h3>
    </div>

    <div class="d-flex justify-content-between py-2">
    <h2 class="fw-bolder offers-section-words">2500EGP</h2>
    <h2 class="fw-bolder offers-section-words">150$</h2>
  </div>

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

    offerSection.innerHTML = `<div class="col-6 shadow-container d-flex flex-column section-two-bg2 m-auto py-5 my-5 offers-section px-4 border border-5 rounded-5 border-black">

    <i class="fa-solid fa-shield-halved offers-section-icons  offers-section-words"></i>

    <div>
      <h3 class="fw-bolder mt-3 text-white plan-name">VIP Plan</h3>
    </div>

    <div class="d-flex justify-content-between py-2">
    <h2 class="fw-bolder offers-section-words">5000EGP</h2>
    <h2 class="fw-bolder offers-section-words">200$</h2>
  </div>

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
    
    changer.innerHTML = `<div id="success-program" class="bg-success w-25 d-flex justify-content-center m-auto border border-3 rounded-4 border-black success-program ">
    <i class="fa-solid fa-circle-check display-6 text-black"></i>
    <p class="ps-3 pt-2 fw-bolder text-black">successful</p>
</div>

<div id="faild-program" class="bg-danger w-25 d-flex justify-content-center m-auto border border-3 rounded-4 border-black success-program ">
    <i class="fa-solid fa-circle-xmark display-6 text-black"></i>
    <p class="ps-3 pt-2 fw-bolder text-black">Missing input</p>
</div>




<nav class="navbar navbar-expand-sm nav-main mb-5 " id="nav">
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

      <div onclick="arabicChange()" class="arabic-icon ">
                <img class="w-100" src="img/saudi-arabia.png" alt="">
              </div>
    </div>
  </nav>

  

  <section  id="main-container-submit" class="container">
    <div class="form-control bg-black w-75 m-auto p-5 border border-5">

        <h2 class="text-center  pb-5 fw-bolder plan-name-holder offers-section-words">${PlanName}</h2>
        <label for="Name" class="text-white pb-3 fs-5">Name :</label>
        <input id="Name" class="form-control mb-4" type="text" placeholder="Your Name" aria-label="default input example">
        
        <label for="Weight" class="text-white pb-3 fs-5">Weight :</label>
        <input id="Weight" class="form-control mb-4" type="text" placeholder="Your Weight" aria-label="default input example">
        
        <label for="phone" class="text-white pb-3 fs-5">WhatsApp Phone :</label>
        <input id="phone" class="form-control mb-4" type="text" placeholder="Enter your WhatsApp phone" aria-label="default input example">

        <label for="Age" class="text-white pb-3 fs-5">Age :</label>
        <input id="Age" class="form-control mb-4" type="text" placeholder="Your Age" aria-label="default input example">

        <label for="injuries" class="text-white pb-3 fs-5">Any injuries? :</label>
        <select id="injuries" onchange="injuries()"  class="form-select mb-4 FalseOption" aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
            <option   value="1">yes</option>
            <option  value="2">no</option>
          </select>
          <div class="injuries">
          </div>


          <label for="" class="text-white pb-3 fs-5">Any medical conditions or health problems? :</label>
          <select id="medical" onchange="medical()"  class="form-select mb-4 FalseOption2" aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
              <option   value="1">yes</option>
              <option  value="2">no</option>
            </select>
            <div class="medical">
            </div>


            <label for="" class="text-white pb-3 fs-5">Any allergies to specific types of food? :</label>
          <select id="allergies" onchange="food()"  class="form-select mb-4 FalseOption3" aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
              <option   value="1">yes</option>
              <option  value="2">no</option>
            </select>
            <div class="food">
            </div>

            <label for="" class="text-white pb-3 fs-5">Favorite food :</label>
            <textarea id="favorite"  class="form-control mb-4"  placeholder="Explan Here" rows="3"></textarea>

            <label for="" class="text-white pb-3 fs-5 ">Least favorite food :</label>
            <textarea id="Least"  class="form-control mb-4"  placeholder="Explan Here" rows="3"></textarea>

            <label for="" class="text-white pb-3 fs-5">Any experience with exercises and gym equipment? :</label>
          <select id="xp"   class="form-select mb-4 " aria-label="Default select example">
            <option selected value="2">Open this select menu</option>
              <option   value="1">yes</option>
              <option  value="2">no</option>
            </select>

            <label for="" class="text-white pb-3 fs-5">Rate your daily effort :</label>
                  <select id="daily-effort"   class="form-select mb-4 " aria-label="Default select example">
                    <option selected value="">Open this select menu</option>
                      <option   value=" Exert little effort">Exert little effort</option>
                      <option  value="Exert moderate effort">Exert moderate effort</option>
                      <option  value="Exert high effort">Exert high effort</option>
                    </select>

                    <label for="" class="text-white pb-3 fs-5 ">Specify your working hours :</label>
                    <textarea id="work-hours"  class="form-control mb-4"  placeholder="Explan Here" rows="3"></textarea>

                    <label for="" class="text-white pb-3 fs-5 ">Specify your sleeping schedule :</label>
                    <textarea id="sleep"  class="form-control mb-4"  placeholder="Explan Here" rows="3"></textarea>

                    <label for="" class="text-white pb-3 fs-5">Do you want to achieve your goal :</label>
                  <select id="achieve-goal"   class="form-select mb-4 " aria-label="Default select example">
                    <option selected value="">Open this select menu</option>
                      <option   value="in a short time with a strong plan">in a short time with a strong plan</option>
                      <option  value="moderate time with a moderate and balanced plan">moderate time with a moderate and balanced plan</option>
                      
                    </select>

          

            <label for="duration" class="text-white pb-3 fs-5">Total duration of experience :</label>
            <input id="duration" class="form-control mb-4" type="text" placeholder="Year of experience" aria-label="default input example">

            <label for="goal" class="text-white pb-3 fs-5 ">Specify and describe your goal in full :</label>
            <textarea id="goal"  class="form-control mb-4"  placeholder="Explan Here" rows="3"></textarea>

            <label for="adel" class="text-primary pb-3 fs-5 ">Write everything you want to tell Dr. Adel. :</label>
            <textarea id="adel"  class="form-control mb-4"  placeholder="Explan Here" rows="3"></textarea>


            <button onclick="GetData()"  class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-lg-3  col-md-6 ">Submit</button>


            



      </div>

      <form class="d-none "  action="https://api.web3forms.com/submit" method="POST">

      <input type="hidden" name="access_key" value="f5b4ab49-5223-430e-8066-53e7bb6c5f70">
      <input type="hidden" name="from_name" value="New Request">
      <input type="hidden" name="redirect" value="https://abderrahmannader.github.io/adel-project2/submitSuccess.html">



  
      <input id="form-name" type="text" name="request" value="https://abderrahmannader.github.io/adel-project2/datarequests.html?fbclid=IwAR0v2UkuenISr_yJVH1Ecsw0I0T6_KkvRz0TzJVgupf53QQ1xJgRsAtgoNE" >
      
      
      <button id="form-click" type="submit">Submit Form</button>
  
  </form>
  
  <script src="https://web3forms.com/client/script.js" async defer></script>

  </section>
  
 



<script src="js folder/bootstrap.bundle.min.js"></script>
<script src="js folder/java.js"></script>
`
}

function injuries(){
    let injuriesFunction = document.querySelector(".injuries")
    let FalseOption = document.querySelector(".FalseOption")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan" class=" pb-3 fs-5 text-warning">explan :</label>
        <textarea  class="form-control mb-4" id="injuriesExplan" placeholder="Explan Here" rows="3"></textarea>`
    }
    
    
}


function medical(){
    let injuriesFunction = document.querySelector(".medical")
    let FalseOption = document.querySelector(".FalseOption2")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan" class=" pb-3 fs-5 text-warning">explan :</label>
        <textarea  class="form-control mb-4" id="medicalexplan" placeholder="Explan Here" rows="3"></textarea>`
    }
    
    
}

function food(){
    let injuriesFunction = document.querySelector(".food")
    let FalseOption = document.querySelector(".FalseOption3")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan " class=" pb-3 fs-5 text-warning">explan :</label>
        <textarea  class="form-control mb-4" id="foodexplan" placeholder="Explan Here" rows="3"></textarea>`
    }
    
    
}



async function GetData() {
    let Name = document.querySelector("#Name")
    let Weight = document.querySelector("#Weight")
    let phone = document.querySelector("#phone")
    let injuries = document.querySelector("#injuries")
    let medical = document.querySelector("#medical")
    let allergies = document.querySelector("#allergies")
    let favorite = document.querySelector("#favorite")
    let Least = document.querySelector("#Least")
    let xp = document.querySelector("#xp")
    let duration = document.querySelector("#duration")
    let goal = document.querySelector("#goal")
    let Age = document.querySelector("#Age")
    let adel = document.querySelector("#adel")
    let injuriesExplan = document.querySelector("#injuriesExplan")
    let medicalexplan = document.querySelector("#injuriesExplan")
    let foodexplan = document.querySelector("#foodexplan")


    let dailyEffort = document.querySelector("#daily-effort")
    let workHours = document.querySelector("#work-hours")
    let sleep = document.querySelector("#sleep")
    let achieveGoal = document.querySelector("#achieve-goal")
   
    let planName = document.querySelector(".plan-name-holder")

     
    var injuriesExplanChecker
    var medicalExplanChecker
    var foodexplanExplanChecker

    if(injuriesExplan == null){
         injuriesExplanChecker = ""

    }else{
        injuriesExplanChecker = injuriesExplan.value

    }

    if(medicalexplan == null){
        medicalExplanChecker = ""
    }else{
        medicalExplanChecker = medicalexplan.value
    }

    if(foodexplan == null){
        foodexplanExplanChecker = ""
        
    }else{
        foodexplanExplanChecker = foodexplan.value

    }

    
    

    let date = new Date()

    let fullDate = date.getDate()+"/"+date.getMonth()+1+"/"+ date.getFullYear()



    
    console.log(foodexplan)

    data = {
        clientName : Name.value,
        clientWeight : Weight.value,
        clientPhone : phone.value,
        clientInjuries : injuries.value,
        clientMedical : medical.value,
        clientAllergies: allergies.value,
        clientFavorite: favorite.value,
        clientleast: Least.value,
        clientXp: xp.value,
        clientDuration: duration.value,
        clientGoal: goal.value,
        clientAge: Age.value,
        clientAdel: adel.value,
        
        clientInjuriesExplan: injuriesExplanChecker,
        clientMedicalExplan: medicalExplanChecker,
        clientFoodExplan: foodexplanExplanChecker,
        
        clientDate : fullDate,

        clientDailyEffort : dailyEffort.value,
        clientWorkHours : workHours.value,
        clientSleep : sleep.value,
        clientAchieveGoal : achieveGoal.value,
        clientPlanName: planName.innerHTML,



        
    }

    console.log(data)

    if( Name.value != "" && phone.value != "" ){

        clicked()
        

        let successfull = document.querySelector(".success-program")

    
    successfull.setAttribute("style", "top: 30%;")

    setTimeout(() => {
        successfull.setAttribute("style", "top: -10%;");
      }, 3000);

      getFunction = await fetch("https://6598e1f5a20d3dc41cef0674.mockapi.io/clinets",{
      method : 'POST',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json'}
    })


    

      Name.value = ""
    Weight.value = ""
    injuries.value = ""
    medical.value = ""
    allergies.value = ""
    favorite.value = ""
    Least.value = ""
    xp.value = ""
    duration.value = ""
    goal.value = ""
    Age.value = ""
    adel.value = ""
    phone.value = ""
    injuriesExplan.value = ""
    medicalexplan.value = ""
    foodexplan.value = ""

    }else{
        let faild = document.querySelector("#faild-program")

      faild.setAttribute("style", "top: 30%;")

    setTimeout(() => {
        faild.setAttribute("style", "top: -10%;");
      }, 3000);

    }


    



     

    


 

    
    
}



function arabicChange(){

    let main = document.querySelector("#main-container-submit")
    let PlanName = document.querySelector(".offers-section-words").innerHTML

    
    console.log(PlanName)

    if(PlanName == "Economy Plan"){
        PlanName = "الخطة الاقتصادية"
    }
    if (PlanName == "Premuim Plan") {
        PlanName = "الخطة المميزة"
        
    }
    if (PlanName == "VIP Plan") {
        PlanName = "الخطة الخاصة"
        
    }
        
        
    


    main.setAttribute("dir", "rtl")

    main.innerHTML = `
    <div class="form-control bg-black w-75 m-auto p-5 border border-5">
    
        <h2 class="text-center  pb-5 fw-bolder plan-name-holder application offers-section-words">${PlanName}</h2>
        <label for="Name" class="text-white pb-3 fs-5 name">الاسم :</label>
        <input id="Name" class="form-control mb-4" type="text" placeholder="اسمك" aria-label="default input example">
        
        <label for="Weight" class="text-white pb-3 fs-5 weight">الوزن :</label>
        <input id="Weight" class="form-control mb-4" type="text" placeholder="اكتب وزنك" aria-label="default input example">
        
        <label for="phone" class="text-white pb-3 fs-5 Phone">رقم الوتساب :</label>
        <input id="phone" class="form-control mb-4" type="text" placeholder="اكتب رقم الوتساب الخاص بك" aria-label="default input example">
    
        <label for="Age" class="text-white pb-3 fs-5 age">السن :</label>
        <input id="Age" class="form-control mb-4" type="text" placeholder="اكتب سنك" aria-label="default input example">
    
        <label for="injuries" class="text-white pb-3 fs-5 ">هل يوجد اي اصابات ؟ :</label>
        <select id="injuries" onclick="injuriesArabic()"  class="form-select mb-4 FalseOption" aria-label="Default select example">
            <option class="open-window" selected value="2">افتح النافذة</option>
            <option class="yes"   value="1">نعم</option>
            <option class="no"  value="2">لا</option>
          </select>
          <div class="injuries">
          </div>
    
    
          <label for="" class="text-white pb-3 fs-5  medical-conditions">هل يوجد اي امراض او مشاكل صحيه ؟ :</label>
          <select id="medical" onchange=" medicalArabic()"  class="form-select mb-4 FalseOption2" aria-label="Default select example">
            <option class="open-window" selected value="2">افتح النافذة</option>
              <option class="yes"   value="1">نعم</option>
              <option class="no"  value="2">لا</option>
            </select>
            <div class="medical">
            </div>
    
    
            <label for="" class="text-white pb-3 fs-5 allergies">هل يوجد حساسيه تجاه انواع معينه من الطعام ؟  :</label>
          <select id="allergies" onclick="foodArabic()"  class="form-select mb-4 FalseOption3" aria-label="Default select example">
            <option class="open-window" selected value="2">افتح النافذة</option>
              <option class="yes"   value="1">نعم</option>
              <option class="no"  value="2">لا</option>
            </select>
            <div class="food">
            </div>
    
            <label for="" class="text-white pb-3 fs-5 Favorite-food">الطعام المفضل :</label>
            <textarea id="favorite"  class="form-control mb-4"  placeholder="اشرح" rows="3"></textarea>
    
            <label for="" class="text-white pb-3 fs-5 Least-favorite">الطعام الغير مفضل :</label>
            <textarea id="Least"  class="form-control mb-4"  placeholder="اشرح" rows="3"></textarea>
    
            <label for="" class="text-white pb-3 fs-5 gym-equipment">هل يوجد خبره بالتمارين والاجهزه الرياضيه فالجيم ؟ :</label>
          <select id="xp"   class="form-select mb-4 " aria-label="Default select example">
            <option class="open-window" selected value="2">افتح النافذة</option>
              <option class="yes"   value="1">نعم</option>
              <option class="no"  value="2">لا</option>
            </select>
    
    
    
    
            <label for="" class="text-white pb-3 fs-5 daily-effort">قيم مجهودك اليومي  :</label>
          <select id="daily-effort"   class="form-select mb-4 " aria-label="Default select example">
            <option class="open-window" selected value="">افتح النافذة</option>
              <option class="little-effort"  value=" Exert little effort">ابذل مجهود قليل</option>
              <option class="moderate-effort"  value="Exert moderate effort">ابذل مجهود متوسط</option>
              <option  class="high-effort" value="Exert high effort">ابذل مجهود عالي  </option>
            </select>
    
            <label for="" class="text-white pb-3 fs-5 working-hours ">حدد مواعيد عملك :</label>
            <textarea id="work-hours"  class="form-control mb-4"  placeholder="اشرح" rows="3"></textarea>
    
            <label for="" class="text-white pb-3 fs-5 sleeping-schedule">حدد مواعيد النوم :</label>
            <textarea id="sleep"  class="form-control mb-4"  placeholder="اشرح" rows="3"></textarea>
    
            <label for="" class="text-white pb-3 fs-5 achieve">هل تريد ان تصل لهدفك :</label>
          <select id="achieve-goal"   class="form-select mb-4 " aria-label="Default select example">
            <option selected value="">افتح النافذة</option>
              <option   value="in a short time with a strong plan">في وقت قصير لكن النظام سيكون قوي         </option>
              <option  value="moderate time with a moderate and balanced plan">في وقت متوسط والنظام سيكون بشده متوسطه ومعتدله</option>
              
            </select>
    
    
    
          
    
            <label for="duration" class="text-white pb-3 fs-5">اجمالي مده الخبره :</label>
            <input id="duration" class="form-control mb-4" type="text" placeholder="سنوات الخبرة" aria-label="default input example">
    
            <label for="goal" class="text-white pb-3 fs-5 ">حدد واوصف هدفك بشكل كامل :</label>
            <textarea id="goal"  class="form-control mb-4"  placeholder="اشرح" rows="3"></textarea>
    
            <label for="adel" class="text-primary pb-3 fs-5 ">اكتب كل ماتريد ل دكتور عادل :</label>
            <textarea id="adel"  class="form-control mb-4"  placeholder="اشرح" rows="3"></textarea>
    
    
            <button onclick="GetData()"  class="btn btn-primary button-main mb-5 py-2 px-4 mt-4 col-lg-3  col-md-6 ">ارسال</button>
    
    
            
    
    
    
      </div>
      
      <form class="d-none "  action="https://api.web3forms.com/submit" method="POST">

      <input type="hidden" name="access_key" value="f5b4ab49-5223-430e-8066-53e7bb6c5f70">
      <input type="hidden" name="from_name" value="New Request">
      <input type="hidden" name="redirect" value="https://abderrahmannader.github.io/adel-project2/submitSuccess.html">



  
      <input id="form-name" type="text" name="request" value="https://abderrahmannader.github.io/adel-project2/datarequests.html?fbclid=IwAR0v2UkuenISr_yJVH1Ecsw0I0T6_KkvRz0TzJVgupf53QQ1xJgRsAtgoNE" >
      
      
      <button id="form-click" type="submit">Submit Form</button>
  
  </form>
  
  <script src="https://web3forms.com/client/script.js" async defer></script>
      
      
      `
}


function injuriesArabic(){
    let injuriesFunction = document.querySelector(".injuries")
    let FalseOption = document.querySelector(".FalseOption")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan" class=" pb-3 fs-5 text-warning">اشرح :</label>
        <textarea  class="form-control mb-4" id="injuriesExplan" placeholder="اشرح هنا" rows="3"></textarea>`
    }
    
    
}

function medicalArabic(){
    let injuriesFunction = document.querySelector(".medical")
    let FalseOption = document.querySelector(".FalseOption2")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan" class=" pb-3 fs-5 text-warning">اشرح :</label>
        <textarea  class="form-control mb-4" id="medicalexplan" placeholder="اشرح هنا" rows="3"></textarea>`
    }
    
    
}

function foodArabic(){
    let injuriesFunction = document.querySelector(".food")
    let FalseOption = document.querySelector(".FalseOption3")

    if(FalseOption.value == 2){
        injuriesFunction.innerHTML = ``

    }else{
        injuriesFunction.innerHTML = ` <label for="explan " class=" pb-3 fs-5 text-warning">اشرح :</label>
        <textarea  class="form-control mb-4" id="foodexplan" placeholder="اشرح هنا" rows="3"></textarea>`
    }
    
    
}

function clicked(){

    document.querySelector("#form-click").click()


}


function clicked2(){
  let newletter = document.querySelector("#newsletterSub").value
  let newletterSender = document.querySelector("#form-name").value

newletterSender = newletter
  


  document.querySelector("#form-click2").click()


}

