import useFetch from "../hooks/useFetch";

const MultipleCustomHooks = () => {

    const {} = useFetch('https://www.breakingbadapi.com/api/characters/1');

  return (
    <>
     <h1>BreakingBad Quotes</h1>
     <hr />
    </>
  )
}

export default MultipleCustomHooks
