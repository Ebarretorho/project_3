import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func

from flask import Flask, jsonify, render_template 

#################################################
# Database Setup
#################################################
SERVER = '127.0.0.1'
DATABASE = 'project_3'
USERNAME = 'postgres'
PASSWORD_2 = 'postgres'
DATABASE_CONN = f'postgresql://{USERNAME}:{PASSWORD_2}@{SERVER}/{DATABASE}'
engine = create_engine(DATABASE_CONN)
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################
session = Session(engine)
results = engine.execute('SELECT * FROM crops_climate_data ORDER BY "SurveyYear"').fetchall()
session.close()


# create route that renders index.html template
@app.route("/")
def index():

    return render_template("index.html")

@app.route("/data/api")
def data_crops():
    all_crops = []
    for year, commodity , value, volume, price, temp, rain in results:
        production_dict = {}
        production_dict["year"] = year
        production_dict["commodity"] = commodity
        production_dict["value"] = f'{value}'
        production_dict["volume"] = f'{volume}'
        production_dict["avgprice"] = f'{price}'
        production_dict["avgtemperature"] = f'{temp}'
        production_dict["totalprecipitation"] = f'{rain}'
        
        all_crops.append(production_dict)


    return jsonify(all_crops)

if __name__ == '__main__':
    app.run(debug=True)
