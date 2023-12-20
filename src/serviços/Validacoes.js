// function CnpjValido(cnpj) {
//     cnpj = cnpj.replace(/[^\d]+/g, '');

//     if (cnpj.length != 14)
//         return false;

//     var tamanhoTotal = cnpj.length - 2
//     var cnpjSemDigitos = cnpj.substring(0, tamanhoTotal);
//     var digitosVerificadores = cnpj.substring(tamanhoTotal);
//     var soma = 0;
//     var pos = tamanhoTotal - 7;
//     for (i = tamanhoTotal; i >= 1; i--) {
//         soma += cnpjSemDigitos.charAt(tamanhoTotal - i) * pos--;
//         if (pos < 2)
//             pos = 9;
//     }
//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitosVerificadores.charAt(0))
//         return false;

//     tamanhoTotal = tamanhoTotal + 1;
//     cnpjSemDigitos = cnpj.substring(0, tamanhoTotal);
//     soma = 0;
//     pos = tamanhoTotal - 7;
//     for (i = tamanhoTotal; i >= 1; i--) {
//         soma += cnpjSemDigitos.charAt(tamanhoTotal - i) * pos--;
//         if (pos < 2)
//             pos = 9;
//     }

//     resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//     if (resultado != digitosVerificadores.charAt(1))
//         return false;

//     return true;
// }