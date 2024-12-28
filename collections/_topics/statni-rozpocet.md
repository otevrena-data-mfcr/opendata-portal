---
title: Státní rozpočet
description: Tabulkové přílohy státního rozpočtu a rozpočtová skladba

topics:
  - monitor

datasets:
  - https://data.mf.gov.cz/lod/katalog/rozpoctova-skladba
  - https://data.mf.gov.cz/lod/katalog/pokladni-plneni-statniho-rozpoctu

---

# Pokladní plnění státního rozpočtu

Tato datová sada eviduje denní přírůstky příjmů a výdajů státního rozpočtu.

# Tabulkové přílohy státního rozpočtu

Halvní součástí zákona o státním rozpočtu jsou tabulkové přehledy rozpočtů jednotlivých kapitol. Ty najdete v MONITORu Státní pokladny.

{% include topic-button.html id="monitor" %}

# Rozpočtová skladba

Rozpočtová skladba se řídí [vyhláškou č. 323/2002 Sb. - Vyhláška o rozpočtové skladbě](https://www.zakonyprolidi.cz/cs/2002-323). V datové sadě Rozpočtová skladba najdete číselníky rozpočtové skladby dle druhového (položka) a odvětvového třídění (paragraf)

Číselníky se mění zpravidla jednou do roka, kontrola pro otevřená data probíhá jednou měsíčně.

Pokud potřebujete nejrychlejší aktualizaci, doporučujeme data ve formátu XML na adrese [https://downloads.statnipokladna.cz/ciselniky](https://downloads.statnipokladna.cz/ciselniky).

## Odpovědnostní třídění (kapitoly)

Z hlediska odpovědnostního se třídí příjmy a výdaje státního rozpočtu, a to podle správců kapitol.[^vyhlaska-odpovednostni]

### Hierarchie:
 - **Kapitola** (příklad: 301 - Kancelář prezidenta republiky)

## Druhové třídění (položky)

Z hlediska druhového se třídí všechny příjmy a výdaje podle § 1 odst. 1, a to podle příjmových a výdajových druhů. Pro účely určení výdajového druhu se výdaje člení na výdaje na nákupy, kterými jsou výdaje, proti kterým stojí přímá protihodnota, transfery, kterými jsou výdaje, proti kterým přímá protihodnota nestojí, a půjčené prostředky. Výdaji na nákupy jsou výdaje na pořízení hodnot a náhrady. Výdaji na pořízení hodnot jsou výdaje na pořízení věcí, služeb, prací, výkonů nebo práv a výdaji na náhrady jsou výdaje na odškodnění újmy, zejména na úhradu vynaložených nebo nazmar přišlých hodnot. Výdaje na náhrady se dělí na výdaje na náhrady za způsobenou újmu a výdaje na náhrady za nezpůsobenou újmu. Způsobenou újmou se rozumí újma, kterou organizace způsobila nebo která vznikla při plnění povinností v její prospěch. Nezpůsobenou újmou se rozumí újma, kterou organizace nezpůsobila a která ani nevznikla při plnění povinností v její prospěch. Výdajovým druhem se pro účely této vyhlášky rozumí u výdajů na nákupy druh pořizovaných věcí, služeb, prací, výkonů nebo práv nebo druh náhrady a u transferů a půjčených prostředků druh podpory, kterou transfer nebo půjčené prostředky představují, a druh příjemce této podpory. Příjmovým druhem se pro účely této vyhlášky rozumí právní důvod platby, která organizaci plyne, a v rámci něj u příjmů za poskytnutí věcí, služeb, prací, výkonů a práv, případně druh těchto věcí, služeb, prací, výkonů a práv a u příjmů z transferů a půjčených prostředků druh přijímané podpory nebo zdroj transferu nebo půjčených prostředků.[^vyhlaska-druhove]

### Hierarchie:
 - **Třída** (příklad: 1 - DAŇOVÉ PŘÍJMY)
 - **Seskupení** (příklad: 11 - Daně z příjmů, zisku a kapitálových výnosů)
 - **Podseskupení** (příklad: 111 - Daně z příjmů fyzických osob)
 - **Položka** (příklad: 1111 - Daň z příjmů fyzických osob placená plátci)


## Odvětvové třídění (paragrafy)

Z hlediska odvětvového se třídí příjmy a výdaje podle odvětví. Výdaje podle § 1 odst. 1 se z tohoto hlediska třídí všechny a z příjmů jen nedaňové a kapitálové příjmy a příjmy z převodů z vlastních fondů obcí, krajů, regionálních rad regionů soudržnosti a dobrovolných svazků obcí s výjimkou příjmů ze splátek půjčených prostředků. Odvětvím se pro účely této vyhlášky rozumí druh činnosti, z které příjmy plynou nebo na kterou se výdaje vynakládají, nebo zaměření právního subjektu, který finanční prostředky, které organizace získává jako příjmy, organizaci poukazuje nebo odevzdává nebo jemuž organizace finanční prostředky poskytuje za účelem jeho podpory.[^vyhlaska-odvetvove]

### Hierarchie:
 - **Skupina** (příklad: 2 - PRŮMYSLOVÁ A OSTATNÍ ODVĚTVÍ HOSPODÁŘSTVÍ)
 - **Oddíl** (příkald: 21 - Průmysl, stavebnictví, obchod a služby)
 - **Pododdíl** (příklad: 211 - Záležitosti těžebního průmyslu a energetiky)
 - **Paragraf** (příkald: 2111 - Uhelné hornictví)



[^vyhlaska-odpovednostni]: [§ 2 odst. 1 vyhlášky č. 323/2002 Sb. o rozpočtové skladbě](https://www.zakonyprolidi.cz/cs/2002-323#p2-1)
[^vyhlaska-druhove]: [§ 2 odst. 2 vyhlášky č. 323/2002 Sb. o rozpočtové skladbě](https://www.zakonyprolidi.cz/cs/2002-323#p2-2)
[^vyhlaska-odvetvove]: [§ 2 odst. 3 vyhlášky č. 323/2002 Sb. o rozpočtové skladbě](https://www.zakonyprolidi.cz/cs/2002-323#p2-3)