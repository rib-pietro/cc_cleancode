const startWebServer = () => {
    import('./config/server').then((serverModule) => {
        return serverModule.default.initialize();
    }).catch((err) => {
        console.error('[CRITICAL] failed to start web server. Error: ' + err);
    });
}

const startProcess = () => {
    startWebServer();
}

startProcess();