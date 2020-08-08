import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'karthick98')
    DEBUG = False


class DevelopmentConfig(Config):

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:karthick98@localhost/agoda'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    ENV = 'development'


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:karthick98@localhost/agoda'
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY