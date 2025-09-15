import { RequestInfo } from "rwsdk/worker";
import { getAllPolls } from "./polls/functions";
import { PollForm } from "./polls/PollForm";

export async function Home() {
  const polls = await getAllPolls();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Voting Polls</h1>
      </div>

      <p className="dashboard-description">
        Create new voting polls and share them with others.
      </p>

      <PollForm />

      {polls.length > 0 ? (
        <div>
          <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>All Polls</h2>
          <div className="poll-list">
            {polls.map(poll => (
              <div key={poll.id} className="poll-list-item">
                <h3 className="poll-list-title">
                  {poll.title}
                </h3>
                <div className="poll-choices-preview">
                  {poll.choices.map(choice => (
                    <span key={choice.id} className="poll-choice-tag" style={{
                      background: choice.color
                    }}>
                      {choice.text}: {choice.votes} votes
                    </span>
                  ))}
                </div>
                <a
                  href={`/poll/${poll.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poll-view-link"
                >
                  View Poll →
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="centered-content">
          <p>No polls created yet. Use the form above to create the first poll!</p>
        </div>
      )}
    </div>
  );
}