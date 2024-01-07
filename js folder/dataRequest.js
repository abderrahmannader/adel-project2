
dataRequest()

async function dataRequest(){

    response = await fetch("https://6598e1f5a20d3dc41cef0674.mockapi.io/clinets")
    finalRespnse = await response.json()
    console.log(finalRespnse)

 


    dataAdder = ``
    for(let i = 0 ; i < finalRespnse.length; i++){

        if(finalRespnse[i].clientInjuries == "2"){
            finalRespnse[i].clientInjuries = "no"
        }else{
            finalRespnse[i].clientInjuries = "yes"
        }
    
        if(finalRespnse[i].clientMedical == "2"){
            finalRespnse[i].clientMedical = "no"
        }else{
            finalRespnse[i].clientMedical = "yes"
        }
    
        if(finalRespnse[i].clientAllergies == "2"){
            finalRespnse[i].clientAllergies = "no"
        }else{
            finalRespnse[i].clientAllergies = "yes"
        }
    
        if(finalRespnse[i].clientXp == "2"){
            finalRespnse[i].clientXp = "no"
        }else{
            finalRespnse[i].clientXp = "yes"
        }
    

        dataAdder += `<h5 class="text-center fs-4 fw-bolder text-white">Client${i + 1}</h5>
        <h6 class="fw-bold fs-5 text-white pb-3 text-center pt-2">Plan: <span class="ps-3 fw-bolder text-warning">${finalRespnse[i].clientPlanName}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3 text-center pt-2">Date: <span class="ps-3 fw-bolder text-warning">${finalRespnse[i].clientDate}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Name: <span class="ps-3 text-success">${finalRespnse[i].clientName}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Weight: <span class="ps-3 text-success">${finalRespnse[i].clientWeight}Kg</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Phone: <span class="ps-3 text-success">${finalRespnse[i].clientPhone}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Age: <span class="ps-3 text-success">${finalRespnse[i].clientAge}Years</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Injuries: <span class="ps-3 text-success">${finalRespnse[i].clientInjuries}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">InjuriesDesc: <span class="ps-3 text-success">${finalRespnse[i].clientInjuriesExplan}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Medical condition: <span class="ps-3 text-success">${finalRespnse[i].clientMedical}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Medical conditionDesc: <span class="ps-3 text-success">${finalRespnse[i].clientMedicalExplan}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">allergies food: <span class="ps-3 text-success">${finalRespnse[i].clientAllergies}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">allergies foodDesc: <span class="ps-3 text-success">${finalRespnse[i].clientFoodExplan}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Favorite food: <span class="ps-3 text-success">${finalRespnse[i].clientFavorite}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">Least food: <span class="ps-3 text-success">${finalRespnse[i].clientleast}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">exp/exerises: <span class="ps-3 text-success">${finalRespnse[i].clientXp}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">exp/duration food: <span class="ps-3 text-success">${finalRespnse[i].clientDuration}Years</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">specify desc: <span class="ps-3 text-success">${finalRespnse[i].clientGoal}</span></h6>
        <h6 class="fw-bold fs-5 text-white pb-3">message for you: <span class="ps-3 text-success">${finalRespnse[i].clientAdel}</span></h6>
        
        <hr class="bg-warning mb-3">`

    }

    document.querySelector(".adder").innerHTML = dataAdder
}