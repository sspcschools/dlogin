const deviceName = navigator.userAgent;

function redirectToSpecificPage(deviceName) {
  if (deviceName.includes('MMS')) {
    window.location.href = 'mms.html';
  } else if (deviceName.includes('JES')) {
    window.location.href = 'jes.html';
  } else {
    window.location.href = 'default_page.html';
  }
}

redirectToSpecificPage(deviceName);
