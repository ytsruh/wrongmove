import { useState } from "react";
import { useRouter } from "next/router";

export default function AgentAd (props) {

    const [apiData, setApiData] = useState(props.apiData)

    if (apiData) {
        return (
            <div className="agent-ad w-100 flex flex-col br-05">
            <div className="two-column-grid">
                <div className="agent-ad-data flex flex-col gap-05 effraReg">
                    <p>MARKETED BY</p>
                    <h3 className="effraBold">{apiData?.data.agent.name}</h3>
                    {apiData?.data.agent.website ? <a href={`https://${apiData?.data.agent.website}`} className="inline-link" target="_blank" rel="noreferrer">{apiData?.data.agent.website}</a> : <></>}
                </div>
                <div className="agent-ad-img bg-img w-100" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData?.data.agent.image})`, minHeight: 50}}></div>
            </div>
            {apiData?.data.agent.telephoneNumber ? 
                <div className="agent-ad-contact-card br-05">
                    <div className="agent-ad-tel center">
                        <button className="btn btn-primary"><a href={`tel:${apiData.data.agent.telephoneNumber}`}>Call Agent</a></button>
                    </div>
                </div>
                :
                <></>
            }
        </div>
        )
    }
}