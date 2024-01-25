const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form information
    const formData = new FormData(form);
    let formInfo = "";

    for (const [key, value] of formData.entries()) {
        formInfo+=`${key}: ${value}\n`;
    }

    // Display alert with form information
    alert(formInfo);
});