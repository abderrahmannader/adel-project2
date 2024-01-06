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
        clientInjuriesExplan: injuriesExplan.value,
        clientMedicalExplan: medicalexplan.value,
        clientFoodExplan: foodexplan.value,


        
    }

    console.log(data)

    if( Name.value != "" && phone.value != "" ){

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



