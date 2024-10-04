const router = require("express").Router()
const publicController = require("../controller/public.controller")
const { rateLimit } = require("express-rate-limit")

router
    .get("/fetch-caro", publicController.getAllCarousel)
    .get("/fetch-project", publicController.fetchProjects)
    .get("/project-details/:id", publicController.getProjectDetail)

    .get("/fetch-enquery", publicController.fetchEnqueryMessage)
    .post("/add-enquery", rateLimit({ windowMs: 1 * 60 * 1000, limit: 1 }), publicController.AddEnqueryMessage)
    .put("/update-enquery/:id", publicController.updateEnqueryMessage)
    .delete("/delete-enquery/:id", publicController.deleteEnqueryMessage)

module.exports = router

