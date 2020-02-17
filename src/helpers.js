export const ToNairaFormat = (amount) => {
  const option = {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2
  };

  const formatter = new Intl.NumberFormat('en-US', option);
  return formatter.format(amount);
}

export const ImageToBase64 = (file, callback) => {
  let reader = new FileReader();
  if (file && file.type.match('image.*')) {
    reader.readAsDataURL(file);
  }
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}