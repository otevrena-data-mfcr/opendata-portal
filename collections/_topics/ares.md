---
title: ARES - Administrativní registr ekonomických subjektů
short_title: ARES
description: Informace o ekonomických subjektech v České republice

datasets:
  - https://data.mf.gov.cz/lod/katalog/ares-administrativni-registr-ekonomickych-subjektu

links:
  - title: Webové rozhraní IS ARES
    description: Webový formulář sloužící k vyhledávání v registru ARES
    url: https://ares.gov.cz/ekonomicke-subjekty
---

# Data ke stažení

## Struktura dat

Ministerstvo financí, v souladu s Nařízením vlády č. 425/2016 Sb., o seznamu informací zveřejňovaných jako otevřená data, zveřejňuje tyto informace o osobách zapsaných v České republice ve veřejných rejstřících podle § 7 zákona č. 304/2013 Sb., o veřejných rejstřících právnických a fyzických osob, ve znění pozdějších předpisů: 

 - jméno
 - den vzniku právnické osoby, den jejího zrušení s uvedením právního důvodu a den jejího zániku
 - sídlo, adresu místa pobytu, popřípadě také bydliště, liší-li se od adresy místa pobytu
 - identifikační číslo osoby, bylo-li jí přiděleno
 - účel nebo předmět činnosti
 - jméno, adresu sídla nebo místa pobytu, popřípadě také bydliště, liší-li se od adresy místa pobytu, každého člena statutárního orgánu spolu s uvedením způsobu, jakým právnickou osobu zastupuje, a den vzniku a zániku výkonu funkce
 - členství v právnické osobě a její jméno, je-li členem právnické osoby
 - členství v orgánu právnické osoby a její jméno, je-li členem orgánu právnické osoby
 - označení rejstříku, ve kterém je osoba zapsána

## Co jsou to veřejné rejstříky?
Veřejnými rejstříky právnických a fyzických osob se podle § 1 tohoto zákona rozumí spolkový rejstřík, nadační rejstřík, rejstřík ústavů, rejstřík společenství vlastníků jednotek, obchodní rejstřík a rejstřík obecně prospěšných společností. Veřejné rejstříky vedou krajské soudy podle § 75 tohoto zákona pro ty subjekty, které mají své sídlo v obvodu příslušného krajského soudu https://or.justice.cz/ias/ui/soudy.

## Upozornění k obsahu otevřených dat

 - data lze využívat v souladu s [podmínkami provozu IS ARES](http://wwwinfo.mfcr.cz/ares/ares_podminky.html.cz),
 - Ministerstvo financí není tvůrcem dat a nenese zodpovědnost za jejich úplné, správné a včasné předání,
 - Ministerstvo financí si z provozních či jiných důvodů vyhrazuje právo dočasně omezit přístup k datům,a to i bez předchozího upozornění,
 - Ministerstvo financí se zříká odpovědnosti za škody způsobené dalším užitím dat,jakož i odpovědnosti za škody způsobené případnými chybami, které by data mohla obsahovat, neboť není jejich tvůrcem,
 - Ministerstvo financí nepovažuje za vhodné modifikovat data způsobem, který by zkresloval jejich význam,bez uvedení, že tomu tak bylo učiněno.


# Služby

## Podmínky provozu
Součástí informačního systému ARES je i API rozhraní pro vyhledání subjektu a zpřístupnění jeho veřejných údajů ze zdrojových registrů. Služby může využívat každý, pokud bude respektovat podmínky provozu. Jsou nastaveny určité limity pro počty dotazů, které může jeden uživatel do ARES poslat. 

Účelem provozování aplikace je poskytnout rychlé a obecně dostupné informace o jednotlivých subjektech. K tomuto účelu není pro běžného uživatele přístup k aplikaci ARES omezen. S ohledem na charakter provozu ARES a jeho zabezpečení si Ministerstvo financí vyhrazuje právo omezit nebo znemožnit přístup k www aplikaci ARES uživatelům, kteří:
     - odešlou k vyřízení více než 500 dotazů za minutu 
     - se snaží o porušení bezpečnostní ochrany www serveru Ministerstva financí,
     - opakovaně posílají nesprávně vyplněné dotazy,
     - opakovaně posílají stejné dotazy,
     - mají větší počet současně zadaných dotazů (pro automatizované dotazy),
     - obcházejí povolené limity využíváním dotazování z většího množství IP adres,
     - automatizovaně propátrávají databázi náhodnými údaji nebo generují většinu nesprávných dotazů.
 
Služby si můžete vyzkoušet ve [Swagger UI](https://ares.gov.cz/swagger-ui/)

[ARES - Technická dokumentace Katalog veřejných služeb - CZ](https://www.mfcr.cz/assets/attachments/2023-08-01_ARES-Technicka-dokumentace-Katalog-verejnych-sluzeb_v06.pdf)

[ARES - Technical documentation Catalog of public services - ENG](https://www.mfcr.cz/assets/attachments/2024-02-16_ARES-Technical-documentation-Catalog-of-public-services.pdf)

[JSON příloha AresRestApi](https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/v3/api-docs)

[Changelog k API](https://ares.gov.cz/stranky/changelog-api)


# O IS ARES
Administrativní registr ekonomických subjektů je informační systém, který umožňuje vyhledávání nad ekonomickými subjekty registrovanými v České republice. Zprostředkovává zobrazení údajů vedenýchv jednotlivých registrech státní správy, ze kterých čerpá data (tzv. zdrojové registry).

Ekonomické subjekty, které z jakéhokoli důvodu nemají uvedené IČO a nelze je jednoznačně identifikovat, nemusí být zobrazené (nalezené).

V IS ARES se nelze registrovat přímo. Je nutné postupovat ve shodě s příslušnými zákonya registrovat se na registračních místech příslušných orgánů veřejné správy. Stejně tak změny údajů či ukončení registrace je nutné nahlásit na instituci, která vede příslušný zdrojový registr. 

Uveřejňovaná data v ARES jsou v souladu s nařízením (EU) 2016/679 – GDPR, o ochraně osobních údajů.
