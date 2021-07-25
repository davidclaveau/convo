import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const url = "/api/v1/conversations/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => setState({ recipes: response }))
      .catch(() => props.history.push("/"));
  }, [])

  const { conversations } = state;
  const allConversations = conversations.map((conversation, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={conversation.image}
          className="card-img-top"
          alt={`${conversation.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{conversation.name}</h5>
          <Link to={`/conversation/${conversation.id}`} className="btn custom-button">
            View Conversation
          </Link>
        </div>
      </div>
    </div>
  ));
  const noConversation = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No conversations yet. Why not <Link to="/new_conversation">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Conversations for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular Conversations, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/conversation" className="btn custom-button">
              Create New Conversation
            </Link>
          </div>
          <div className="row">
            {conversations.length > 0 ? allconversations : noConversation}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
}