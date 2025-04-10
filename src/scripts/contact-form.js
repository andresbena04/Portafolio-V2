import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");
    const button = document.querySelector("#submit-btn");
    const textButton = document.querySelector("#submit-text-btn");
    const spinner = document.querySelector("#spinner");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        button.disabled = true;
        textButton.classList.add("hidden");
        spinner.classList.remove("hidden");

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                Toastify({
                    text: "¡Mensaje enviado con éxito!",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)"
                    }
                }).showToast();
                form.reset();
            } else {
                Toastify({
                    text: "Error al enviar el mensaje.",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "#f56565"
                    }
                }).showToast();
            }
        } catch (err) {
            Toastify({
                text: "Algo salió mal.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "#e53e3e"
                }
            }).showToast();
        } finally {
            button.disabled = false;
            textButton.classList.remove("hidden");
            spinner.classList.add("hidden");
        }
    });
});
