/*
This line of code imports or brings in the certificate.json file. 
*/
import certificates from "./Resources/certificates.json" assert { type: "json" };
console.log(certificates);
const certContainer = document.getElementsByClassName(
  "certificateContainer"
)[0];
/*
appendCertificates is a function type called Immediately Invoked Function Expression (IIFE).
This means that it's invoked as soon as it's defined. This function adds paragraph tags, but it also adds 
image tags with the "cert_img" class. This allows us to pick up the image tags later on. 
*/
(function appendCertificates() {
  let stringOutput = "";
  certificates.forEach((certificate) => {
    stringOutput += `<p class="certificate" id=${certificate.id}>${certificate.inner_html}</p>
        <img src=${certificate.src} class="cert_img" id=${certificate.img_id} alt=${certificate.alt}>`;
  });
  certContainer.innerHTML = stringOutput;
})();
// Grab all the certificate images that have been appended a
const certs = document.querySelectorAll(".cert_img");
console.log(certs);
// Set the HTML hidden attribute to true
window.onload = (event) => {
  certs.forEach((cert) => (cert.hidden = true));
};
/* 
Through a feature called "event bubbling" we can capture any clicks made on the certContainer.
The function also makes sure that any target being passed in has the "certificate" class. That way we can assure what element is being clicked. 
It then switches the state of the hidden attribute of the HTML element being sent to the function.

*/
certContainer.addEventListener("click", (e) => {
  console.log(e);
  const eventTarget = e.target;
  const className = eventTarget.getAttribute("class");
  if (className == "certificate") {
    const hiddenState = eventTarget.nextElementSibling.hidden;
    eventTarget.nextElementSibling.hidden = !hiddenState;
  }
});
