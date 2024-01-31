import useFirstRun from "../hooks/useFirstRun"
import router from "../utils/router"


let posts: { title: string }[] = []

const Shop = (): string => {
  useFirstRun(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(_posts => {
        posts = _posts
        router()
      })
  })

  return (`
    <div>
      <h1>
        Posts page
      </h1>
      <div class="boxes-wrapper">
        ${posts.map(post => (`<div class="post">${post.title}</div>`)).join("")}
      </div>
    </div>
  `)
}

export default Shop