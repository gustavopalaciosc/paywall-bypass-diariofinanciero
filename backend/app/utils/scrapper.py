import httpx
from typing import List, Optional
from fastapi import HTTPException
from bs4 import BeautifulSoup as bs
from ..models import ArticleResponse

async def get_soup(url: str) -> Optional[bs]:
    """Gets html soup element from url"""
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    
    if response.status_code == 200:
        soup = bs(response.text, 'html.parser')
        return soup
    return None

async def get_title(soup) -> Optional[str]:
    """Extracts the main title from the article"""
    title = soup.find('h1', class_='enc-main__title')
    if title:
        return title.get_text(strip=True)
    return None

async def get_subtitle(soup) -> Optional[str]:
    """Extracts the subtitle or description from the article"""
    description = soup.find('p', class_='enc-main__description')
    if description:
        return description.get_text(strip=True)
    return None

async def get_image_url(soup) -> Optional[str]:
    """Extracts the image URL from the article"""
    img_tag = soup.find('div', class_='art-img').find('img')
    src = img_tag['src']
    if src:
        return f'https://www.df.cl{src}'
    return None

async def get_article_body(soup) -> Optional[List[str]]:
    """Extracts the body of the article excluding unnecessary parts"""
    div = soup.find('div', class_='CUERPO', id='articleLock')
    if div:
        paragraphs = div.find_all('p')
        text_paragraphs = []

        for p in paragraphs:
            text = p.get_text(strip=True)
            if text and not "TE PUEDE INTERESAR" in text:  
                text_paragraphs.append(text)
        return text_paragraphs
    return None

async def article_scrapper(url: str) -> ArticleResponse:
    """Main function to scrape the article content"""
    try:
        soup = await get_soup(url)
        if not soup:
            raise HTTPException(status_code=404, detail="Article not found")

        title = await get_title(soup)
        subtitle = await get_subtitle(soup)
        text_list = await get_article_body(soup)
        image_url = await get_image_url(soup)

        article = ArticleResponse(
            status_code=200,
            title=title,
            subtitle=subtitle,
            body=text_list,
            image_url=image_url
        )

        return article
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Error getting article: " + str(e)
        )




   