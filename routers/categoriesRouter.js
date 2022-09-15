const express = require("express");
const router = express.Router();

class CategoriesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.post("/", this.controller.addOne.bind(this.controller));
    router.get("/", this.controller.getAll.bind(this.controller));

    // we will insert routes into here later on
    // router.get("/", this.controller.getAll.bind(this.controller));
    // router.get("/:sightingId", this.controller.getOne.bind(this.controller));

    // router.put(
    //   "/:sightingId/comments",
    //   this.controller.editComment.bind(this.controller)
    // );
    // router.get(
    //   "/:sightingId/comments",
    //   this.controller.getAllComments.bind(this.controller)
    // );
    // router.post(
    //   "/:sightingId/comments",
    //   this.controller.addComment.bind(this.controller)
    // );

    return router;
  }
}

module.exports = CategoriesRouter;
