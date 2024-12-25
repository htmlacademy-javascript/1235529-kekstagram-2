const ZoomParameters = {
  Min: 25,
  Max: 100,
  Step: 25,
};

const scaleControlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

//изменение зума
const changeZoom = (facktor = 1) => {
  let size = parseInt(scaleControlValue.value, 10) + (ZoomParameters.Step * facktor);

  if (size < ZoomParameters.Min){
    size = ZoomParameters.Min;
  }

  if (size > ZoomParameters.Max){
    size = ZoomParameters.Max;
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
