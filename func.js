function carro (dias,km){
    const diaria = 100
    const KmValor = 0.50
    let calcl = 0 
    if (km >= 1000){
        calcl = (dias = diaria) + (km + KmValor)
    }
    else {
        calcl = (dias + diaria)
    }

    console.log(calcl)
}

carro ( 60, 999)
