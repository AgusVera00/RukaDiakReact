import React from 'react'
import { useState  } from 'react'
import Calendar from '../Cabaña 1/Calendar.jsx'
import Reserva from '../Cabaña 1/Reserva.jsx'
import '../Cabaña 1/CuerpoReserva.css'

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
