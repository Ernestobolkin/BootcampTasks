const movies = [
  {
    id: 1,
    url: "http://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    language: "English",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    status: "Ended",
    runtime: 50,
    premiered: "2013-06-24",
    officialSite: "http://www.cbs.com/shows/under-the-dome/",
    schedule: { time: "22:00", days: ["Thursday"] },
    rating: { average: 6.5 },
    weight: 91,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
    },
    webChannel: null,
    externals: { tvrage: 25988, thetvdb: 264492, imdb: "tt1553656" },
    image: {
      medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg",
    },
  },
  {
    id: 2,
    url: "http://www.tvmaze.com/shows/2/person-of-interest",
    name: "Person of Interest",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: 60,
    premiered: "2011-09-22",
    officialSite: "http://www.cbs.com/shows/person_of_interest/",
    schedule: { time: "22:00", days: ["Tuesday"] },
    rating: { average: 9 },
    weight: 96,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
    },
    webChannel: null,
    externals: { tvrage: 28376, thetvdb: 248742, imdb: "tt1839578" },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
    },
  },
  {
    id: 3,
    url: "http://www.tvmaze.com/shows/3/bitten",
    name: "Bitten",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Horror", "Romance"],
    status: "Ended",
    runtime: 60,
    premiered: "2014-01-11",
    officialSite: "http://bitten.space.ca/",
    schedule: { time: "22:00", days: ["Friday"] },
    rating: { average: 7.6 },
    weight: 75,
    network: {
      id: 7,
      name: "Space",
      country: { name: "Canada", code: "CA", timezone: "America/Halifax" },
    },
    webChannel: null,
    externals: { tvrage: 34965, thetvdb: 269550, imdb: "tt2365946" },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
    },
  },
  {
    id: 4,
    url: "http://www.tvmaze.com/shows/4/arrow",
    name: "Arrow",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2012-10-10",
    officialSite: "http://www.cwtv.com/shows/arrow",
    schedule: { time: "20:00", days: ["Monday"] },
    rating: { average: 7.6 },
    weight: 99,
    network: {
      id: 5,
      name: "The CW",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
    },
    webChannel: null,
    externals: { tvrage: 30715, thetvdb: 257655, imdb: "tt2193021" },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg",
    },
  },
];

// let nameOfMovies = movies.map((element) => {
//   return {name: element.name , ganre: element.genres}
// });

// console.log(nameOfMovies)



let nameOfMovies = movies.map((element) =>
  console.log(
    `The name of the movie is: ${element.name} and hte genre is: ${element.genres}`
  )
);