contacto = [
  {
    nombre: "Ronald",
    apellido: "Nav",
    numero: "313265498",
    gustos: ["pizza", "programación", "enseñar"],
  },
  {
    nombre: "Harry",
    apellido: "Potter",
    numero: "0994372684",
    gustos: ["Hogwarts", "magia"],
  },

  {
    nombre: "Sherlock",
    apellido: "Holmes",
    numero: "0487345643",
    gustos: ["clases interesantes", "violin"],
  },
  {
    nombre: "Goku",
    apellido: "",
    numero: "123412523",
    gustos: ["Artes Marciales", "Milk", "Luchar"],
  },
  {
    nombre: "Barry",
    apellido: "Allen",
    numero: "2356346346",
    gustos: ["Correr superrapido", "	Iris West", "Misterios"],
  },
  {
    nombre: "Tony",
    apellido: "Star",
    numero: "24634745",
    gustos: ["Mujeres", "Tecnología", "Dinero"],
  },
  {
    nombre: "Peter",
    apellido: "Parker",
    numero: "24634745",
    gustos: ["Ayudar a tia May", "Ser un buen vecino"],
  },
];

const nombre = document.getElementById("nombre");
const propiedades = document.getElementById("propiedades");
const salida = document.getElementById("salida");
const buscar = document.getElementById("buscar");

nombre.addEventListener("focus", () => {
    nombre.value = "";
    propiedades.value = "todos";
    salida.textContent = "";
});

buscar.addEventListener("click", () => {
    let nombreContacto = nombre.value;
    let propiedad = propiedades.value;
    if (nombreContacto === "") {
        salida.textContent = "Ingrese un nombre";
    } else {
        const ul = document.createElement("ul");
        let encontrado = false;
        for (let i = 0; i < contacto.length; i++) {
            if (contacto[i].nombre === nombreContacto) {
                encontrado = true;
                if (propiedad === "todos") {
                    for (let j in contacto[i]) {
                        const li = document.createElement("li");
                        li.textContent = j.toLocaleUpperCase() + ": " + contacto[i][j];
                        ul.appendChild(li);
                    }
                } else {
                    const li = document.createElement("li");
                    li.textContent = propiedad.toLocaleUpperCase() + ": " + contacto[i][propiedad];
                    ul.appendChild(li);
                }
            }
        }
        if (encontrado) {
            salida.textContent = '';
            salida.appendChild(ul);
        } else {
            salida.textContent = "No se encontró el contacto";
        }
    }
});


