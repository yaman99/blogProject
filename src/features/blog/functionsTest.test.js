import { isAuthorValid, isContentValid, isTitleValid } from "./validateForm"


it("TC26 Should Return true if title is greater than 3 chars", () => {
    expect(isTitleValid("Programming")).toBe(true);
});

it("TC27  Should Return false if title empty TC28 or less than 3 chars", () => {
    expect(isTitleValid("      ")).toBe(false);
    expect(isTitleValid("Pr")).toBe(false);
});

it("TC28  Should Return false if Title less than 3 chars", () => {
    expect(isTitleValid("Pr")).toBe(false);
});

it("TC29 Should return true if content is greater than or equal to 15 chars", () => {
    expect(isContentValid("This is a valid content")).toBe(true);
});


it("TC30 Should return false if content is less than 15 chars", () => {
    expect(isContentValid("This is a")).toBe(false);
});


it("TC31 Should return false if content is empty", () => {
    expect(isContentValid("     ")).toBe(false);
});


it("TC32 Should return false when Author is empty", () => {
    expect(isAuthorValid("      ")).toBe(false);
});

it("TC33 Should return false when Author is less than 5 characters", () => {
    expect(isAuthorValid("Alia")).toBe(false);
});


it("TC34 Should return true when Author is equal to or greater than 5 chars", () => {
    expect(isAuthorValid("Zeyad Mohamed")).toBe(true);
});





