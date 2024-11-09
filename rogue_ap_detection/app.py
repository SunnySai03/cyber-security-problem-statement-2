from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///rogue_aps.db'
db = SQLAlchemy(app)

class RogueAP(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mac = db.Column(db.String(17), unique=True, nullable=False)
    ssid = db.Column(db.String(50), nullable=False)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/rogue_aps', methods=['GET'])
def get_rogue_aps():
    rogue_aps = RogueAP.query.all()
    return jsonify([{'mac': ap.mac, 'ssid': ap.ssid} for ap in rogue_aps])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
