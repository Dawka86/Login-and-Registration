import { useLocation } from "react-router";

export default function HiddenPage() {

    const location = useLocation();
    const message = location.state?.message;
  return (
    <div className="hidden_background">
      <div className="hidden_text">
        <p>"Hello, {message}"</p>
        <p>Thank you for testing my site;)</p>
      </div>
    </div>
  );
}
