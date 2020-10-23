
window.onload = function(){

    //#region DOM recup dans le html

    const container = document.querySelector("#container");

    const pseudo = document.querySelector("#pseudo");
    //pseudo.value = "Noa";
    
    const password = document.querySelector("#mdp");
    //password.value = "a";
    const email = document.querySelector("#courriel");
    //email.value = "noa@test.com";

    const eye = document.querySelector("#eyebutton");
    //eye.value = "⊝";

    const valider = document.querySelector("#valider");

    const boxResult = document.querySelector("#resultats");

    const pseudoResult = document.querySelector("#pseudoResult");
    
    const passwordResult = document.querySelector("#mdpResult");
    
    const emailResult = document.querySelector("#mailResult");
    

    //#endregion

    //#region Variables

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let eyeflag = false;

    //#endregion

    function verifPseudo (nom){
        if(3 <= nom.value.length && nom.value.length <= 10){
            pseudoResult.innerHTML = "Le pseudo", pseudo.value, "est valide";
            flag1 = true;
        }
        else{
            pseudoResult.innerHTML = "Votre pseudo doit faire entre 3 et 10 caractères";
            flag1 = false;
        }
    }

    function verifMdp (mdp){
        if(5 <= mdp.value.length){
            passwordResult.innerHTML = "Le mot de passe est valide";
            flag2 = true;
        }
        else{
            passwordResult.innerHTML = "Le mot de passe doit faire au moins 5 caractères";
            flag2 = false;
        }
    }

    function verifMail (mail){
        if(mail.value.match(mailformat)){
            emailResult.innerHTML = "L'adresse mail est valide";
            flag3 = true;
        }
        else{
            emailResult.innerHTML = "L'adresse mail doit etre au format utilisateur@domaine.fr";
            flag3 = false;
        }
    }

    function verifFlags (a,b,c){
        if(a == true && b == true && c == true){
            container.style.backgroundColor = "green";
        }
        else{
            container.style.backgroundColor = "red";
        }
    }

    function Hidepwd(){
        if(eyeflag == false){
            password.type = "text";
            eye.value = "⊝";
            eyeflag = true;
        }
        else{
            password.type = "password";
            eye.value = "⊙";
            eyeflag = false;
        }
    }


    valider.addEventListener("click", (e) => {
        verifPseudo(pseudo);
        verifMdp(password);
        verifMail(email);
        boxResult.style.display = "block";
        verifFlags(flag1,flag2,flag3);

    })

    eye.addEventListener("click", (e) => {
        Hidepwd();
    })



}

