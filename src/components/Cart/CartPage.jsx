import React from 'react'
import user from "../../assets/user.webp"
import Table from "../Common/Table"
import "./CartPage.css"
import QuantityInput from '../SingleProduct/QuantityInput'
import remove from "../../assets/remove.png"
const CartPage = () => {
  return (
    <section className='align_center cart_page'>
      <div className='align_center user_info'>
        <img src={user} alt ="user profile"/>
        <div>
          <p className="user_name">Harley</p>
          <p className="user_email">Harley@gmail.com</p>
        </div>
      </div>

      <Table headings ={["items", "price","quantity","total","remove"]}>
      <tbody>
        <tr>
          <td>Iphone</td>
          <td>$999</td>
          <td>$85</td>
          <td className='align_center table_quantity_input'>
            <QuantityInput/>
          </td>
          <td><img src ={remove} alt ="remove icon" className='cart_remove_icon'/></td>
        </tr>
      </tbody>
      </Table>

    {/* {cart table} */}

      <table className='cart_bill'>
        <tbody>
          <tr>
          <td>Subtotal</td>
          <td>$999</td>
          </tr>
          <tr>
          <td>ShippingCharges</td>
          <td>$9</td>
          </tr>
          <tr className='cart_bill_final'>
          <td>Total</td>
          <td>$1009</td>
          </tr>
        </tbody>

      </table>

      <button className='search_button checkout_button'>Checkout</button>

    </section>
  )
}

export default CartPage