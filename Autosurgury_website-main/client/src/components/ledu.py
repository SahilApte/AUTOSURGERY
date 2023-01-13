from fastapi import FastAPI, File
from fastapi.middleware.cors import CORSMiddleware
import io
import b
import cv2
import os
from fastapi.responses import StreamingResponse

app = FastAPI()

path = 'movie.mp4'
origins = [
    # "http://localhost.tiangolo.com",
    # "https://localhost.tiangolo.com",
    # "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def extractImages(pathIn, pathOut):
    count = 0
    vidcap = cv2.VideoCapture(pathIn)
    success, image = vidcap.read()
    success = True
    while success:
        vidcap.set(cv2.CAP_PROP_POS_MSEC, (count*1000))    # added this line
        success, image = vidcap.read()
        print('Read a new frame: ', success)
        cv2.imwrite(pathOut + "/frame%d.jpg" %
                    count, image)     # save frame as JPEG file
        count = count + 1


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/run")
async def runml():
    b.pippe()


@app.get("/vid")
async def runml2():
    def iterfile():
        with open(path, mode="rb") as file_like:
            yield from file_like

    return StreamingResponse(iterfile(), media_type="video/mp4")


@app.post("/upload")
async def recieveFile(file: bytes = File(...)):
    # print(file)
    pathOut = 'temp.mp4'
    with open(pathOut, 'wb') as ktemp:
        ktemp.write(file)