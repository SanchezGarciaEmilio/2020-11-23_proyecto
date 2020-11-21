/*Tabla Clientes*/

/*Esta búsqueda nos muestra los clientes que pidieron después del 2018-03-06, que se han gastado 50 o menos pero que su id no sea el 210.*/
db.Clientes.find({$and:[
    {"FechaPedido": {$gte: new Date(2018-03-06,00,00,000+00,00)}},
    {"DineroGastado": {$lte: 50}},
    {"_id": {$ne: 210}}
]})


/*Busca los clientes que o no empiecen por B y contengan una G y una A, o hayan gastado exactamente 164.*/
db.Clientes.find({$or:[
    {$and:[
        {"Nombre": {$regex: /^[^B]/}},
        {"Nombre": {$regex: /G\BA\B/}}
    ]},
    {"DineroGastado": {$eq: 164}}
]})


/**/
db.Clientes.find({$nor:[
    {"Nombre": {$regex: /ERICK/}},
    {"DineroGastado": {$elemMatch: { {$gte: 50}, {$lte: 100} }}}
]})

