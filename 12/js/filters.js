const
  DEFAULT_EFFECT_LEVEL = 100,
  EFFECTS_STEP = 0.01,
  MAX_BLUR_VALUE = 3,
  MAX_BRIGHTNESS = 3;

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
};

const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const imgPreview = uploadForm.querySelector('.img-upload__preview');
const image = imgPreview.querySelector('img');
const imgSliderUpload = uploadForm.querySelector('.img-upload__effect-level');
const effectValue = uploadForm.querySelector('.effect-level__value');
const sliderElement = uploadForm.querySelector('.effect-level__slider');

//добавляем дефолтное значение для шкалы
effectValue.value = DEFAULT_EFFECT_LEVEL;

//правила для всех эффектов в виде обьекта
const effects = {
  none: () => {
    imgSliderUpload.classList.add('visually-hidden');
    return 'none';
  },
  chrome: () => {
    imgSliderUpload.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectValue.value, 10) * EFFECTS_STEP})`;
  },
  sepia: () => {
    imgSliderUpload.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectValue.value, 10) * EFFECTS_STEP})`;
  },
  marvin: () => {
    imgSliderUpload.classList.remove('visually-hidden');
    return `invert(${Math.floor(effectValue.value, 10)}%)`;
  },
  phobos: () => {
    imgSliderUpload.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectValue.value, 10) * MAX_BLUR_VALUE) * EFFECTS_STEP}px)`;
  },
  heat: () => {
    imgSliderUpload.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectValue.value, 10) * MAX_BRIGHTNESS) * EFFECTS_STEP})`;
  },
};

//добавляется дефолтный эффект
effects.none();

let currentEffect = '';

const onEffectsListClick = (evt) => {
  const target = evt.target;

  if (target.classList.contains('effects__preview')) {
    sliderElement.noUiSlider.set(Slider.MAX);
    effectValue.value = Slider.MAX;

    currentEffect = target.classList[1].replace('effects__preview--', '');
    image.style.filter = effects[currentEffect]();
  }
};

effectsList.addEventListener('click', onEffectsListClick);

//добавляем слайдер на элемент
noUiSlider.create(sliderElement, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',
});

//связка слайдера и импута
sliderElement.noUiSlider.on('slide', (value) => {
  effectValue.value = [...value];
  image.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
});

//сброс эффекта
const resetEffect = () => {
  image.style.removeProperty('filter');
  effectValue.value = '';
  sliderElement.noUiSlider.updateOptions({
    start: Slider.MAX,
  });
  effectsList.querySelector('#effect-none').checked = true;
  effects.none();
};

export { resetEffect };
