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
    'https://www.mathgoodies.com',
    'https://www.mathsisfun.com',
    'https://www.education.com/math',
    'https://www.math-drills.com',
    'https://www.multiplication.com',
    'https://www.mathantics.com',
    'https://www.hoodamath.com',
    'https://www.math-aids.com',
    'https://www.ixl.com/precalculus',
    'https://www.mathplanet.com',
    'https://www.cut-the-knot.org',
    'https://www.mathwarehouse.com',
    'https://www.ixl.com/geometry',
    'https://www.cymath.com',
    'https://www.mathsisawesome.com',
    'https://www.ixl.com/algebra',
    'https://www.themathpage.com',
    'https://www.mathway.org',
    'https://www.ixl.com/calculus',
    'https://www.mangahigh.com',
    'https://www.mathnook.com'
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
    'https://www.sciencemag.org',
    'https://www.sciencedaily.com',
    'https://www.nature.com',
    'https://www.newscientist.com',
    'https://www.pbs.org/wgbh/nova',
    'https://www.space.com',
    'https://www.sciencemuseum.org.uk',
    'https://www.sciencekids.co.nz',
    'https://www.exploratorium.edu',
    'https://www.iflscience.com',
    'https://www.sciencenordic.com',
    'https://www.cnet.com/news/science',
    'https://www.sciencemagforstudents.org',
    'https://www.howstuffworks.com/science',
    'https://www.aps.org',
    'https://www.sciencebuddies.org',
    'https://www.sciencealert.com',
    'https://www.sciencenotebooking.blogspot.com',
    'https://www.scienceworld.ca',
    'https://www.sciencebob.com',
    'https://www.sciencewithme.com'
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
    'https://www.engvid.com',
    'https://www.oxfordlearnersdictionaries.com',
    'https://www.cambridge.org/elt',
    'https://www.englishpage.com',
    'https://www.englishcentral.com',
    'https://www.duolingo.com',
    'https://www.busuu.com',
    'https://www.englishforums.com',
    'https://www.english-at-home.com',
    'https://www.englishgrammar.org',
    'https://www.ef.com',
    'https://www.englishtown.com',
    'https://www.fluentu.com',
    'https://www.memrise.com',
    'https://www.elllo.org',
    'https://www.talkenglish.com',
    'https://www.engfluent.com',
    'https://www.myenglishpages.com',
    'https://www.englishleap.com',
    'https://www.espressoenglish.net',
    'https://www.englishspeak.com'
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
  