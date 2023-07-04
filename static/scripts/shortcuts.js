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
  
  var scienceWebsites = [
    'https://www.nasa.gov',
    'https://www.nationalgeographic.com',
    'https://www.scientificamerican.com',
    'https://www.bbc.co.uk/science',
    'https://www.sciencenews.org',
    'https://www.popsci.com',
    'https://www.smithsonianmag.com/science-nature',
    'https://www.livescience.com',
    'https://www.discovery.com',
    'https://www.sciencemag.org'
  ];
  
  var englishWebsites = [
    'https://www.dictionary.com',
    'https://www.grammarly.com',
    'https://www.merriam-webster.com',
    'https://www.englishclub.com',
    'https://www.bbc.co.uk/learningenglish',
    'https://www.readwritethink.org',
    'https://www.eslgold.com',
    'https://www.learnenglish.de',
    'https://www.macmillandictionary.com',
    'https://www.engvid.com'
  ];
  
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js", {
      scope: "/service/"
    });
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.altKey) {
      if (event.key === 'm') {
        var randomIndex = Math.floor(Math.random() * mathWebsites.length);
        go(mathWebsites[randomIndex]);
      } else if (event.key === 's') {
        var randomIndex = Math.floor(Math.random() * scienceWebsites.length);
        go(scienceWebsites[randomIndex]);
      } else if (event.key === 'e') {
        var randomIndex = Math.floor(Math.random() * englishWebsites.length);
        go(englishWebsites[randomIndex]);
      }
      event.preventDefault(); // Prevent default browser shortcuts
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
  
  