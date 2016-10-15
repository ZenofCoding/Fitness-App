var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.bodyparser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));

var Schema = new mongoose.Schema({
	_id: String,
	name: String,
	age: Number
});

var user = mongoose.model('emp', Schema);

app.post('/new', function(req,res){
	new user({
		_id: req.body.company;
		website: req.body.website;
		incentive1: req.body.incentive1;
		incentive2: req.body.incentive2;
		incentive3: req.body.incentive3;

	}).save(function(err,doc){
		if(err)res.json(err);
		else res.send('Successfully inserted');
	});

})