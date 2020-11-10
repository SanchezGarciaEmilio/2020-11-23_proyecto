/*Datos sobre los productos vendidos, incluyendo su ID, nombre, precio (€), cantidad(por unidad), características(largo y ancho por metro, calidad del 0-10), su estado (vendido o no) y una descripción.*/

db.Productos.InsertMany([
    {"_id": "PDA", "Nombre": "Panel de acero", "Precio": 10, "Cantidad": 30, "Caracteristicas": {
        "Ancho": 0.8,
        "Largo": 1,
        "Calidad": 8,},
    "Vendido": true, "Descripcion": "",},

    {"_id": "PDH", "Nombre": "Panel de hierro", "Precio": 15, "Cantidad": 32, "Caracteristicas": {
        "Ancho": 1,
        "Largo": 1,
        "Calidad": 7,},
    "Vendido": true, "Descripcion": "",},

    {"_id": "PDAL", "Nombre": "Panel de aluminio", "Precio": 25, "Cantidad": 15, "Caracteristicas": {
        "Ancho": 0.6,
        "Largo": 1,
        "Calidad": 9,},
    "Vendido": false, "Descripcion": "",},

    {"_id": "BDAL", "Nombre": "Barras de aluminio", "Precio": 30, "Cantidad": 20, "Caracteristicas": {
        "Ancho": 0.2,
        "Largo": 1.5,
        "Calidad": 8,},
    "Vendido": true, "Descripcion": "",},

    {"_id": "", "Nombre": "Tornillos de acero", "Precio": 0.1, "Cantidad": 1000, "Caracteristicas": {
        "Ancho": 0.02,
        "Largo": 0.08,
        "Calidad": 5,},
    "Vendido": false, "Descripcion": "",},    
])