// Open links to external sites (the Dropbox slides) in a new tab.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.reference.external").forEach(function (a) {
    a.target = "_blank";
    a.rel = "noopener";
  });
});
