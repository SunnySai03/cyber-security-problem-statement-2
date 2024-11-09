from app import db

class RogueAP(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mac = db.Column(db.String(17), unique=True, nullable=False)
    ssid = db.Column(db.String(50), nullable=False)
