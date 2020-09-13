import Data from "./dataTable";

export const renderTableData=()=> {
    return Data.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
  export const renderTableHeader=()=> {
    let header = Object.keys(Data.students)
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
  }



