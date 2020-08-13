---
title: Faktury
description: Přehled uhrazených faktur v resortu Ministerstva financí ČR

lastModified: 2020-02-27

featured: true

organizations:
  - mf

categories:
  - hospodareni-resortu

datasets:
  - https://opendata.mfcr.cz/lod/katalog/prehled-faktur-ministerstva-financi-cr
  - https://opendata.mfcr.cz/lod/katalog/prehled-faktur-uzsvm

systems:
  - avis

links:
  - title: Web MF
    url: https://www.mfcr.cz/
---

## Popis

Přehled uhrazených faktur Ministerstva financí ČR sestává z jediné tabulky, která obsahuje jak přehled jednotlivých faktur, tak jejich členění dle položky rozpočtu. Pro každou fakturu je uveden jeden záznam souhrnný a několik (nemusí být žádný) řádků položkových. Pro přehled všech faktur bez členění podle položky rozpočtu je tedy potřeba brát v potaz pouze záznamy souhrnné (typ_záznamu = 'souhrnný'). Naopak pro přehled částek za konkrétní položku rozpočtu je třeba sledovat sloupec částka_za_položku_rozpočtu a nikoli částky vztahující se k faktuře jako celku.

Soubor taktéž obsahuje jak faktury přijaté (typ_dokladu = 'F'), tak zálohové faktury přijaté ('Z') a jiné daňové doklady ('W').

Struktura vychází z velké části z [draftu otevřené formální normy pro zveřejňování faktur](https://ofn.gov.cz/faktury/draft "Otevřené formální normy - faktury").
