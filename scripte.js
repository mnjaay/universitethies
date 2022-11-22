function connexion(){
    var mess=document.querySelector(".mess")
    var iden=document.getElementById('iden').value;
    var pwd=document.getElementById('pwd').value;
    const connect=document.querySelector("#connect");
    var iden1="papehamou@univ-thies.sn";
    var pwd1="11111";
        if((iden==iden1)&&(pwd1==pwd)){
         
            
        principale.style.display='initial';
        identification_1.style.display='none';
        identification_2.style.display='none';
        }
        else{
            
        mess.style.display='initial';
        identification_2.style.display='initial';
        }

    }

    function aff_inscription(){
        var mess1=document.querySelector('.mess1');
        let inp_ins=document.querySelector('#inp_ins');
        var mdp=document.getElementById('mdp');
        var mdp1=document.getElementById('mdp1');
      
        if((inp_ins.value=="")){
            mess1.style.display='initial';
            identification_1.style.display='initial';
            
            


        }
        else{
        const droite=document.querySelector(".droite");
       
             
        alert("Inscription Validée !")
        principale.style.display='initial';
        identification_1.style.display='none';
        identification_2.style.display='none';
            
        }
        
    }
  
    const mes_notes=document.querySelector(".mes_notes");
    const notes=document.querySelector(".notes");
    const admin=document.querySelector(".admin");
    const cour=document.querySelector(".cour");
    const sal_emp=document.querySelector(".sal-emp");
    const ins=document.querySelector(".ins");
    const camps=document.querySelector(".camps");
    const salle=document.querySelector(".salle");
    const emploi=document.querySelector(".emploi");
    const intro=document.querySelector(".intro");
    const inscription=document.querySelector(".inscription");
    const cham_ti=document.querySelector(".cham_ti");
    const chambre=document.querySelector(".chambre");
    const chamb=document.querySelector(".chamb");
    const tiq=document.querySelector(".tiq");
    const btn_ad1=document.querySelector(".btn_ad1");
    const btn_ad2=document.querySelector(".btn_ad2");
    const btn_ad3=document.querySelector(".btn_ad3");
    const ad=document.querySelector(".ad");
    const principale=document.querySelector(".principale");
    const icone=document.querySelector(".icone");

    const aff_ins=document.querySelector(".aff_ins");
    const aff_admin=document.querySelector(".aff_admin");
    const aff_camps=document.querySelector(".aff_camps");
    const aff_cour=document.querySelector(".aff_cour");
    const aff_note=document.querySelector(".aff_note");
    const form=document.querySelector(".form");
    const ticket=document.querySelector(".ticket");
    const salle_classe=document.querySelector(".salle_classe");
    var prenom_etudiant=document.querySelector("#prenom_etudiant");
    var nom_etudiant=document.querySelector("#nom_etudiant");

  


    
    
    function message() {
      alert ("Bonjour "+prenom_etudiant.value+" "+nom_etudiant.value+" "+ " votre inscription est validée ")
    }
   
    mes_notes.addEventListener("click",affiche_mes_notes);
    function affiche_mes_notes(){
        alert("Vos Notes seront envoyés dans votre boite mail universitaire par pdf");
    }
    btn_ad1.addEventListener("click",affiche_form);
    btn_ad2.addEventListener("click",affiche_form);
    btn_ad3.addEventListener("click",affiche_form);
    
    function affiche_form(){
        aff_ins.style.display='none';
        intro.style.display='none';
        sal_emp.style.display='none';
        aff_admin.style.display='initial';
        aff_camps.style.display='none';
        aff_cour.style.display='none';
        aff_note.style.display='none';
        cham_ti.style.display='none';
        chambre.style.display='none';
        ad.style.display='none';
        form.style.display='initial';

    } 
  
    salle.addEventListener("click",affiche_classe);
    function affiche_classe(){

        aff_ins.style.display='none';
        salle_classe.style.display='initial';
        salle.style.display='initial';
        intro.style.display='none';
        sal_emp.style.display='initial';
        aff_admin.style.display='none';
        aff_camps.style.display='none';
        aff_cour.style.display='initial';
        aff_note.style.display='none';
        cham_ti.style.display='none';
        chambre.style.display='none';
    } 
    ins.addEventListener("click",affiche_ins);
    function affiche_ins(){
        aff_ins.style.display='initial';
        inscription.style.display='flex';
        intro.style.display='none';
        sal_emp.style.display='none';
        aff_admin.style.display='none';
        aff_camps.style.display='none';
        aff_cour.style.display='none';
        aff_note.style.display='none';
        cham_ti.style.display='none';
        chambre.style.display='none';

    }
  

    function administrations(){
        const _prenom=document.getElementById('prenom_');
        const _nom=document.getElementById('nom_');
        if((_prenom.value=="")||(_nom.value=="")){
          
            alert("veuiller saisir les champs");
        }
        else{
            alert("Felicitation nous allons vous contactez d'ici quelques jours");
        }
    }
    function administrations1(){
        const _prenom=document.getElementById('prenom_');
        const _nom=document.getElementById('nom_');
        if((_prenom.value=="")||(_nom.value=="")){
          
            alert("veuiller saisir les champs");
        }
        else{
            alert("Felicitation nous allons vous contactez d'ici quelques jours");
        }
    }

    chamb.addEventListener("click",affiche_chambre);
    function affiche_chambre(){
        aff_ins.style.display='none';
        intro.style.display='none';
        sal_emp.style.display='none';
        aff_admin.style.display='none';
        aff_camps.style.display='initial';
        aff_cour.style.display='none';
        aff_note.style.display='none';
        cham_ti.style.display='initial';
        chambre.style.display='initial';
        ticket.style.display='none';

    }
    camps.addEventListener("click",affiche_camps);
    function affiche_camps(){
        aff_ins.style.display='none';
        intro.style.display='none';
        sal_emp.style.display='none';
        aff_admin.style.display='none';
        aff_camps.style.display='initial';
        aff_cour.style.display='none';
        aff_note.style.display='none';
        cham_ti.style.display='initial';
        chambre.style.display='none'


    }
    tiq.addEventListener("click",affiche_ticket);
    function affiche_ticket(){
        aff_ins.style.display='none';
        intro.style.display='none';
        sal_emp.style.display='none';
        aff_admin.style.display='none';
        aff_camps.style.display='initial';
        aff_cour.style.display='none';
        aff_note.style.display='none';
        cham_ti.style.display='initial';
        chambre.style.display='none';
        ticket.style.display='initial';
        ticket.style.display='flex';


    }
    


    admin.addEventListener("click",affiche_admin);
    function affiche_admin(){
        intro.style.display='none';
        sal_emp.style.display='none';
         aff_ins.style.display='none'
         aff_admin.style.display='initial';
        aff_camps.style.display='none';
        aff_cour.style.display='none';
        aff_note.style.display='none';
        cham_ti.style.display='none';


    }
    notes.addEventListener("click",affiche_note);
    function affiche_note(){
        intro.style.display='none';
        sal_emp.style.display='none';
         aff_ins.style.display='none'
        aff_admin.style.display='none';
        aff_camps.style.display='none';
        aff_cour.style.display='none';
        aff_note.style.display='initial';
        aff_ins.style.display='none';
        cham_ti.style.display='none';

    }
    cour.addEventListener("click",affiche_cour);
    function affiche_cour(){
        intro.style.display='none';
        sal_emp.style.display='none';
        aff_ins.style.display='none'
        aff_admin.style.display='none';
        aff_camps.style.display='none';
        aff_cour.style.display='initial';
        aff_note.style.display='none';
        cham_ti.style.display='none';         }

    cour.addEventListener("click",aff_salle);

    function aff_salle(){
        sal_emp.style.display='initial';
        intro.style.display='none';

    }


    const ici=document.querySelector(".ici");
    const login_2=document.querySelector(".login_2");
    const login=document.querySelector(".login");
    const identification_1=document.querySelector(".identification_1");
    const identification_2=document.querySelector(".identification_2");
    ici.addEventListener("click",ici_aff);
    function ici_aff(){
        principale.style.display='none';
        identification_1.style.display='initial';
        identification_2.style.display='none';
        
       

    }
    const insc=document.querySelector("#inscription");
   
  
    icone.addEventListener("click",icon);
    function icon(){
      principale.style.display='none';
      identification_2.style.display='initial';
      identification_1.style.display='none';
    }