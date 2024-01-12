particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle", // Cambiado a tipo de forma círculo
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
        bubbles: {
            number: { value: 20, size: { value: 10 }, move: { speed: 2 } },
            color: { value: "#4a90e2" }, // Azul
            shape: { type: "circle" },
            opacity: { value: 0.7, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 6, random: true, anim: { enable: false, speed: 20, size_min: 0.1, sync: false } },
            line_linked: { enable: false }
        },
        another_particles_set: {
            // Otro conjunto de partículas
            number: { value: 30, size: { value: 8 }, move: { speed: 3 } },
            color: { value: "#ffd700" }, // Oro
            shape: { type: "circle" },
            opacity: { value: 0.7, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 4, random: true, anim: { enable: false, speed: 20, size_min: 0.1, sync: false } },
            line_linked: { enable: false }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },  // Cambiado a "repulse"
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: { repulse: { distance: 100, duration: 0.2 } },  // Agregado modo repulse
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
    },
    retina_detect: true
});
