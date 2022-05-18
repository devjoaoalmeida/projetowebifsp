fetch("../html/html_all.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("../html/html_all.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

fetch("../html/html_all.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("main").innerHTML = data;
  });