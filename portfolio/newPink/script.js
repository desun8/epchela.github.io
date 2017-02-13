'use strict';

(function () {
  var pageNav = document.querySelector('.page-nav'),
      menu = pageNav.querySelector('.page-nav_menu'),
      menuOpen = pageNav.querySelector('#menuOpen'),
      menuClose = document.querySelector('#menuClose');

  var mobile = window.matchMedia("(max-width: 600px)");

  pageNav.addEventListener('click', function (e) {

    var open = [menuOpen, menuOpen.childNodes[1], menuOpen.childNodes[1].childNodes[1]],
        close = [menuClose, menuClose.childNodes[1], menuClose.childNodes[1].childNodes[1]];

    if (e.target == open[0] || e.target == open[1] || e.target == open[2]) {
      menuOpen.style.cssText = 'display: none; visibility: hidden; opacity: 0;';
      menuClose.style.cssText = 'visibility: visible; opacity: 1;';
      pageNav.classList.add('page-nav--js');

      // for animation
      if (mobile.matches) {
        menu.style.cssText = 'visibility: visible; opacity: 1; top: 67px;';
      } else {
        menu.style.cssText = 'visibility: visible; opacity: 1; top: 111px;';
      }
    }

    if (e.target == close[0] || e.target == close[1] || e.target == close[2]) {
      menuClose.style.cssText = '';
      menuOpen.style.cssText = '';
      menu.style.cssText = '';
      pageNav.classList.remove('page-nav--js');
    }
  });
})();

(function () {
  var slider = document.querySelector('#slider'),
      prev = slider.querySelector('#sliderPrev'),
      next = slider.querySelector('#sliderNext'),
      sliderRadio_1 = slider.querySelector('#sliderRadio-1'),
      sliderRadio_2 = slider.querySelector('#sliderRadio-2'),
      sliderRadio_3 = slider.querySelector('#sliderRadio-3'),
      block = slider.querySelector('#sliderBlock'),
      review = document.querySelectorAll('.js_sliderBlock');

  var POSITION = {
    width: review[0].offsetWidth,
    mainLeftPos: slider.getBoundingClientRect().left,
    mainRightPos: slider.getBoundingClientRect().right
  };

  slider.addEventListener('click', function (e) {
    if (e.target === next) {
      setTimeout(function () {
        if (block.getBoundingClientRect().right === POSITION.mainRightPos) {
          next.classList.add('disabled');
        }
      }, 400);

      if (prev.classList.contains('disabled')) {
        prev.classList.remove('disabled');
      }
    }

    if (e.target === prev) {
      setTimeout(function () {
        if (block.getBoundingClientRect().left === POSITION.mainLeftPos) {
          prev.classList.add('disabled');
        }
      }, 400);

      if (next.classList.contains('disabled')) {
        next.classList.remove('disabled');
      }
    }
  });

  next.addEventListener('click', function (e) {
    if (block.getBoundingClientRect().right != POSITION.mainRightPos) {
      if (block.style.left === '') block.style.left = '0';
      block.style.left = parseFloat(block.style.left) + 100 * -1 + '%';
    }
  });

  prev.addEventListener('click', function (e) {
    if (block.getBoundingClientRect().left != POSITION.mainLeftPos) {
      if (block.style.left === '') block.style.left = '0';
      block.style.left = parseFloat(block.style.left) + 100 + '%';
    }
  });

  //touch devices
  var touchStart = void 0,
      touchEnd = void 0;

  slider.addEventListener('touchstart', function (e) {
    touchStart = e.targetTouches[0].pageX;
  });

  slider.addEventListener('touchmove', function (e) {
    touchEnd = e.targetTouches[0].pageX;
  });

  slider.addEventListener('touchend', function (e) {
    var move = void 0;
    if (touchEnd < touchStart) {
      move = -100;
    } else {
      move = 100;
    }

    if (block.style.left === '') block.style.left = '0';

    if (parseFloat(block.style.left) + move <= 0 && parseFloat(block.style.left) + move >= -200) {
      block.style.left = parseFloat(block.style.left) + move + '%';
    }

    if (block.style.left === '0%') {
      sliderRadio_1.checked = true;
    } else if (block.style.left === '-200%') {
      sliderRadio_3.checked = true;
    } else {
      sliderRadio_2.checked = true;
    }
  });

  document.querySelector('main').addEventListener('touchend', function () {
    setTimeout(function () {
      "use strict";

      block.style.left = sliderRadio_1.checked ? block.style.left = '0' : sliderRadio_2.checked ? block.style.left = '-100%' : sliderRadio_3.checked ? block.style.left = '-200%' : block.style.left;
    }, 50);
  });
})();

(function () {
  var table = document.querySelector('#tableSlider'),
      tableRadio_1 = document.querySelector('#tableRadio-1'),
      tableRadio_2 = document.querySelector('#tableRadio-2'),
      tableRadio_3 = document.querySelector('#tableRadio-3'),
      contols = document.querySelector('#tableControls'),
      mainBlock = document.querySelector('.b-price');

  var touchStart = void 0,
      touchEnd = void 0;

  table.addEventListener('touchstart', function (e) {
    touchStart = e.targetTouches[0].pageX;
  });

  table.addEventListener('touchmove', function (e) {
    touchEnd = e.targetTouches[0].pageX;
  });

  table.addEventListener('touchend', function (e) {
    var move = void 0;
    if (touchEnd < touchStart) {
      move = -100;
    } else {
      move = 100;
    }

    if (table.style.left === '') table.style.left = '-100%';

    if (parseFloat(table.style.left) + move <= 0 && parseFloat(table.style.left) + move >= -200) {
      table.style.left = parseFloat(table.style.left) + move + '%';
    }

    if (table.style.left === '0%') {
      tableRadio_1.checked = true;
    } else if (table.style.left === '-200%') {
      tableRadio_3.checked = true;
    } else {
      tableRadio_2.checked = true;
    }
  });

  mainBlock.addEventListener('touchend', function () {
    setTimeout(function () {
      "use strict";

      table.style.left = tableRadio_1.checked ? table.style.left = '0' : tableRadio_2.checked ? table.style.left = '-100%' : tableRadio_3.checked ? table.style.left = '-200%' : table.style.left;
    }, 50);
  });
})();

// Disabled hover on touch devices
(function () {
  var touch = 'ontouchstart' in document.documentElement || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  if (touch) {
    // remove all :hover stylesheets
    try {
      // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;

        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;

          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
  }
})();

function initMap() {
  var address = { lat: 59.936352, lng: 30.32109699999999 },
      addressDeskt = { lat: 59.936955, lng: 30.32109699999999 },
      map = void 0,
      image = 'img/_mapMarker.png';

  if (window.matchMedia("(max-width: 950px)").matches) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: address,
      zoom: 16,
      mapTypeControlOptions: {
        mapTypeIds: []
      }
    });
  } else {
    map = new google.maps.Map(document.getElementById('map'), {
      center: addressDeskt,
      zoom: 17,
      mapTypeControlOptions: {
        mapTypeIds: []
      }
    });
  }

  var marker = new google.maps.Marker({
    map: map,
    position: address,
    icon: image
  });
}
//# sourceMappingURL=script.js.map
