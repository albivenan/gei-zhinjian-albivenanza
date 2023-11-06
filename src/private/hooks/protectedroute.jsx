import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRouteAlbi({ children }) {
  const location = useLocation();
  const item = location.state ? location.state.validation : true;
  const [success, setSuccess] = useState(item);
  if (!success) {
    return <Navigate to="/loginalbi" replace={true} />;
  } else {
    return children;
  }
}