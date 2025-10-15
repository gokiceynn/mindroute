# app/main.py
# Çalıştırma komutu:
# uvicorn app.main:app --reload --port 8002

import os
from typing import Optional
from fastapi import FastAPI, Query, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from dotenv import load_dotenv

# .env yükle
load_dotenv()

# Mongo bağlantısı
MONGO_URL = os.getenv("MONGO_URL", "mongodb://127.0.0.1:27017")
client = MongoClient(MONGO_URL, serverSelectionTimeoutMS=4000)
db = client["mindroute"]
places = db["places"]

# FastAPI uygulaması
app = FastAPI(title="MindRoute — Duygusal Navigasyon API", version="0.1.0")

# 🔹 React (localhost:5173) için CORS izni
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 Duygu → mekan haritası (OSM field “type” ile eşleşir)
MOOD_MAP = {
    "stresli": ["park", "garden", "forest", "viewpoint"],
    "mutlu": ["cafe", "cinema", "pub", "bar", "restaurant", "fast_food"],
    "durgun": ["museum", "library", "park"],
    "enerjik": ["sports_centre", "stadium", "fitness_centre", "bar", "nightclub"],
    "neutral": ["cafe", "park", "library", "museum"]
}

# ------------------- ENDPOINTLER -------------------

@app.get("/", tags=["Home"])
def home():
    return {"status": "OK", "message": "MindRoute API aktif ✅"}

@app.get("/health", tags=["Health"])
def health():
    ok = True
    try:
        client.admin.command("ping")
    except Exception:
        ok = False
    return {"mongo": ok}

@app.get("/recommend", tags=["Recommend"])
def recommend(
    mood: str = Query(..., description="Kullanıcının ruh hali: stresli, mutlu, durgun, enerjik, neutral"),
    limit: int = Query(10, description="Maksimum dönecek mekan sayısı")
):
    mood_types = MOOD_MAP.get(mood.lower(), [])
    if not mood_types:
        return {"error": f"{mood} için tanımlı mekan türü yok."}

    # MongoDB sorgusu
    query = {"type": {"$in": mood_types}}
    results = list(places.find(query, {"_id": 0}).limit(limit))
    return {"count": len(results), "results": results}

# 🔹 Video analizi (dummy versiyon)
@app.post("/mood/analyze", tags=["Analyze"])
async def analyze_mood(file: UploadFile = File(...)):
    """
    Kullanıcının yüklediği videodan ruh halini tespit eder (şimdilik dummy).
    Gerçekte burada DeepFace / Mediapipe modeli çalışacak.
    """
    contents = await file.read()  # videoyu oku
    print(f"Yüklenen dosya: {file.filename}, boyut: {len(contents)} bayt")

    # Şimdilik sahte analiz sonucu
    detected_mood = "stresli"
    return {"mood": detected_mood}
