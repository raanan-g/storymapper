from fastapi import FastAPI

app = FastAPI()


@app.get("/mapid")
def mapid(asset: str, date: str = ""):
    # TODO: integrate with earthengine-api using service account
    return {"asset": asset, "date": date, "url": "https://earthengine.googleapis.com/..."}
