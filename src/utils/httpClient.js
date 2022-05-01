const API = 'https://api.themoviedb.org/3'

export function get(path){
        return fetch(`${API}${path}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTdmMTA1YmZkNDIwZDEzZDFhYTk2ZmY4MTEwM2FlMSIsInN1YiI6IjYyNmVjMjk1NWYyYjhkMDA0Zjk0NGNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fFdqHCKJBOFrR98DPr5kcz9pn6BzYQPiLZNc2BM95hE",
            "Content-Type": "application/json;charset=utf-8",
          },
        })
          .then((result) => result.json())
}