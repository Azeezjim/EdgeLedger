function initMap() {
    const loc = { lat:9.911651  , lng:8.902669 };
    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });

    const marker = new google.s.Marker({ position: loc , map:map});
}
        // sticky menu

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('navbar').style.opacty = 0.9;
    }else{
        document.querySelector('navbar').style.opacty = 1;
    }
});


        // smooth scrolling
$('#navbar a, .btn').on('click' , function(event){
    if (this.hash !== '') {
        event.prevebtDefault();
        const hash = this.hash;
        $('html, body').animate (
            {
            scrollTop: $(hash).offset().top - 100
        },
        800
        );
    }
});