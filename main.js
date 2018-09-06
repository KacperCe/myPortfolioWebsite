window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 100) {
      document.getElementById('hero').style.opacity = -currScrollPos2 / 120 + 2;
      document.getElementById('arrow-down').style.opacity = -currScrollPos2 / 120 + 2;
    }
  }
);