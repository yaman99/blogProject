// const { isAuthorValid, isContentValid, isTitleValid } = require("./validateForm");
import { isEmail, validateEmailInput } from "../auth/validation";
import { isAuthorValid, isTitleValid } from "./validateForm"


it("Should return false", () => { 
    expect(isAuthorValid("")).toBe(false);
})

it("Shoud Return True", () => {
    expect(isTitleValid("This is valid content")).toBe(true);
});


it("Shoud Return False", () => {
    expect(isEmail("")).toBe(false);
});


it("Shoud Return False validateEmailInput", () => {
    expect(validateEmailInput("")).toBe(false);
});