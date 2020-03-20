$(document).ready(function () {

  $(".copy").click(function () {

    var text;

    if ($(this).data("copy")) {
      text = $(this).data("copy");
    }
    else if ($(this).parents(".script").length) {
      text = $(this).parent().find("pre").text();
    }

    copyTextToClipboard(text);

    $(this).addClass("copied");

  });

});

$.ajaxSetup({
  beforeSend: function (jqXHR, settings) {
    if (settings.dataType === 'binary') {
      settings.xhr().responseType = 'arraybuffer';
    }
  }
})

function getGatewayUrl(url) {
  return "https://opendata.mfcr.cz/gateway/" + url.replace("//", "/");
  //return url;
}

function getHeaders(url, callback) {
  $.ajax({
    url: getGatewayUrl(url),
    method: "HEAD",
    async: true,
    cache: false
  }).done(function (message, text, jqXHR) {
    callback({
      "accept-ranges": jqXHR.getResponseHeader('Accept-Ranges'),
      "content-length": jqXHR.getResponseHeader('Content-Length')
    });
  });

}

function downloadJSON(url, callback) {
  $.get({
    url: getGatewayUrl(url),
    method: "GET",
    dataType: "json"
  }).then(callback);
}

function downloadPartialData(url, start, size, callback) {
  $.get({
    url: getGatewayUrl(url),
    method: "GET",
    headers: {
      "Range": `bytes=${start}-${size}`
    },
    dataType: "text"
  }).then(callback);
}

function downloadPartialBinary(url, start, size, callback) {
  var xhrOverride = new XMLHttpRequest();
  xhrOverride.responseType = 'arraybuffer';
  $.get({
    url: getGatewayUrl(url),
    method: "GET",
    headers: {
      "Range": `bytes=${start}-${size}`
    },
    xhr: function () {
      return xhrOverride;
    }
  }).then(callback);
}


// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function () {
    console.log('Async: Copying to clipboard was successful!');
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}

