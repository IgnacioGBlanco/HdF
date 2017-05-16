import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      nombre: "Kameni",  
      pais: "Africa",
      imgbody: "assets/img/africa_carlos_kameni_body.jpg",
      imgbodyblack: "assets/img/africa_carlos_kameni_body_back.jpg",
      img: "assets/img/africa_carlos_kameni.png",
      imgblack: "assets/img/africa_carlos_kameni_black.png"
    },
    {
      nombre: "Kuffour",
      pais: "Africa",
      imgbody: "assets/img/africa_samuel_kuffour_body.jpg",
      imgbodyblack: "assets/img/africa_samuel_kuffour_body_back.jpg",
      img: "assets/img/africa_samuel_kuffour.png",
      imgblack: "assets/img/africa_samuel_kuffour_black.png"
    },
    {
      nombre: "West",
      pais: "Africa",
      imgbody: "assets/img/africa_taribo_west_body.jpg",
      imgbodyblack: "assets/img/africa_taribo_west_body_back.jpg",
      img: "assets/img/africa_taribo_west.png",
      imgblack: "assets/img/africa_taribo_west_black.png"
    },
    {
      nombre: "Gerami",
      pais: "Africa",
      imgbody: "assets/img/africa_gerami_njitap_body.jpg",
      imgbodyblack: "assets/img/africa_gerami_njitap_body_back.jpg",
      img: "assets/img/africa_gerami_njitap.png",
      imgblack: "assets/img/africa_gerami_njitap_black.png"
    },

    {
      nombre: "Essien",
      pais: "Africa",
      imgbody: "assets/img/africa_michael_essien_body.jpg",
      imgbodyblack: "assets/img/africa_michael_essien_body_back.jpg",
      img: "assets/img/africa_michael_essien.png",
      imgblack: "assets/img/africa_michael_essien_black.png"
    },
    {
      nombre: "Toure",
      pais: "Africa",
      imgbody: "assets/img/africa_yaya_toure_body.jpg",
      imgbodyblack: "assets/img/africa_yaya_toure_body_back.jpg",
      img: "assets/img/africa_yaya_toure.png",
      imgblack: "assets/img/africa_yaya_toure_black.png"
    },
    {
      nombre: "Finidi",
      pais: "Africa",
      imgbody: "assets/img/africa_george_finidi_body.jpg",
      imgbodyblack: "assets/img/africa_george_finidi_body_back.jpg",
      img: "assets/img/africa_george_finidi.png",
      imgblack: "assets/img/africa_george_finidi_black.png"
    },
    {
      nombre: "Okocha",
      pais: "Africa",
      imgbody: "assets/img/africa_augustine_okocha_body.jpg",
      imgbodyblack: "assets/img/africa_augustine_okocha_body_back.jpg",
      img: "assets/img/africa_augustine_okocha.png",
      imgblack: "assets/img/africa_augustine_okocha_black.png"

    },
    {
      nombre: "Weah",
      pais: "Africa",
      imgbody: "assets/img/africa_george_weah_body.jpg",
      imgbodyblack: "assets/img/africa_george_weah_body_back.jpg",
      img: "assets/img/africa_george_weah.png",
      imgblack: "assets/img/africa_george_weah_black.png"
    },
    {
      nombre: "Drogba",
      pais: "Africa",
      imgbody: "assets/img/africa_didier_drogba_body.jpg",
      imgbodyblack: "assets/img/africa_didier_drogba_body_back.jpg",
      img: "assets/img/africa_didier_drogba.png",
      imgblack: "assets/img/africa_didier_drogba_black.png"
    },
    {
      nombre: "Eto'o",
      pais: "Africa",
      imgbody: "assets/img/africa_samuel_eto_body.jpg",
      imgbodyblack: "assets/img/africa_samuel_eto_body_back.jpg",
      img: "assets/img/africa_samuel_eto.png",
      imgblack: "assets/img/africa_samuel_eto_black.png"
    },
    {
      nombre: "Beckenbauer",
      pais: "Alemania",
      imgbody: "assets/img/alemania_beckenbauer_body.jpg",
      imgbodyblack: "assets/img/alemania_beckenbauer_body_back.jpg",
      img: "assets/img/alemania_beckenbauer.png",
      imgblack: "assets/img/alemania_beckenbauer_black.png"
    },
    {
      nombre: "Brehme",
      pais: "Alemania",
      imgbody: "assets/img/alemania_brehme_body.jpg",
      imgbodyblack: "assets/img/alemania_brehme_body_back.jpg",
      img: "assets/img/alemania_brehme.png",
      imgblack: "assets/img/alemania_brehme_black.png"
    },
    {
      nombre: "Breitner",
      pais: "Alemania",
      imgbody: "assets/img/alemania_breitner_body.jpg",
      imgbodyblack: "assets/img/alemania_breitner_body_back.jpg",
      img: "assets/img/alemania_breitner.png",
      imgblack: "assets/img/alemania_breitner_black.png"
    },
    {
      nombre: "Kahn",
      pais: "Alemania",
      imgbody: "assets/img/alemania_kahn_body.jpg",
      imgbodyblack: "assets/img/alemania_kahn_body_back.jpg",
      img: "assets/img/alemania_kahn.png",
      imgblack: "assets/img/alemania_kahn_black.png"
    },
    {
      nombre: "Klinsmann",
      pais: "Alemania",
      imgbody: "assets/img/alemania_klinsmann_body.jpg",
      imgbodyblack: "assets/img/alemania_klinsmann_body_back.jpg",
      img: "assets/img/alemania_klinsmann.png",
      imgblack: "assets/img/alemania_klinsmann_black.png"
    },
    {
      nombre: "Matthaus",
      pais: "Alemania",
      imgbody: "assets/img/alemania_matthaus_body.jpg",
      imgbodyblack: "assets/img/alemania_matthaus_body_back.jpg",
      img: "assets/img/alemania_matthaus.png",
      imgblack: "assets/img/alemania_matthaus_black.png"
    },
    {
      nombre: "Mueller",
      pais: "Alemania",
      imgbody: "assets/img/alemania_mueller_body.jpg",
      imgbodyblack: "assets/img/alemania_mueller_body_back.jpg",
      img: "assets/img/alemania_mueller.png",
      imgblack: "assets/img/alemania_mueller_black.png"
    },
    {
      nombre: "Rummenige",
      pais: "Alemania",
      imgbody: "assets/img/alemania_rummenige_body.jpg",
      imgbodyblack: "assets/img/alemania_rummenige_body_back.jpg",
      img: "assets/img/alemania_rummenige.png",
      imgblack: "assets/img/alemania_rummenige_black.png"
    },
    {
      nombre: "Sammer",
      pais: "Alemania",
      imgbody: "assets/img/alemania_sammer_body.jpg",
      imgbodyblack: "assets/img/alemania_sammer_body_back.jpg",
      img: "assets/img/alemania_sammer.png",
      imgblack: "assets/img/alemania_sammer_black.png"
    },
    {
      nombre: "Seeler",
      pais: "Alemania",
      imgbody: "assets/img/alemania_seeler_body.jpg",
      imgbodyblack: "assets/img/alemania_seeler_body_back.jpg",
      img: "assets/img/alemania_seeler.png",
      imgblack: "assets/img/alemania_seeler_black.png"
    },
    {
      nombre: "Stielike",
      pais: "Alemania",
      imgbody: "assets/img/alemania_stielike_body.jpg",
      imgbodyblack: "assets/img/alemania_stielike_body_back.jpg",
      img: "assets/img/alemania_stielike.png",
      imgblack: "assets/img/alemania_stielike_black.png"
    },




    {
      nombre: "Escobar",
      pais: "America",
      imgbody: "assets/img/america_andres_escobar_body.jpg",
      imgbodyblack: "assets/img/america_andres_escobar_body_back.jpg",
      img: "assets/img/america_andres_escobar.png",
      imgblack: "assets/img/america_andres_escobar_black.png"
    },
    {
      nombre: "Vidal",
      pais: "America",
      imgbody: "assets/img/america_arturo_vidal_body.jpg",
      imgbodyblack: "assets/img/america_arturo_vidal_body_back.jpg",
      img: "assets/img/america_arturo_vidal.png",
      imgblack: "assets/img/america_arturo_vidal_black.png"
    },
    {
      nombre: "Cuauhtemoc",
      pais: "America",
      imgbody: "assets/img/america_cuauhtemoc_body.jpg",
      imgbodyblack: "assets/img/america_cuauhtemoc_body_back.jpg",
      img: "assets/img/america_cuauhtemoc.png",
      imgblack: "assets/img/america_cuauhtemoc_black.png"
    },
    {
      nombre: "Falcao",
      pais: "America",
      imgbody: "assets/img/america_falcao_body.jpg",
      imgbodyblack: "assets/img/america_falcao_body_back.jpg",
      img: "assets/img/america_falcao.png",
      imgblack: "assets/img/america_falcao_black.png"
    },
    {
      nombre: "Higuita",
      pais: "America",
      imgbody: "assets/img/america_higuita_body.jpg",
      imgbodyblack: "assets/img/america_higuita_body_back.jpg",
      img: "assets/img/america_higuita.png",
      imgblack: "assets/img/america_higuita_black.png"
    },

    {
      nombre: "Sanchez",
      pais: "America",
      imgbody: "assets/img/america_hugo_sanchez_body.jpg",
      imgbodyblack: "assets/img/america_hugo_sanchez_body_back.jpg",
      img: "assets/img/america_hugo_sanchez.png",
      imgblack: "assets/img/america_hugo_sanchez_black.png"
    },
    {
      nombre: "Lalas",
      pais: "America",
      imgbody: "assets/img/america_lalas_body.jpg",
      imgbodyblack: "assets/img/america_lalas_body_back.jpg",
      img: "assets/img/america_lalas.png",
      imgblack: "assets/img/america_lalas_black.png"
    },
    {
      nombre: "Gonzalez",
      pais: "America",
      imgbody: "assets/img/america_magico_gonzalez_body.jpg",
      imgbodyblack: "assets/img/america_magico_gonzalez_body_back.jpg",
      img: "assets/img/america_magico_gonzalez.png",
      imgblack: "assets/img/america_magico_gonzalez_black.png"
    },
    {
      nombre: "Marques",
      pais: "America",
      imgbody: "assets/img/america_rafael_marques_body.jpg",
      imgbodyblack: "assets/img/america_rafael_marques_body_back.jpg",
      img: "assets/img/america_rafael_marques.png",
      imgblack: "assets/img/america_rafael_marques_black.png"
    },
    {
      nombre: "Valderrama",
      pais: "America",
      imgbody: "assets/img/america_valderrama_body.jpg",
      imgbodyblack: "assets/img/america_valderrama_body_back.jpg",
      img: "assets/img/america_valderrama.png",
      imgblack: "assets/img/america_valderrama_black.png"
    },
    {
      nombre: "Zamorano",
      pais: "America",
      imgbody: "assets/img/america_zamorano_body.jpg",
      imgbodyblack: "assets/img/america_zamorano_body_back.jpg",
      img: "assets/img/america_zamorano.png",
      imgblack: "assets/img/america_zamorano_black.png"
    },



    {
      nombre: "Ardiles",
      pais: "Argentina",
      imgbody: "assets/img/argentina_ardiles_body.jpg",
      imgbodyblack: "assets/img/argentina_ardiles_body_back.jpg",
      img: "assets/img/argentina_ardiles.png",
      imgblack: "assets/img/argentina_ardiles_black.png"
    },
    {
      nombre: "Batistuta",
      pais: "Argentina",
      imgbody: "assets/img/argentina_batistuta_body.jpg",
      imgbodyblack: "assets/img/argentina_batistuta_body_back.jpg",
      img: "assets/img/argentina_batistuta.png",
      imgblack: "assets/img/argentina_batistuta_black.png"
    },
    {
      nombre: "Fillol",
      pais: "Argentina",
      imgbody: "assets/img/argentina_fillol_body.jpg",
      imgbodyblack: "assets/img/argentina_fillol_body_back.jpg",
      img: "assets/img/argentina_fillol.png",
      imgblack: "assets/img/argentina_fillol_black.png"
    },
    {
      nombre: "Kempes",
      pais: "Argentina",
      imgbody: "assets/img/argentina_kempes_body.jpg",
      imgbodyblack: "assets/img/argentina_kempes_body_back.jpg",
      img: "assets/img/argentina_kempes.png",
      imgblack: "assets/img/argentina_kempes_black.png"
    },
    {
      nombre: "Maradona",
      pais: "Argentina",
      imgbody: "assets/img/argentina_C_body.jpg",
      imgbodyblack: "assets/img/argentina_maradona_body_back.jpg",
      img: "assets/img/argentina_maradona.png",
      imgblack: "assets/img/argentina_maradona_black.png"
    },
    {
      nombre: "Messi",
      pais: "Argentina",
      imgbody: "assets/img/argentina_messi_body.jpg",
      imgbodyblack: "assets/img/argentina_messi_body_back.jpg",
      img: "assets/img/argentina_messi.png",
      imgblack: "assets/img/argentina_messi_black.png"
    },
    {
      nombre: "Pasarella",
      pais: "Argentina",
      imgbody: "assets/img/argentina_pasarella_body.jpg",
      imgbodyblack: "assets/img/argentina_pasarella_body_back.jpg",
      img: "assets/img/argentina_pasarella.png",
      imgblack: "assets/img/argentina_pasarella_black.png"
    },
    {
      nombre: "Redondo",
      pais: "Argentina",
      imgbody: "assets/img/argentina_redondo_body.jpg",
      imgbodyblack: "assets/img/argentina_redondo_body_back.jpg",
      img: "assets/img/argentina_redondo.png",
      imgblack: "assets/img/argentina_redondo_black.png"
    },
    {
      nombre: "Ruggeri",
      pais: "Argentina",
      imgbody: "assets/img/argentina_ruggeri_body.jpg",
      imgbodyblack: "assets/img/argentina_ruggeri_body_back.jpg",
      img: "assets/img/argentina_ruggeri.png",
      imgblack: "assets/img/argentina_ruggeri_black.png"
    },
    {
      nombre: "Simeone",
      pais: "Argentina",
      imgbody: "assets/img/argentina_simeone_body.jpg",
      imgbodyblack: "assets/img/argentina_simeone_body_back.jpg",
      img: "assets/img/argentina_simeone.png",
      imgblack: "assets/img/argentina_simeone_black.png"
    },
    {
      nombre: "Zanetti",
      pais: "Argentina",
      imgbody: "assets/img/argentina_zanetti_body.jpg",
      imgbodyblack: "assets/img/argentina_zanetti_body_back.jpg",
      img: "assets/img/argentina_zanetti.png",
      imgblack: "assets/img/argentina_zanetti_black.png"
    },





    {
      nombre: "Garrincha",
      pais: "Brasil",
      imgbody: "assets/img/brasil_arrincha_body.jpg",
      imgbodyblack: "assets/img/brasil_arrincha_body_back.jpg",
      img: "assets/img/brasil_arrincha.png",
      imgblack: "assets/img/brasil_arrincha_black.png"
    },
    {
      nombre: "Cafu",
      pais: "Brasil",
      imgbody: "assets/img/brasil_cafu_body.jpg",
      imgbodyblack: "assets/img/brasil_cafu_body_back.jpg",
      img: "assets/img/brasil_cafu.png",
      imgblack: "assets/img/brasil_cafu_black.png"
    },
    {
      nombre: "Silva",
      pais: "Brasil",
      imgbody: "assets/img/brasil_mauro_silva_body.jpg",
      imgbodyblack: "assets/img/brasil_mauro_silva_body_back.jpg",
      img: "assets/img/brasil_mauro_silva.png",
      imgblack: "assets/img/brasil_mauro_silva_black.png"
    },
    {
      nombre: "Pele",
      pais: "Brasil",
      imgbody: "assets/img/brasil_pele_body.jpg",
      imgbodyblack: "assets/img/brasil_pele_body_back.jpg",
      img: "assets/img/brasil_pele.png",
      imgblack: "assets/img/brasil_pele_black.png"
    },
    {
      nombre: "Carlos",
      pais: "Brasil",
      imgbody: "assets/img/brasil_roberto_carlos_body.jpg",
      imgbodyblack: "assets/img/brasil_roberto_carlos_body_back.jpg",
      img: "assets/img/brasil_roberto_carlos.png",
      imgblack: "assets/img/brasil_roberto_carlos_black.png"
    },
    {
      nombre: "Ronaldinho",
      pais: "Brasil",
      imgbody: "assets/img/brasil_ronaldinho_body.jpg",
      imgbodyblack: "assets/img/brasil_ronaldinho_body_back.jpg",
      img: "assets/img/brasil_ronaldinho.png",
      imgblack: "assets/img/brasil_ronaldinho_black.png"
    },
    {
      nombre: "Ronaldo",
      pais: "Brasil",
      imgbody: "assets/img/brasil_ronaldo_body.jpg",
      imgbodyblack: "assets/img/brasil_ronaldo_body_back.jpg",
      img: "assets/img/brasil_ronaldo.png",
      imgblack: "assets/img/brasil_ronaldo_black.png"
    },
    {
      nombre: "Socrates",
      pais: "Brasil",
      imgbody: "assets/img/brasil_socrates_body.jpg",
      imgbodyblack: "assets/img/brasil_socrates_body_back.jpg",
      img: "assets/img/brasil_socrates.png",
      imgblack: "assets/img/brasil_socrates_black.png"
    },
    {
      nombre: "Taffarel",
      pais: "Brasil",
      imgbody: "assets/img/brasil_taffare_body.jpg",
      imgbodyblack: "assets/img/brasil_taffare_body_back.jpg",
      img: "assets/img/brasil_taffare.png",
      imgblack: "assets/img/brasil_taffare_black.png"
    },
    {
      nombre: "Zico",
      pais: "Brasil",
      imgbody: "assets/img/brasil_zico_body.jpg",
      imgbodyblack: "assets/img/brasil_zico_body_back.jpg",
      img: "assets/img/brasil_zico.png",
      imgblack: "assets/img/brasil_zico_black.png"
    },



    {
      nombre: "Casillas",
      pais: "España",
      imgbody: "assets/img/espana_casillas_body.jpg",
      imgbodyblack: "assets/img/espana_casillas_body_back.jpg",
      img: "assets/img/espana_casillas.png",
      imgblack: "assets/img/espana_casillas_black.png"
    },
    {
      nombre: "Gordillo",
      pais: "España",
      imgbody: "assets/img/espana_gordillo_body.jpg",
      imgbodyblack: "assets/img/espana_gordillo_body_back.jpg",
      img: "assets/img/espana_gordillo.png",
      imgblack: "assets/img/espana_gordillo_black.png"
    },
    {
      nombre: "Guardiola",
      pais: "España",
      imgbody: "assets/img/espana_guardiola_body.jpg",
      imgbodyblack: "assets/img/espana_guardiola_body_back.jpg",
      img: "assets/img/espana_guardiola.png",
      imgblack: "assets/img/espana_guardiola_black.png"
    },
    {
      nombre: "Hierro",
      pais: "España",
      imgbody: "assets/img/espana_hierro_body.jpg",
      imgbodyblack: "assets/img/espana_hierro_body_back.jpg",
      img: "assets/img/espana_hierro.png",
      imgblack: "assets/img/espana_hierro_black.png"
    },
    {
      nombre: "Iniesta",
      pais: "España",
      imgbody: "assets/img/espana_iniesta_body.jpg",
      imgbodyblack: "assets/img/espana_iniesta_body_back.jpg",
      img: "assets/img/espana_iniesta.png",
      imgblack: "assets/img/espana_iniesta_black.png"
    },
    {
      nombre: "Suarez",
      pais: "España",
      imgbody: "assets/img/espana_luis_suarez_body.jpg",
      imgbodyblack: "assets/img/espana_luis_suarez_body_back.jpg",
      img: "assets/img/espana_luis_suarez.png",
      imgblack: "assets/img/espana_luis_suarez_black.png"
    },
    {
      nombre: "Puyol",
      pais: "España",
      imgbody: "assets/img/espana_puyol_body.jpg",
      imgbodyblack: "assets/img/espana_puyol_body_back.jpg",
      img: "assets/img/espana_puyol.png",
      imgblack: "assets/img/espana_puyol_black.png"
    },
    {
      nombre: "Raul",
      pais: "España",
      imgbody: "assets/img/espana_raul_body.jpg",
      imgbodyblack: "assets/img/espana_raul_body_back.jpg",
      img: "assets/img/espana_raul.png",
      imgblack: "assets/img/espana_raul_black.png"
    },
    {
      nombre: "Ramos",
      pais: "España",
      imgbody: "assets/img/espana_sergio_ramos_body.jpg",
      imgbodyblack: "assets/img/espana_sergio_ramos_body_back.jpg",
      img: "assets/img/espana_sergio_ramos.png",
      imgblack: "assets/img/espana_sergio_ramos_black.png"
    },
    {
      nombre: "Villa",
      pais: "España",
      imgbody: "assets/img/espana_villa_body.jpg",
      imgbodyblack: "assets/img/espana_villa_body_back.jpg",
      img: "assets/img/espana_villa.png",
      imgblack: "assets/img/espana_villa_black.png"
    },
    {
      nombre: "Xavi",
      pais: "España",
      imgbody: "assets/img/espana_xavi_body.jpg",
      imgbodyblack: "assets/img/espana_xavi_body_back.jpg",
      img: "assets/img/espana_xavi.png",
      imgblack: "assets/img/espana_xavi_black.png"
    },



    {
      nombre: "Bale",
      pais: "Europa",
      imgbody: "assets/img/europa_bale_body.jpg",
      imgbodyblack: "assets/img/europa_bale_body_back.jpg",
      img: "assets/img/europa_bale.png",
      imgblack: "assets/img/europa_bale_black.png"
    },
    {
      nombre: "Best",
      pais: "Europa",
      imgbody: "assets/img/europa_george_best_body.jpg",
      imgbodyblack: "assets/img/europa_george_best_body_back.jpg",
      img: "assets/img/europa_george_best.png",
      imgblack: "assets/img/europa_george_best_black.png"
    },
    {
      nombre: "Ibrahimovic",
      pais: "Europa",
      imgbody: "assets/img/europa_ibrahimovic_body.jpg",
      imgbodyblack: "assets/img/europa_ibrahimovic_body_back.jpg",
      img: "assets/img/europa_ibrahimovic.png",
      imgblack: "assets/img/europa_ibrahimovic_black.png"
    },
    {
      nombre: "Kompany",
      pais: "Europa",
      imgbody: "assets/img/europa_kompany_body.jpg",
      imgbodyblack: "assets/img/europa_kompany_body_back.jpg",
      img: "assets/img/europa_kompany.png",
      imgblack: "assets/img/europa_kompany_black.png"
    },
    {
      nombre: "Yashin",
      pais: "Europa",
      imgbody: "assets/img/europa_lev_yashin_body.jpg",
      imgbodyblack: "assets/img/europa_lev_yashin_body_back.jpg",
      img: "assets/img/europa_lev_yashin.png",
      imgblack: "assets/img/europa_lev_yashin_black.png"
    },
    {
      nombre: "Laudrup",
      pais: "Europa",
      imgbody: "assets/img/europa_michael_laudrup_body.jpg",
      imgbodyblack: "assets/img/europa_michael_laudrup_body_back.jpg",
      img: "assets/img/europa_michael_laudrup.png",
      imgblack: "assets/img/europa_michael_laudrup_black.png"
    },
    {
      nombre: "Nedved",
      pais: "Europa",
      imgbody: "assets/img/europa_nedved_body.jpg",
      imgbodyblack: "assets/img/europa_nedved_body_back.jpg",
      img: "assets/img/europa_nedved.png",
      imgblack: "assets/img/europa_nedved_black.png"
    },
    {
      nombre: "Popescu",
      pais: "Europa",
      imgbody: "assets/img/europa_popescu_body.jpg",
      imgbodyblack: "assets/img/europa_popescu_body_back.jpg",
      img: "assets/img/europa_popescu.png",
      imgblack: "assets/img/europa_popescu_black.png"
    },
    {
      nombre: "Puskas",
      pais: "Europa",
      imgbody: "assets/img/europa_puskas_body.jpg",
      imgbodyblack: "assets/img/europa_puskas_body_back.jpg",
      img: "assets/img/europa_puskas.png",
      imgblack: "assets/img/europa_puskas_black.png"
    },
    {
      nombre: "Giggs",
      pais: "Europa",
      imgbody: "assets/img/europa_ryan_giggs_body.jpg",
      imgbodyblack: "assets/img/europa_ryan_giggs_body_back.jpg",
      img: "assets/img/europa_ryan_giggs.png",
      imgblack: "assets/img/europa_ryan_giggs_black.png"
    },
    {
      nombre: "Stoichkov",
      pais: "Europa",
      imgbody: "assets/img/europa_toichkov_body.jpg",
      imgbodyblack: "assets/img/europa_toichkov_body_back.jpg",
      img: "assets/img/europa_toichkov.png",
      imgblack: "assets/img/europa_toichkov_black.png"
    },

    {
      nombre: "Barthez",
      pais: "Francia",
      imgbody: "assets/img/francia_barthez_body.jpg",
      imgbodyblack: "assets/img/francia_barthez_body_back.jpg",
      img: "assets/img/francia_barthez.png",
      imgblack: "assets/img/francia_barthez_black.png"
    },
    {
      nombre: "Blanc",
      pais: "Francia",
      imgbody: "assets/img/francia_blanc_body.jpg",
      imgbodyblack: "assets/img/francia_blanc_body_back.jpg",
      img: "assets/img/francia_blanc.png",
      imgblack: "assets/img/francia_blanc_black.png"
    },
    {
      nombre: "Cantona",
      pais: "Francia",
      imgbody: "assets/img/francia_cantona_body.jpg",
      imgbodyblack: "assets/img/francia_cantona_body_back.jpg",
      img: "assets/img/francia_cantona.png",
      imgblack: "assets/img/francia_cantona_black.png"
    },
    {
      nombre: "Desailly",
      pais: "Francia",
      imgbody: "assets/img/francia_desailly_body.jpg",
      imgbodyblack: "assets/img/francia_desailly_body_back.jpg",
      img: "assets/img/francia_desailly.png",
      imgblack: "assets/img/francia_desailly_black.png"
    },
    {
      nombre: "Henry",
      pais: "Francia",
      imgbody: "assets/img/francia_henry_body.jpg",
      imgbodyblack: "assets/img/francia_henry_body_back.jpg",
      img: "assets/img/francia_henry.png",
      imgblack: "assets/img/francia_henry_black.png"
    },
    {
      nombre: "Kopa",
      pais: "Francia",
      imgbody: "assets/img/francia_kopa_body.jpg",
      imgbodyblack: "assets/img/francia_kopa_body_back.jpg",
      img: "assets/img/francia_kopa.png",
      imgblack: "assets/img/francia_kopa_black.png"
    },
    {
      nombre: "Platini",
      pais: "Francia",
      imgbody: "assets/img/francia_platini_body.jpg",
      imgbodyblack: "assets/img/francia_platini_body_back.jpg",
      img: "assets/img/francia_platini.png",
      imgblack: "assets/img/francia_platini_black.png"
    },
    {
      nombre: "Thuram",
      pais: "Francia",
      imgbody: "assets/img/francia_thuram_body.jpg",
      imgbodyblack: "assets/img/francia_thuram_body_back.jpg",
      img: "assets/img/francia_thuram.png",
      imgblack: "assets/img/francia_thuram_black.png"
    },
    {
      nombre: "Tigana",
      pais: "Francia",
      imgbody: "assets/img/francia_tigana_body.jpg",
      imgbodyblack: "assets/img/francia_tigana_body_back.jpg",
      img: "assets/img/francia_tigana.png",
      imgblack: "assets/img/francia_tigana_black.png"
    },
    {
      nombre: "Vieira",
      pais: "Francia",
      imgbody: "assets/img/francia_vieira_body.jpg",
      imgbodyblack: "assets/img/francia_vieira_body_back.jpg",
      img: "assets/img/francia_vieira.png",
      imgblack: "assets/img/francia_vieira_black.png"
    },
    {
      nombre: "Zidane",
      pais: "Francia",
      imgbody: "assets/img/francia_zidane_body.jpg",
      imgbodyblack: "assets/img/francia_zidane_body_back.jpg",
      img: "assets/img/francia_zidane.png",
      imgblack: "assets/img/francia_zidane_black.png"
    },


    {
      nombre: "Bergkamp",
      pais: "Holanda",
      imgbody: "assets/img/holanda_bergkamp_body.jpg",
      imgbodyblack: "assets/img/holanda_bergkamp_body_back.jpg",
      img: "assets/img/holanda_bergkamp.png",
      imgblack: "assets/img/holanda_bergkamp_black.png"
    },
    {
      nombre: "Cruyff",
      pais: "Holanda",
      imgbody: "assets/img/holanda_cruyff_body.jpg",
      imgbodyblack: "assets/img/holanda_cruyff_body_back.jpg",
      img: "assets/img/holanda_cruyff.png",
      imgblack: "assets/img/holanda_cruyff_black.png"
    },
    {
      nombre: "Davids",
      pais: "Holanda",
      imgbody: "assets/img/holanda_davids_body.jpg",
      imgbodyblack: "assets/img/holanda_davids_body_back.jpg",
      img: "assets/img/holanda_davids.png",
      imgblack: "assets/img/holanda_davids_black.png"
    },
    {
      nombre: "De Boer",
      pais: "Holanda",
      imgbody: "assets/img/holanda_frank_de_boer_body.jpg",
      imgbodyblack: "assets/img/holanda_frank_de_boer_body_back.jpg",
      img: "assets/img/holanda_frank_de_boer.png",
      imgblack: "assets/img/holanda_frank_de_boer_black.png"
    },
    {
      nombre: "Gullit",
      pais: "Holanda",
      imgbody: "assets/img/holanda_gullit_body.jpg",
      imgbodyblack: "assets/img/holanda_gullit_body_back.jpg",
      img: "assets/img/holanda_gullit.png",
      imgblack: "assets/img/holanda_gullit_black.png"
    },
    {
      nombre: "Koeman",
      pais: "Holanda",
      imgbody: "assets/img/holanda_koeman_body.jpg",
      imgbodyblack: "assets/img/holanda_koeman_body_back.jpg",
      img: "assets/img/holanda_koeman.png",
      imgblack: "assets/img/holanda_koeman_black.png"
    },
    {
      nombre: "Neeskens",
      pais: "Holanda",
      imgbody: "assets/img/holanda_neeskens_body.jpg",
      imgbodyblack: "assets/img/holanda_neeskens_body_back.jpg",
      img: "assets/img/holanda_neeskens.png",
      imgblack: "assets/img/holanda_neeskens_black.png"
    },
    {
      nombre: "Rijkaard",
      pais: "Holanda",
      imgbody: "assets/img/holanda_rijkaard_body.jpg",
      imgbodyblack: "assets/img/holanda_rijkaard_body_back.jpg",
      img: "assets/img/holanda_rijkaard.png",
      imgblack: "assets/img/holanda_rijkaard_black.png"
    },
    {
      nombre: "Robben",
      pais: "Holanda",
      imgbody: "assets/img/holanda_robben_body.jpg",
      imgbodyblack: "assets/img/holanda_robben_body_back.jpg",
      img: "assets/img/holanda_robben.png",
      imgblack: "assets/img/holanda_robben_black.png"
    },
    {
      nombre: "Van Basten",
      pais: "Holanda",
      imgbody: "assets/img/holanda_van_basten_body.jpg",
      imgbodyblack: "assets/img/holanda_van_basten_body_back.jpg",
      img: "assets/img/holanda_van_basten.png",
      imgblack: "assets/img/holanda_van_basten_black.png"
    },
    {
      nombre: "Van Der Sar",
      pais: "Holanda",
      imgbody: "assets/img/holanda_van_der_sar_body.jpg",
      imgbodyblack: "assets/img/holanda_van_der_sar_body_back.jpg",
      img: "assets/img/holanda_van_der_sar.png",
      imgblack: "assets/img/holanda_van_der_sar_black.png"
    },


    {
      nombre: "Shearer",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_alan_shearer_body.jpg",
      imgbodyblack: "assets/img/inglaterra_alan_shearer_body_back.jpg",
      img: "assets/img/inglaterra_alan_shearer.png",
      imgblack: "assets/img/inglaterra_alan_shearer_black.png"
    },
    {
      nombre: "Banks",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_banks_body.jpg",
      imgbodyblack: "assets/img/inglaterra_banks_body_back.jpg",
      img: "assets/img/inglaterra_banks.png",
      imgblack: "assets/img/inglaterra_banks_black.png"
    },
    {
      nombre: "Barnes",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_barnes_body.jpg",
      imgbodyblack: "assets/img/inglaterra_barnes_body_back.jpg",
      img: "assets/img/inglaterra_barnes.png",
      imgblack: "assets/img/inglaterra_barnes_black.png"
    },
    {
      nombre: "Beckham",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_beckham_body.jpg",
      imgbodyblack: "assets/img/inglaterra_beckham_body_back.jpg",
      img: "assets/img/inglaterra_beckham.png",
      imgblack: "assets/img/inglaterra_beckham_black.png"
    },
    {
      nombre: "Charlton",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_bobby_charlton_body.jpg",
      imgbodyblack: "assets/img/inglaterra_bobby_charlton_body_back.jpg",
      img: "assets/img/inglaterra_bobby_charlton.png",
      imgblack: "assets/img/inglaterra_bobby_charlton_black.png"
    },
    {
      nombre: "Gascoigne",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_gascoigne.jpg",
      imgbodyblack: "assets/img/inglaterra_gascoigne_back.jpg",
      img: "assets/img/inglaterra_gascoigne.png",
      imgblack: "assets/img/inglaterra_gascoignek.png"
    },
    {
      nombre: "Gerard",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_gerard_body.jpg",
      imgbodyblack: "assets/img/inglaterra_gerard_back.jpg",
      img: "assets/img/inglaterra_gerard.png",
      imgblack: "assets/img/inglaterra_gerard_black.png"
    },
    {
      nombre: "Lampard",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_lampard_body.jpg",
      imgbodyblack: "assets/img/inglaterra_lampard_body_back.jpg",
      img: "assets/img/inglaterra_lampard.png",
      imgblack: "assets/img/inglaterra_lampard_black.png"
    },
    {
      nombre: "Lineker",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_lineker_body.jpg",
      imgbodyblack: "assets/img/inglaterra_lineker_body_back.jpg",
      img: "assets/img/inglaterra_lineker.png",
      imgblack: "assets/img/inglaterra_lineker_black.png"
    },
    {
      nombre: "Moore",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_moore_body.jpg",
      imgbodyblack: "assets/img/inglaterra_moore_body_back.jpg",
      img: "assets/img/inglaterra_moore.png",
      imgblack: "assets/img/inglaterra_moore_black.png"
    },
    {
      nombre: "Terry",
      pais: "Inglaterra",
      imgbody: "assets/img/inglaterra_terry_body.jpg",
      imgbodyblack: "assets/img/inglaterra_terry_body_back.jpg",
      img: "assets/img/inglaterra_terry.png",
      imgblack: "assets/img/inglaterra_terry_black.png"
    },


    {
      nombre: "Baggio",
      pais: "Italia",
      imgbody: "assets/img/italia_baggio_body.jpg",
      imgbodyblack: "assets/img/italia_baggio_body_back.jpg",
      img: "assets/img/italia_baggio.png",
      imgblack: "assets/img/italia_baggio_black.png"
    },
    {
      nombre: "Baresi",
      pais: "Italia",
      imgbody: "assets/img/italia_baresi_body.jpg",
      imgbodyblack: "assets/img/italia_baresi_body_back.jpg",
      img: "assets/img/italia_baresi.png",
      imgblack: "assets/img/italia_baresi_black.png"
    },
    {
      nombre: "Buffon",
      pais: "Italia",
      imgbody: "assets/img/italia_buffon_body.jpg",
      imgbodyblack: "assets/img/italia_buffon_body_back.jpg",
      img: "assets/img/italia_buffon.png",
      imgblack: "assets/img/italia_buffon_black.png"
    },
    {
      nombre: "Cannavaro",
      pais: "Italia",
      imgbody: "assets/img/italia_cannavaro_body.jpg",
      imgbodyblack: "assets/img/italia_cannavaro_body_back.jpg",
      img: "assets/img/italia_cannavaro.png",
      imgblack: "assets/img/italia_cannavaro_black.png"
    },
    {
      nombre: "Gentile",
      pais: "Italia",
      imgbody: "assets/img/italia_gentile_body.jpg",
      imgbodyblack: "assets/img/italia_gentile_body_back.jpg",
      img: "assets/img/italia_gentile.png",
      imgblack: "assets/img/italia_gentile_black.png"
    },
    {
      nombre: "Maldini",
      pais: "Italia",
      imgbody: "assets/img/italia_maldini_body.jpg",
      imgbodyblack: "assets/img/italia_maldini_body_back.jpg",
      img: "assets/img/italia_maldini.png",
      imgblack: "assets/img/italia_maldini_black.png"
    },
    {
      nombre: "Meazza",
      pais: "Italia",
      imgbody: "assets/img/italia_meazza_body.jpg",
      imgbodyblack: "assets/img/italia_meazza_body_back.jpg",
      img: "assets/img/italia_meazza.png",
      imgblack: "assets/img/italia_meazza_black.png"
    },
    {
      nombre: "Pirlo",
      pais: "Italia",
      imgbody: "assets/img/italia_pirlo_body.jpg",
      imgbodyblack: "assets/img/italia_pirlo_body_back.jpg",
      img: "assets/img/italia_pirlo.png",
      imgblack: "assets/img/italia_pirlo_black.png"
    },
    {
      nombre: "Riva",
      pais: "Italia",
      imgbody: "assets/img/italia_riva_body.jpg",
      imgbodyblack: "assets/img/italia_riva_body_back.jpg",
      img: "assets/img/italia_riva.png",
      imgblack: "assets/img/italia_riva_black.png"
    },
    {
      nombre: "Rivera",
      pais: "Italia",
      imgbody: "assets/img/italia_rivera_body.jpg",
      imgbodyblack: "assets/img/italia_rivera_body_back.jpg",
      img: "assets/img/italia_rivera.png",
      imgblack: "assets/img/italia_rivera_black.png"
    },
    {
      nombre: "Rossi",
      pais: "Italia",
      imgbody: "assets/img/italia_rossi_body.jpg",
      imgbodyblack: "assets/img/italia_rossi_body_back.jpg",
      img: "assets/img/italia_rossi.png",
      imgblack: "assets/img/italia_rossi_black.png"
    },


    {
      nombre: "Carvalho",
      pais: "Portugal",
      imgbody: "assets/img/portugal_carvalho_body.jpg",
      imgbodyblack: "assets/img/portugal_carvalho_body_back.jpg",
      img: "assets/img/portugal_carvalho.jpg",
      imgblack: "assets/img/portugal_carvalho_black.jpg"
    },
    {
      nombre: "Couto",
      pais: "Portugal",
      imgbody: "assets/img/portugal_couto_body.jpg",
      imgbodyblack: "assets/img/portugal_couto_body_back.jpg",
      img: "assets/img/portugal_couto.jpg",
      imgblack: "assets/img/portugal_couto_black.jpg"
    },
    {
      nombre: "Deco",
      pais: "Portugal",
      imgbody: "assets/img/portugal_deco_body.jpg",
      imgbodyblack: "assets/img/portugal_deco_body_back.jpg",
      img: "assets/img/portugal_deco.jpg",
      imgblack: "assets/img/portugal_deco_black.jpg"
    },
    {
      nombre: "Eusebio",
      pais: "Portugal",
      imgbody: "assets/img/portugal_eusebio_body.jpg",
      imgbodyblack: "assets/img/portugal_eusebio_body_back.jpg",
      img: "assets/img/portugal_eusebio.jpg",
      imgblack: "assets/img/portugal_eusebio_black.jpg"
    },

    {
      nombre: "Figo",
      pais: "Portugal",
      imgbody: "assets/img/portugal_figo_body.jpg",
      imgbodyblack: "assets/img/portugal_figo_body_back.jpg",
      img: "assets/img/portugal_figo.jpg",
      imgblack: "assets/img/portugal_figo_black.jpg"
    },
        {
      nombre: "Futre",
      pais: "Portugal",
      imgbody: "assets/img/portugal_futre_body.jpg",
      imgbodyblack: "assets/img/portugal_futre_body_back.jpg",
      img: "assets/img/portugal_futre.jpg",
      imgblack: "assets/img/portugal_futre_black.jpg"
    },
    {
      nombre: "Pauleta",
      pais: "Portugal",
      imgbody: "assets/img/portugal_pauleta_body.jpg",
      imgbodyblack: "assets/img/portugal_pauleta_body_back.jpg",
      img: "assets/img/portugal_pauleta.jpg",
      imgblack: "assets/img/portugal_pauleta_black.jpg"
    },
    {
      nombre: "Pepe",
      pais: "Portugal",
      imgbody: "assets/img/portugal_pepe_body.jpg",
      imgbodyblack: "assets/img/portugal_pepe_body_back.jpg",
      img: "assets/img/portugal_pepe.jpg",
      imgblack: "assets/img/portugal_pepe_black.jpg"
    },
    {
      nombre: "Ronaldo",
      pais: "Portugal",
      imgbody: "assets/img/portugal_ronaldo_body.jpg",
      imgbodyblack: "assets/img/portugal_ronaldo_body_back.jpg",
      img: "assets/img/portugal_ronaldo.jpg",
      imgblack: "assets/img/portugal_ronaldo_black.jpg"
    },
    {
      nombre: "Rui Costa",
      pais: "Portugal",
      imgbody: "assets/img/portugal_rui_costa_body.jpg",
      imgbodyblack: "assets/img/portugal_rui_costa_body_back.jpg",
      img: "assets/img/portugal_rui_costa.jpg",
      imgblack: "assets/img/portugal_rui_costa_black.jpg"
    },
    {
      nombre: "Vitor Baia",
      pais: "Portugal",
      imgbody: "assets/img/portugal_vitor_baia_body.jpg",
      imgbodyblack: "assets/img/portugal_vitor_baia_body_back.jpg",
      img: "assets/img/portugal_vitor_baia.jpg",
      imgblack: "assets/img/portugal_vitor_baia_black.jpg"
    },



    {
      nombre: "Forlan",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_forlan_body.jpg",
      imgbodyblack: "assets/img/uruguay_forlan_body_back.jpg",
      img: "assets/img/uruguay_forlan.png",
      imgblack: "assets/img/uruguay_forlan_black.png"
    },
    {
      nombre: "Francescoli",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_francescoli_body.jpg",
      imgbodyblack: "assets/img/uruguay_francescoli_body_back.jpg",
      img: "assets/img/uruguay_francescoli.png",
      imgblack: "assets/img/uruguay_francescoli_black.png"
    },
    {
      nombre: "Godin",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_godin_body.jpg",
      imgbodyblack: "assets/img/uruguay_godin_body_back.jpg",
      img: "assets/img/uruguay_godin.png",
      imgblack: "assets/img/uruguay_godin_black.png"
    },
    {
      nombre: "Suarez",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_luis_suarez_body.jpg",
      imgbodyblack: "assets/img/uruguay_luis_suarez_body_back.jpg",
      img: "assets/img/uruguay_luis_suarez.png",
      imgblack: "assets/img/uruguay_luis_suarez_black.png"
    },
    {
      nombre: "Mazurkiewickz",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_mazurkiewicz_body.jpg",
      imgbodyblack: "assets/img/uruguay_mazurkiewicz_body_back.jpg",
      img: "assets/img/uruguay_mazurkiewicz.png",
      imgblack: "assets/img/uruguay_mazurkiewicz_black.png"
    },
    {
      nombre: "Montero",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_montero_body.jpg",
      imgbodyblack: "assets/img/uruguay_montero_body_back.jpg",
      img: "assets/img/uruguay_montero.png",
      imgblack: "assets/img/uruguay_montero_black.png"
    },
    {
      nombre: "Pereyra",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_pereyra_body.jpg",
      imgbodyblack: "assets/img/uruguay_pereyra_body_back.jpg",
      img: "assets/img/uruguay_pereyra.png",
      imgblack: "assets/img/uruguay_pereyra_black.png"
    },
    {
      nombre: "Recoba",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_recoba_body.jpg",
      imgbodyblack: "assets/img/uruguay_recoba_body_back.jpg",
      img: "assets/img/uruguay_recoba.png",
      imgblack: "assets/img/uruguay_recoba_black.png"
    },
    {
      nombre: "Scarone",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_scarone_body.jpg",
      imgbodyblack: "assets/img/uruguay_scarone_body_back.jpg",
      img: "assets/img/uruguay_scarone.png",
      imgblack: "assets/img/uruguay_scarone_black.png"
    },
    {
      nombre: "Schiaffino",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_schiaffino_body.jpg",
      imgbodyblack: "assets/img/uruguay_schiaffino_body_back.jpg",
      img: "assets/img/uruguay_schiaffino.png",
      imgblack: "assets/img/uruguay_schiaffino_black.png"
    },
    {
      nombre: "Varela",
      pais: "Uruguay",
      imgbody: "assets/img/uruguay_varela_body.jpg",
      imgbodyblack: "assets/img/uruguay_varela_body_back.jpg",
      img: "assets/img/uruguay_varela.png",
      imgblack: "assets/img/uruguay_varela_black.png"
    },
  ];
  constructor() { }
  getHeroes(): Heroe[] {
    return this.heroes;
  }
}
export interface Heroe {
  nombre: string;
  pais: string;
  imgbody: string;
  imgbodyblack: string;
  img: string;
  imgblack: string;
}
