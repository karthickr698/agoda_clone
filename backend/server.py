from flask import Flask
from flask import request
from flask_mysqldb import MySQL
import time
import json

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'karthick98'
app.config['MYSQL_DB'] = 'team'


mysql = MySQL(app)

@app.route("/")
def home():
    return "Home"

# New User - Create Account
@app.route("/user/register", methods=["POST"])
def userRegister():
    password = request.json["password"]
    email = request.json["email"]
    firstName = request.json["firstName"]
    lastName = request.json["lastName"]

    cur = mysql.connection.cursor()

    cur.execute(''' SELECT email from user ''')
    result = cur.fetchall()

    flag = False

    if username in result:
        flag = True

    if flag:
        return json.dumps({"message":"Username already exists!", "error":True})
    else:
        cur.execute(''' INSERT INTO user( email, password, firstName, lastName) VALUES("%s", "%s", "%s", "%s"); ''' %( email, password, firstName, lastName))
        mysql.connection.commit()
        cur.close()

        return json.dumps({"message":"Created Account successfully!", "error":False})

# User - Login
@app.route("/user/login", methods=["POST"])
def userLogin():
    email = request.json["email"]
    password = request.json["password"]

    cur = mysql.connection.cursor()

    cur.execute(''' SELECT email,password FROM user ''')
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

        key = "belly"

        encode = jwt.encode(payload, key)

        return json.dumps({"token":encode.decode(), "message":"Login Successful", "error":False})
    else:
        return json.dumps({"message":"Login Failed", "error":True})

# User Token Authentication
# @app.route("/user_token_validate", methods=['POST'])
# def userToken():
#     token = request.json["token"]

#     key = "belly"

#     data = jwt.decode(token, key)

#     current_time = time.time()

#     if data["session_expiry"] < current_time:
#         return json.dumps({
#             "error":True,
#             "message":"Invalid Token"
#         })
#     else:
#         return json.dumps({
#             "error":False,
#             "message":"Valid Token"
#         })


