---
title: ARES - Administrativní registr ekonomických subjektů
short_title: ARES
description: Administrativní registr ekonomických subjektů

datasets:
  - https://opendata.mfcr.cz/lod/katalog/ares-administrativni-registr-ekonomickych-subjektu

links:
  - title: Webové rozhraní IS ARES
    description: Webový formulář sloužící k vyhledávání v registru ARES
    url: https://wwwinfo.mfcr.cz/ares/ares_es.html.cz
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


# XML služby

## Podmínky provozu
Součástí informačního systému ARES je i XML rozhraní pro vyhledání subjektu a zpřístupnění jeho veřejných údajů ze zdrojových registrů. Služby XML může využívat každý, pokud bude respektovat [podmínky provozu](https://wwwinfo.mfcr.cz/ares/ares_podminky.html.cz). Jsou nastaveny určité limity pro počty dotazů, které může jeden uživatel během dne do ARES poslat. V době od 8:00 do 18:00 se předpokládá větší množství dotazujících uživatelů, proto je pro tuto dobu omezení počtudotazů přísnější. Hodnoty limitů pro denní a noční provoz jsou uvedeny v [podmínkách provozu](https://wwwinfo.mfcr.cz/ares/ares_podminky.html.cz).

V případě odůvodněné mimořádné potřeby využívat XML služby ARES v nadlimitním režimu je možné: 
 1. požádat ministerstvo financí na adrese [ares@mfcr.cz](mailto:ares@mfcr.cz) o možnost zvýšení limitu a sdělit předpokládaný počet dotazů,
 2. dodat seznam IP adres, ze kterých se bude na XML služby ARES přistupovat,
 3. dodat kontaktní e-mailové adresy pro možnost zasílání upozornění opřípadných výpadcích v provozu IS ARES.


Kompletní technická dokumentace je na vyžádání na adrese [ares@mfcr.cz](mailto:ares@mfcr.cz).



## Popis rozhraní

Popis schémat je dostupný na této adrese.Celé ke stažení - na druhém řádku kliknout na ares.gz (lze rozbalit např. WinZipem).

Popis xml elementů lze vyčíst ze schémat.

(zpět)



## Přístup pomocí metody GET

Následující seznam nabízí výběr aplikací, které poskytují data zARES v XML pro dotazy metodou GET bez nutnosti digitálního podpisu.Název služby je současně příkladem dotazu do příslušné služby. 
 - základní dotaz na výpis identifikačních údajů: Standard (doplňující informace)
 - dotaz na seznam registrací subjektu ve zdrojích VR, RES a RŽP: Seznam_Reg
 - základní výpis z více registrů: Basic (doplňující informace)
 - výpis dat z Veřejného rejstříku: Vypis_OR(doplňující informace)
 - výpis dat z Registru živnostenského podnikání: Vypis_RZP(doplňující informace)
 - výpis dat ze statistického registru RES: Vypis_RES(doplňující informace)
 - výpis dat z Registru církví a náboženských společností: Vypis_CNS
 - výpis dat z Centrální evidence úpadců: Vypis_CEU
 - přehled ekonomických subjektů (doplňující informace nebo formulář)
 - dotaz na standardizovanou adresu (doplňující informace nebo formulář)
 - přehled změn ekonomických subjektů (doplňující informace nebo formulář)
 - výpis dat z Národního registru poskytovatelů zdravotních služeb: Vypis_RZZ
 - výpis dat ze zemědělského registru: Vypis_SZR
 - výpis dat z Registru politických stran a hnutí: Vypis_PSH
 - výpis dat z Rejstříku škol: Vypis_SKO(doplňující informace)
 - elektronický opis Veřejného rejstříku: Vypis_VREO(doplňující informace)

### Poznámky a doporučení
- Výstupy jsou uváděny buď v plné verzi, tj. plnými názvy elementů, neboúsporné ve zkratkách (parametr ver). Implicitně jsou nastaveny u jednotlivýchvýstupů úsporné verze, protože šetří přenosové linky. Pokud to je možné,doporučujeme parametr ver nepoužívat. Převod mezi plnými názvy a zkratkamije v souboru zkratek.
- Pokud nevyhovují výstupy ve zkratkách, je možno volat plné verze sparametrem:
  - VR - ver=1.0.2,
  - RŽP - ver=1.0.4,
  - RCNS - ver=1.0.1,
  - RES - ver=1.0.0,
  - Basic - ver=1.0.2,
- SKO - ver=1.0.4.
- Formát výstupu je určen parametrem xml. Tento parametr je náhradou za dvojiciparametrů odp, xslt v předchozí verzi ARES. Po přechodnoudobu budou funkční obě verze parametrů. Přípustné hodnoty parametru xml: 
  - xml=0 výstup je v xml 
  - xml=1 výstup je v html, transformce z xml probíhá v prohlížeči uživatele 
  - xml=2 výstup je v html, transformace z xml probíhá na serveru 

- Implicitní nastavení transformací je v prohlížeči klienta, protože přiopakovaných dotazech je pro klienta i server rychlejší.
- Pokud by se html po transformaci na klientu nezobrazovalo korektně, použijte transformaci na serveru (ve formuláři volba "HTML server").
- V případě výskytu problémů s transformacemi jako první radu doporučujemevymazání cache Vašeho prohlížeče, ukončení práce v prohlížeči a případně irestart počítače. Pokud tato jednoduchá rada nepomůže, můžete kontaktovattechnickou podporu na adrese ares@mfcr.cz.Prosím, v e-mailu uveďte informace o:
    1. hardware Vašeho počítače (stačí typ procesoru a množství paměti RAM)
    2. číslo verze Vašeho operačního systému
    3. číslo verze Vámi používaného prohlížeče

## Přístup pomocí metody POST

Automatizovaně lze k některým službám přistupovat metodou POST(aplikace je dostupná na této adrese).

Počet elementů <Dotaz> v jednom volání je omezen na maximální hodnotu 100.
- základní standardní dotaz: Standard
- základní výpis přes více registrů: Basic
- Veřejný rejstřík: Vypis_OR
- Registr živnostenského podnikání: Vypis_RZP
- statistický RES: Vypis_RES
- dotaz na seznam registrací subjektu v VR, RES, RŽP: Seznam_Reg
- dotaz na standardizovanou adresu: Stdadr
- přehled změn ekonomických subjektů: zm


# O IS ARES
Administrativní registr ekonomických subjektů je informační systém, který umožňuje vyhledávání nad ekonomickými subjekty registrovanými v České republice. Zprostředkovává zobrazení údajů vedenýchv jednotlivých registrech státní správy, ze kterých čerpá data (tzv. zdrojové registry).

Ekonomické subjekty, které z jakéhokoli důvodu nemají uvedené IČO a nelze je jednoznačně identifikovat, nemusí být zobrazené (nalezené).

V IS ARES se nelze registrovat přímo. Je nutné postupovat ve shodě s příslušnými zákonya registrovat se na registračních místech příslušných orgánů veřejné správy. Stejně tak změny údajů či ukončení registrace je nutné nahlásit na instituci, která vede příslušný zdrojový registr. Seznam zdrojových registrů a zodpovědných institucí je uveden na stránce [ÚŘADY REGISTRACE](https://wwwinfo.mfcr.cz/ares/ares_rm.html.cz).

Uveřejňovaná data v ARES jsou v souladu s nařízením (EU) 2016/679 – GDPR, o ochraně osobních údajů.