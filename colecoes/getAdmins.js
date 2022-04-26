// Crie uma função que retorna o nome dos membros de um Map
// que tem o papel 'ADMIN' no sistema.

// Crie uma função getAdmins que recebe um Map;
// Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

function getAdmins(map) {
    let admins = [];
    for ([key,value] of map) {
        if (value == 'Admin') {
            admins.push(key)
        }
    }

    return admins
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Felip', 'Admin');
usuarios.set('Joao', 'Admin');
usuarios.set('Carlos', "User");

console.log(getAdmins(usuarios))