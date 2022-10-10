import Link from "next/link"

function InlineLink(props) {
  return (
    <div className="inline-link">
        <p><Link href={props.to}>{props.text}</Link></p>
    </div>
  )
}

export default InlineLink