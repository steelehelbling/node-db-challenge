

exports.seed = function (knex) {

  return knex('progects').truncate()
    .then(function () {
    
      return knex('progects').insert([
        {progectName: "move house",completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {progectName: "create store",completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
        {progectName: "build week",completed:false, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "},
      ]);
    });
};