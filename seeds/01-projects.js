

exports.seed = function (knex) {

  return knex('progects').truncate()
    .then(function () {
    
      return knex('progects').insert([
        {progectName: "move house",completed:false},
        {progectName: "create store",completed:false},
        {progectName: "build week",completed:false},
      ]);
    });
};