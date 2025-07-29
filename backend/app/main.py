import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from .utils.scrapper import article_scrapper
from .models import ArticleResponse, ArticleUrl



load_dotenv()
FRONTEND_URL=os.getenv("FRONTEND_URL")


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*", "sentry-trace", "baggage"],
)



@app.get("/health")
async def health_check():
    """
    Health check endpoint to verify the status of the API.
    Returns a 200 status code if the API is functioning correctly.
    """
    return {"status": "ok", "message": "API is running successfully."}


@app.post("/article/", response_model=ArticleResponse)
async def get_article(data: ArticleUrl):
    article = await article_scrapper(url=data.url)
    return article


