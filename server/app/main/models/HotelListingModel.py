from .. import db

# hotel category datbase model for Hotel listing
class HotelCategoryModel(db.Model):

    __tablename__ = "category"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), nullable=False)
    tag = db.Column(db.String(255), nullable=False)
# hotel datbase model for Hotel listing
class HotelModel(db.Model):

    __tablename__ = "Mainproperties"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=True)              
    rating= db.Column(db.String(255), nullable=True)             
    reviewCount= db.Column(db.String(255), nullable=True)         
    pricePerNight= db.Column(db.String(255), nullable=True)       
    imageSrc= db.Column(db.String(255), nullable=True)            
    roomsRemaining= db.Column(db.String(255), nullable=True)      
    hasFreeCancellation= db.Column(db.String(255), nullable=True) 
    includesBreakfast= db.Column(db.String(255), nullable=True)   
    isBestSeller= db.Column(db.String(255), nullable=True)        
    dinner= db.Column(db.String(255), nullable=True)              
    isHome= db.Column(db.String(255), nullable=True)              
    isFamilyFriendly= db.Column(db.String(255), nullable=True)    
    canBookwithoutCC= db.Column(db.String(255), nullable=True)    
    isStaycation= db.Column(db.String(255), nullable=True)        
    hasWifi= db.Column(db.String(255), nullable=True)             
    payAtHotel= db.Column(db.String(255), nullable=True)          
    isBooked= db.Column(db.String(255), nullable=True)            
    isReserved= db.Column(db.String(255), nullable=True)          
    hasHouseKeep= db.Column(db.String(255), nullable=True)        
    size= db.Column(db.String(255), nullable=True)                
    des= db.Column(db.String(255), nullable=True)
