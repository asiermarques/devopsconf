module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-conferencer",
      options: {
        siteUrl: "https://devopsconf.es",
        conferenceName: "DevOpsConf 2023",
        conferenceDate: "Viernes 5 de Mayo, Bilbao",
        conferenceClaim: "Encuentro profesional en torno a la cultura DevOps",
        conferenceLocation: {
          googleMapsIframeLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5333947155564!2d-2.9305296241199597!3d43.261200071123504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4f60c07fc049%3A0xd353dbcd51c2ff07!2sBAT%20%7C%20B%20Accelerator%20Tower!5e0!3m2!1ses!2snl!4v1681998466816!5m2!1ses!2snl",
          address: "Edificio BAT, Auditorio 6ª Planta.\nGran Vía de Don Diego López de Haro 1\n48001 Bilbao, Bizkaia"
        },
        ticketsCTALink: "https://www.eventbrite.com/e/entradas-devopsconfes-bilbao-meetup-5-de-mayo-621627493567",
        ticketsCTAText: "Reserva tu sitio",
        conferenceHashtag: "#DevopsES23",
        bannerImage: "/images/banner.png",
        summary: {
          title: "Your awesome",
          description:
              "Segunda edición de un pequeño evento que nace con el objetivo de compartir perspectiva y experiencia profesional relacionada con la cultura DevOps.",
          ctaText: "Agenda",
          ctaLink: "#agenda",
        },
      }
    }
  ],
}
