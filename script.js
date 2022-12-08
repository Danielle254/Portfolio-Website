// declare variables
const pythonCertificate = document.getElementById('python_cert');
const intermediatePythonCertificate = documentgetElementById('intermediate_python_cert');
const htmlCertificate = document.getElementById('html_cert');
const cssCertificate = document.getElementById('css_cert');
const intermediateCSSCertificate = document.getElementById('intermediate_css_cert');
const javascriptCertificate = document.getElementById('javascript_cert');


// set all certificates to hidden as default
pythonCertificate.hidden = true;
intermediatePythonCertificate.hidden = true;
htmlCertificate.hidden = true;
cssCertificate.hidden = true;
intermediateCSSCertificate.hidden = true;
javascriptCertificate.hidden = true;

// create functions
const showCertificate = (element) => {
    element.hidden = false;
}

const hideCertificate = (element) => {
    element.hidden = true;
}

// create event listeners
pythonCertificate.addEventListener("click", showCertificate);
intermediatePythonCertificate.addEventListener("click", showCertificate);
htmlCertificate.addEventListener("click", showCertificate);
cssCertificate.addEventListener("click", showCertificate);
intermediateCSSCertificate.addEventListener("click", showCertificate);
javascriptCertificate.addEventListener("click", showCertificate);
