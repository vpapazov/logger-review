let express = require('express');
let router = express.Router();
let logger = new Logger();


let states = [
  { id: 'CA', state:'California', population: '38.8 million'},
  { id: 'TX', state: 'Texas', population: '27 million'},
  { id: 'FL', state: 'Florida', population: '19.9 million'},
  { id: 'NY', state: 'New York', population: '19.8 million'},
  { id: 'IL', state: 'Illinois', population: '12.9 million'},
  { id: 'PA', state: 'Pennsylvania', population: '12.8 million'},
  { id: 'OH', state: 'Ohio', population: '11.6 million'},
  { id: 'GA', state: 'Georgia', population: '10.1 million'},
  { id: 'NC', state: 'North Carolina', population: '10 million'},
  { id: 'MI', state: 'Michigan', population: '9.9 million'},
]


router.get('/:id', (req, res) => {
  for(i=0; i<states.length; i++){
    if(states[i].id === req.params['id']){
      res.send({id:states[i].id, population:states[i].population})
    }
else {
  continue;
}
  }
})


router.use((req, res, next) => {
  logger.log('invoking states route.','info');
  next();
});

router.get('/:id', (req, res) => {
  let states = res.locals.id;
  logger.log(`getting states id. ${states.id}`,'debug');
  res.send(`The state id is ${states.id}.`);
});

router.get('/', (req, res) => {
  let states = res.locals.state;
  logger.log(`getting states name ${states.state}`,'debug');
  res.send(`The state name is ${states.state}.`);
});



module.exports = router;
