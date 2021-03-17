---
title: REST API datových sad (BETA)
description: V tomto API najdete některé datové sady, které nejsou součástí žádného většího informačního systému. API je v pilotním provozu.
---

# Popis

Toto aplikační rozhraní vzniká na základě poptávky po automatizovaném přístupu k otevřenýcm datům MF, která nejsou součástí žádného informačního systému.

### Dostupnost

Toto aplikační rozhraní **negarantuje žádné SLA**, je poskytováno pouze v úrovni [best-effort](https://cs.wikipedia.org/wiki/Best-effort). V případě, že váš byznys stojí na dostupnosti dat, doporučujeme použít jiný zdroj dat. Aktuální stav služeb můžete zjistit [zde]({{site.data.settings.status_url}}).

### Datové sady

V současnosti je možno skrze toto API dotazovat následující datové sady:
 - Přehled faktur Ministerstva financí (`/faktury`)

### Verzování
Aplikační rozhraní bude verzováno. Nové datové sady a nová pole budou vždy přidávány do aktuální verze. V případě, že by bylo potřeba udělat změnu ve stávající struktuře („breaking change“), bude vytvořena nová verze.

# Dokumentace 

Dokumentace je poskytována formou OpenAPI schématu na adrese `https://opendata.mfcr.cz/api/v1`.

# Vyzkoušejte si

{% include components/openapi-ui.html url="https://opendata.mfcr.cz/api/v1" %}