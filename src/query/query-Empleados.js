/*Tabla empleados*/

/*Buscamos cuantos empleados que cobran un salario igual o menor que 1500, no trabaja como CM de redes sociales y sus clientes son el 201, 202 0 203.*/
db.Empleados.find({$and: [
    {"Salario": {$lte: 1500}},
    {"Puesto": {$ne: "CM Redes Sociales"}},
    {"Clientes": {$elemMatch: {$gte: 201, $lte: 203}}}
]}).count()


/*Buscamos todos los empleados que tengan un VA en su nombre y su salario supere los 1600.*/
db.Empleados.find({$and: [
    {"Nombre": {$regex: /VA/, $options: 'I'}},
    {"Salario": {$gt: 1600}}
]}).pretty()


/*Cuenta los empleados que su nombre contiene las letras "MO" y opcionalmente la "R" y que o su puesto no es contabilidad o cobran más de 1500.*/
db.Empleados.find({$and: [
    {$or: [
        {"Puesto": {$ne: "Contabilidad"}},
        {"Salario": {$gt: 1500}}
    ]},
    {"Nombre": {$regex: /MOR?/}}
]}).count()