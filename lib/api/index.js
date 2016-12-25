import apicache from "apicache";
import { Router } from "express";

const cache = apicache.middleware;
const router = Router();

router.use(cache("5 minutes"));
// filter 拦截器
router.use((req, res, next) => {
    // filter request
    // console.log(req);
    // error return;
    next();
});

// 下一层请求处理
router.use("/demo", require("./demo.js").default);

// router.use("/bl", require("../../bl/api").default);

export default router;
