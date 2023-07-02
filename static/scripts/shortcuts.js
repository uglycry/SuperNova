document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === 'c') {
      var websites = [
        '/routes/cloaks/howtobelogical.html',
        '/routes/cloaks/mathisfun.html',
        '/routes/cloaks/vocabulary.html'
      ];
      var randomIndex = Math.floor(Math.random() * websites.length);
      var randomWebsite = websites[randomIndex];
      window.location.href = randomWebsite;
    }
  });
