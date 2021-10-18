db.air_alliances.aggregate([
  {
    $unwind: "$airlines",
  },
  {
    $lookup: {
      from: "air_routes",
      let: { name: "$airlines" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$airline.name", "$$name"] },
                { $in: ["$airplane", ["747", "380"]] },

              ],
            },
          },
        },
      ],
      as: "routes",
    },
  },
  {
    $group: {
      _id: "$name",
      totalRotas: { $sum: { $size: "$routes" } },
    },
  },
  {
    $sort: { totalRotas: -1 },
  },
  {
    $limit: 1,
  },
]);
