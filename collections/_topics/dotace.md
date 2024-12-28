---
title: Dotace
description: Přehled dotací ze státního rozpočtu a z EU

organizations:
  - gfr

datasets:
  - https://data.mf.gov.cz/lod/katalog/registr-dotaci
  - https://data.mf.gov.cz/lod/katalog/dotinfo

links:
  - title: Webové rozhraní Registru dotací
    url: https://red.financnisprava.cz/
---

# Registr dotací

IS ReD, Centrální registr dotací z rozpočtu nebo také Centrální evidence dotací, je databáze obsahující údaje o dotacích, návratných finančních výpomocích a dalších podobných transferech poskytovaných ze státního rozpočtu, státních fondů, státních finančních aktiv a Národního fondu (včetně evropských dotací) a jejich příjemcích.

Data jsou poskytována v balících CSV.

## Struktura

Hlavními tabulkami jsou **Prijemce**, **Dotace**, **Rozhodnuti** a **RozpoctoveObdobi**.

Tabulka **Prijemce** obsahuje statické informace o příjemcích. Tyto informace jsou přejímány z různých systémů a vázány na různé dotace a proto pro jednoho příjemce obsahuje tabulka několik záznamů. Pro spojení těchto záznamů je k dispozici IČO příjemce. 

Tabulka **Dotace** obsahuje metadata o dotaci jako její název (pole **nazev, identifikator**) a kategorizaci.

Tabulka **Rozhodnuti** obsahuje zejména požadovanou částku (**castkaPozadovana**) a reálně rozho&shy;dnutou částku (**caskaRozhodnuta**), ale také například zdroj, ze kterého mají být tyto částky vyplaceny.

Tabulka **RozpoctoveObdobi** obsahuje výše čerpání v daném ropzočtovém období. Jedná se o pole **castkaCerpana**, **castkaSpotrebovana**, **castkaUvolnena** a **castkaVracena**.

Úplný přehled vazeb mezi tabulkami znázorňuje následující schéma:

[![Struktura Registru dotací](/assets/content/topics/ReD.png)](/assets/content/topics/ReD.png)

# Dotinfo

DotInfo byl informační systém, který umožňoval vyhledávání nad poskytovateli dotací a návratných finančních výpomocí ze státního rozpočtu ČR. Na základě zákona č. 484/2020 Sb. ze dne 27. 11. 2020, kterým se mění zákon č. 218/2000 Sb., o rozpočtových pravidlech a o změně některých souvisejících zákonů (rozpočtová pravidla) došlo s účinností od 1. 1. 2022 k ukončení činnosti portálu DotInfo. Katalog obsahuje data shromážděná v systému DotInfo do 31. 12. 2021.
