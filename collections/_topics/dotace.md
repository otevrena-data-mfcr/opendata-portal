---
title: Dotace
description: Přehled dotací ze státního rozpočtu a z EU

organizations:
  - gfr

datasets:
  - https://opendata.mfcr.cz/lod/cedr/cedr
  - https://opendata.mfcr.cz/lod/katalog/dotinfo

links:
  - title: Webové rozhraní Registru dotací
    url: https://red.financnisprava.cz/
  - title: Webové rozhraní IS Dotinfo
    url: https://www.dotinfo.cz/
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

DotInfo je informační systém, který umožňuje vyhledávání nad poskytovateli dotací a návratných finančních výpomocí ze státního rozpočtu ČR.
