document.addEventListener("DOMContentLoaded", function () {
    const sectionBienvenida = document.querySelector('.bienvenida');

    const observerBienvenida = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
        });
    }, {
    threshold: 0.5
    });

    observerBienvenida.observe(sectionBienvenida);


    const containerAbout = document.querySelector('.container-about .about');
    const imgAbout1 = document.querySelector('.img-about-1');
    const imgAbout2 = document.querySelector('.img-about-2');

    const observerAbout = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            containerAbout.classList.add('active');
            imgAbout1.classList.add('active');
            imgAbout2.classList.add('active');
        } else {
            containerAbout.classList.remove('active');
            imgAbout1.classList.remove('active');
            imgAbout2.classList.remove('active');
        }
        });
    }, {
    threshold: 0.3
    });

    observerAbout.observe(document.querySelector('.container-about'));


    const acordeonFaqs = document.querySelectorAll('.acordeonfaq');

    const observerFAQ = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
        });
    }, {
        threshold: 0.1 
    });


    acordeonFaqs.forEach(acordeon => {
        observerFAQ.observe(acordeon);
    });



    const form = document.querySelectorAll('.form');

    const observerForm = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
        });
    }, {
    threshold: 0.3 
    });


    form.forEach(form => {
        observerForm.observe(form);
    });

    const map = document.querySelectorAll('.map');

    const observerMap = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
        });
    }, {
    threshold: 0.3 
    });


    map.forEach(map => {
        observerMap.observe(map);
    });


    const tarjetas = document.querySelectorAll('.tarjetas');

    const observerTarjetas = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
        });
    }, {
    threshold: 0.3 
    });


    tarjetas.forEach(tarjetas => {
        observerTarjetas.observe(tarjetas);
    });


    const linkSobre = document.querySelector('a[href="#About"]');
    const sectionAbout = document.querySelector('#About');

    linkSobre.addEventListener('click', function (e) {
        e.preventDefault();
        sectionAbout.scrollIntoView({ behavior: 'smooth' });
    });

    const linkGalery = document.querySelector('a[href="#Galery"]');
    const sectionGalery = document.querySelector('#Galery');

    linkGalery.addEventListener('click', function (e) {
        e.preventDefault();
        sectionGalery.scrollIntoView({ behavior: 'smooth' });
    });

    const linkFaq = document.querySelector('a[href="#FAQ"]');
    const sectionFaq = document.querySelector('#FAQ');

    linkFaq.addEventListener('click', function (e) {
        e.preventDefault();
        sectionFaq.scrollIntoView({ behavior: 'smooth' });
    });

    const linkContact = document.querySelector('a[href="#Contact"]');
    const sectionContact = document.querySelector('#Contact');

    linkContact.addEventListener('click', function (e) {
        e.preventDefault();
        sectionContact.scrollIntoView({ behavior: 'smooth' });
    });

    const home = document.getElementById('Home');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            home.classList.add('shrink');
        } else {
            home.classList.remove('shrink');
        }
    });


});
