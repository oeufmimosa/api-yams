import { Pastrie } from "../pastrie";

export const trimAll = (data: any) => {
    for (const key in data) {
        if (typeof data[key] === 'string')
        data[key] = data[key]?.trim() ?? '';
    }
    return data;
};

export const modifyQuantityPastries = (pastries : Pastrie[], quantity : number) : Pastrie[] => {

    // on récupère les patisseries dont la qty est > 0
    pastries  = pastries?.filter( p => p.quantity > 0 ) || []

    // on les shuffle
    pastries?.sort(_ => Math.random() - .5)

    // error/exception firts pas assez de patisserie le jeu s'arrête
    if( pastries?.length < quantity ) return []

    const pastriesWin = [] ;
    
    let i = 0 ;
    while( quantity > 0){
        pastries[i].choice = true
        pastries[i].quantity--;
        pastries[i].quantityWon = 1 + ( pastries[i]?.quantityWon || 0 ) ;
        pastriesWin.push(pastries[i])
        quantity--;
        i++;
    }

    return pastriesWin 
}   