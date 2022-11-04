import { useEffect } from "react"

function useDocTitle(title) {

  useEffect(() => {
    document.title = `Wrongmove | ${title}`
 }, [title]);

  return (
    <></>
  )
}

export default useDocTitle