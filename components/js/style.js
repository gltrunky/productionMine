// Liaison Html
let niveau = document.querySelector('#level');
let stock = document.querySelector('#stock');
let prodSec = document.querySelector('#prodSec');
let coutMine = document.querySelector('#coutMine');
let coutStock = document.querySelector('#coutStock');
let niveauEntrepot = document.querySelector('#levelEntrepot');

// Déclaration des variables
let matiereVerte = 0;
let niveauMineMatiereVerte = 1;
let productionSec = 3;
let niveauStockage = 1;
let stockageMax = 499;
let agrandissementMine = 50;
let agrandissementStock = 500;

// Fonction Agrandissement de la mine
document.querySelector('#levelUp').addEventListener(
  'click', function(){
    if(niveauMineMatiereVerte==1 && matiereVerte>=50){
      niveauMineMatiereVerte++;
      matiereVerte = matiereVerte-50;
      niveau.textContent = niveauMineMatiereVerte;
      prodSec.textContent = productionSec+3;
      coutMine.textContent = agrandissementMine + 50 + ' Mv';
    }
    else if(niveauMineMatiereVerte==1 && matiereVerte<50){
          alert('Il vous faut 50 Mv pour passer au niveau 2 de la mine de matiere verte.')
    }
    else if(niveauMineMatiereVerte==2 && matiereVerte>=100){
      niveauMineMatiereVerte++;
      matiereVerte = matiereVerte-100;
      niveau.textContent = niveauMineMatiereVerte;
      prodSec.textContent = productionSec+3;
      coutMine.textContent = agrandissementMine + 150 + ' Mv';
    }
    else if(niveauMineMatiereVerte==2 && matiereVerte<100){
      alert('Il vous faut 100 Mv pour passer au niveau 3 de la mine de matiere verte.')
    }
    else if(niveauMineMatiereVerte==3 && matiereVerte>=200){
      niveauMineMatiereVerte++;
      matiereVerte = matiereVerte-200;
      niveau.textContent = niveauMineMatiereVerte;
      prodSec.textContent = productionSec+3;
      coutMine.textContent = agrandissementMine + 350 + ' Mv';
    }
    else if(niveauMineMatiereVerte==3 && matiereVerte<200){
      alert('Il vous faut 200 Mv pour passer au niveau 4 de la mine de matiere verte.')
    }
    else if(niveauMineMatiereVerte==4 && matiereVerte>=400){
      niveauMineMatiereVerte++;
      matiereVerte = matiereVerte-400;
      niveau.textContent = niveauMineMatiereVerte;
      prodSec.textContent = productionSec+3;
      coutMine.textContent = 'Niv Max atteint';
    }
    else if(niveauMineMatiereVerte==4 && matiereVerte<400){
      alert('Il vous faut 400 Mv pour passer au niveau 5 de la mine de matiere verte.')
    }
    else if(niveauMineMatiereVerte>=5){
      alert('Niveau de la mine de la matiere verte au maximum');
      niveauMineMatiereVerte = 5
      niveau.textContent = niveauMineMatiereVerte;
      prodSec.textContent = productionSec;
    }
  }
);

//Fonction Agrandissement du stock de la mine
document.querySelector('#levelUpStock').addEventListener(
'click', function(){
  if(niveauStockage == 1 && matiereVerte>=500){
    niveauStockage++;
    stockageMax = stockageMax + 500;
    matiereVerte = matiereVerte - 500;
    stock.textContent = stockageMax+1;
    coutStock.textContent = agrandissementStock + 500 + ' Mv';
    niveauEntrepot.textContent = niveauStockage;
  }
  else if(niveauStockage==1 && matiereVerte<500){
    alert('Il vous faut 500 Mv pour passer au niveau 2 du stockage de la mine de matiere verte.')
  }
  else if(niveauStockage==2 && matiereVerte>=1000){
    niveauStockage++;
    stockageMax = stockageMax + 1000;
    matiereVerte = matiereVerte - 1000;
    stock.textContent = stockageMax+1;
    coutStock.textContent = agrandissementStock + 1500 + ' Mv';
    niveauEntrepot.textContent = niveauStockage;
  }
  else if(niveauStockage==2 && matiereVerte<1000){
    alert('Il vous faut 1000 Mv pour passer au niveau 3 du stockage de la mine de matiere verte.')
  }
  else if(niveauStockage==3 && matiereVerte>=2000){
    niveauStockage++;
    stockageMax = stockageMax + 2000;
    matiereVerte = matiereVerte - 2000;
    stock.textContent = stockageMax+1;
    coutStock.textContent = agrandissementStock + 3500 + ' Mv';
    niveauEntrepot.textContent = niveauStockage;
  }
  else if(niveauStockage==3 && matiereVerte<2000){
    alert('Il vous faut 2000 Mv pour passer au niveau 4 du stockage de la mine de matiere verte.')
  }
  else if(niveauStockage==4 && matiereVerte>=4000){
    niveauStockage++;
    stockageMax = stockageMax + 6000;
    matiereVerte = matiereVerte - 4000;
    stock.textContent = stockageMax+1;
    coutStock.textContent = 'Niv Max atteint';
    niveauEntrepot.textContent = niveauStockage;
  }
  else if(niveauStockage==4 && matiereVerte<4000){
    alert('Il vous faut 4000 Mv pour passer au niveau 5 du stockage de la mine de matiere verte.')
  }
  else if(niveauStockage>=5){
    alert('Niveau de l\'entrepot de la matiere verte au maximum');
    niveauStockage = 5
    niveauEntrepot.textContent = niveauStockage;
  }

}
);


//Fonction Production de la mine

    function production() {
       if (niveauMineMatiereVerte == 1 && matiereVerte<=stockageMax){
       matiereVerte += productionSec;
       document.querySelector("#ressources").innerHTML = matiereVerte;
  }
      else if (niveauMineMatiereVerte == 2 && matiereVerte<=stockageMax){
        productionSec = 6;
        matiereVerte += productionSec;
        document.querySelector("#ressources").innerHTML = matiereVerte;
  }
      else if (niveauMineMatiereVerte == 3 && matiereVerte<=stockageMax){
        productionSec = 9;
        matiereVerte += productionSec;
        document.querySelector("#ressources").innerHTML = matiereVerte;
  }   
      else if (niveauMineMatiereVerte == 4 && matiereVerte<=stockageMax){
        productionSec = 12;
        matiereVerte += productionSec;
        document.querySelector("#ressources").innerHTML = matiereVerte;
  }   
      else if (niveauMineMatiereVerte == 5 && matiereVerte<=stockageMax){
        productionSec = 15;
        matiereVerte += productionSec;
        document.querySelector("#ressources").innerHTML = matiereVerte;
  }   
      
}

//Insertion Html
niveau.textContent = niveauMineMatiereVerte;
stock.textContent = stockageMax + 1;
prodSec.textContent = productionSec;
coutMine.textContent = agrandissementMine + ' Mv';
coutStock.textContent = agrandissementStock + ' Mv';
niveauEntrepot.textContent = niveauStockage;
setInterval("production()", 1000);