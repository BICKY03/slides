document.addEventListener('DOMContentLoaded', function () {
    const sectionData = {
        section: {
            showArrows: true,
            showPageDots: true,
        },
        slideData: [
            {
                title: "Women's Apparel",
                Description: "Elevate your wardrobe with our limited-time fashion offer!",
                image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
                buttonLabel: "Learn More",
                buttonLink: "#",
                style: {
                    textAlignment: "center",
                    contentPosition: "bottom-left"
                },
            },
            {
                title: "Trendy Classics",
                Description: "Discover Signature Look: Fashion Forward and Fabulous!",
                image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
                buttonLabel: "Get Started",
                buttonLink: "#",
                style: {
                    textAlignment: "left",
                    contentPosition: "bottom-left"
                },
            },
            {
                title: "Modern Elegance",
                Description: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
                image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
                buttonLabel: "Discover More",
                buttonLink: "#",
                style: {
                    textAlignment: "center",
                    contentPosition: "bottom-left"
                },
            },
        ]
    };

    const carouselSlidesContainer = document.getElementById('carousel-slides');

    sectionData.slideData.forEach(slide => {
        const slideElement = document.createElement('li');
        slideElement.classList.add('splide__slide');

        const imgElement = document.createElement('img');
        imgElement.src = slide.image;
        imgElement.alt = slide.title;

        const textOverlayElement = document.createElement('div');
        textOverlayElement.classList.add('text-overlay');
        textOverlayElement.style.textAlign = slide.style.textAlignment;
        textOverlayElement.style.bottom = slide.style.contentPosition.includes('bottom') ? '10px' : 'auto';
        textOverlayElement.style.top = slide.style.contentPosition.includes('top') ? '10px' : 'auto';
        textOverlayElement.style.left = slide.style.contentPosition.includes('left') ? '10px' : 'auto';
        textOverlayElement.style.right = slide.style.contentPosition.includes('right') ? '10px' : 'auto';

        const pElement = document.createElement('p');
        pElement.textContent = slide.title;

        const h1Element = document.createElement('h1');
        h1Element.textContent = slide.Description;

        const aElement = document.createElement('a');
        aElement.href = slide.buttonLink;
        aElement.classList.add('shop-button');
        aElement.textContent = slide.buttonLabel;

        textOverlayElement.appendChild(pElement);
        textOverlayElement.appendChild(h1Element);
        textOverlayElement.appendChild(aElement);

        slideElement.appendChild(imgElement);
        slideElement.appendChild(textOverlayElement);

        carouselSlidesContainer.appendChild(slideElement);
    });

    // Initialize main image carousel
    var imageCarousel = new Splide('#image-carousel', {
        type       : 'loop',
        pagination : sectionData.section.showPageDots,
        arrows     : sectionData.section.showArrows,
        autoplay   : true,
    }).mount();

    // Update text-overlay position
    const positionSelector = document.getElementById('position');
    const textOverlays = document.querySelectorAll('.text-overlay');

    positionSelector.addEventListener('change', function () {
        textOverlays.forEach(overlay => {
            overlay.style.top = 'auto';
            overlay.style.bottom = 'auto';
            overlay.style.left = 'auto';
            overlay.style.right = 'auto';
            overlay.style.transform = 'none'; // Reset transform for each change

            switch (this.value) {
                case 'position-top-start':
                    overlay.style.top = '10px';
                    overlay.style.left = '10px';
                    overlay.style.justifyContent = 'flex-start';
                    overlay.style.alignItems = 'flex-start';
                    break;
                case 'position-top-center':
                    overlay.style.top = '10px';
                    overlay.style.left = '50%';
                    overlay.style.transform = 'translateX(-50%)';
                    overlay.style.justifyContent = 'flex-start';
                    overlay.style.alignItems = 'center';
                    break;
                case 'position-top-end':
                    overlay.style.top = '10px';
                    overlay.style.right = '10px';
                    overlay.style.justifyContent = 'flex-start';
                    overlay.style.alignItems = 'flex-end';
                    break;
                case 'position-middle-start':
                    overlay.style.top = '50%';
                    overlay.style.left = '10px';
                    overlay.style.transform = 'translateY(-50%)';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'flex-start';
                    break;
                case 'position-middle-center':
                    overlay.style.top = '50%';
                    overlay.style.left = '50%';
                    overlay.style.transform = 'translate(-50%, -50%)';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    break;
                case 'position-middle-end':
                    overlay.style.top = '50%';
                    overlay.style.right = '10px';
                    overlay.style.transform = 'translateY(-50%)';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'flex-end';
                    break;
                case 'position-bottom-start':
                    overlay.style.bottom = '10px';
                    overlay.style.left = '10px';
                    overlay.style.justifyContent = 'flex-end';
                    overlay.style.alignItems = 'flex-start';
                    break;
                case 'position-bottom-center':
                    overlay.style.bottom = '10px';
                    overlay.style.left = '50%';
                    overlay.style.transform = 'translateX(-50%)';
                    overlay.style.justifyContent = 'flex-end';
                    overlay.style.alignItems = 'center';
                    break;
                case 'position-bottom-end':
                    overlay.style.bottom = '10px';
                    overlay.style.right = '10px';
                    overlay.style.justifyContent = 'flex-end';
                    overlay.style.alignItems = 'flex-end';
                    break;
            }
        });
    });

    // Trigger the change event to set the initial position
    positionSelector.dispatchEvent(new Event('change'));
});