import LaderaVerde from "../../public/assets/images/ImgProjects/laderaVerde.avif";
import CineApp from "../../public/assets/images/ImgProjects/cineApp.avif";
import lolaloitaland from "../../public/assets/images/ImgProjects/lolalolitaland.avif"
import SystemTicket from "../../public/assets/images/ImgProjects/ticketing-system.avif"
import SystemPos from "../../public/assets/images/ImgProjects/systemPos.avif"
import FactusApi from "../../public/assets/images/ImgProjects/factusApi.avif"
import TournamentX from "../../public/assets/images/ImgProjects/tournamentx.avif"

export const projects = [
  {
    title: "Sistema POS con NestJS",
    slug: "sistema-pos-con-nestjs",
    description: "Sistema POS para la gestión de ventas, usuarios, productos e inventarios en diversos negocios, utilizando NestJS y Prisma.",
    technologies: ["NestJS", "Prisma", "PostgreSQL"],
    image: SystemPos,
    link: "https://github.com/andresbena04/pos-system-nestjs"
  },
  {
    title: "Factus API Integration",
    slug: "factus-api-integration",
    description: "Proyecto de integración con la API de Factus para la gestión de facturas electrónicas.",
    technologies: ["Angular"],
    image: FactusApi,
    link: "https://github.com/andresbena04/factus-api-integration"
  },
  {
    title: "Sistema de Soporte de Tickets",
    slug: "sistema-de-soporte-de-tickets",
    description: "Aplicación para gestionar tickets de soporte, donde los usuarios pueden enviar problemas y recibir soluciones de los agentes de soporte.",
    technologies: ["Angular", "NestJS", "PostgreSQL", "TypeScript"],
    image: SystemTicket,
    link: "https://github.com/andresbena04/support-ticket-system"
  },
  {
    title: "CineApp",
    slug: "cineapp",
    description: "Aplicación en Angular para visualizar la información de las películas en cartelera y los próximos estrenos.",
    technologies: ["Angular"],
    image: CineApp,
    link: "https://github.com/andresbena04/cine-angular",
    demo: "https://cine-angular.vercel.app"
  },
  {
    title: "Cabaña Ladera Verde",
    slug: "cabana-ladera-verde",
    description: "Landing page para la promoción de la cabaña Ladera Verde, destacando sus servicios, galería e información de contacto.",
    technologies: ["Astro"],
    image: LaderaVerde,
    link: "https://github.com/andresbena04/ladera-verde-landing.git",
    demo: "https://ladera-verde-landing.vercel.app"
  },
  {
    title: "TournamentX",
    slug: "tournamentxapp",
    description: "Generador de fixtures para competiciones deportivas o de cualquier índole. Configura equipos, personaliza nombres y genera calendarios exportables en PDF.",
    technologies: ["Angular"],
    image: TournamentX,
    link: "https://github.com/andresbena04/tournament-fixture-builder.git",
    demo: "https://tournamentxapp.vercel.app/"
  },
  {
    title: "Contribuciones a Lolalolitaland",
    slug: "contribuciones-a-lolalolitaland",
    description: "He realizado varias contribuciones al proyecto de Lolalolitaland, incluyendo mejoras de funcionalidades y correcciones de errores.",
    technologies: ["Astro"],
    image: lolaloitaland,
    link: "https://github.com/midudev/lolalolitaland.com/pulls?q=is%3Apr+author%3Aandresbena04"
  }
];
