const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const Cpassword=document.getElementById('Cpassword')

    // check the "submit" event is happening
    //sent event as parameter 
form.addEventListener('submit',(e)=>{
    // prevent submitting the form
    e.preventDefault();
    validateInput();
})

function validateInput(){
 const usernameVal=username.value.trim();
 const emailVal=email.value.trim();
 const passwordVal=password.value.trim();
 const CpasswordVal=Cpassword.value.trim();

if(usernameVal===''){
    setError(username,'Username is required')
}else{
    setSuccess(username)
}

if(emailVal===''){
    setError(email,'Email is required')
}else if(!validateEmail(emailVal)){
    setError(email,'Please enter valid email')
}else{
    setSuccess(email)
}

if(passwordVal===''){
    setError(password,'Password is required')
}else if(passwordVal.length<8){
    setError(password,'Password must be atleast 8 character')
}else{
    setSuccess(password)
}
if(CpasswordVal===''){
    setError(Cpassword,'Cofirm password is required')
}else if(CpasswordVal!==passwordVal){
    setError(Cpassword,'Password does not match')
}else{
    setSuccess(Cpassword)
}


}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};

