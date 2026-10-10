const express = require("express");
const router = express.Router();

const {
  handleGetAllUsers,
  handelGetUserById,
  handelDeleteUserById,
  handelNewUserById,
  handelUpdateUserById,
} = require("../controllers/user");

/*router.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
        <ul>
            ${allDbUsers
              .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
              .join("")}
        </ul>`;
  res.send(html);
});*/

router.get("/", handleGetAllUsers);

router
  .route("/:id")
  .get(handelGetUserById)
  .patch(handelUpdateUserById)
  .delete(handelDeleteUserById);

router.post("/",handelNewUserById);

module.exports = router;
