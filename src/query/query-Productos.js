/*Tabla Productos*/

/*Nos da todos los productos cuyo ancho sea igual a 0.8 y su estado no sea que no se haya vendido.*/
db.Productos.find({$and:[
    {"Caracteristicas.Ancho": {$eq: 0.8}},
    {"Vendido": {$ne: false}}
]})


/*Nos devuelve todos los productos cuyas etiquetas se encuentren entre 15 y 20, o aquellos productos que su descripción empiece por "Tornillos".*/
db.Productos.find({$or:[
    {"Etiquetas": {$elemMatch: {$gte: 15, $lte: 20}}},
    {"Descripcion": {$regex: /^Tornillos/}}
]}).pretty()


/*Nos devuelve los productos cuyas etiquetas no contegan ni 9, ni 18 ni 24, y que además su nombre contenga un "Barras" y algo más.*/
db.Productos.find({$and:[
    {"Etiquetas": {$nin: [9, 18, 24]}},
    {"Nombre": {$regex: /Barras\b/}}
]}).pretty()