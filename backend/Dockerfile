FROM python:3.11

WORKDIR /backend

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "--settings", "config.settings.development", "0.0.0.0:8000"]
