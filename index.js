const billAmount = document.querySelector("#bill-amount");
const next = document.querySelector("#next");
const afterNext = document.querySelector(".rest");
// console.log(billAmount.value);
const cashGiven  = document.querySelector("#cash-give");
const checkButton =  document.querySelector("#check-button");
const message1 = document.querySelector("#error-message1");
const message2 = document.querySelector("#error-message2");
const notesToReturn = document.querySelectorAll(".no-of-notes");
const table = document.querySelector(".change-table");
const showmsg = document.querySelector(".header-change");
// data structure to store the no of notes-an array;
const notesWithUs = [2000,500,100,20,10,5,1];


// To bi-default keep the part after next button as hidden
function hideRest(){
afterNext.style.display = "none";
}
hideRest();

    // Logic for minimum no of notes
function calculateChange(val){
    table.style.display = "block";
    for(i=0;i<notesWithUs.length;i++){
        const noOfNotes = Math.trunc(
            val / notesWithUs[i]);

        val = val % notesWithUs[i];
        // console.log(notesToReturn[i])
        // console.log("note is",notesWithUs[i],"diff is",val, "Total count req",noOfNotes)
        notesToReturn[i].innerText = noOfNotes;
       


    }

};


next.addEventListener('click',function show(){
    showmsg.style.display = "none";
    if(billAmount.value.length == 0){
        showMessage(message1,"Kindly Enter Valid Bill amount");
    
     
    }
else{
            hideMsg(message1);
        afterNext.style.display = "block";
        table.style.display = "none";
        next.style.display ='none';
        
}
    

});



checkButton.addEventListener("click", function validateBillAndCashAmount() {
  
   
 if(cashGiven.value.length == 0){
  
    showMessage(message2, 'Kindly enter valid cash value');
   
     
 }


 
else if(billAmount.value <= cashGiven.value){
    table.style.display = 'block';
    showmsg.style.display = "block";
    
    
    const diff = cashGiven.value - billAmount.value ;
    calculateChange(diff);


}
else if(billAmount.value > cashGiven.value){
    showMessage(message2, "The cash provided should be greater than the bill amount.")
 
     
}


 
   
   
});
// function to hide the default msg, so that body appears only on wrong inputs
function hideMsg(message){
    message.style.display = "none";
   
} 
function showMessage(containr, msg){
    // console.log(msg);
    containr.style.display ="block";
        containr.innerText = msg;
}