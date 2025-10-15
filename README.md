 # 🌿 MindRoute — Duygusal Navigasyon Uygulaması

Bu proje, kullanıcının 10 saniyelik videosundan **ruh hâlini analiz edip**, şehirde ona uygun mekanları öneren bir sistemdir.  
MindRoute, yapay zekâ destekli duygusal analiz ile şehir yaşamını kişiselleştirmeyi amaçlar.

---

## 🚀 Teknolojiler
### 🧠 Backend
- **FastAPI** (Python)
- **MongoDB** (veri saklama)
- **Overpass API (OpenStreetMap)** — mekan verilerini çekme
- **python-dotenv** — ortam değişkeni yönetimi

### 💻 Frontend
- **React + Vite**
- **Tailwind CSS** (arayüz)
- **Fetch API / Axios** (backend iletişimi)

---

## ⚙️ Kurulum (Özet)

### 🧩 Backend
```bash
cd app
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt  # veya: fastapi uvicorn pymongo python-dotenv requests
uvicorn main:app --reload --port 8002
.env içeriği:

ini
Kodu kopyala
MONGO_URL=mongodb://127.0.0.1:27017
DB_NAME=mindroute
COLL_NAME=places
💡 Frontend
bash
Kodu kopyala
cd mindroute-web
npm install
npm run dev
Tarayıcıda aç:
👉 http://localhost:5173

🌍 API Uçları (Endpoints)
Method	Endpoint	Açıklama
POST	/mood/analyze	Videodan ruh hâlini analiz eder → { "mood": "stresli" }
GET	/recommend?mood=stresli&limit=10	Ruh hâline göre mekan önerileri döner
GET	/health	MongoDB bağlantı durumunu döner → { "mongo": true }

🗂️ Dosya Yapısı
bash
Kodu kopyala
mindroute/
├── app/                  # FastAPI backend
│   ├── main.py
│   ├── fetch_places.py   # OSM'den mekan çekme
│   └── .env.example
│
├── mindroute-web/        # React frontend
│   ├── src/
│   ├── .env.example
│   └── package.json
│
└── README.md
🧠 Özellikler
🎥 Video analizi → DeepFace / Mediapipe destekli ruh hâli çıkarımı

🗺️ OpenStreetMap üzerinden yakın mekan önerisi

🧮 MongoDB’de upsert (tekil kayıt garantisi)

⚡ Gerçek zamanlı frontend-backend etkileşimi

🧰 Geliştirici Notları
Aynı osm_id iki kez eklenmez (unique index).

.env dosyaları .gitignore ile gizlidir.

.env.example dosyaları örnek amaçlı paylaşılmıştır.

📄 Lisans
MIT License © 2025 Gökçen Usta



