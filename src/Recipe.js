import axios from "axios"

export const Recipe = (props) => {
    axios.get('http://localhost:3000/recipes')
    .then((response)=> console.log(response))
    .catch((error)=> console.error(error))
     
    return (
        <div style={{ 
          marginTop: '10px', 
          marginLeft: '10px', 
          marginRight: '30px' }}>
            <h1 style={{ color: 'red' }}>RECIPE LIST</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</table>
       </div>     
    )
}