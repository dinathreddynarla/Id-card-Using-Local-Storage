let data = JSON.parse(localStorage.getItem("data")) || [];

if (data.length === 0) {
    alert("No data found.");
}

data.forEach(i => show(i));

function show(i) {
    let card = document.createElement("div");
    card.className = "card";
    let logo = document.createElement("img");
    logo.src = "logo.jpg";
    logo.style.width="100px"
    logo.style.height="50px"
    logo.style.display="block"
    logo.style.borderRadius="0"
    let img = document.createElement("img");
    img.src = i.image;
    img.alt = "No Photo";
    img.onerror = function() {
        img.src = "default-image-url.jpg";
    };

    let name = document.createElement("span");
    name.className = "name";
    name.innerText = i.name;

    let number = document.createElement("span");
    number.innerText = `Contact: ${i.phone}`;

    let batch = document.createElement("span");
    batch.innerText = `Batch: ${i.batch}`;

    let education = document.createElement("span");
    education.innerText = `Education: ${i.education}`;
    card.appendChild(logo)
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(number);
    card.appendChild(batch);
    card.appendChild(education);

    document.getElementById('card-container').appendChild(card);
}
