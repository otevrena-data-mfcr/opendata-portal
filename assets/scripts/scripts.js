$(document).ready(function () {

  $(".script .copy .success").hide();

  $(".script .copy").click(function () {

    var text = $(this).parent().find("pre").text();

    copyTextToClipboard(text);

    $(this).find(".success").show();

  })

});

function getHeaders(url, callback) {

  $.ajax({
    url: url,
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

function downloadPartialData(url, size, callback) {
  $.get({
    url: url,
    method: "GET",
    headers: {
      "Range": `bytes=0-${size}`
    },
    dataType: "text"
  }).done(callback);
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

