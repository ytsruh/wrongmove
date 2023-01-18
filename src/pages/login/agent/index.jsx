import Form from "../../../components/Form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Alert from "../../../components/Alert";

function AgentLogin({ form }) {
  const router = useRouter();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error]);

  const onSubmitHandler = async (form, callback) => {
    callback();

    try {
      const response = await fetch("/api/auth/agent/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        setError({ msg: "Something went wrong. Please check your username & password." });
      }
      const data = await response.json();
      if (data.token) {
        sessionStorage.setItem("user", JSON.stringify(data));
        router.push("/agent/");
      }
    } catch (error) {
      setError({ msg: "Something went wrong with the server. Please try again." });
    }
  };

  return (
    <div style={{ width: "40vw" }}>
      <h1 className="p-1">Agent Login</h1>
      {error ? <Alert type="error" msg={error.msg} /> : null}
      <Form title="Login" formArr={formArr} submitBtn="Login" redirect={null} onSubmit={onSubmitHandler} />
    </div>
  );
}

const formArr = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "john@wrongmove.com",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "*********",
    required: true,
  },
];

export default AgentLogin;
