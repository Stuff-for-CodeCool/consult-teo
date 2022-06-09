from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.get("/")
def index():
    return render_template("index.html")


@app.post("/")
def poster():
    text = request.json.get("text") if request.is_json else request.form.get("text")

    # raise KeyError
    # The above is to simulate a bad request

    return jsonify({"mesaj": f"Am primit textul '{text}'"})


if __name__ == "__main__":
    app.run(debug=True)
