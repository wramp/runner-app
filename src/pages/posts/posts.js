import React from "react";
import auth from "../../auth";

import Post from "../../components/post";
import style from "./style.module.scss";

import { addStringToRandomPosition, toTitleCase } from "../../utils";
// import style from "./style.module.scss";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(json => {
        let data = this.dataProcess(json);
        this.setState({ posts: data });
      });
  }

  //modify a body of posts
  dataProcess(dataArray) {
    return dataArray.map(post => {
      const { body, title } = post;
      const newBody = addStringToRandomPosition(
        body,
        "The Toronto Raptors are going to win the finals"
      );
      return { ...post, title: toTitleCase(title), body: newBody };
    });
  }

  render() {
    const { posts } = this.state;
    const { loggedUser } = this.props;

    return (
      <React.Fragment>
        <div className={style.topnav}>
          <span className={style.left}>
            <span className={style.text}>{loggedUser}</span>
          </span>
          <span className={style.right}>
            <a
              href="/"
              className={style.link}
              onClick={() => {
                auth.logout(() => {
                  this.props.history.push("/");
                });
              }}
            >
              Logout
            </a>
          </span>
        </div>
        <div className={style.posts}>
          {posts &&
            posts.map(({ title, body }, i) => {
              return <Post title={title} body={body} key={i} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default PostsPage;
