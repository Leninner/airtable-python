import pyautogui
from selenium import webdriver
from time import sleep
import pyperclip as clipboard

driver = webdriver.Chrome("C:/Users/USUARIO/Desktop/chromedriver.exe")
driver.get("https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=marketing&location=ecuador")

archivo = open("C:/Users/USUARIO/Desktop/leninner.txt", "r", encoding="utf8")
texto = archivo.read()
clipboard.copy(texto)

pyautogui.click(200, 200)     # Double click the mouse.
# #pyautogui.moveTo(500, 500, duration=2, tween=pyautogui.easeInOutQuad)  # Use tweening/easing function to move mouse over 2 seconds.

pyautogui.hotkey('ctrl', "shift", 'j') 

sleep(1)

pyautogui.hotkey("ctrl", "v")

pyautogui.hotkey("enter")
pyautogui.hotkey("alt", "tab")

sleep(1)

copiar = open("C:/Users/USUARIO/Desktop/cambios.txt", "a+", encoding="utf8")
copiar.write(clipboard.paste())

archivo.close()

