window.addEventListener("load", () => {
  navigator.serviceWorker.register("../sw.js", {
    scope: "/service/"
  });
});

function go(value) {
      const url = value.trim();
      sessionStorage.setItem("encodedUrl", encodeURIComponent(url));
      location.href = "/./go";
    };

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}