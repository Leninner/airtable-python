# airtable-python

> Solo ejecutar el archivo: **automation-jobs-scraping.py** y mirar la magia.

Automatización con uso de Pyautogui, python, javascript, node.js, git.

[NOTE]: Es de suma importancia tener instalado la última versión de todo: node, npm, pip, python.

Ejecuta

```bash
npm install
```

Para instalar todas las dependencias del proyecto.

## Paquetes de python utilizados

```py
import pyautogui
from selenium import webdriver
from time import sleep
import pyperclip as clipboard
import os
```

Para instalarlos con pip:

```bash
pip install pyautogui => Windows
pip3 install pyautogui => Linux
pip install selenium
pip install pyperclip
```

Chromedriver para selenium:

> https://sites.google.com/a/chromium.org/chromedriver/downloads

NOTE => Comprobar la versión con el navegador

## Notas y aprendizajes del proyecto

- Con la extensión **Code Runner** en archivos Python es mejor correr dando en la opción:
  > Run python File in the Terminal
- Se puede combinar muchos paquetes. En este proyecto combiné selenium y pyautogui.
- El estrés puede afectar las relaciones personales, hay que cuidarse de eso.
- Cuando sintamos que no podemos hacer algo, como un buen amigo me dijo: _Sal y descanza un momento y luego sígue adelante_
- Utiliza la técnica del patito de hule.
- Relativamente todo es posible con una gran pasión de por medio.
- Cuando se utiliza open(archivo, modo, encoding), siempre es necesario escribir "encoding='utf8'" para evitar problemas con los carácteres especiales.
