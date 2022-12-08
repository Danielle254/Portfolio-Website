const pythonCertificate = document.getElementById('python_cert');
const intermediatePythonCertificate = document.getElementById('intermediate_python_cert');
const htmlCertificate = document.getElementById('html_cert');
const cssCertificate = document.getElementById('css_cert');
const intermediateCSSCertificate = document.getElementById('intermediate_css_cert');
const javascriptCertificate = document.getElementById('javascript_cert');

const pythonLink = document.getElementById('python');
const intermediatePythonLink = document.getElementById('intermediate_python');
const htmlLink = document.getElementById('html');
const cssLink = document.getElementById('css');
const intermediateCSSLink = document.getElementById('intermediate_css');
const javascriptLink = document.getElementById('javascript');


window.onload = (event) => {
    pythonCertificate.hidden = true;
    intermediatePythonCertificate.hidden = true;
    htmlCertificate.hidden = true;
    cssCertificate.hidden = true;
    intermediateCSSCertificate.hidden = true;
    javascriptCertificate.hidden = true;
}


pythonLink.addEventListener("click", () => {
    pythonCertificate.hidden = false;
});
intermediatePythonLink.addEventListener("click", () => {
    intermediatePythonCertificate.hidden = false;
});
htmlLink.addEventListener("click", () => {
    htmlCertificate.hidden = false;
});
cssLink.addEventListener("click", () => {
    cssCertificate.hidden = false;
});
intermediateCSSLink.addEventListener("click", () => {
    intermediateCSSCertificate.hidden = false;
});
javascriptLink.addEventListener("click", () => {
    javascriptCertificate.hidden = false;
});

