---
title: Hospodaření resortu MF
description: Hospodaření v resortu Ministerstva financí ČR

organizations:
  - mf

datasets:
  - https://opendata.mfcr.cz/lod/katalog/smlouvy-ministerstva-financi-cr-seznam-smluv
  - https://opendata.mfcr.cz/lod/katalog/smlouvy-ministerstva-financi-cr-vazba-na-faktury
  - https://opendata.mfcr.cz/lod/katalog/faktury-ministerstva-financi-cr
  - https://opendata.mfcr.cz/lod/katalog/prehled-faktur-uzsvm

links:


  - title: Aplikace Supervizor
    description: Supervizor zobrazuje faktury ministerstva financí v přehledné rozklikávací vizualizaci
    url: https://supervizor.mfcr.cz/
---

# Úvod

Jednotlivé organizace resortu Ministerstva financí jsou samostatnými účetními jednotkami a mají tedy částečně odlišné vedení faktur a smluv. V současnosti se snažíme o sjednocení exportů otevření dat dle [otevřené formální normy pro zveřejňování faktur](https://ofn.gov.cz/faktury/draft) dle Ministerstva vnitra. Tato norma je ale bohužel stále ve fázi draftu a tak se exporty budou ještě pravděpodobně měnit.

# Datové sady

## Přehled smluv MF
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

## Přehled smluv MF - Vazby smluv a faktur

| Název sloupce    | Popis                                                     |
|------------------|-----------------------------------------------------------|
| cislo_smlouvy    |                                                           |
| cislo_faktury    | číslo faktury odpovídající číslu faktury v seznamu faktur |
| castka           | částka faktury                                            |
| mena             |                                                           |
| stav_faktury     |                                                           |
| cstredisko_cislo |                                                           |
| cstredisko_nazev |                                                           |
{: .table .table-sm}



## Faktury MF
Přehled uhrazených faktur Ministerstva financí ČR sestává z jediné tabulky, která obsahuje jak přehled jednotlivých faktur, tak jejich členění dle položky rozpočtu. Pro každou fakturu je uveden jeden záznam souhrnný a několik (nemusí být žádný) řádků položkových. Pro přehled všech faktur bez členění podle položky rozpočtu je tedy potřeba brát v potaz pouze záznamy souhrnné (typ_záznamu = 'souhrnný'). Naopak pro přehled částek za konkrétní položku rozpočtu je třeba sledovat sloupec částka_za_položku_rozpočtu a nikoli částky vztahující se k faktuře jako celku.

Soubor taktéž obsahuje jak faktury přijaté (typ_dokladu = 'F'), tak zálohové faktury přijaté ('Z') a jiné daňové doklady ('W').

## Faktury ÚZSVM

# Aplikace Supervizor

# Náklady projektu Otevřená data MF

| Platba                                                                                                                     |      Cena | Počet |    Celkem |
|----------------------------------------------------------------------------------------------------------------------------|----------:|------:|----------:|
| **Provoz aplikačního serveru**<br><small>provoz dle modelu IaaS</small>                                                   |  2 707 Kč |     1 |  2 707 Kč |
| **Provoz databázového serveru PostgreSQL 11**<br><small>provoz dle modelu SaaS; server je sdílen s jiným projektem</small> | 20 232 Kč |   0,5 | 10 116 Kč |
| **Zaměstnanec #1**<br><small>odhadovaný čas, mzdové náklady</small>                                                        |    150 Kč |    20 |  3 000 Kč |
| **Zaměstnanec #2**<br><small>odhadovaný čas, mzdové náklady</small>                                                        |    409 Kč |    60 | 24 522 Kč |
{: .table .table-sm}

**Celkové měsíční náklady**: 40 345 Kč  
**Celkové roční náklady**: 484 140 Kč 
