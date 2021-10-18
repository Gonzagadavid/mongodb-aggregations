db.movies.aggregate([
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": { $gte: 3 },
      cast: {
        $in: [
          "Sandra Bullock",
          "Tom Hanks",
          "Julia Roberts",
          "Kevin Spacey",
          "George Clooney",
        ],
      },
    },
  },
  {
    $addFields: {
      num_favs: {
        $size: {
          $filter: {
            input: "$cast",
            as: "actor",
            cond: { $in: [
              "$$actor",
              [
                "Sandra Bullock",
                "Tom Hanks",
                "Julia Roberts",
                "Kevin Spacey",
                "George Clooney",
              ],
            ] },
          },
        },
      },
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $skip: 24,
  },
  {
    $limit: 1,
  },
  {
    $project: {
      _id: 0,
      title: 1,
    },
  },
]);
