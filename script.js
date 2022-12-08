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

var pythonTimesClicked = 0;
var intermediatePythonTimesClicked = 0;
var htmlTimesClicked = 0;
var cssTimesClicked = 0;
var intermediateCSSTimesClicked = 0;
var javascriptTimesClicked = 0;

window.onload = (event) => {
    pythonCertificate.hidden = true;
    intermediatePythonCertificate.hidden = true;
    htmlCertificate.hidden = true;
    cssCertificate.hidden = true;
    intermediateCSSCertificate.hidden = true;
    javascriptCertificate.hidden = true;
}


pythonLink.addEventListener("click", () => {
    pythonTimesClicked++;
    if (pythonTimesClicked % 2 === 1) {
        pythonCertificate.hidden = false;
    } else {
        pythonCertificate.hidden = true;
    }  
});
intermediatePythonLink.addEventListener("click", () => {
    intermediatePythonTimesClicked++;
    if (intermediatePythonTimesClicked % 2 === 1) {
        intermediatePythonCertificate.hidden = false;
    } else {
        intermediatePythonCertificate.hidden = true;
    }  
});
htmlLink.addEventListener("click", () => {
    htmlTimesClicked++;
    if (htmlTimesClicked % 2 === 1) {
        htmlCertificate.hidden = false;
    } else {
        htmlCertificate.hidden = true;
    }  
});
cssLink.addEventListener("click", () => {
    cssTimesClicked++;
    if (cssTimesClicked % 2 === 1) {
        cssCertificate.hidden = false;
    } else {
        cssCertificate.hidden = true;
    }  
});
intermediateCSSLink.addEventListener("click", () => {
    intermediateCSSTimesClicked++;
    if (intermediateCSSTimesClicked % 2 === 1) {
        intermediateCSSCertificate.hidden = false;
    } else {
        intermediateCSSCertificate.hidden = true;
    }  
});
javascriptLink.addEventListener("click", () => {
    javascriptTimesClicked++;
    if (javascriptTimesClicked % 2 === 1) {
        javascriptCertificate.hidden = false;
    } else {
        javascriptCertificate.hidden = true;
    }    
});



