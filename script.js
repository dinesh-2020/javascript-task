function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

readTextFile("/data.json", function (text) {
  var data = JSON.parse(text);
  const root_elem = document.createElement("div");
  document.body.appendChild(root_elem);
  root_elem.classList.add("row", "display-flex", "bg-secondary");

  const card_elem = document.createElement("div");
  root_elem.appendChild(card_elem);
  card_elem.classList.add("card", "col-md-3", "m-1", "bg-success");

  var img_elem = document.createElement("img");
  img_elem.classList.add("card-img-top", "rounded");
  img_elem.src = "/p1.jpg";
  card_elem.appendChild(img_elem);

  var div = document.createElement("div");
  card_elem.appendChild(div);

  var name = document.createElement("h4");
  div.appendChild(name);
  name.textContent = data.details.name;

  var name = document.createElement("h4");
  div.appendChild(name);
  name.textContent = data.details.email;

  var name = document.createElement("h4");
  div.appendChild(name);
  name.textContent = data.details.number;

  var name = document.createElement("h4");
  div.appendChild(name);
  name.textContent = data.details.address;

  var name = document.createElement("br");
  div.appendChild(name);

  var name = document.createElement("h5");
  div.appendChild(name);
  name.textContent = "Technical Skills:";

  var name = document.createElement("li");
  div.appendChild(name);
  name.textContent = data.technicalskills[0];

  var name = document.createElement("li");
  div.appendChild(name);
  name.textContent = data.technicalskills[1];

  var name = document.createElement("br");
  div.appendChild(name);

  var name = document.createElement("h5");
  div.appendChild(name);
  name.textContent = "Hobbies:";

  var name = document.createElement("li");
  div.appendChild(name);
  name.textContent = data.hobbies[0];

  var name = document.createElement("li");
  div.appendChild(name);
  name.textContent = data.hobbies[1];

  const card2_elem = document.createElement("div");
  root_elem.appendChild(card2_elem);
  card2_elem.classList.add("card", "col-md-8", "m-1", "bg-info");

  var div2 = document.createElement("div");
  card2_elem.appendChild(div2);

  var name = document.createElement("h4");
  div2.appendChild(name);
  name.textContent = "Career Objective:";

  var p = document.createElement("p");
  div2.appendChild(p);
  p.textContent = data.careerobjective.info;

  var name = document.createElement("h4");
  div2.appendChild(name);
  name.textContent = "Acadamic Details:";

  const table = document.createElement("table");
  div2.appendChild(table);
  table.setAttribute("border", "1px solid creamson");

  var tr1 = document.createElement("tr");
  table.appendChild(tr1);

  var th1 = document.createElement("th");
  tr1.appendChild(th1);
  th1.textContent = "S.No";

  var th1 = document.createElement("th");
  tr1.appendChild(th1);
  th1.textContent = "Qualification";

  var th1 = document.createElement("th");
  tr1.appendChild(th1);
  th1.textContent = "College Name";

  var th1 = document.createElement("th");
  tr1.appendChild(th1);
  th1.textContent = "year of passout";

  var th1 = document.createElement("th");
  tr1.appendChild(th1);
  th1.textContent = "Percentage";

  var tr2 = document.createElement("tr");
  table.appendChild(tr2);

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = "1";

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[0].degree;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[0].institute;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[0].passoutyear;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[0].percentage;

  var tr2 = document.createElement("tr");
  table.appendChild(tr2);

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = "2";

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[1].degree;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[1].institute;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[1].passoutyear;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[1].percentage;

  var tr2 = document.createElement("tr");
  table.appendChild(tr2);

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = "3";

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[2].degree;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[2].institute;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[2].passoutyear;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[2].percentage;

  var tr2 = document.createElement("tr");
  table.appendChild(tr2);

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = "4";

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[3].degree;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[3].institute;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[3].passoutyear;

  var td = document.createElement("td");
  tr2.appendChild(td);
  td.textContent = data.education[3].percentage;

  var name = document.createElement("br");
  div2.appendChild(name);

  var name = document.createElement("h4");
  div2.appendChild(name);
  name.textContent = "Decleration:";

  var name = document.createElement("p");
  div2.appendChild(name);
  name.textContent = data.declaration;

  var name = document.createElement("br");
  div2.appendChild(name);

  var footer = document.createElement("div");
  div2.appendChild(footer);
  footer.classList.add("row", "dispaly-flex");

  var d1 = document.createElement("div");
  footer.appendChild(d1);
  d1.classList.add("col-md-8");

  var p = document.createElement("p");
  d1.appendChild(p);
  p.textContent = "place:chittoor";
  var p = document.createElement("p");
  d1.appendChild(p);
  p.textContent = "date:16-11-202";

  var d1 = document.createElement("div");
  footer.appendChild(d1);

  var p = document.createElement("p");
  d1.appendChild(p);
  p.textContent = "(dinesh)";
  var p = document.createElement("p");
  d1.appendChild(p);
  p.textContent = "signature";
});
