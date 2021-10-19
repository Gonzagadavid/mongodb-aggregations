db.trips.aggregate([
  {
    $project: {
      diaDaSemana: { $dayOfWeek: "$startTime" },
      startStationName: 1,
    },
  },
  {
    $lookup: {
      from: "trips",
      pipeline: [
        {
          $addFields: {
            diaDaSemana: { $dayOfWeek: "$startTime" },
          },
        },
        {
          $group: {
            _id: "$diaDaSemana",
            total: { $sum: 1 },
          },
        },
        {
          $sort: {
            total: -1,
          },
        },
        {
          $limit: 1,
        },
        {
          $project: {
            _id: 0,
            diaDaSemana: "$_id",
            total: "$total",
          },
        },
      ],
      as: "weekDay",
    },
  },
  {
    $unwind: "$weekDay",
  },
  {
    $match: {
      $expr: {
        $eq: [
          "$weekDay.diaDaSemana",
          "$diaDaSemana",
        ],
      },
    },
  },
  {
    $group: {
      _id: {
        diaDaSemana: "$diaDaSemana",
        startStationName: "$startStationName",
      },
      total: { $sum: 1 },
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $limit: 1,
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id.startStationName",
      total: "$total",
    },
  },
]);
