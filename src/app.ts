// Code goes here!
const form:HTMLElement = document.querySelector('form')!
const addressInput:HTMLInputElement= document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event:Event){
  event.preventDefault();
const enteredAddres = addressInput.value;
console.log(enteredAddres)
}
form?.addEventListener('submit',searchAddressHandler)