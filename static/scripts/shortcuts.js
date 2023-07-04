// random built in cloaks 'alt + c'

document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'c') {
      var websites = [
        '/table',
        '/math',
        '/vocab'
      ];
      var randomIndex = Math.floor(Math.random() * websites.length);
      var randomWebsite = websites[randomIndex];
      window.location.href = randomWebsite;
    }
  });

  // math cloaks 'alt + m'

  var mathWebsites = [
    'https://www.khanacademy.org',
    'https://www.mathplayground.com',
    'https://www.ixl.com/math',
    'https://www.mathway.com',
    'https://www.coolmath.com',
    'https://www.math.com',
    'https://www.mathisfun.com',
    'https://www.aaamath.com',
    'https://www.nctm.org',
    'https://www.mathgoodies.com'
  ];
  
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js", {
      scope: "/service/"
    });
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'm') {
      var randomIndex = Math.floor(Math.random() * mathWebsites.length);
      go(mathWebsites[randomIndex]);
    }
  });
  
  function go(value) {
    const url = value.trim();
    sessionStorage.setItem("encodedUrl", encodeURIComponent(url));
    location.href = "/./go";
  }
  
  function isUrl(val = "") {
    if (
      /^http(s?):\/\//.test(val) ||
      (val.includes(".") && val.substr(0, 1) !== " ")
    )
      return true;
    return false;
  }
  