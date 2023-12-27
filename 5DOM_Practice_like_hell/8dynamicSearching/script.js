var i = document.querySelector("input");
data = [
  {
    name: "begam",
    src: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22",
  },
  {
    name: "jenny",
    src: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef",
  },
  {
    name: "bella",
    src: "https://images.unsplash.com/photo-1613317898586-a5f478937f2d",
  },
  {
    name: "stella",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  },
];
var person = ""; //so our person doesn't have an undefined value
data.forEach(function (elem) {
  person += `<div class="person">
        <div class="img">
          <img
            src="${elem.src}"
            alt=""
          />
        </div>
        <h1>${elem.name}</h1>
      </div>`;
});
document.querySelector(".people").innerHTML = person;

i.addEventListener("input", () => {
  var matching = data.filter((e) => {
    return e.name.startsWith(i.value);
  });
  var newUsers = "";
  matching.forEach(function (elem) {
    newUsers += `<div class="person">
        <div class="img">
          <img
            src="${elem.src}"
            alt=""
          />
        </div>
        <h1>${elem.name}</h1>
      </div>`;
  });
  document.querySelector(".people").innerHTML = newUsers;
});
