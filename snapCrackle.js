function snapCrackle(maxValue){
    let arrayAux = [];

    for(i=1; i<=maxValue; i++){
        if(i%2==0){
            if(i%5==0) arrayAux.push('Crackle');
            else arrayAux.push(i);
        } else{
            if(i%5==0) arrayAux.push('SnapCrackle');
            else arrayAux.push('Snap');
        } 
    }

    return arrayAux.join(', ');
}

console.log(snapCrackle(12));

