from app import create_app
from .app.admin import User, db

config_name = 'development'
app = create_app(config_name)

@app.route('/')
def home():
    return 'Welcome to Masai'
@app.route('/getproperty', methods=['GET'])
def getProperty():
    page = request.args.get('page')
    if (page == None):
        page = 1
    perpage = 10
    startat = int(page) * perpage
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT * FROM Mainproperties limit %s, %s ',(startat,perpage))
    data = cur.fetchall()
    return json.dumps({"property": data})

@app.route('/getproperty/<id>', methods=['GET'])
def getPropertyById(id):
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT * FROM Mainproperties WHERE id = "%d" ;'%(int(id)))
    data = cur.fetchall()
    return json.dumps({"property": data})


if __name__=='main':
    app.run()
