FROM python:3.6.8

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip3 install --no-cache-dir -r requirements.txt

COPY processNotifications.py ./

CMD [ "python3", "processNotifications.py" ]