import { Link } from "react-router-dom";
import { EmptyState } from "../components/Atoms";

export default function NotFound() {
  return (
    <div className="container-fr py-5">
      <EmptyState
        icon="bi-signpost-split"
        title="Page not found"
        message="The page you're looking for doesn't exist."
        action={
          <Link to="/" className="btn-fr-primary">
            Back to Home
          </Link>
        }
      />
    </div>
  );
}
