// let data = JSON.parse(localStorage.getItem("data")) || [];
let data =[];
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let batch = document.getElementById("batch");
let education = document.getElementById("education");
let imageInput = document.getElementById("imageInput");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const batchError = document.getElementById("batchError");
const educationError = document.getElementById("educationError");

imageInput.addEventListener("change", function() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

function validateForm() {
    let isValid = true;

    if (!name.value) {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!phone.value || phone.value.length !== 10) {
        phoneError.textContent = "Phone number must be 10 digits.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    if (!batch.value) {
        batchError.textContent = "Batch is required.";
        isValid = false;
    } else {
        batchError.textContent = "";
    }

    if (!education.value) {
        educationError.textContent = "Education is required.";
        isValid = false;
    } else {
        educationError.textContent = "";
    }

    if (!imageInput.files[0]) {
        alert("Please upload your photo.");
        isValid = false;
    }

    return isValid;
}

function save() {
    if (!validateForm()) {
        return;
    }

    const file = imageInput.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        const imageBase64 = reader.result;

        let entry = {
            name: name.value,
            phone: phone.value,
            batch: batch.value,
            education: education.value,
            image: imageBase64
        };

        data.push(entry);
        localStorage.setItem("data", JSON.stringify(data));

        console.log(data);
        window.open("id.html");
    };

    reader.readAsDataURL(file);
}
