const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
    getprogects,
    getresources,
    gettasks,
    addresources,
    addprogects,
    addtasks
};

function getprogects() {
  return db("progects")
 
}
function getresources() {
    return db("resources")
   
  }
  function gettasks() {
    return db("tasks")
   
  } 
  async function addprogects(progects) {
    const [id] = await db('progects').insert(progects);
  
    return db('progects')
      .where({ id: id })
      .first()
      .select();
  }
  async function addresources(resources) {
    const [id] = await db('resources').insert(resources);
  
    return db('resources')
      .where({ id: id })
      .first()
      .select();
  }  
  async function addtasks(tasks) {
    const [id] = await db('tasks').insert(tasks);
  
    return db('tasks')
      .where({ id: id })
      .first()
      .select();
  }  
