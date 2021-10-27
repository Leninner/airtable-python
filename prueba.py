import pyautogui
from selenium import webdriver
from time import sleep

driver = webdriver.Chrome("C:/Users/USUARIO/Desktop/chromedriver.exe")
driver.get("https://airtable.com/shr7TnsNHBrh1gdSo")

sleep(1)

pyautogui.click(200, 200)     # Double click the mouse.
#pyautogui.moveTo(500, 500, duration=2, tween=pyautogui.easeInOutQuad)  # Use tweening/easing function to move mouse over 2 seconds.

sleep(1)

pyautogui.hotkey('ctrl', "shift", 'j') # Press the Ctrl-C hotkey combination.

sleep(1)

pyautogui.write("lenin = 34")

pyautogui.hotkey("enter")

pyautogui.hotkey("alt", "tab")

pyautogui.alert('This is the message to display.') # Make an alert box appear and pause the program until OK is clicked.