db.movieDetails.updateMany(
    {rated: null},
    {$unset: {
        rated: ''
        }
    }
)

db.movieDetails.find
