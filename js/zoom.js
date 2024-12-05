const ZoomParameters = {
  min: 25,
  max: 100,
  step: 25,
};

const scaleControlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

//изменение зума
const changeZoom = (facktor = 1) => {
  let size = parseInt(scaleControlValue.value, 10) + (ZoomParameters.step * facktor);

  if (size < ZoomParameters.min){
    size = ZoomParameters.min;
  }

  if (size > ZoomParameters.max){
    size = ZoomParameters.max;
  }
  scaleControlValue.value = `${size}%`;
  imgPreview.style.transform = `scale(${size * 0.01})`;
};

// сброс зума
const resetZoom = () => {
  imgPreview.style.removeProperty('transform');
  scaleControlValue.value = '100%';
};

export {resetZoom, changeZoom};
