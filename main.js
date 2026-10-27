const { app, BrowserWindow, Menu } = require("electron");
function create() {
  const w = new BrowserWindow({ width: 1000, height: 760, minWidth: 380, backgroundColor: "#0f1626", icon: require("path").join(__dirname, "build", "icon.png"), webPreferences: { contextIsolation: true } });
  Menu.setApplicationMenu(null);
  w.loadFile("www/index.html");
}
app.whenReady().then(create);
app.on("window-all-closed", () => app.quit());
