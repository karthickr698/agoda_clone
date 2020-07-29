from flask import Flask
from flask import request
from flask_mysqldb import MySQL
import time
import json
from flask_cors import CORS;

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'karthick98'
app.config['MYSQL_DB'] = 'agoda'

CORS(app)
mysql = MySQL(app)

@app.route("/")
def home():
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT * FROM city ')
    data = cur.fetchall()
    return json.dumps({"city": data})

@app.route("/user/register", methods=["POST"])
def userRegister():
    password = request.json["password"]
    email = request.json["email"]
    firstName = request.json["firstName"]
    lastName = request.json["lastName"]

    cur = mysql.connection.cursor()

    cur.execute(''' SELECT email from users ''')
    result = cur.fetchall()

    flag = False

    if email in result:
        flag = True

    if flag:
        return json.dumps({"message":"Username already exists!", "error":True})
    else:
        cur.execute(''' INSERT INTO users( email, password, first_name, last_name) VALUES("%s", "%s", "%s", "%s"); ''' %( email, password, firstName, lastName))
        mysql.connection.commit()
        cur.close()

        return json.dumps({"message":"Created Account successfully!", "error":False})


@app.route("/user/login", methods=["POST"])
def userLogin():
    email = request.json["email"]
    password = request.json["password"]

    cur = mysql.connection.cursor()

    cur.execute(''' SELECT email,password FROM users ''')
    result = cur.fetchall()

    flag = False

    for i in result:
        if i[0] == email:
            if i[1] == password:
                flag = True

    if flag:
        payload = {
            "username": email,
            "status": "Logged In",
            "session_expiry": time.time() + 7200
        }

        data = {
            "email": email,
        }
        return json.dumps({"data": data})
    else:
        return json.dumps({"message": "Login Failed", "error": True})

@app.route("/google", methods=["POST"])
def googleauth():
    email = request.json["email"]
    name = request.json["name"]
    access_token = request.json["access_token"]
    googleId = request.json["googleId"]
    provider="Google"

    cur = mysql.connection.cursor()

    cur.execute(''' SELECT email from users ''')
    result = cur.fetchall()

    flag=False
    for i in result:
        if (i[0] == email):
            flag=True;
        

    if flag:

        return json.dumps({"message":"Username already exists!", "error":True})
    else:
        cur.execute(''' INSERT INTO users( email, password, first_name, last_name) VALUES("%s", "%s","%s", "%s"); ''' % (email, name, email, name))
        mysql.connection.commit()
        temp=cur.lastrowid

        cur.execute(''' INSERT INTO oauth( user_id,provider, provider_id,access_token) VALUES("%s", "%s","%s", "%s"); ''' % (temp,provider,googleId,access_token))
        mysql.connection.commit()
        cur.close()
        data = {
            "email": email,
            "name":name
        }
        return json.dumps({"data": data})



@app.route('/properties', methods=['GET'])
def viewAllpropertys():
    cur = mysql.connection.cursor()
    page = request.args.get('page')
    rating = request.args.get('rating')
    size = request.args.get('size')
    breakFast = request.args.get('breakFast')
    creditCard = request.args.get('creditCard')
    lower=request.args.get('lower')
    perpage = 10
    startat = page * perpage


    
    cur.execute('SELECT * FROM rooms WHERE rating in (%s) AND location in (%s) AND breakFast in (%s) AND creditCard in (%s) limit %s, %s ;', (rating, location, breakFast, creditCard,startat,perpage))
    data = list(cur.fetchall())
    return json.dumps({"propertys": data})

@app.route('/gettotalproperties', methods=['GET'])
def gettotalproperties():
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT COUNT(*) FROM property;')
    data = cur.fetchall()
    return json.dumps({"Count": data})



@app.route('/getproperty', methods=['GET'])
def getProperty():
    page = request.args.get('page')
    isHome = request.args.get('isHome')
    isFamilyFriendly = request.args.get('isFamilyFriendly')
    
    if (isHome == None):
        isHome = "1"
    if (isFamilyFriendly == None):
        isFamilyFriendly = "0"

    if (page == None):
        page = 1
    perpage = 10
    startat = int(page) * perpage
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT * FROM Mainproperties WHERE isHome = (%s) and isFamilyFriendly = (%s)  limit %s, %s ',(isHome,isFamilyFriendly,startat,perpage))
    data = cur.fetchall()
    return json.dumps({"property": data})

@app.route('/getproperty/<id>', methods=['GET'])
def getPropertyById(id):
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT * FROM Mainproperties WHERE id = "%d" ;'%(int(id)))
    data = cur.fetchall()
    return json.dumps({"property": data})


