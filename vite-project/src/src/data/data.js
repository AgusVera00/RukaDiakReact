import img1 from '../imagenes/cabaña-prueba.jpg';
import img2 from '../imagenes/prueba2-cabañas.jpg';
import img3 from '../imagenes/cabaña-prueba 3.jpg';
import img4 from '../imagenes/cabaña-prueba4.jpg';

const cards = [
    {
      id: 1,
      imgCard: img1,
      imgAlt: "cabaña-prueba",
      tituloCard: "Cabaña 1",
      textoCard: "Es la primera cabaña, pensada para hasta 6 personas...",
      btnTitle: "Consultar",
      btnAction: () => {window.location.href = "/cabana-1";} 
    },

    {
      id: 2,
      imgCard: img2,
      imgAlt: "cabaña-prueba",
      tituloCard: "Cabaña 2",
      textoCard: "Es la primera cabaña, pensada para hasta 6 personas, con habitacion principal con baño en suite, cocina, comedor, baño princial, living y un extenso ventanal tanto en planta baja como planta alta, para poder disfrutar de las vistas que nos ofrecen las montañas!",
      btnTitle: "Consultar",
      btnAction: () => {window.location.href = "/cabana-2";}
    },
    {
      id: 3,
      imgCard: img3,
      imgAlt: "cabaña-prueba",
      tituloCard: "Cabaña 3",
      textoCard: "Es la primera cabaña, pensada para hasta 6 personas, con habitacion principal con baño en suite, cocina, comedor, baño princial, living y un extenso ventanal tanto en planta baja como planta alta, para poder disfrutar de las vistas que nos ofrecen las montañas!",
      btnTitle: "Consultar",
      btnAction: () => {window.location.href = "/cabana-3";},
    },
    {
      id: 4,
      imgCard: img4,
      imgAlt: "cabaña-prueba",
      tituloCard: "Cabaña 4",
      textoCard: "Es la primera cabaña, pensada para hasta 6 personas, con habitacion principal con baño en suite, cocina, comedor, baño princial, living y un extenso ventanal tanto en planta baja como planta alta, para poder disfrutar de las vistas que nos ofrecen las montañas!",
      btnTitle: "Consultar",
      btnAction: () => {window.location.href = "/cabana-4";},
    }
]

const contactCards = [
    {
        id: 1,
        icono: "fa-brands fa-instagram",
        subtitulo: "Instagram",
        descripcion: "@RUKADIAK",
    },
    {
        id: 2,
        icono: "fa-brands fa-facebook",
        subtitulo: "Facebook",
        descripcion: "@CabañasCostaAlLago",
    },
    {
        id: 3,
        icono: "fa-brands fa-whatsapp",
        subtitulo: "WhatsApp",
        descripcion: "+54 9 1123456789",
        descripcion2: "+54 9 1123456789",
    }
]


const faqData = [
    {
      id: 1,
      question: "Primera Pregunta?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias qui maxime harum incidunt doloribus expedita modi consectetur, corporis ut, sunt provident? Suscipit impedit, debitis hic praesentium provident perferendis maxime!"
    },
    {
      id: 2,
      question: "Segunda Pregunta?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias qui maxime harum incidunt doloribus expedita modi consectetur, corporis ut, sunt provident? Suscipit impedit, debitis hic praesentium provident perferendis maxime!"
    },
    {
      id: 3,
      question: "Tercera Pregunta?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias qui maxime harum incidunt doloribus expedita modi consectetur, corporis ut, sunt provident? Suscipit impedit, debitis hic praesentium provident perferendis maxime!"
    },
    {
      id: 4,
      question: "Cuarta Pregunta?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias qui maxime harum incidunt doloribus expedita modi consectetur, corporis ut, sunt provident? Suscipit impedit, debitis hic praesentium provident perferendis maxime!"
    },
    {
      id: 5,
      question: "Quinta Pregunta?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias qui maxime harum incidunt doloribus expedita modi consectetur, corporis ut, sunt provident? Suscipit impedit, debitis hic praesentium provident perferendis maxime!"
    }
  ];

  const caracteristicasCabaña1 = [
    "Capacidad de 6 a 8 personas, o dos familias",
    "Comedor",
    "Living",
    "Cocina",
    "Baño planta baja",
    "Habitacion con 4 camas de 1 plaza",
    "Habitacion principal con baño en suite",
    "Parrila",
    "Mesas y sillas de exterior",
    "Calefaccion a leña"
  ];

  const caracteristicasCabaña2 = [
    "Capacidad de 2 a 4 personas",
    "Comedor",
    "Living",
    "Cocina",
    "Habitacion principal con baño en suite",
    "Camas de 1 plaza adicionales",
    "Parrila",
    "Mesas y sillas de exterior",
    "Calefaccion a leña"
  ];

  const caracteristicasCabaña3 = [
    "Capacidad de 2 a 5 personas",
    "Comedor",
    "Living",
    "Cocina",
    "Habitacion principal",
    "Baño",
    "Habitacion con 3 camas de 1 plaza",
    "Parrila",
    "Mesas y sillas de exterior",
    "Calefaccion a leña"
  ];

  const caracteristicasCabaña4 = [
    "Capacidad de 2 a 5 personas",
    "Comedor",
    "Living",
    "Cocina",
    "Habitacion principal",
    "Baño",
    "Habitacion con 3 camas de 1 plaza",
    "Parrila",
    "Mesas y sillas de exterior",
    "Calefaccion a leña"
  ];

  import imagen1 from '../imagenes/interior-cabaña1.jpg';
  import imagen2 from '../imagenes/interior-cabaña2.jpg';
  import imagen3 from '../imagenes/interior-cabaña3.jpg';
  import imagen4 from '../imagenes/interior-cabaña4.jpg';
  
  const imgSlider1 = [
    { src: imagen1, alt: "living" },
    { src: imagen2, alt: "cocina" },
    { src: imagen3, alt: "comedor" },
    { src: imagen4, alt: "habitacion" }
  ]; 

  

  export {cards, contactCards, faqData, caracteristicasCabaña1, caracteristicasCabaña2, caracteristicasCabaña3, caracteristicasCabaña4, imgSlider1};



            // En este aparado te invitamos a que nos cuentes como fue tu experiencia!<br/>
            // No es necesario que sea solo de nuestro complejo de cabañas o que tenga relacion a ellas,
            // puede ser de tus vacaciones en Moquehue o Villa Pehuenia o cualquier parte del sur!<br/>
            // Tenes la opcion si lo deseas de calificar nuestras cabañas con 5 estrellas!<br/>
            // Esperamos que hayas podido descansar y disfrutar de tus vacaciones y que te lleves hermosos recuerdos<br/>