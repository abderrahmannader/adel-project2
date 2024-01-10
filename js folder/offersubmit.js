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



arabicChange()
function arabicChange(){

    let main = document.querySelector("#main-container-submit")

    main.setAttribute("dir", "rtl")

    main.innerHTML = `
    <div class="form-control bg-black w-75 m-auto p-5 border border-5">
    
        <h2 class="text-center text-white pb-5 fw-bolder application">الاستمارة</h2>
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
      
      <form class="d-none"  action="https://api.web3forms.com/submit" method="POST">

            <input type="hidden" name="access_key" value="f5b4ab49-5223-430e-8066-53e7bb6c5f70">
        
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