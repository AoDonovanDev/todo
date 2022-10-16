import './input.css';
console.log("start")
const bod = document.createElement("p");
bod.innerHTML = "this is built using tailwind and javascript";
bod.classList.add("text-xl", "underline");
document.body.append(bod);
