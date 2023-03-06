from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    apellido = db.Column(db.String(80), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def __init__(self, email, password, nombre, apellido, phone):
        self.email = email
        self.password = password
        self.nombre = nombre
        self.apellido = apellido
        self.phone = phone

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "phone": self.phone,
        
            # do not serialize the password, its a security breach
        }