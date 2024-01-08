
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Hernan',
}

const passenger2: Passenger = {
    name: 'Eliana',
    children: ['Samuel','Matias'],
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;
    
    // el ! es un not null assertion operation, forma de asegurarle que no va a recibir un nulo

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber( passenger1 );