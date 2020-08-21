$(document).ready(function () {

  function assignAnimatedScroll(target) {
    $(target).on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("href"));
      var scrollTarget = $(this).data("scroll-target") ? $($(this).data("scroll-target")) : undefined;
      if (scrollTarget) {
        var offset = target.offset().top - scrollTarget.offset().top + scrollTarget.scrollTop() - 50;
        scrollTarget.animate({ scrollTop: offset }, '250ms');
      }
      else {
        console.log(target.offset().top);
        $([document.documentElement, document.body]).animate({ scrollTop: target.offset().top }, '250ms');
      }
    });
  }
  $("a[href*=\\#]").each(function () {
    assignAnimatedScroll(this);
  })

  var tocLastId = 0;

  $(".autotoc").each(function () {
    var toc = this;
    var targetId = $(this).data("target");
    var levels = $(this).data("levels") || "h1,h2";

    var tocLinkTemplate = $("<a/>");

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
      var tocLink = tocLinkTemplate.clone(true).text($(tocItem).text()).attr("href", "#" + id);
      assignAnimatedScroll(tocLink);
      $(toc).append(tocLink);
    })

  });

  $(".dataset").each(function () {

    var self = $(this);
    var iri = self.data("iri");
    if (!iri) return;

    self.find(".title").text("Načítání...");

    $.get(iri)
      .then(function (dataset) {

        self.find(".title").text(dataset.název.cs);
        self.find(".description").text(dataset.popis.cs);


        if (dataset.dokumentace) {
          var el = $("<a/>")
            .attr("href", dataset.dokumentace)
            .text("Dokumentace")
          self.find(".actions").append(el);
        }

        if (dataset.distribuce) {
          dataset.distribuce
            .filter(function (resource) { return !!resource.formát; })
            .forEach(function (resource) {
              console.log(resource);
              var el = $("<a/>")
                .attr("href", resource.soubor_ke_stažení || resource.přístupové_url)
                .text(resource.formát.split("/").pop().toUpperCase())
              self.find(".download").append(el);
            });
        }

      })
      .catch(function (err) {
        self.find(".title").text("Neznámá datová sada")
        self.find(".description").text("Nastala chyba při stahování informací o datové sadě. Zkuste zobrazit informace kliknutím na tlačítko níže.")
      })
  });


  // až bude sparql endpoint, tohle bude jeden dotaz
  $("#dataset-count").each(function () {

    $(this).addClass("loading");

    var el = $(this);
    var count = 0;
    var loading = 3;

    $.get("https://opendata.mfcr.cz/lod/cedr/").then(function (data) {
      el.text((Number(el.text()) || 0) + data.datová_sada.length);
      loading--;
      if (!loading) el.removeClass("loading");
    });

    $.get("https://opendata.mfcr.cz/lod/monitor/").then(function (data) {
      el.text((Number(el.text()) || 0) + data.datová_sada.length);
      loading--;
      if (!loading) el.removeClass("loading");
    });

    $.get("https://opendata.mfcr.cz/lod/katalog/").then(function (data) {
      el.text((Number(el.text()) || 0) + data.datová_sada.length);
      loading--;
      if (!loading) el.removeClass("loading");
    });
  });


});