/*Tabla Productos*/

/*Nos da todos los productos cuyo ancho sea igual a 0.8 y su estado no sea que no se haya vendido.*/
db.Productos.find({$and:[
    {"Caracteristicas.Ancho": {$eq: 0.8}},
    {"Vendido": {$ne: false}}
]})


/**/
db.Productos.find({})


