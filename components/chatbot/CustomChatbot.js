import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


function CustomChatbot(props) {

  const theme = {
    background: "white",
    fontFamily: "Quicksand, sans-serif",
    headerBgColor: "#ffab07",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#87d3b8",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
    recognitionEnable: true,
    speechSynthesis: { enable: true, lang: 'es' }
   };


    const config = {
        width: "300px",
        height: "400px",
        floating: true,
    };

    const steps = [
    {
      id: "Greet",
      message: "¡Saludos! Bienvenido a GiftÜ",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "¿Como te llamas?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to service"
    },
    {
      id: "Asking options to service",
      message: "Hola {previousValue}, ¿En que te puedo ayudar?",
      trigger: "Service Options"
    },{
      id: 'Service Options',
        options: [
          { value: 1, label: '¿Que es GiftÜ?', trigger: 'Definition' },
          { value: 2, label: '¿Como uso GiftÜ?', trigger: 'Howto' },
          { value: 3, label: 'En nada por lo pronto', trigger: 'Done' },
        ],
    },
    {
      id: 'User Options',
        options: [
          { value: 1, label: 'Regalo Recomendado', trigger: 'recomended' },
          { value: 2, label: 'Regalo Ideal', trigger: 'ideal' },
          { value: 3, label: 'Regresar al menú anterior', trigger: 'Service Options' },
        ],
    },
    {
      id: "recomended",
      message: "Entra a Regalo Recomendado, ingresa el nombre de la persona a la que quieres regalar, su dirección de perfil de facebook (por ejemplo https://www.facebook.com/perfildelapersona) y selecciona la ocasión que celebran, por último da clic a enviar para ver las opciones de regalo que encontraremos para ti",
      trigger: "User Options"
    },
    {
      id: "ideal",
      message: "Entra a Regalo Ideal, Inicia sesión o regístrate por medio de facebook, google o ingresando tus datos,  ingresa el nombre de la persona a la que quieres regalar, su dirección de perfil de facebook (por ejemplo https://www.facebook.com/perfildelapersona) y selecciona la ocasión que celebran, por último da clic a enviar para ver las opciones de regalo que encontraremos para ti. Este modo de busqueda es más profundo con el fín de mostrarte mejores opciones de regalo.",
      trigger: "User Options"
    },
    {
      id: "Definition",
      message: "GiftÜ es una plataforma que te ayuda a encontrar el mejor regalo para tu ser querido",
      trigger: "Service Options"
    },
    {
      id: "Howto",
      message: "Tenemos dos opciones",
      trigger: "User Options"
    },
    {
      id: "Done",
      message: "¡Que tengas un buen dia!",
      end: true
    }
    ];


    return(
      <ThemeProvider theme={theme}>
        <ChatBot 
         headerTitle="GiftY"
         steps={ steps }{...config}
         
         />
      </ThemeProvider>
      );
}
export default CustomChatbot;