var arreglo = [2, 7, 4, 1, 5, 3];

function bubbleSort(arreglo) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arreglo.length - 1; i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                var temp = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


switch (prompt("A para asendente, D para descendente?")) {
    case "A":



        bubbleSort(arreglo);
        console.log(arreglo);


        break;
    case "D":

        bubbleSort(arreglo);
        let inverso = arreglo;

        console.log(inverso.reverse());

        break;

    default:
        console.log("no!");
        break;
}
