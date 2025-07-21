async function getUser(req, res, next) {
  try {
    res.json({ msg: "user x" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while trying to get requested information.");
  }
}

module.exports = getUser;
