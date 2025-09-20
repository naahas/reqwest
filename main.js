const { app , BrowserWindow , ipcMain , dialog } = require('electron');
const path = require('path');
const fs = require('fs-extra');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // Permet les requêtes CORS
    },
    icon: path.join(__dirname, 'assets/icon.png'),
    titleBarStyle: 'default',
    backgroundColor: '#1e1e1e'
  });

  mainWindow.loadFile('index.html');
  
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC pour sauvegarder/charger les collections
ipcMain.handle('save-collection', async (event, data) => {
  try {
    const { filePath } = await dialog.showSaveDialog({
      filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    
    if (filePath) {
      await fs.writeJson(filePath, data, { spaces: 2 });
      return { success: true, path: filePath };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('load-collection', async () => {
  try {
    const { filePaths } = await dialog.showOpenDialog({
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['openFile']
    });
    
    if (filePaths && filePaths[0]) {
      const data = await fs.readJson(filePaths[0]);
      return { success: true, data };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
});


const userDataPath = app.getPath('userData');
const collectionsPath = path.join(userDataPath, 'collections.json');
const historyPath = path.join(userDataPath, 'history.json');

ipcMain.handle('get-local-data', async (event, type) => {
  try {
    const filePath = type === 'collections' ? collectionsPath : historyPath;
    if (await fs.pathExists(filePath)) {
      return await fs.readJson(filePath);
    }
    return type === 'collections' ? [] : [];
  } catch (error) {
    console.error('Error reading local data:', error);
    return [];
  }
});

ipcMain.handle('save-local-data', async (event, type, data) => {
  try {
    const filePath = type === 'collections' ? collectionsPath : historyPath;
    await fs.writeJson(filePath, data, { spaces: 2 });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});