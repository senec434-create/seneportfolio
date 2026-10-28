#include <stdio.h>
#include "myLib.h"
#include "mesTypes.h"
#include <windows.h>
#include <string.h>

//PROGRAMME PRINCIPAL
void SP_ACCEUIL()
 {
     printf("bienvenue au jeu snake 2000");
  }

 int PROCEDURE_SP_CHOIX()
 {
     int choix;
     printf(" \n1jouer\n 2options\n 3quitter\n");
     printf("que voulez vous faire ?");
     scanf("%d",&choix);
     printf("choix0 = %d  ", choix);
     while ((choix<1)||(choix>3))
       {

        printf(" choix incorrect! Nouveau choix? ");
        printf("choix1 = %d ", choix);
        scanf("%d",&choix);
        printf("choix2 = %d ", choix);
       }
     printf("choix3 = %d ", choix);
     return choix ;

 }


  void PROCEDURE_SP_SHOW_OPT(ST_OPTIONS opt)
 {
    printf("la couleur du mur est %s\n", NomCouleur(opt.couleur_mur));
    printf("la couleur du stade est %s\n",NomCouleur(opt.couleur_stade));
     printf("la couleur du serpent est %s\n", NomCouleur(opt.couleur_snake));
     printf("la vitesse de jeu est %i\n",opt.vitesse);
     printf("la hauteur du stade est %i\n", opt.H_stade);
     printf("la largeur du satde est %i\n",opt.L_stade);
 }

 void  PROCEDURE_SP_MODIF_OPT(ST_OPTIONS *opt)

{


char reponse;
int choix_option;
int a;
int nouveaumodif
do{
  printf("que voulez vous modifier:1-couleur_mur\n,2-couleur_stade\n,3-couleur_snake\n,4-vitesse\n,5-H_stade\n,6-L_stade\n");
  scanf("%i",&choix_option);
  a=choix_option;
  if(a==1)
  {printf("choisir la nouvelle couleur du mur:\n");
    scanf("%i",&(opt->couleur_mur));
  }
  else if (a==2)
  {printf("choisir la nouvelle couleur du stade:\n");

     scanf("%i",&(opt->couleur_stade));
  }
  else if (a==3)
  {
      printf("choisir la nouvelle couleur du serpent:\n");
        scanf("%i",&(opt->couleur_snake));
  }
  else if(a==4)
  {
      printf("choisir la nouvele vitesse:\n");
      scanf("%i",&(opt->vitesse));
  }
  else if(a==5)
  {
      printf("choisir la nouvelle hauteur du stade\n");
       scanf("%i",&(opt->H_stade));
  }
  else if(a==6)
  {
      printf("choisir la longueur du stade");
     scanf("%i",&(opt->L_stade));
  }
   printf("voulez vous continuer à modifier:1 pour oui \n \n 2 pour non ");
   scanf("%i",&nouveaumodif)
  }while (nouveaumodif==1)
}

void PROCEDURE_SP_STADIUM(int x, int y,ST_OPTIONS opt)
{
    for (x=1;x<opt.L_stade+1;x++)
    {
         printStadeElement( x,  y=1,  opt.couleur_mur);
    }
    for (x=1;x<opt.L_stade+1;x++)
        {
         printStadeElement( x,  y=opt.H_stade,  opt.couleur_mur);
        }

    for (y=1;y<=opt.H_stade;y++)
        {
          printStadeElement( x=1,  y,  opt.couleur_mur);
        }
    for (y=1;y<=opt.H_stade;y++)
    {
        printStadeElement( x=opt.L_stade,  y,  opt.couleur_mur);
    }


   for(x=2;x<opt.L_stade;x++)
    {
        for(y=2;y<opt.H_stade;y++)

       {
            printStadeElement( x,  y,  opt.couleur_stade );

       }

    }
}

//ON VA COMMENCER A D2PLACER LE SNAKE //
void SP_INIT_SNAKE( ST_POINT tete,ST_POINT corps,ST_OPTIONS opt)
int tete.x=(opt.L_stade)/2

int main()
{
int x=0;
int y=0;
int choix;
ST_OPTIONS opt;
opt.H_stade=65;
opt.L_stade=75;
opt.couleur_mur=RED;
opt.couleur_stade=GREEN;
opt.couleur_snake=RED;
opt.vitesse=2;

    SP_ACCEUIL();
    choix = PROCEDURE_SP_CHOIX();
    printf("le choix est %d\n", choix);
    if (choix==1)
    {

 cls();
 PROCEDURE_SP_STADIUM( x, y,opt );

    }
    else if (choix==2)
    {
         PROCEDURE_SP_MODIF_OPT(&opt);

    PROCEDURE_SP_SHOW_OPT( opt);


 cls();
 PROCEDURE_SP_STADIUM( x, y,opt );

    }
    else
    {
        printf("vous allez quitter le jeu")
    }

}
//





