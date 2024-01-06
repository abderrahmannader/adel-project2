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




