import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

export function createGallery(images) {
  gallery.insertAdjacentHTML(
    'beforeend',
    images
      .map(
        element =>
          `
      <li class="gallery-item">
          <a class="gallery-link" href="${element.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${element.webformatURL}" 
            alt="${element.tags}" 
          />
        </a>
        <div class='image-info'>
        <p>Likes<span>${element.likes}</span></p>
        <p>Views<span>${element.views}</span></p>
        <p>Comments<span>${element.comments}</span></p>
        <p>Downloads<span>${element.downloads}</span></p>
        </div>
      </li>
    `
      )
      .join('')
  );

  lightbox.refresh();
  const elem = document.querySelector('.gallery li');
  const rect = elem.getBoundingClientRect();
  window.scrollBy({ top: 48 + rect.height * 2, behavior: 'smooth' });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMore.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMore.style.display = 'none';
}
