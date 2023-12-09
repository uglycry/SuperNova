window.addEventListener("load", () => {
  navigator.serviceWorker.register("../sw.js", {
    scope: "/mathematics/"
  });
});

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
function hasHttpPrefix(val = "") {
  if (/^http(s?):\/\//.test(val)) return true;
  return false;
}


const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formValue = document.querySelector("form input").value;
    if (!isUrl(formValue)) {
      const url = "https://www.google.com/search?q=" + formValue;
      sessionStorage.setItem("encodedUrl", encodeURIComponent(url));
      location.href = "/./go";  
    } else {
      if (!hasHttpPrefix(formValue)) {
        const url = "https://" + formValue;
        sessionStorage.setItem("encodedUrl", encodeURIComponent(url));
        location.href = "/./go";
      } else {
        sessionStorage.setItem("encodedUrl", encodeURIComponent(formValue));
        location.href = "/./go";
      }
    }
  });