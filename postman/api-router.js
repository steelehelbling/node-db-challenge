const express = require("express");

const Progect = require("./api-model");

const router = express.Router();


//basic get 
router.get('/progect', async (req, res) => {

  try {
      const found = await Progect.getprogects()
      if (found) {
          res.status(200).json(found)
      } else {
          res.status(404).json('get does not wok')
      }
  }
  catch{
      res.status(500).json('Database Error')
  }
})
router.get('/resources', async (req, res) => {

    try {
        const found = await Progect.getresources()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('get does not wok')
        }
    }
    catch{
        res.status(500).json('Database Error')
    }
  })
  router.get('/tasks', async (req, res) => {

    try {
        const found = await Progect.gettasks()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('get does not wok')
        }
    }
    catch{
        res.status(500).json('Database Error')
    }
  })  
//post requests
  router.post('/progect', (req, res) => {
    const ProgectData = req.body;
  
    Progect.addprogects(ProgectData)
    .then(Progect => {
      res.status(201).json(Progect);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new progect' });
    });
  });  

  router.post('/resources', (req, res) => {
    const resourcesData = req.body;
  
    Progect.addresources(resourcesData)
    .then(Resources => {
      res.status(201).json(Resources);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });   
  


  router.post('/tasks', (req, res) => {
    const tasksData = req.body;
  
    Progect.addtasks(tasksData)
    .then(Tasks => {
      res.status(201).json(Tasks);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Tasks' });
    });
  });   

module.exports = router;