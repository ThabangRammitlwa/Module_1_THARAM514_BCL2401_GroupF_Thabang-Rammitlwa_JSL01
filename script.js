function validateSyntax() {
    let petInput = document.getElementById('petInput').value.trim();
    let regex = /^pet_[a-zA-Z0-9]+$/;
    let isValid=regex.test(petInput)
    let resultElement=document.getElementById ('result'); 

    
    if (isValid) {
        resultElement.innerHTML = "Valid syntax." + '<span style="color: green; font-size: 50px;">&#x25cf;</span>';
    } else {
        resultElement.innerHTML = "Invalid syntax." + '<span style="color: red; font-size: 50px;">&#x25cf;</span>';
    }

}


