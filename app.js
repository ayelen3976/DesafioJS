// app.js

window.addEventListener('load', () => {
    fetchImages();
});

async function fetchImages() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?query=car&count=5&client_id=CFVrOleiAYr775-goN0vHrIPGCoNBNHdnQznBzu9b-U');
        const data = await response.json();
        displayImages(data);
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
    }
}

function displayImages(images) {
    const contentDiv = document.getElementById('content');
    let imagesHtml = '';

    images.forEach(image => {
        imagesHtml += `
            <div class="image">
                <img src="${image.urls.regular}" alt="${image.alt_description}">
            </div>
        `;
    });

    contentDiv.innerHTML = imagesHtml;
}
