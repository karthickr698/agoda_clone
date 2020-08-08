from flask import request
from flask_restful import Resource, reqparse
from app.main import db
from ..services.listing import hotel_listing
import jwt
import datetime
from ..utils.token_validate import token_validate
import json


# POST route to register
class HotelListing(Resource):
    parser = reqparse.RequestParser()

    @classmethod
    def get(self):
        params = request.args
        data, count = hotel_listing(params)

        if data:
            return json.dumps({"property": data, "count": count})
        else:
            return {"status": False, "msg": "Error in getting hotels"}
