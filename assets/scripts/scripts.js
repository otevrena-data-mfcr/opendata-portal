$(document).ready(function () {

  function assignAnimatedScroll(target, topOffset) {

    if (!topOffset) topOffset = 0;

    $(target).on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("href"));
      var scrollTarget = $(this).data("scroll-target") ? $($(this).data("scroll-target")) : undefined;
      if (scrollTarget) {
        var offset = target.offset().top - scrollTarget.offset().top + scrollTarget.scrollTop() - topOffset;
        scrollTarget.animate({ scrollTop: offset }, '250ms');
      }
      else {
        var offset = target.offset().top - topOffset;
        $([document.documentElement, document.body]).animate({ scrollTop: offset }, '250ms');
      }
    });
  }
  $("a.animated-scroll").each(function () {
    assignAnimatedScroll(this);
  })

  var tocLastId = 0;

  $(".autotoc").each(function () {
    var toc = this;
    var targetId = $(this).data("target");
    var levels = $(this).data("levels") || "h1,h2";
    var topOffset = $(this).data("top-offset") ? Number($(this).data("top-offset")) : 0;


    var tocLinkTemplate = $("<a/>");
    tocLinkTemplate.addClass("animated-scroll");

    if ($(this).data("scroll-target")) tocLinkTemplate.data("scroll-target", $(this).data("scroll-target"));

    var tocItems = $(targetId).find(levels).toArray();
    tocItems.sort(function (a, b) { return $(a).offset().top - $(b).offset().top; });

    tocItems.forEach(function (tocItem) {
      var id = $(tocItem).attr("id");

      if (!id) {
        tocLastId++;
        id = "toc_" + tocLastId;
        $(tocItem).attr("id", id);
      }

      var tocLink = tocLinkTemplate.clone(true)
        .text($(tocItem).text())
        .attr("href", "#" + id)
        .addClass("toc-level-" + $(tocItem).prop("tagName").toLowerCase());

      assignAnimatedScroll(tocLink, topOffset);

      $(toc).append(tocLink);
    })

  });

  $(".dataset").each(function () {

    var self = $(this);
    var iri = self.data("iri");
    if (!iri) return;

    self.find(".title").text("Načítání...");

    var datasetQuery = `PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?title ?description ?docs
WHERE {
  <${iri}> a dcat:Dataset;
    dct:title ?title;
    dct:description ?description .
  FILTER (LANG(?title) = 'cs' && LANG(?description) = 'cs')
  OPTIONAL {<${iri}> foaf:page ?docs}
}`;

    var distributionQuery = `PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?iri ?format ?downloadUrl ?accessURL
WHERE {
  <${iri}> a dcat:Dataset; dcat:distribution ?iri .
  ?iri dct:format ?format .
  OPTIONAL { ?iri dcat:downloadURL ?downloadUrl } 
  OPTIONAL { ?iri dcat:accessURL ?accessURL } 
}`;

    $.get("https://opendata.mfcr.cz/lod/sparql", { query: datasetQuery })
      .then(function (result) {

        var dataset = result.results.bindings[0];

        self.find(".title").text(dataset.title.value);
        self.find(".description").text(dataset.description.value);

        if (dataset.docs) {
          var el = $("<a/>")
            .attr("href", dataset.docs.value)
            .text("Dokumentace")
          self.find(".actions").append(el);
        }

        $.get("https://opendata.mfcr.cz/lod/sparql", { query: distributionQuery })
          .then(function (result) {

            var distributions = result.results.bindings;

            distributions
              .forEach(function (distribution) {
                var el = $("<a/>")
                  .attr("href", distribution.downloadUrl ? distribution.downloadUrl.value : (distribution.accessUrl ? distribution.accessUrl.value : ""))
                  .text(distribution.format.value.split("/").pop().toUpperCase())
                self.find(".download").append(el);
              });
          });

      })
      .catch(function (err) {
        console.error(err);
        self.find(".title").text("Neznámá datová sada")
        self.find(".description").text("Nastala chyba při stahování informací o datové sadě. Zkuste zobrazit informace kliknutím na tlačítko níže.")
      })
  });

  $.get("https://opendata.mfcr.cz/lod/stats").then(function (data) {
    $("#stats-publishers").text(data.publishers.toLocaleString("cs"));
    $("#stats-sources").text(data.distributions.toLocaleString("cs"));
    var bytes = (Math.round(data.bytes / Math.pow(10, 7)) / 100)
    $("#stats-size").text(bytes.toLocaleString("cs"));
  });

});