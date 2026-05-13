export interface Movie {
    id: number;
    titulum: string;
    annus: number;
    imago: string;
    sinopsis: string;
    director: string;
}

export const movies: Movie[] = [
    {
        id: 1,
        titulum: "Shrek",
        annus: 2001,
        imago: "shrek-cartel.jpg",
        sinopsis: "Para salvar su territorio, un ogro gruñón hace un pacto con un príncipe malvado para rescatar a una princesa cautiva por un dragón.",
        director: "Andrew Adamson, Vicky Jenson"
    },
    {
        id: 2,
        titulum: "Shrek 2",
        annus: 2004,
        imago: "Shrek 2.jpg",
        sinopsis: "Shrek y Fiona viajan al Reino de Muy Muy Lejano para conocer a los padres de ella, quienes se llevan una gran sorpresa al ver su nueva apariencia.",
        director: "Andrew Adamson, Kelly Asbury, Conrad Vernon"
    },
    {
        id: 3,
        titulum: "Shrek Tercero",
        annus: 2007,
        imago: "shrek 3.jpg",
        sinopsis: "Cuando el rey Froggy enferma, Shrek emprende una aventura junto a Asno y Gato para encontrar al joven Artie, el heredero legítimo al trono.",
        director: "Chris Miller, Raman Hui"
    },
    {
        id: 4,
        titulum: "Shrek: Felices para siempre",
        annus: 2010,
        imago: "shrek 4.jpg",
        sinopsis: "Nostálgico por sus días de ogro real, Shrek firma un pacto con Rumpelstiltskin y termina en una retorcida versión alternativa de Muy Muy Lejano.",
        director: "Mike Mitchell"
    }
];
