"""Flask app for Cupcakes"""
from flask import Flask, url_for, render_template, redirect, flash, jsonify

from models import db, connect_db, Cupcake


app = Flask(__name__)

app.config['SECRET_KEY'] = "hunter2"

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///cupcakes"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



connect_db(app)
db.create_all()