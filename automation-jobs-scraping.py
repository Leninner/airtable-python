import pyautogui
from selenium import webdriver
from time import sleep
import pyperclip as clipboard
import os

links = [
    "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=direcci%C3%B3n&location=Ecuador",
    "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=marketing&location=ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=tecnolog%C3%ADa&location=ecuador"
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=ventas&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=contabilidad&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=finanzas&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=log%C3%ADstica&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=developer&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=produccion%20audiovisual&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=produccion&location=Ecuador",
    # "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=innovaci%C3%B3n&location=Ecuador",
    # "https://ec.jooble.org/SearchResult?date=8&ukw=tecnolog%C3%ADa",
    # "https://ec.jooble.org/SearchResult?date=8&ukw=developer",
    # "https://ec.jooble.org/SearchResult?date=8&p=2&ukw=ventas",
    # "https://www.multitrabajos.com/empleos-publicacion-hoy.html",
    # "https://www.computrabajo.com.ec/empleos-de-informatica-y-telecom-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-recursos-humanos-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-marketing-y-ventas-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-atencion-a-clientes-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-administracion-y-oficina-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-cientifico-y-investigacion-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-arte-y-diseno-y-medios-hoy",
    # "https://www.computrabajo.com.ec/empleos-de-almacen-logistica-hoy"
]

firstStep = open("/Users/macbookpro/Desktop/airtable-python/utils/firstStep.js", "r")
firstStepRead = firstStep.read()
firstStepMain = open("/Users/macbookpro/Desktop/airtable-python/src/jobs.js", "a+", encoding="utf8")
firstStepMain.write(firstStepRead)

for link in links:  
    driver = webdriver.Chrome("/Users/macbookpro/Desktop/chromedriver")
    driver.get(link)
    archivo = open("/Users/macbookpro/Desktop/airtable-python/scrapingJobs.js", "r", encoding="utf8")
    texto = archivo.read()
    clipboard.copy(texto)
    pyautogui.click(200, 200)
    pyautogui.hotkey('command', 'option', 'j') 
    sleep(2)
    pyautogui.hotkey("command", "v")
    pyautogui.hotkey("enter")
    sleep(1)
    pyautogui.hotkey("command", "tab")
    copiar = open("/Users/macbookpro/Desktop/airtable-python/src/jobs.js", "a+", encoding="utf8")
    copiar.write(clipboard.paste())
    copiar.write(",")
    archivo.close()
    driver.quit()

copiar = open("/Users/macbookpro/Desktop/airtable-python/src/jobs.js", "a+", encoding="utf8")
copiar.write("]\n")
moreCode = open("/Users/macbookpro/Desktop/airtable-python/utils/moreCode.js", "r", encoding="utf8")
texto = moreCode.read()
clipboard.copy(texto)
copiar.write(clipboard.paste())
moreCode.close()
copiar.close()

RUTA_ARCHIVO = "/Users/macbookpro/Desktop/airtable-python/src/jobs.js"
os.system(f'start {os.path.realpath(RUTA_ARCHIVO)}')
sleep(5)
pyautogui.click(500, 200)
sleep(5)

# configurar el método para ejecutar un archivo en mac
pyautogui.hotkey("command", "capslock")


print("********** Búsqueda de empleos exitosa **********")