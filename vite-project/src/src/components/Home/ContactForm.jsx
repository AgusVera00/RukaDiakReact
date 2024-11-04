import React from 'react'
import {useForm} from 'react-hook-form'

function ContactForm() {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const onSubmit= handleSubmit((data) => {
        alert(JSON.stringify(data));
        alert("Datos enviados! Nos contactaremos a la brevedad!");
        reset();

      });
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" placeholder="Nombre y Apellido" 
        {...register("nombre" , 
            {required: {value:true, message: 'Nombre es requerido'}, 
            minLength: {value: 3, message: 'Nombre debe tener al menos 3 caracteres'}, 
            maxLength: {value: 25, message: 'Nombre debe tener maximo 25 caracteres'}})}
        />
        {
          errors.nombre && <p className="error-message">{errors.nombre.message}</p>
        }

        <label htmlFor='email'>Email:</label>
        <input type="email" name="email" placeholder="Email"
        {...register("email",
            {
                required: {value: true, message: 'Email es requerido'},
                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Email invalido'}
            }
        )}/>
        {
          errors.email && <p className="error-message">Email es requerido</p>
        }

        <label htmlFor='celular'>Celular:</label>
        <input type="tel" name="telefono" placeholder="Celular" 
        {...register("celular" , 
            {required: {value:true, message: 'Celular es requerido'}, 
            minLength: {value: 10, message: 'Celular debe tener al menos 10 numeros'}, 
            maxLength: {value: 15, message: 'Celular debe tener maximo 15 numeros'},
            pattern: {value: /^[0-9]+$/, message: 'Celular invalido'}})}
        />
        {
          errors.nombre && <p className="error-message">{errors.celular.message}</p>
        }

        <label htmlFor='mensaje'>Mensaje:</label>
        <textarea name="mensaje" placeholder="Tu mensaje"{...register("mensaje")}></textarea>
        {
          errors.mensaje && <p className="error-message">Mensaje es requerido</p>
        }

        <div className="button-container">                
            <button type="submit">Enviar</button>
            <button className="button-delete" type="button" onClick={() => reset()}>Borrar</button>
        </div>
    </form>
    </>
  )

}

export default ContactForm
