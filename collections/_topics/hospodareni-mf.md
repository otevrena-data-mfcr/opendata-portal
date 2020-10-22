---
title: Hospodaření Ministerstva financí
short_title: Hospodaření MF
description: Faktury, smlouvy a objednávky Ministerstva financí

organizations:
  - mf

datasets:
  - https://opendata.mfcr.cz/lod/katalog/smlouvy-ministerstva-financi-cr-seznam-smluv
  - https://opendata.mfcr.cz/lod/katalog/vazebni-tabulka-smlouv-faktur-ministerstva-financi-cr
  - https://opendata.mfcr.cz/lod/katalog/faktury-ministerstva-financi-cr
  - https://opendata.mfcr.cz/lod/katalog/objednavky-ministerstva-financi-cr-detail
  - https://opendata.mfcr.cz/lod/katalog/objednavky-ministerstva-financi-cr-seznam-objednavek
  - https://opendata.mfcr.cz/lod/katalog/report-provoznich-nakladu-mf

# links:
#   - title: Aplikace Supervizor
#     description: Supervizor zobrazuje faktury ministerstva financí v přehledné rozklikávací vizualizaci
#     url: https://supervizor.mfcr.cz/
---

# Úvod

Resort ministerstva financí je tvořen šesti organizacemi: Ministerstvem financí (MF), Generálním finančním ředitelstvím (GFŘ), Generálním ředitelstvím cel (GŘC), Úřadem pro zastupování státu ve věcech majetkových (ÚZSVM), Finančním analytickým úřadem (FAÚ) a Kanceláří finančního arbitra (KFA). Tato stránka se zabývá hospodařením pouze resortní organizace Ministerstvo financí.

Jednotlivé organizace resortu Ministerstva financí jsou samostatnými účetními jednotkami a mají tedy částečně odlišné vedení faktur a smluv. V současnosti se snažíme o sjednocení exportů otevření dat dle [otevřené formální normy pro zveřejňování faktur](https://ofn.gov.cz/faktury/draft) Ministerstva vnitra. Tato norma je ale stále ve fázi draftu a tak se exporty budou bohužel ještě pravděpodobně měnit.

# Přehled smluv MF
Přehled platných i neplatných smluv, které uzavřelo ministerstvo financí.

| Název sloupce        | Popis                                                                |
|----------------------|----------------------------------------------------------------------|
| cislo_smlouvy        | evidenční číslo smlouvy přiřazené EKIS MF                            |
| typ_smlouvy          | S: smlouva D: dodatek                                                |
| povaha_smlouvy       | O: odběratelská, D: dodavatelská                                     |
| nazev_partnera       |                                                                      |
| predmet              |                                                                      |
| popis_smluvniho_typu | interní kategorizace smluv                                           |
| castka               | částka smlouvy                                                       |
| kod_stavu            | V: vystavená (platná smlouva) U: ukončená (neplatná smlouva)         |
| platnost_od          |                                                                      |
| platnost_do          |                                                                      |
| datum ucinnosti      |                                                                      |
| zverejnit_v_rs       | smlouva byla zveřejněna v [rejstříku smluv](https://smlouvy.gov.cz/) |
{: .table .table-sm}

# Přehled faktur MF

Přehled uhrazených faktur Ministerstva financí ČR sestává z jediné tabulky, která obsahuje jak přehled jednotlivých faktur, tak jejich členění dle položky rozpočtu. Pro každou fakturu je uveden jeden záznam souhrnný a několik (nemusí být žádný) řádků položkových. Pro přehled všech faktur bez členění podle položky rozpočtu je tedy potřeba brát v potaz pouze záznamy souhrnné (typ_záznamu = 'souhrnný'). Naopak pro přehled částek za konkrétní položku rozpočtu je třeba sledovat pouze záznamy položkové (typ_záznamu = 'položkové').

Soubor taktéž obsahuje jak faktury přijaté (typ_dokladu = 'F'), tak zálohové faktury přijaté ('Z') a jiné daňové doklady ('W').

# Vazby smluv a faktur MF

| Název sloupce    | Popis                                                     |
|------------------|-----------------------------------------------------------|
| cislo_smlouvy    | číslo smlouvy odpovídající číslu faktury v seznamu smluv  |
| cislo_faktury    | číslo faktury odpovídající číslu faktury v seznamu faktur |
| castka           | částka faktury                                            |
| mena             |                                                           |
| stav_faktury     |                                                           |
| cstredisko_cislo |                                                           |
| cstredisko_nazev |                                                           |
{: .table .table-sm}

# Report provozních nákladů MF

Skutečné provozní náklady Ministerstva financí za sledované období. Údaje vypovídají o spotřebě materiálu, služeb a mzdových prostředků MF v daném období. Údaje jsou uvedeny v tisících Kč.

