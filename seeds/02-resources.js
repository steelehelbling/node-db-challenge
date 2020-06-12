
exports.seed = function (knex) {

  return knex('resources').truncate()
    .then(function () {
     
      return knex('resources').insert([
        {resourceName: "uhaul van", progect_Id: "1" },
        {resourceName: "storege rooms", progect_Id: "1" },
        {resourceName: "new locateion", progect_Id: "1" },

        {resourceName: "wood", progect_Id: "2" },
        {resourceName: "wood carver", progect_Id: "2" },
        {resourceName: "location to sell prodect", progect_Id: "2" },

        {resourceName: "computer", progect_Id: "3" },
        {resourceName: "camera", progect_Id: "3" },
        {resourceName: "mic", progect_Id: "3" },

      ]);
    });
};
