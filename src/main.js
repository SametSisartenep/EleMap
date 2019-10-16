const { app, BrowserWindow } = require('electron');

let mainwindow;

function
createwindow()
{
	mainwindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	mainwindow.loadURL(`file://${__dirname}/index.html`);
	mainwindow.on("closed", ()=>{
		mainwindow = null;
	});
}

app.on("ready", createwindow);

app.on("window-all-closed", ()=>{
	if(process.platform !== "darwin"){
		app.quit();
	}
});

app.on("activate", ()=>{
	if(mainwindow === null){
		createwindow();
	}
});
