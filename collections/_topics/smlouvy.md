---
title: Smlouvy

lastModified: 2020-03-17
description: Tabulkový přehled platných i neplatných smluv resortu Ministerstva financí s vazbou na faktury.

featured: true

categories:
  - hospodareni-resortu

organizations:
  - mf

resources:
 - smlouvy
 - smlouvy-faktury

links:
  - title: Web MF
    url: https://www.mfcr.cz/
---

## Popis

Přehled platných i neplatných smluv, které uzavřelo ministerstvo financí.

## Struktura

### Přehled smluv

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

### Seznam vazeb smluv na odpovídající fakturu

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