from typing import List, Optional
from pydantic import BaseModel


class ArticleResponse(BaseModel):
    status_code: int
    title: str
    subtitle: Optional[str]
    body: List[str]
    image_url: Optional[str]


class ArticleUrl(BaseModel):
    url: str