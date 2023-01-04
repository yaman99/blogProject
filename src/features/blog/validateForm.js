const formData = {};

export default function validateForm(
  titleInput,
  contentInput,
  authorNameInput,
) {
  const title = titleInput.value;
  const validTitle = isTitleValid(title);

  if (validTitle) {
    showValid(titleInput);
  } else {
    showInvalid(titleInput);
  }

  const authorName = authorNameInput.value;
  const validAuthor = isAuthorValid(authorName);

  if (validAuthor) {
    showValid(authorNameInput);
  } else {
    showInvalid(authorNameInput);
  }

  const content = contentInput.value;
  const validContent = isContentValid(content);
  if (validContent) {
    showValid(contentInput);
  } else {
    showInvalid(contentInput);
  }

  if (validTitle && validContent && validAuthor) {
    return formData;
  } else {
    return null;
  }
}
// todo change the  @param to values
function isTitleValid(title) {
  if (title !== "" && title.trim().length >= 3) {
    formData["title"] = title;
    return true;
  } else {
    return false;
  }
}

function isContentValid(content) {
  if (content !== "" && content.trim().length >= 15) {
    formData["content"] = content;
    return true;
  } else {
    return false;
  }
}

function isAuthorValid(authorName) {
  if (authorName !== "" && authorName.trim().length >= 5) {
    formData["authorName"] = authorName;
    return true;
  } else {
    return false;
  }
}

function showValid(node) {
  node.parentElement.querySelector(".invalid-feedback").style.display = "none";
  node.parentElement.querySelector(".valid-feedback").style.display = "block";
}

function showInvalid(node) {
  node.parentElement.querySelector(".invalid-feedback").style.display = "block";
  node.parentElement.querySelector(".valid-feedback").style.display = "none";
}
