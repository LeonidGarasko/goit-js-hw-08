import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items.js';

// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery')
}

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);


function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                            />
                        </a>
                    </div>`})
        .join('');
}

let galleryy = new SimpleLightbox('.gallery a');
galleryy.on('show.simplelightbox', function () {
	// do something…
});

galleryy.on('error.simplelightbox', function (e) {
	console.log(e);
});



console.log(galleryItems);
