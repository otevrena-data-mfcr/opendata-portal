---
title: Centrální registr dotací (CEDR III) - SPARQL Endpoint
description: Data o dotacích ze systému CEDR III ve formátu linked data. Protokol pro dotazování se řídí specifikací SPARQL 1.1.
---

# Popis
SPARQL REST API je rozhraní určené k dotazování a prohledávání RDF dat. Protokol pro dotazování se řídí specifikací SPARQL 1.1. V tomto případě se prohledávají otevřená data IS CEDR III.

Formát výstupních dat se nastavuje pomocí parametru Accept v HTTP header GET, POST požadavku. Pokud není nastaven požadavek na formát výstupních dat, za defaultní hodnotu se bere formát application/sparql-results+xml.

# Dokumentace

Dokumentace tohoto API je na adrese [https://cedr.mfcr.cz/cedr3internetv419/OpenData/DocumentationPage.aspx](https://cedr.mfcr.cz/cedr3internetv419/OpenData/DocumentationPage.aspx)

# Vyzkoušejte si


{% capture sparql_query %}select * where {?o ?p ?s} limit 20{% endcapture %}

{% include components/sparql-ui.html url="https://cedropendata.mfcr.cz/c3lod/cedr/sparql" query=sparql_query %}

