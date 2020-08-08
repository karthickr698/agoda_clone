import logging
from datetime import datetime as dt
from flask import Flask, request, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_restful import Api

from .settings import config_by_name

db = SQLAlchemy()
flask_bcrypt = Bcrypt()
api_blueprint = Blueprint('api', __name__)
api = Api(api_blueprint)


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])
    add_extentions(app=app)

    @app.after_request
    def after_request(response):
        if app.config['ENV'] == 'development':
            app.logger.info('The Response\n%s' % (response))
        return response
    return app


def add_extentions(app):
    db.init_app(app)
    flask_bcrypt.init_app(app)