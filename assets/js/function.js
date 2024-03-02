
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

window.addEventListener('load', () => {
    let ServicesContainer = select('.Services-container');
    if (ServicesContainer) {
      let ServicesIsotope = new Isotope(ServicesContainer, {
        itemSelector: '.Services-item',
        layoutMode: 'fitRows'
      });

      let ServicesFilters = select('#Services-flters li', true);

      on('click', '#Services-flters li', function(e) {
        e.preventDefault();
        ServicesFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        ServicesIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });



// const ServicesLightbox = GLightbox({
//  selector: '.Services-Lightbox'
// });


