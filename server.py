from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.get("/")
def index():
    chestii = ["ala", "bala", "portocala"]
    return render_template("index.html", chestii=chestii)


@app.get("/chestie/<int:id>")
def chestie(id):
    return jsonify({ "mesaj": f"Asta e chestia numarul {id}" })

@app.post("/")
def poster():
    text = request.json.get("text") if request.is_json else request.form.get("text")

    # raise KeyError
    # The above is to simulate a bad request

    return jsonify({"mesaj": f"Am primit textul '{text}'"})


if __name__ == "__main__":
    app.run(debug=True)
