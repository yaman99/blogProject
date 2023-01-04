// const { isAuthorValid, isContentValid, isTitleValid } = require("./validateForm");
import { isEmail, validateEmailInput } from "../auth/validation";
import { isAuthorValid, isContentValid, isTitleValid } from "./validateForm"


it("Should return false when Author is empty", () => {
    expect(isAuthorValid("      ")).toBe(false);
})

it("Should return false when Author is less than 5 chars", () => {
    expect(isAuthorValid("Alia")).toBe(false);
})


it("Should return true when Author is equal to or greater than 5 chars", () => {
    expect(isAuthorValid("Zeyad Mohamed")).toBe(true);
})

it("Shoud Return true if title is greater than 3 chars", () => {
    expect(isTitleValid("Programming")).toBe(true);
});

it("Shoud Return false if title empty", () => {
    expect(isTitleValid("      ")).toBe(false);
});


it("Should return true if content is greater than or equal to 15 chars", () => {
    expect(isContentValid("This is a valid content")).toBe(true);
});


it("Should return false if content is less than 15 chars", () => {
    expect(isContentValid("This is a")).toBe(false);
});


it("Should return false if content is empty", () => {
    expect(isContentValid("     ")).toBe(false);
});


it("Shoud Return False if entered email is not a valid mail", () => {
    expect(validateEmailInput("notvalidmail.com")).toBe(false);
});


it("Shoud Return False if empty", () => {
    expect(validateEmailInput(" ")).toBe(false);
});


it("Shoud Return True if entered email is valid mail", () => {
    expect(validateEmailInput("valid@mail.com")).toBe(true);
});

it("testing email input in signin page", () => {
    expect(validateEmailInput("valid@mail.com")).toBe(true);
    expect(validateEmailInput("valid")).toBe(false);
});
