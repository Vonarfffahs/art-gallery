document.addEventListener('DOMContentLoaded', () => {
    changeHeadlineColor = () => {
        let headline = document.getElementById("headline");
        let smileIcon = document.createElement('i');
        smileIcon.classList.add('fa-regular', 'fa-face-smile-wink');
        if (headline.style.color === '' || headline.style.color === 'black') {
            headline.style.color = 'blue';
            headline.appendChild(smileIcon);
        } else {
            headline.style.color = 'black';
            headline.removeChild(headline.lastChild);
        }
    }
});

document.addEventListener('click', function(e) {
    let id = e.target.dataset.toggleId;
    if (!id) return;
    let elem = document.querySelector(`#${id}`);
    elem.hidden = !elem.hidden;
    elem.hidden ? e.target.textContent = 'Show links' : e.target.textContent = 'Hide links';
});    

class GalleryMenu {
    constructor(elem, gallery) {
        this._elem = elem;
        this._gallery = gallery;
        this.images = [
            { src: '../images/gallery/landscape1.jpg', alt: 'Landscape 1', type: 'landscape' },
            { src: '../images/gallery/portrait1.jpg', alt: 'Portrait 1', type: 'portrait' },
            { src: '../images/gallery/portrait2.jpg', alt: 'Portrait 2', type: 'portrait' },
            { src: '../images/gallery/landscape2.jpg', alt: 'Landscape 2', type: 'landscape' },
            { src: '../images/gallery/portrait3.jpg', alt: 'Portrait 3', type: 'portrait' },
            { src: '../images/gallery/portrait4.jpg', alt: 'Portrait 4', type: 'portrait' },
            { src: '../images/gallery/landscape3.jpg', alt: 'Landscape 3', type: 'landscape' },
            { src: '../images/gallery/portrait5.jpg', alt: 'Portrait 5', type: 'portrait' }
        ];
        elem.onclick = this.onClick.bind(this); // Прив'язуємо обробник подій до контексту класу
    }

    showAll() {
        this.displayImages(this.images);
    }

    showLandscapes() {
        const landscapeImages = this.images.filter(image => image.type === 'landscape');
        this.displayImages(landscapeImages);
    }

    showPortraits() {
        const portraitImages = this.images.filter(image => image.type === 'portrait');
        this.displayImages(portraitImages);
    }

    displayImages(images) {
        let html = '';
        images.forEach(image => {
            html += `<div class="gallery-img"><img src="${image.src}" alt="${image.alt}"></div>`;
        });
        this._gallery.innerHTML = html;
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new GalleryMenu(document.getElementById('catalogMenu'), document.getElementById('gallery'));