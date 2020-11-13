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
    userFontColor: "#4c4c4c"
   };


    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    const steps = [
    {
      id: "Greet",
      message: "¡Saludos! Bienvenido a GiftÜ",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "¿Con quien tengo el gusto?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to service"
    },
    {
      id: "Asking options to service",
      message: "Hola {previousValue}, Encantado de conocerte !!",
      trigger: "Done"
    },
    {
      id: "Done",
      message: "¡Que tengas un buen dia!",
      end: true
    }
    ];


    return(
      <ThemeProvider theme={theme}>
        <ChatBot steps = { steps }{...config}/>;
      </ThemeProvider>
      );
}
export default CustomChatbot;