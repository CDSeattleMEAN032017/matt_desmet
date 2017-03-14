module.exports = function (app){
	app.get('/', function(req, res) {
	 res.render("index");
	})

app.post('/result', function(req, res){
  form_info = {
    name: req.body.name,
    dojo_location: req.body.dojo_location,
    favorite_language: req.body.favorite_language,
    comment: req.body.comment
  };
    // res.send(form_info)
    res.render('result', {user_data: form_info});
  })
};
