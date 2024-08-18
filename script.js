// password generater variables
let Array =
  "0123456789qwertyuioplkjhgfdsazxcvbnmQAZWSXEDCRFVTGBYHNUJMIKOLP@#$%^&*?/|!";
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let img = document.getElementById("img");

// toast notification variables
let buttons = document.getElementById("buttons");
let Successbtn = document.getElementById("Successbtn");
let Errorbtn = document.getElementById("Errorbtn");
let Invalidbtn = document.getElementById("Invalidbtn");
let toastContainer = document.getElementById("toastContainer");

// password Generater logic starts here..
function generatePassword() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    let random = Math.round(Math.random() * 73);
    password += Array[random];
  }
  console.log(password);
  return password;
}

btn.addEventListener("click",function () {
    input.value = generatePassword();
    let successdiv = document.createElement("div");
    successdiv.classList.add("successdiv");
    let successImg = document.createElement("img");
    successImg.src =
      "https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png";
    successImg.classList.add("successImg");
    let p = document.createElement("p");
    p.innerHTML = "Password Generated.";
    p.classList.add("successText");
    console.log("Success button clicked");
    successdiv.appendChild(successImg);
    successdiv.appendChild(p);
    toastContainer.appendChild(successdiv);
    setTimeout(() => {
      successdiv.remove();
    }, 5000);
  }
),false;

img.addEventListener("click",function (e) {
    input.select();
    navigator.clipboard.writeText(input.value);
    input.value = "";
    let Errordiv = document.createElement('div');
        Errordiv.classList.add('Errordiv');
        let ErrorImg = document.createElement('img');
        ErrorImg.src = "https://www.freeiconspng.com/uploads/copy-icon-17.jpg";
        ErrorImg.classList.add('successImg');
        let p = document.createElement('p');
        p.innerHTML = "Password Copied";
        p.classList.add('ErrorText');
        Errordiv.appendChild(ErrorImg);
        Errordiv.appendChild(p);
        toastContainer.appendChild(Errordiv);
        console.log("Error button clicked");
        setTimeout(()=>{
            Errordiv.remove();
        },5000)
  }
),false;