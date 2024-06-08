import React from 'react'
import "./MyOrderPage.css"
import Table from "../Common/Table"
const MyOrderPage = () => {
  return (
    <section className='align_center myorder_page'>
        <Table headings = {["order", "products","total","status"]}>
            <tbody>
                <tr>
                <td>1</td>
                <td>iphone, powerbank</td>
                <td>$1299</td>
                <td>shipping</td>
                </tr>
            </tbody>
        </Table>
    </section>
  )
}

export default MyOrderPage