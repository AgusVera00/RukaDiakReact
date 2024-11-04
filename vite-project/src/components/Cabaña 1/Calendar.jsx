import React, { useState, useEffect } from 'react';


function Calendar({onDateSelect}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (startDate && endDate) {
      onDateSelect(`${formatDate(startDate)} - ${formatDate(endDate)}`);
    }
  }, [startDate, endDate, onDateSelect]);

  useEffect(() => {
    renderCalendar();

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

    calen.forEach(calenItem => {
      observerCalen.observe(calenItem);
    });

    return () => {
      calen.forEach(calenItem => {
        observerCalen.unobserve(calenItem);
      });
    };
  }, [currentDate, startDate, endDate]);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const selectDate = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (!startDate || endDate) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (clickedDate < startDate) {
      setStartDate(clickedDate);
    } else if (clickedDate > startDate) {
      setEndDate(clickedDate);
    }
  };

  const getDayClassName = (date) => {
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
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    let days = [];

    for (let i = 1; i <= firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const className = getDayClassName(date);
      days.push(
        <div 
          key={i} 
          className={`calendar-day ${className}`} 
          onClick={() => selectDate(i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const formatDate = (date) => {
    return date ? date.toLocaleDateString() : '';
  };

  return (
    <section className="container-calendario">
      <h3 className="titulo-reserva">Selecciona las fechas y reserva:</h3>
      
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={prevMonth} className="calendar-btn">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <h2>
            {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={nextMonth} className="calendar-btn">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="calendar-body">
          {renderCalendar()}
        </div>
      </div>

      <div>
        Fechas seleccionadas: {formatDate(startDate)} - {formatDate(endDate)}
      </div>
    </section>
  );
}

export default Calendar
