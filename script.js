//your JS code here. If required.
// ---- Helper: Set Cookie ----
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000`; // 1 year
}

// ---- Helper: Get Cookie ----
function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return val;
  }
  return null;
}

// ---- Apply saved preferences on page load ----
function applySavedPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// ---- Save preferences on form submit ----
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply instantly
  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});

// ---- Initial load ----
applySavedPreferences();
