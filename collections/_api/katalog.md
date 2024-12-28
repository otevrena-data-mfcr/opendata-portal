---
title: Katalog datových sad - SPARQL endpoint
description: Metadata o datových sadách (tzv. katalogizační záznamy) publikované prostřednictvím SPARQL endpointu.
---

# Popis
SPARQL endpoint je aplikační rozhraní určené pro komunikaci našeho lokálního katalogu otevřených dat s jinými katalogy, zejména s Národním katalogem otevřených dat. Obsahuje veškeré metadatové záznamy datových sad a distribucí.

Dotaz v jazyce SPARQL se zadává metodou GET na URL `{{site.sparql_url}}` pomocí parametru `query`.

# Dokumentace 

 - [Otevřená formální norma Ministerstva vnitra pro rozhraní katalogů](https://ofn.gov.cz/rozhran%C3%AD-katalog%C5%AF-otev%C5%99en%C3%BDch-dat/draft/#dcat-ap-sparql-endpoint)
 - [SPARQL 1.1 Query Language](https://www.w3.org/TR/sparql11-query/)

# Vyzkoušejte si

{% capture sparql_query %}
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
SELECT ?iri ?parentIri ?title ?description
WHERE {         
  ?iri a dcat:Dataset .
  OPTIONAL { ?iri dct:isPartOf ?parentIri . }
  OPTIONAL { ?iri dct:title ?title . FILTER(LANG(?title) = 'cs') . }
  OPTIONAL { ?iri dct:description ?description . FILTER(LANG(?description) = 'cs') . }
}
LIMIT 20
{% endcapture %}

{% include components/sparql-ui.html url=site.sparql_url query=sparql_query %}