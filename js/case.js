

// Case 

function updateCaseNumber(isIncrease){
    const caseNumberField= document.getElementById('case-number-field');
    const caseNumberString=caseNumberField.value ;
    const previousCaseNumber= parseInt(caseNumberString);
    
  
    let newCaseNumber;
    if(isIncrease == true){

        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
     
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
        
    updateCaseNumber(true)
       
    const totalCasePrice = newCaseNumber * 59 ;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = totalCasePrice;
       })

       document.getElementById('btn-case-mainus').addEventListener('click',function(){
        updateCaseNumber(false)

       })





// Phone

function updatePhoneNumber(isIncrease){
    const phoneNumberField= document.getElementById('phone-number-field');
    const phoneNumberString=phoneNumberField.value ;
    const previousPhoneNumber= parseInt(phoneNumberString);
    
  
    let newPhoneNumber;
    if(isIncrease == true){

        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
     
    return newCaseNumber;
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
        
    updatePhoneNumber(true)
       
       })

       document.getElementById('btn-phone-mainus').addEventListener('click',function(){
        updatePhoneNumber(false)

       })









