console.log('DESESTRUCTURACIÓN DE OBJETOS');

interface AudioPlayer {
    audioValume: number;
    soungDuration: number;
    soung: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioValume: 90,
    soungDuration: 36,
    soung: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

// const song = 'New Song';

const { soung } = audioPlayer; // crea una nueva variable con el mismo nombre que la propiedad
console.log({ soung });

const { soung: newSoung } = audioPlayer; // si deseo cambiar el nombre de la la nueva variable
console.log({ newSoung });

const { soung: nSoung, soungDuration: duration } = audioPlayer; // destructuración dfe varios atributos

console.log({
    nSoung, duration
})

// const { author } = audioPlayer.details;

const { details } = audioPlayer;
const { author } = details;

console.log({ author })


console.log('DESESTRUCTURACIÓN DE ARREGLOS');

// cambiamos ls {} por []

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', dbz[4] || 'No existe el personaje en el indice');

const [p1, p2, p3] = dbz;
const [, , t] = dbz;// solo tomamos en indice 2
const [, , , th = 'NOt Found'] = dbz;// si no existe, asignamos un valor por defecto

console.log(`Le personaje 1 es: ${p1}`)
console.log(`Le personaje 2 es: ${p2}`)
console.log(`Le personaje 3  es: ${t}`)
console.log(`Le personaje 4  es: ${th}`)




export { };