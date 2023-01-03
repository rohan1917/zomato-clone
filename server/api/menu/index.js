import express from "express";
import { MenuModel } from "../../database/menu";

const Router = express.Router();

/**
 * Route :   /list/:_id
 * Desc  :   Get all list of menu based on restaurant id
 * params:   _id
 * Access:   Public
 * Method:   GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);

    if (!menus) {
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant" });
    }
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
