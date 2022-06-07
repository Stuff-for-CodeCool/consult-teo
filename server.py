from flask import Flask, render_template, jsonify, request
from time import sleep

app = Flask(__name__)


@app.get("/")
def index():
    return render_template("index.html")


@app.post("/")
def poster():
    text = request.json.get("text") if request.is_json else request.form.get("text")
    return jsonify(
        {
            "mesaj": f"Am primit textul '{text}'",
        }
    )


@app.get("/pagina/<int:page>")
def paginatie(page):
    dct = {
        "page": page,
        "text": " ala bala" * page,
    }
    # sleep(1)
    return jsonify(dct)


if __name__ == "__main__":
    app.run(debug=True)
