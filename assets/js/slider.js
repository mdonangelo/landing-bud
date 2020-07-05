var slides = ['.partner-slider'];
slides.forEach(function (item) {
    var slider = tns({
        container: item,
        items: 1,
        autoplay: true,
        controls: false,
        autoplayButtonOutput: false,
        autoplayTimeout:3000,
        nav: true,
        loop: true,
        rewind: true,
        responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30
        },
        900: {
            items: 5
        }
        }
    });
});