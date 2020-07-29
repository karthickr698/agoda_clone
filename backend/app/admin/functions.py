from . import admin
from .. import User, db

@admin.route('/')
def home():
    return 'Admin Home'

@admin.route('/add')
def add_admin():
    user = User(id = 2, name = 'Admin2', description = 'Description')
    db.session.add(user)
    db.session.commit()
    return 'Blueprint Admin added'