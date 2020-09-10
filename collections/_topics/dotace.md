---
title: Dotace
description: Přehled dotací ze státního rozpočtu a z EU

organizations:
  - gfr

datasets:
  - https://opendata.mfcr.cz/lod/cedr/cedr
  - https://opendata.mfcr.cz/lod/katalog/dotinfo

links:
  - title: Webové rozhraní IS CEDR III
    url: https://cedr.mfcr.cz/cedr3internetv419/default.aspx
  - title: Webové rozhraní IS Dotinfo
    url: https://www.dotinfo.cz/
---

# Úvod

TODO: vysvětlit, jaké máme systémy na dotace (CEDR, Dotinfo, EDS/SMVS) a jaké jsou mezi nima vazby.

# Centrální evidence dotací

IS CEDR III, Centrální evidence dotací z rozpočtu nebo také Centrální registr dotací, je databáze obsahující údaje o dotacích, návratných finančních výpomocích a dalších podobných transferech poskytovaných ze státního rozpočtu, státních fondů, státních finančních aktiv a Národního fondu (včetně evropských dotací) a jejich příjemcích.

Data jsou poskytována jak v balících CSV, tak ve formátu RDF linked data.

## Struktura

Hlavními tabulkami jsou **PrijemcePomoci**, **Dotace**, **Rozhodnuti** a **RozpoctoveObdobi**.

Tabulka **PrijemcePomoci** obsahuje statiské informace o příjemcích. Tyto informace jsou přejímány z různých systémů a vázány na různé dotace a proto pro jednoho příjemce obsahuje tabulka několik záznamů. Pro spojení těchto záznamů je k dispozici IČO příjemce. 

Tabulka **Dotace** obsahuje metadata o dotaci jako její název (pole **projektNazev**) a kategorizaci.

Tabulka **Rozhodnuti** obsahuje zejména požadovanou částku (**castkaPozadovana**) a reálně rozho&shy;dnutou částku (**caskaRozhodnuta**), ale také zdroj, ze kterého mají být tyto částky vyplaceny.

Tabulka **RozpoctoveObdobi** obsahuje výše čerpání v daném ropzočtovém období. Jedná se o pole **castkaCerpana**, **castkaSpotrebovana**, **castkaUvolnena** a **castkaVracena**.

Úplný přehled vazeb mezi tabulkami znázorňuje následující schéma, které je součástí [dokumentace](https://cedropendata.mfcr.cz/c3lod/C3_OpenData%20-%20datov%C3%A1%20sada%20IS%20CEDR%20III.pdf):

[![Struktura IS CEDR III](/assets/content/cedr.png)](/assets/content/cedr.png)

# Dotinfo

DotInfo je informační systém, který umožňuje vyhledávání nad poskytovateli dotací a návratných finančních výpomocí ze státního rozpočtu ČR.
