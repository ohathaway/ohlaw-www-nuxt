function loadScript(a) {
  let b = document.getElementsByTagName("head")[0];
  let c = document.createElement("script");
  c.type = "text/javascript";
  c.src = "https://tracker.metricool.com/resources/be.js";
  c.onreadystatechange = a;
  c.onload = a;
  b.appendChild(c);
}
loadScript(function() {
  beTracker.t({
      hash: "6d06e4cf44232147adf9fc4da3f37e76"
  })
});