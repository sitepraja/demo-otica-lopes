const mensagemPadrao = encodeURIComponent(
  "Olá! Vim pelo site da Ótica Lopes e gostaria de agendar um atendimento."
);

export const contatos = {
  whatsappPrincipal: {
    exibicao: "(21) 98699-8076",
    url: `https://wa.me/5521986998076?text=${mensagemPadrao}`,
  },
  whatsappSecundario: {
    exibicao: "(21) 98949-6267",
    url: `https://wa.me/5521989496267?text=${mensagemPadrao}`,
  },
  instagram: {
    usuario: "@oticalopes1209",
    perfilUrl: "https://instagram.com/oticalopes1209",
    dmUrl: "https://ig.me/m/oticalopes1209",
  },
  endereco: {
    completo: "Rua Dr. Feliciano Sodré, 215 - Sala 1009 - Centro, São Gonçalo/RJ",
    resumido: "R. Dr. Feliciano Sodré, 215 - Sala 1009 - Centro, São Gonçalo/RJ",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Feliciano+Sodre,+215+-+Centro,+Sao+Goncalo+-+RJ",
  },
};