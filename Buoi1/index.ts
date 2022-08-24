const ptBac2 =(a: number,b: number,c: number) => {
    if(a === 0){
        if(b === 0){
            
            console.log("Vo nghiem");
            return
        }
        console.log("X =", -c/b);
        return
    }
    const delta  = Math.sqrt(b*b-4*a*c)
    const x1 = (-b +delta)/2
    const x2 = (b +delta)/2
}

ptBac2(2, 5, 3)