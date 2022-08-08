from ctypes import sizeof
from logging.handlers import RotatingFileHandler
from flask_sqlalchemy import SQLAlchemy

"""Models for Cupcake app."""

db = SQLAlchemy()


def connect_db(app):

    db.app = app
    db.init_app(app)


class Cupcake(db.Model):
    "Cupcake table model"
    __tablename__ = "cupcakes"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    flavor = db.Column(db.String(25), nullable=False)

    size = db.Column(db.String(25), nullable=False)

    rating = db.Column(db.Integer, nullable=False)

    image = db.Column(db.String,
                      default="https://thestayathomechef.com/wp-content/uploads/2017/12/Most-Amazing-Chocolate-Cupcakes-1-small.jpg")
