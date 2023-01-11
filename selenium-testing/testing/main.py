from selenium import webdriver
from selenium.webdriver.chrome.service import service
import time
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()


def signup():
    driver.get("http://localhost:5001/features/signup.html")
    fullName = driver.find_element(By.ID, "fullName")
    fullName.send_keys("Muhammed")
    email = driver.find_element(By.ID, "email")
    email.send_keys("muhammed.dele@gmail.com")
    password = driver.find_element(By.ID, "password")
    password.send_keys("123456789")
    passwordConfirmation = driver.find_element(By.ID, "password2")
    passwordConfirmation.send_keys("123456789")
    signup = driver.find_element(By.ID, "signup_btn")
    time.sleep(10)
    signup.click()


def signin():
    driver.get("http://localhost:5001/features/signin.html")
    email = driver.find_element(By.ID, "email")
    email.send_keys("muhammed.dele@gmail.com")
    password = driver.find_element(By.ID, "password")
    password.send_keys("123456789")
    signin = driver.find_element(By.ID, "login_btn")
    time.sleep(5)
    signin.click()
    time.sleep(10)


def display_blog_page():
    driver.get("http://localhost:5001/features/blog-list.html")
    addBlogPageBtn = driver.find_element(By.CLASS_NAME, "addBlogPageBtn")
    addBlogPageBtn.click()


def add_blog_page():
    driver.get("http://localhost:5001/features/add-blog.html")
    title = driver.find_element(By.ID, "title")
    title.send_keys("Valid Title")

    authorName = driver.find_element(By.ID, "authorName")
    authorName.send_keys("Valid Author")

    content = driver.find_element(By.ID, "content")
    content.send_keys("This is a valid content")
    content = driver.find_element(By.CLASS_NAME, "addBlogBtn")
    time.sleep(5)
    content.click()
    time.sleep(5)


def edit_blog_page():
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


def delete_blog_page():
    deleteBtn = driver.find_element(By.CLASS_NAME, "deleteBtn")
    deleteBtn.click()
    time.sleep(5)


def sign_out():
    signout = driver.find_element(By.ID, "signOut_id")
    signout.click()
    time.sleep(3)


def __main__():
    signup()
    time.sleep(5)
    signin()
    time.sleep(10)
    display_blog_page()
    time.sleep(10)
    add_blog_page()
    time.sleep(10)
    edit_blog_page
    time.sleep(10)
    delete_blog_page()
    time.sleep(10)
    sign_out()


__main__()
