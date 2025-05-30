const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let btn = document.getElementById('button')
let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById('pass2')
let password = ""
let password2 = ""

btn.addEventListener('click',()=>{

for(let i = 0; i<= 15; i++){
 let randomNum = Math.floor(Math.random() * characters.length)
 password += characters[randomNum]   
}
for(let i = 0; i<= 15; i++){
 let randomNum2 = Math.floor(Math.random() * characters.length)
 password2 += characters[randomNum2]   
}
pass1.textContent = password;
pass2.textContent = password2;
password = ""
password2= ""
})

pass1.addEventListener('click',()=>{
    navigator.clipboard.writeText(pass1.textContent)
    .then(()=>{pass1.textContent = "Copied Successfully"})
    .catch(()=>{pass1.textContent = "Failed"})
})