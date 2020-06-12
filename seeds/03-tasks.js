
exports.seed = function (knex) {

  return knex('tasks').truncate()
    .then(function () {
    
      return knex('tasks').insert([
        {taskName: "move items out", progect_Id: "1",completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {taskName: "clean old aparment", progect_Id: "1",completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {taskName: "move items into new aparment", progect_Id: "1", completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},

        {taskName: "set up prodecion line", progect_Id: "2", completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {taskName: "ship to store", progect_Id: "2", completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {taskName: "sell at store", progect_Id: "2", completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},


        {taskName: "talk about roles and assign work",completed:false, progect_Id: "3", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {taskName: "add all code together and fix bugs",completed:false, progect_Id: "3", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {taskName: "upload online to see progect",completed:false, progect_Id: "3", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},

      ]);
    });
};