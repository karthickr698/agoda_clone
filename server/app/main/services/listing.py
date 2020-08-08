from ..models.HotelListingModel import HotelCategoryModel, HotelModel
from app.main import db
from app.main.settings import key
import jwt
import datetime
from ..utils.db_save import db_save
import math
import json


# register user if email is not present in the users table
def hotel_listing(params):

    page = params.get("page")
    isHome = params.get("isHome")
    isFamilyFriendly = params.get("isFamilyFriendly")
    includesBreakfast = params.get("includesBreakfast")
    canBookwithoutCC = params.get("canBookwithoutCC")
    low2high = params.get("low2high")
    rating = params.get("rating")

    if isHome == None:
        isHome = "0"
    if isFamilyFriendly == None:
        isFamilyFriendly = "0"
    if includesBreakfast == None:
        includesBreakfast = "0"
    if canBookwithoutCC == None:
        canBookwithoutCC = "0"

    if page == None:
        page = 1

    perpage = 20
    startat = int(page) * perpage

    if low2high == None and rating == None:
        count = db.session.execute(
            "SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ",
            (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC),
        )
        data = db.session.execute(
            "SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s)   limit %s, %s ",
            (
                isHome,
                isFamilyFriendly,
                includesBreakfast,
                canBookwithoutCC,
                startat,
                perpage,
            ),
        )
        return data, count
    elif low2high == "1" and rating == "1":
        count = db.session.execute(
            "SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ",
            (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC),
        )
        data = db.session.execute(
            "SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ORDER BY rating DESC,pricePerNight ASC  limit %s, %s  ",
            (
                isHome,
                isFamilyFriendly,
                includesBreakfast,
                canBookwithoutCC,
                startat,
                perpage,
            ),
        )
        return data, count
    elif rating == "1" and low2high == None:
        count = db.session.execute(
            "SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ",
            (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC),
        )
        data = db.session.execute(
            "SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ORDER BY rating DESC  limit %s, %s  ",
            (
                isHome,
                isFamilyFriendly,
                includesBreakfast,
                canBookwithoutCC,
                startat,
                perpage,
            ),
        )
        return data, count
    else:
        count = db.session.execute(
            "SELECT COUNT(*) FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ",
            (isHome, isFamilyFriendly, includesBreakfast, canBookwithoutCC),
        )
        data = db.session.execute(
            "SELECT * FROM Mainproperties WHERE isHome = (%s) or isFamilyFriendly = (%s) or includesBreakfast=(%s) or canBookwithoutCC=(%s) ORDER BY pricePerNight ASC  limit %s, %s  ",
            (
                isHome,
                isFamilyFriendly,
                includesBreakfast,
                canBookwithoutCC,
                startat,
                perpage,
            ),
        )
        print(data)
        return data, count

