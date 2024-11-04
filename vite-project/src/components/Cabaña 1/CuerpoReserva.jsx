import React from 'react'
import { useState  } from 'react'
import Calendar from './Calendar.jsx'
import Reserva from './Reserva.jsx'
import './CuerpoReserva.css'

function CuerpoReserva() {
    const [selectedDates, setSelectedDates] = useState('');

  return (
   <div className="calen-reserv">
        <Calendar onDateSelect={setSelectedDates} />

        <Reserva selectedDates={selectedDates}/>

    </div>
  )
}

export default CuerpoReserva
