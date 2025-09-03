export class Random {

    gerarNumAleatorios(){
        const nunAleatoriosDecimal = Math.random();
        const numAleatorionNoRangr = nunAleatoriosDecimal * 900000;
        const resultado = Math.floor(numAleatorionNoRangr) + 1000000;

        return resultado;
    }
}