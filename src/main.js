import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
let page = 1;
let query;

form.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  query = event.target.elements['search-text'].value.trim();
  if (query.length == 0) {
    iziToast.warning({
      title: 'Warning',
      message: 'All fields should be filled.',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showGallery();
});

document.querySelector('.load-more').addEventListener('click', async event => {
  page += 1;
  await showGallery();
  const elem = document.querySelector('.gallery li');
  const rect = elem.getBoundingClientRect();
  window.scrollBy({ top: 48 + rect.height * 2, behavior: 'smooth' });
});

async function doStuff(query, page) {
  try {
    const data = await getImagesByQuery(query, page);
    const hits = data.hits;
    const totalHits = data.totalHits;
    if (hits.length == 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(hits);
      if (page * 15 < totalHits) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function showGallery() {
  showLoader();
  hideLoadMoreButton();

  await doStuff(query, page);
}
