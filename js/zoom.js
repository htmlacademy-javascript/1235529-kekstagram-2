const ZoomParameters = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const scaleControlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

//изменение зума
const changeZoom = (facktor = 1) => {
  let size = parseInt(scaleControlValue.value, 10) + (ZoomParameters.STEP * facktor);

  if (size < ZoomParameters.MIN){
    size = ZoomParameters.MIN;
  }

  if (size > ZoomParameters.MAX){
    size = ZoomParameters.MAX;
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
