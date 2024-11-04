
let sliderInner = document.querySelector(".sliderInner")

if (sliderInner){
    let images = sliderInner.querySelectorAll("img")
    let index = 1 
    setInterval(function() {
        let porcentaje = index * -100
        sliderInner.style.transform = "translateX(" + porcentaje +"%)";
        index += 1 
        if (index > images.length - 1){
            index = 0
        }
    }, 5000)


}


const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let startDate = null;
let endDate = null;

const calendarBody = document.getElementById('calendarBody');
const currentMonthElement = document.getElementById('currentMonth');
const selectedDatesElement = document.getElementById('selectedDates');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    currentMonth--;
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentMonth++;
    renderCalendar();
});

function renderCalendar() {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleDateString('default', { month: 'long', year: 'numeric' });

    let days = '';

    for (let i = 1; i <= firstDayIndex; i++) { 
        days += `<div class="calendar-day"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const className = getDayClassName(date);
        days += `<div class="calendar-day ${className}" onclick="selectDate(${i})">${i}</div>`;
    }
    calendarBody.innerHTML = days;
}

function selectDate(day) {
    const clickedDate = new Date(currentYear, currentMonth, day);
    if (!startDate || endDate) {
        startDate = clickedDate;
        endDate = null;
    } else if (clickedDate < startDate) {
        startDate = clickedDate;
    } else if (clickedDate > startDate) {
        endDate = clickedDate;
    }

    renderCalendar();
    updateSelectedDates();
}

function updateSelectedDates() {
    if (startDate && endDate) {
        selectedDatesElement.value = `Fechas seleccionadas: ${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else if (startDate) {
        selectedDatesElement.value = `Fechas seleccionadas: ${formatDate(startDate)}`;
    } else {
        selectedDatesElement.value = ""; 
    }
}

function getDayClassName(date) {
    if (startDate && date.toDateString() === startDate.toDateString()) {
        return 'selected';
    }
    if (endDate && date.toDateString() === endDate.toDateString()) {
        return 'selected';
    }
    if (startDate && endDate && date > startDate && date < endDate) {
        return 'range';
    }
    return '';
}

function formatDate(date) {
    return date.toLocaleDateString();
}

renderCalendar();
updateSelectedDates();

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-value');
        

        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));


        for (let i = 0; i < ratingValue; i++) {

            document.querySelectorAll('.star')[i].classList.add('selected');
            console.log(i)
        }


        document.getElementById('rating-value').value = ratingValue;
    });
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-value');
        

        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));

        for (let i = 0; i < ratingValue; i++) {
            document.querySelectorAll('.star')[i].classList.add('selected');
        }

        document.getElementById('rating-value').value = ratingValue;
    });
});


document.getElementById('formEx').addEventListener('submit', function(event) {
    event.preventDefault();


    const nombre = document.getElementById('nombre-apellido').value;
    const descripcion = document.getElementById('descripcion').value;
    const fotoURL = document.getElementById('foto-ex').value;
    const rating = document.getElementById('rating-value').value;
    const bgColor = document.getElementById('card-bg-color').value;
    const borderColor = document.getElementById('card-border-color').value;

    console.log({
    nombre:nombre,
    descripcion:descripcion,
    fotoURL:fotoURL,
    rating:rating,
    bgColor:bgColor,
    borderColor:borderColor,
    })



    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = bgColor;
    card.style.borderColor = borderColor;


    card.innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <div class="star-rating">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div>
        <img src="${fotoURL}" alt="Foto card" style="max-width: 100%; border-radius: 5px;">
    `;

    
    document.getElementById('cardContainer').appendChild(card);

    this.reset();
});

const home = document.getElementById('Home');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            home.classList.add('shrink');
        } else {
            home.classList.remove('shrink');
        }
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


    const car = document.querySelectorAll('.container-carac');

    const observerCar = new IntersectionObserver((entries) => {
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


    car.forEach(car => {
        observerCar.observe(car);
    });

    const calen = document.querySelectorAll('.container-calendario');

    const observerCalen = new IntersectionObserver((entries) => {
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


    calen.forEach(calen => {
        observerCalen.observe(calen);
    });

    const reserv = document.querySelectorAll('.container-reserva');

    const observerReserv = new IntersectionObserver((entries) => {
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


    reserv.forEach(reserv => {
        observerReserv.observe(reserv);
    });









