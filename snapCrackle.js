function SnapCrackle(number){
    let arrayAux = [];

    for(i=1; i<=number; i++){
        if(i%2==0){
            if(i%5==0) arrayAux.push('Cracle');
            else arrayAux.push(i);
        } else{
            if(i%5==0) arrayAux.push('SnapCrackle');
            else arrayAux.push('Snap');
        } 
    }

    return arrayAux.join(', ');
}

