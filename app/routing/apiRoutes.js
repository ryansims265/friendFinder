app.get("/api", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });