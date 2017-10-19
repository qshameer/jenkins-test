var app = require('express')()

app.get('/',function(req,res) {
  res.send("Hello Qburst")
})

app.listen(3000)
