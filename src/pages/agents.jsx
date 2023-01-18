import React from "react";
import useFetchPublicData from "../hooks/useFetchPublicData";
import InlineLink from "../components/InlineLink";
import placeholder from "../assets/placeholder.png";

function AllAgents() {
  const { isLoading, serverError, apiData } = useFetchPublicData("/api/public/agents");

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Error</h1>;

  const rows = apiData?.data.map((item, i) => {
    return <AgentCard key={i} data={item} />;
  });

  return (
    <div>
      <div className="text-center">
        <h1 className="agents-title effraBold p-1">Find your Estate Agent</h1>
        <h4 className="agents-subtitle effraLt">{apiData?.data.length} agents found</h4>
      </div>
      <div className="p-3">{rows}</div>
    </div>
  );
}

export default AllAgents;

function AgentCard(props) {
  const { data } = props;

  return (
    <div className="agent-card">
      <div className="p-1">
        <h3 className="agent-heading">{data.name}</h3>
        <p>
          <span className="effraBold">Telephone number:</span>{" "}
          {data.telephoneNumber ? data.telephoneNumber : "N/A"}
        </p>
        <p className="agent-description">{data.description}</p>
        <div className="agent-card-break" />
        <div className="agent-links gap-1">
          {data.email ? (
            <a href={`mailto:${data.email}`} className="inline-link">
              Email this agent
            </a>
          ) : null}
          {data.website ? (
            <a href={`https://${data.website}`} className="inline-link" target="_blank" rel="noreferrer">
              Agent Website
            </a>
          ) : null}
        </div>
      </div>
      <div className="p-1">
        <div
          className="agent-card-logo w-100 bg-img"
          style={{
            backgroundImage: `url(${
              data.image ? process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + data.image : placeholder.src
            })`,
            minHeight: 100,
          }}
          alt={`${data.name} logo`}
        ></div>
      </div>
    </div>
  );
}
