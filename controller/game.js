const game = require('../models/game');
const ticket = require('../models/ticket');
const ran = require('../models/random');

exports.gamePost = async (req,res,next) => {
    const gName = req.body.gName;
     const data = await game.create({
         name: gName,
         totalDraw: 1,
         totalTicket: 1,
         totalUser: 1
     });
     if(!data) {
         game.findOne({where: {name: gName}})
         .then(game => {
             game.totalDraw += 1,
             game.totalTicket += 1
         })
     }
    console.log(req.body.gName);
    res.json({id: data.id});
}

exports.ticket = (req,res,next) => {
    console.log(req.params.gameId);
    ticket.create({
        gameId: req.params.gameId,
        userName: req.params.user
    })
    .then(data => res.json({ticketId: data.dataValues.ticketId}))
}

exports.ticketDetails = (req,res,next) => {
    ticket.findByPk(req.params.ticketId)
    .then(data => res.json({details:data}))
    .catch(err => console.log(err));
}

var i=1,j=1,m=1000;
exports.random = async (req,res,next) => {
   const gameId = req.params.gameId;

    function doRandom() {
        i += 1;
        j += 2;
        return i*j;
    }

    const found = await ran.findByPk(gameId)
    if(found) {
        const s = found.one +"," + doRandom().toString();
        found.one = s
        console.log(found.one);
        found.save();
    }
    else {
        ran.create({
            gameId: gameId,
            one: doRandom().toString()
        }).then((data) => res.json({data: data.one}))
    
    }
   
   
}


exports.getRandom = (req,res,next) => {
    const gameId = req.params.gameId;
    ran.findByPk(gameId)
    .then(data => res.json({data: data.one}))
}