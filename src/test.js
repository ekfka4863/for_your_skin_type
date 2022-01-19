import axios from "axios";

axios.get('https://localhost:9090/url')
  .then((Response) => {console.log(Response.data)})
  .catch((Error) => {console.log(Error)})

function TestDiv () {
  return (
    <div>
      <button type="button">확인 버튼</button>
    </div>
  )
}

export default TestDiv;