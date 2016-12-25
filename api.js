import app from "./lib/app";
import express from "express";
import http from "http";

const httpServer = http.createServer();


(function startApiServer(){
    initApp();
    initHttpServer();
})();

function initApp()
{
    app.attach(httpServer);
    // 给你用来测试API的模拟前端界面
    app.use(express.static("./server_public"));
    // api router api监听的api总路径
    app.use("/api/", require("./lib/api").default);
}

function initHttpServer()
{
    // 监听的端口
    const port = 8080;
    httpServer.listen(8080, () => {
        console.log(`Server is running at http://localhost: ${port}...`);
    });
}
