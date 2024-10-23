interface Duck {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void        
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2: Duck = {
    name: 'duey',
    numLegs: 4,
    makeSound: (sound: string) => console.log(sound)
}

duck1.makeSound('quack1');
duck1.numLegs = 3;
duck2.makeSound('quack2');

export const ducks = [duck1, duck2]