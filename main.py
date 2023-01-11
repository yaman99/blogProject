from selenium import webdriver
from selenium.webdriver.chrome.service import service
import time
from selenium.webdriver.common.by import By
#signup test
def signup():

    driver=webdriver.Chrome()
    driver.get("http://localhost:5001/features/signup.html")
    fullName=driver.find_element(By.ID,"fullName")
    fullName.send_keys("Muhammed")
    email=driver.find_element(By.ID,"email")
    email.send_keys("muhammed.dele@gmail.com")
    password=driver.find_element(By.ID,"password")
    password.send_keys("123456789")
    passwordConfirmation=driver.find_element(By.ID,"password2")
    passwordConfirmation.send_keys("123456789")
    signup=driver.find_element(By.ID,"signup_btn")
    time.sleep(5)

    signup.click()
    time.sleep(5)
    #river = webdriver.Chrome("C:\\Users\\mdele\\OneDrive - Üsküdar Üniversitesi\\Masaüstü\\chromedriver.exe")
    driver.get("http://localhost:5001/features/signin.html")
    email = driver.find_element(By.ID, "email")
    email.send_keys("muhammed.dele@gmail.com")
    password = driver.find_element(By.ID, "password")
    password.send_keys("123456789")
    signin = driver.find_element(By.ID, "login_btn")
    time.sleep(1)
    signin.click()
    time.sleep(3)


    driver.get("http://localhost:5001/features/blog-list.html")
    addBlogPageBtn = driver.find_element(By.CLASS_NAME, "addBlogPageBtn")
    addBlogPageBtn.click()
    time.sleep(5)
    
    
    driver.get("http://localhost:5001/features/add-blog.html")
    title = driver.find_element(By.ID, "title")
    title.send_keys("Valid Title");

    authorName = driver.find_element(By.ID, "authorName")
    authorName.send_keys("Valid Author")

    content = driver.find_element(By.ID, "content")
    content.send_keys("This is a valid content")

    content = driver.find_element(By.CLASS_NAME, "addBlogBtn")
    time.sleep(5)
    content.click()
    
    time.sleep(5)
    
    content = driver.find_element(By.CLASS_NAME, "editBtn")
    content.click()
    time.sleep(5)

    authorName = driver.find_element(By.ID, "authorName")
    authorName.send_keys("Valid Author update")

    content = driver.find_element(By.ID, "content")
    content.send_keys("This is a valid content update")

    title = driver.find_element(By.ID, "title")
    title.send_keys("Valid Title update")
    time.sleep(5)

    submit = driver.find_element(By.ID, "submit")
    submit.click()
    time.sleep(5)

    deleteBtn = driver.find_element(By.CLASS_NAME, "deleteBtn")
    deleteBtn.click()
    time.sleep(5)

    signout=driver.find_element(By.ID,"signOut_id")
    signout.click()
    time.sleep(3)


signup()