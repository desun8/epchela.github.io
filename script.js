(function () {
  const btnHtml = document.querySelector('#opt-html-css');
  const btnJs = document.querySelector('#opt-js-apps');
  const blockHtml = document.querySelector('#html-css');
  const blockJs = document.querySelector('#js-app');

  const cssClass = {
    tabsActive: 'tabs_elem--active',
    blockInactive: 'page-main_elem--hide'
  };

  btnHtml.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains(cssClass.tabsActive)) {
      return 0;
    }

    e.target.classList.add(cssClass.tabsActive);
    blockHtml.classList.remove(cssClass.blockInactive);
    btnJs.classList.remove(cssClass.tabsActive);
    blockJs.classList.add(cssClass.blockInactive);
  });

  btnJs.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains(cssClass.tabsActive)) {
      return 0;
    }

    e.target.classList.add(cssClass.tabsActive);
    blockJs.classList.remove(cssClass.blockInactive);
    btnHtml.classList.remove(cssClass.tabsActive);
    blockHtml.classList.add(cssClass.blockInactive);
  });
})();
//# sourceMappingURL=script.js.map
