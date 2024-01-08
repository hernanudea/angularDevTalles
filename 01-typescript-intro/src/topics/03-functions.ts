
function addNumber(a: number, b: number): number {
    return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
};

let result: number | string = addNumber(1, 4);
console.log({ result });

result = addNumberArrow(3, 4);
console.log({ result });

// argumento opcional ?
// argumento por defecto = 2
// orden: obligatorios, opcionlaes y los de los valores por defecto

function multiply(firtsNumber: number, secondNumber?: number, base: number = 2) {
    return firtsNumber * base;
}

const multiplyResult: number = multiply(5);
console.log({ multiplyResult });



interface Character {
    name: string,
    hp: number,
    showHp: () => void
}


const healCharacter = (character: Character, amount: number) => {
    if (character.hp + amount > 100){
        character.hp = 100;
    }else{
        character.hp += amount;
    }
}

const strider:Character= {
    name: "Strider",
    hp: 50,
    showHp(){
        console.log(`Punto de Vida ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 25);

strider.showHp();


export { }