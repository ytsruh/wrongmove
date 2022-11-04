import { useEffect } from "react"

function useDocTitle(title) {

  useEffect(() => {
    document.title = `Wrongmove | ${title}`
 }, []);

  return (
    <></>
  )
}

export default useDocTitle