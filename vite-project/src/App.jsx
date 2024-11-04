import React from 'react';
import HeaderRoute from './components/Home/HeaderRoute.jsx';
import Footer from './components/Home/Footer.jsx';



function App({ children }) {
  return (
    <>

    <HeaderRoute dropdownTitle="Nuestras Cabañas" dropdownOptions={[
          {
            name: "Cabaña 1",
            url: "/cabana-1",
        },
        {
            name: "Cabaña 2",
            url: "/cabana-2",
        },
        {
            name: "Cabaña 3",
            url: "/cabana-3",
        },
        {
            name: "Cabaña 4",
            url: "/cabana-4",
        },
    ]} />
    {children}
    <Footer/>
    </>
  );
}

export default App;