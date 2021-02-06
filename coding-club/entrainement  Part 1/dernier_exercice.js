let index = ["noir","bleu","jaune","vert","rouge","orange"];
let index2 = ["bleu","jaune","vert","rouge"];
let taille = index.length
for (let col=0;col<taille;col++){
  switch (col) {
 case 0:
 console.log(`La couleur à l'index ${col} est : ${index2[0]}  `);
 break;
 case 1:
 console.log(`La couleur à l'index ${col} est : ${index2[1]}  `);
 break;
 case 2:
 console.log(`La couleur à l'index ${col} est : ${index2[2]}  `);
 break;
 case 3:
 console.log(`La couleur à l'index ${col} est :${index2[3]}  `);
 break;
 default:
 console.log(`La couleur ${index[col]} n'était pas attendue `)
   }
   if (col <=3) {
   console.log("c'est une couleur du tableau de l'index 1");
   }else {
    console.log("c'est une couleur du tableau de l'index 2");
   }
}
