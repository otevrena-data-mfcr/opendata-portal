---
title: Faktury resortu Ministerstva financí
short_title: Faktury
description: Přehled uhrazených faktur v resortu Ministerstva financí ČR

lastModified: 2020-02-27

featured: true

organizations:
  - mf

categories:
  - hospodareni-resortu

datasets:
  - https://opendata.mfcr.cz/lod/katalog/faktury-ministerstva-financi-cr
  - https://opendata.mfcr.cz/lod/katalog/prehled-faktur-uzsvm

systems:
  - avis

links:
  - title: Aplikace Supervizor
    description: Supervizor zobrazuje faktury ministerstva financí v přehledné rozklikávací vizualizaci
    url: https://supervizor.mfcr.cz/
---

# Popis

# Struktura 

Jednotlivé organizace resortu Ministerstva financí jsou samostatnými účetními jednotkami a mají tedy částečně odlišné vedení faktur. V současnosti se snažíme o sjednocení exportů otevření dat dle [otevřené formální normy pro zveřejňování faktur](https://ofn.gov.cz/faktury/draft) dle Ministerstva vnitra. Tato norma je ale bohužel stále ve fázi draftu a tak se exporty budou ještě pravděpodobně měnit.

## Faktury Ministerstva financí
Přehled uhrazených faktur Ministerstva financí ČR sestává z jediné tabulky, která obsahuje jak přehled jednotlivých faktur, tak jejich členění dle položky rozpočtu. Pro každou fakturu je uveden jeden záznam souhrnný a několik (nemusí být žádný) řádků položkových. Pro přehled všech faktur bez členění podle položky rozpočtu je tedy potřeba brát v potaz pouze záznamy souhrnné (typ_záznamu = 'souhrnný'). Naopak pro přehled částek za konkrétní položku rozpočtu je třeba sledovat sloupec částka_za_položku_rozpočtu a nikoli částky vztahující se k faktuře jako celku.

Soubor taktéž obsahuje jak faktury přijaté (typ_dokladu = 'F'), tak zálohové faktury přijaté ('Z') a jiné daňové doklady ('W').

## Faktury ÚZSVM

# Aplikace Supervizor

