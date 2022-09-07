const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model,commentsModel) {
    super(model);
    //why no need commentsModel in super?
    this.commentsModel= commentsModel
  }
 // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    //req.params.sightingId
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

//so the new entry put camelCase or snake_case ?
//the different outcome if we put either or?
  async addOne(req, res) {
    const { date, location, notes } = req.body;
    try {
      const newEntry = await this.model.create({
       //dont even need the createdat and updatedat bc migration&PSQL makes it for us automatically
        date: date,
        location: location,
        notes: notes,
      });
      return res.json(newEntry);
      //return to front end
    } catch (err) {
      console.log(err,'error')
      return res.status(400).json({ error: true, msg: err });
    }
  }

   async getAllComments(req, res) {
console.log('all comments')
     const { sightingId } = req.params;
try {
  console.log('sightingId',sightingId);
      const output = await this.commentsModel.findAll({
  where: {
    sightingId: sightingId
  }
});
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

   async addComment(req, res) {
    console.log('add comments')
    const {content} = req.body;
     const { sightingId } = req.params;
    try {
      const newEntry = await this.commentsModel.create({
       content:content,
       sightingId: sightingId
      });
      return res.json(newEntry);
      //return to front end
    } catch (err) {
      console.log(err,'error')
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;
