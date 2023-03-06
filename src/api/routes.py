"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#registro

@api.route("/registro", methods=["POST"])    
def registro():


    body = request.json

    if 'nombre' not in body:
        return 'El usuario no tiene nombre', 400
    if 'apellido' not in body:
        return 'El usuario no tiene apellido', 400
    if 'email' not in body:
        return 'El usuario no tiene email', 400
    if 'phone' not in body:
        return 'El usuario no tiene phone', 400
    if 'password' not in body:
        return 'El usuario no tiene password', 400
    
    profile = User.query.filter_by(email=body['email']).one_or_none()
    if profile == None:
        new_user = User(
            email=body["email"],
            password=body["password"],
            nombre=body["nombre"],
            apellido=body["apellido"],
            phone=body["phone"]
        )
        try:
            db.session.add(new_user)
            db.session.commit()
            return "Se ha creado el usuario con exito!✅"
        except Exception as err:
            return 'Ha ocurrido un error!💥', 500
    else:
        return "Ya existe un usuario con ese email!", 400
    return "Method not implemented yet!", 500

#login

@api.route("/login", methods=["GET","POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email == None or password == None:
        return jsonify({"msg": "Bad email or password"}), 401
    else:
        profile = User.query.filter_by(email=email, password=password).one_or_none()
        if profile == None:
            return 'El usuario no esta registrado en la PokeDex', 404
        else:
            access_token = create_access_token(identity=email)
            return jsonify({"tokenUserLogin": access_token })

