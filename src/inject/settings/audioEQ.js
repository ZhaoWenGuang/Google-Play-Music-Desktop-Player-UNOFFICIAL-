import _ from 'lodash';

const sliders = document.querySelectorAll('.eq-slide');
_.forEach(sliders, (slider, index) => {
  window.noUiSlider.create(slider, {
    start: 100,
    step: 1,
    range: {
      min: 0,
      max: 200,
    },
    format: {
      to: (value) => {
        return value;
      },
      from: (value) => {
        return value;
      },
    },
  });
  slider.noUiSlider.on('update', (e) => {
    Emitter.fireAtGoogle('eq:change', {
      index,
      value: parseInt(e[0], 10) / 100,
    });
  });
});