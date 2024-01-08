
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string // atributo opcional
}

// no podemos asignar los tipos en un obnjeto, entonces usamos la interface
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);





export { }