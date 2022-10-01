import { create, findAll, saveField, generateExcel, createZIP } from "../controllers/attende.controller.js";
import { sendMail } from "../config/email.config.js";
import routers from "express";

const routes = app => {
    const router = routers.Router()
  
    router.post("/", create);
  
    router.get("/", findAll);

    router.post("/files", saveField);

    router.get("/excel", generateExcel);

    router.post('/send-mail', (req, res) => {
      sendMail(req.body);
      res.status(200).send({
        ok: true,
        status: "200",
        message: 'Mail Sent!'
      })
    })

    router.get('/zip', createZIP)

    app.use('/api/attende', router);
};

export default routes;