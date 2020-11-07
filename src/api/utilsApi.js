/* eslint-disable no-console */

export async function getHtmlResponse(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => resolve(res))
      .catch((err) => {
        console.log('Html Response : Text Conversion error ', err);
        resolve('');
      })
      .catch((err) => {
        console.log('Html Response : Fetch Error ', err);
        resolve('');
      });
  });
}
