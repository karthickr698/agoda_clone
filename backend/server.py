from flask import Flask
from flask import request
from flask_mysqldb import MySQL
import time
import json
from flask_cors import CORS;
import razorpay;
from twilio.rest import Client ;

app = Flask(__name__)
razorpay_client = razorpay.Client(auth=("rzp_test_9DjEQTF0xqxKcb", "2MCoTntgfG4uA3y4unhOFGJy"))
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
    for i in result:
        if i[0] == email:
            flag = True

    if flag:
        return json.dumps({"message":"Username already exists!", "error":True})
    else:
        cur.execute(''' INSERT INTO users( email, password, first_name, last_name) VALUES("%s", "%s", "%s", "%s"); ''' %( email, password, firstName, lastName))
        mysql.connection.commit()
        cur.close()

        return json.dumps({"message":"Created Account successfully!", "error":False,"name":firstName})

@app.route("/user/login", methods=["POST"])
def userLogin():
    email = request.json["email"]
    password = request.json["password"]

    cur = mysql.connection.cursor()

    cur.execute(''' SELECT email,password,first_name FROM users ''')
    result = cur.fetchall()

    flag = False
    name=""

    for i in result:
        if i[0] == email:
            if i[1] == password:
                flag = True
                name=i[2]

    if flag:
        return json.dumps({"name": name,"status": "Logged In","error": False})
    else:
        return json.dumps({"message": "Login Failed", "error": True})

@app.route("/google", methods=["POST"])
def googleauth():
    email = request.json["email"]
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
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
        cur.execute(''' INSERT INTO users( email, password, first_name, last_name) VALUES("%s", "%s","%s", "%s"); ''' % (email, email,first_name, last_name))
        mysql.connection.commit()
        temp=cur.lastrowid
        cur.execute(''' INSERT INTO oauth( user_id,provider, provider_id,access_token) VALUES("%s", "%s","%s", "%s"); ''' % (temp,provider,googleId,access_token))
        mysql.connection.commit()
        cur.close()
        return json.dumps({"name": name,"status": "Logged In","error": False})



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

@app.route('/getproperty', methods=['GET'])
def getProperty():
    page = request.args.get('page')
    isHome = request.args.get('isHome')
    isFamilyFriendly = request.args.get('isFamilyFriendly')
    includesBreakfast = request.args.get('includesBreakfast')
    canBookwithoutCC = request.args.get('canBookwithoutCC')
    low2high = request.args.get('low2high')
    rating=request.args.get('rating')
    
    if (isHome == None):
        isHome = "0"
    if (isFamilyFriendly == None):
        isFamilyFriendly = "0"
    if (includesBreakfast == None):
        includesBreakfast = "0"
    if (canBookwithoutCC == None):
        canBookwithoutCC = "0"

    if (page == None):
        page = 1
    perpage = 20
    startat = int(page) * perpage
    cur = mysql.connection.cursor()
    if (low2high == None and rating==None ):
        cur.execute('SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ', (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC))
        count=cur.fetchall()
        cur.execute('SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s)   limit %s, %s ',(isHome,isFamilyFriendly,includesBreakfast,canBookwithoutCC,startat,perpage))
        data = cur.fetchall()
        return json.dumps({"property": data,"count":count})
    elif (low2high == "1" and rating == "1"):
        cur.execute('SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ', (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC))
        count=cur.fetchall()
        cur.execute('SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ORDER BY rating DESC,pricePerNight ASC  limit %s, %s  ',(isHome,isFamilyFriendly,includesBreakfast,canBookwithoutCC,startat,perpage))
        data = cur.fetchall()
        return json.dumps({"property": data,"count":count})
    elif (rating == "1" and low2high == None):
        cur.execute('SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ', (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC))
        count=cur.fetchall()
        cur.execute('SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ORDER BY rating DESC  limit %s, %s  ',(isHome,isFamilyFriendly,includesBreakfast,canBookwithoutCC,startat,perpage))
        data = cur.fetchall()
        return json.dumps({"property": data,"count":count})
    else:
        cur.execute('SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ', (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC))
        count=cur.fetchall()
        cur.execute('SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ORDER BY pricePerNight ASC  limit %s, %s  ',(isHome,isFamilyFriendly,includesBreakfast,canBookwithoutCC,startat,perpage))
        data = cur.fetchall()
        return json.dumps({"property": data,"count":count})

@app.route('/getproperty/<id>', methods=['GET'])
def getPropertyById(id):
    cur = mysql.connection.cursor()
    
    cur.execute('SELECT * FROM Mainproperties WHERE id = "%d" ;'%(int(id)))
    data = cur.fetchall()
    return json.dumps({"property": data})

@app.route('/orders',methods=['POST'])
def orders():
    
    amount = request.json["amount"]
    currency = request.json["currency"]
    receipt = request.json["receipt"]
    payment_capture = request.json["payment_capture"]
    datas = {
        "amount": amount,
        "currency": currency,
        "receipt": receipt,
        "payment_capture": payment_capture
    };

    dump = razorpay_client.order.create(data=datas)
    return json.dumps({"id": dump['id']})

@app.route('/verifypay',methods=['POST'])
def verifypay():
    return json.dumps({"message": "payment successful"})

@app.route('/sms',methods=['POST'])
def sms():
    account_sid = 'AC7c39e49efae3ecc622553af865662e19' 
    auth_token = 'edf5dd255777f55ec7c6b48f2743ef96' 
    client = Client(account_sid, auth_token) 
    
    message = client.messages.create( from_='+16693335742', body='payment successful', to='+919087638144' ) 
    
    print(message.sid)
    return json.dumps({"message": message.sid})



