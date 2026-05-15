
export interface Character {
    id: number;
    nomen: string;
    quote: string;
    descriptione: string;
    galeria: string[]; 
} 

export const characters: Character[] = [
    {
        id: 0,
        nomen: 'Shrek',
        quote: "Los ogros son como las cebollas. Tienen capas.",
        descriptione: "Un ogro verde, solitario y territorial que vive en un pantano. Aunque parece intimidante y huraño, en el fondo es noble, leal y busca ser aceptado por quién es.",
        galeria: ['shrek.png', 'shrek_torneo.png', 'shrek_humano.png'] 
    },
    {
        id: 1,
        nomen: "Asno",
        quote: "¡Y mañana por la mañana, yo hago los bofles!",
        descriptione: "Un burro parlanchín, hiperactivo y extremadamente optimista. Se convierte en el mejor amigo inseparable de Shrek, a quien desespera constantemente con su parloteo.",
        galeria: ['asno_1.png', 'asno_2.png', 'Shrek 1.jpg']
    },
    {
        id: 2,
        nomen: "Princesa Fiona",
        quote: "Eres un ogro... y yo soy una princesa. Esto no puede ser.",
        descriptione: "Una princesa fuerte e independiente que rompe con los estereotipos clásicos. Oculta una maldición que la transforma en ogro cada noche al ponerse el sol.",
        galeria: ['Fiona_ogra.png', 'Fiona_humana.png']
    },
   
    {
        id: 3,
        nomen: "Lord Farquaad",
        quote: "Es un sacrificio que estoy dispuesto a aceptar.",
        descriptione: "El despiadado y diminuto gobernante de Duloc. Obsesionado con la perfection y la realeza, destierra a las criaturas mágicas para limpiar su reino ideal.",
        galeria: ['lord farquad.png', 'lord_farquaad_2.png']
    },
    {
        id: 4,
        nomen: "Jengi",
        quote: "¡No, mis botones de gomita no!",
        descriptione: "Una pequeña e intrépida galleta de jengibre horneada por el Hombre de Jengibre. A pesar de su fragilidad, posee un carácter rudo y resiste con valentía los interrogatorios.",
        galeria: ['jengi.png', 'Jengi_cojo.png']
    },
    {
        id: 5,
        nomen: "Pinocho",
        quote: "¡No estoy mintiendo! Bueno, técnicamente uso ropa interior de mujer.",
        descriptione: "Una marioneta de madera viviente cuya nariz crece sin parar cada vez que miente. Amigo incondicional que lucha por convertirse en un niño de verdad.",
        galeria: ['pinocho.png', 'pinocho_2.png']
    },
    {
        id: 6,
        nomen: "Gato con Botas",
        quote: "¡Por mi honor de felino, yo os protegeré!",
        descriptione: "Un legendario gato espadachín experto en el arte del combate y en ablandar corazones con su irresistible mirada de ojos grandes. Un aliado letal y carismático.",
        galeria: ['gatoconbotas.png', 'gatoconbotas_2.png']
    }
];
