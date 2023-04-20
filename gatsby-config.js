module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-conferencer",
      options: {
        siteUrl: "https://devopsconf.es",
        conferenceName: "DevOpsConf 2023",
        conferenceDate: "Viernes 5 de Mayo, Bilbao",
        conferenceClaim: "Encuentro profesional en torno a la cultura DevOps",
        ticketsCTALink: "https://www.eventbrite.com/e/entradas-devopsconfes-bilbao-meetup-5-de-mayo-621627493567",
        ticketsCTAText: "Reserva tu sitio",
        conferenceHashtag: "#DevopsES23",
        bannerImage: "/images/banner.png",
        summary: {
          title: "Your awesome",
          description:
              "Segunda edición de un pequeño evento que nace con el objetivo de compartir perspectiva y experiencia profesional relacionada con la cultura DevOps.",
          ctaText: "Pronto más información, ver edición de 2018",
          ctaLink: "https://2018.devopsconf.es",
        },
      }
    }
  ],
}