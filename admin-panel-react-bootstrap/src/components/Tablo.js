import React from "react"
import Table from "react-bootstrap/Table"

const Tablo = () => {
  return (
    <Table className="fs-5" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Ad</th>
          <th>Soyad</th>
          <th>Adres</th>
          <th>Telefon No.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Lorem</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Lorem</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>Lorem</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>Lorem</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>Lorem</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Tablo
