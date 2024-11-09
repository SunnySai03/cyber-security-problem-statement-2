import subprocess
import time
from manuf import manuf
from app import app, db, RogueAP

def scan_for_rogue_aps():
    p = manuf.MacParser()

    def get_nearby_aps():
        aps = []
        try:
            result = subprocess.check_output(["netsh", "wlan", "show", "networks", "mode=bssid"], universal_newlines=True)
            lines = result.split("\n")
            ssid = ""
            for line in lines:
                if "SSID" in line:
                    ssid = line.split(":")[1].strip()
                if "BSSID" in line:
                    mac = line.split(":")[1].strip()
                    aps.append({"mac": mac, "ssid": ssid})
        except subprocess.CalledProcessError as e:
            print(f"Error scanning for APs: {e}")
        return aps

    while True:
        with app.app_context():
            nearby_aps = get_nearby_aps()
            for ap in nearby_aps:
                if not RogueAP.query.filter_by(mac=ap['mac']).first():
                    manufacturer = p.get_manuf(ap['mac'])
                    print(f"Detected AP: MAC={ap['mac']}, SSID={ap['ssid']}, Manufacturer={manufacturer}")
                    new_ap = RogueAP(mac=ap['mac'], ssid=ap['ssid'])
                    db.session.add(new_ap)
                    db.session.commit()
        time.sleep(60)

if __name__ == "__main__":
    scan_for_rogue_aps()
