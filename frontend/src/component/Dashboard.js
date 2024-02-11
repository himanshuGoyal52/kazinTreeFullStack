import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='contianer-g'>
      {/* sidebar */}
      <div className='sidebar'>
        <div>
          <h3><Link className="rmHerf sidebarh3">Home</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Items</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Stock</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Build</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Customers</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Sales Orders</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Suppliers</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Manufactures</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Purchase Orders</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Reports</Link></h3>
        </div>
        <div>
          <h3><Link className="rmHerf sidebarh3">Help!</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Integrations</Link></h3>
          <h3><Link className="rmHerf sidebarh3">Logout</Link></h3>
          <h3><Link className="rmHerf sidebarh3">My Profile</Link></h3>
        </div>
      </div>

      {/* Main */}
      <div className='main-dashboard'>
        <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , width:"100%"}}>
          <div>
            <h1 style={{marginTop : '0'}}>Item Dahsboard</h1>
            <p style={{marginBottom:'1rem'}}>All Items</p>
            <button className='btn grennBtn'>NEW ITEM CATEGORY</button>
          </div>
          <div style={{width:'40%' , margin : '0 1rem'}}>
            <div style={{width:'100%' , display:'flex' , alignItems:'center' , justifyContent:'space-between' , borderBottom : '1px solid #bdc3c7' , padding:'5px 0px'}}><box-icon name='git-merge'></box-icon> <span>Total Categories</span> <span>4</span></div>
            <div style={{width:'100%' , display:'flex' , alignItems:'center' , justifyContent:'space-between' , padding:'5px 0px'}}><box-icon name='package' ></box-icon> <span>Total Items</span> <span>21</span></div>
          </div>
        </div>

        <div style={{margin:'1rem 0'}}>
          <select className='btn' style={{width:'100%' , border:'none'}}>
            <option>4 Subcategories</option>
            <option>1</option>
            <option>2</option>
          </select>

          <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius:'5px'  , height :'25rem' , display:'flex' , flexDirection:'column'}}>
            <div style={{ marginTop : '0.6rem',  width : "100%" , display:'flex' , alignItems:'center' , justifyContent : 'space-between'}}>
              <div>
                <button className='btn grennBtn'>NEW ITEM</button>
                <button className='btn'>OPTIONS <span style={{fontSize:'5px'}}><box-icon name='chevron-down' type='solid' ></box-icon></span></button>
              </div>
              <div style={{display:'flex' , alignItems:'center' , width : '30%' , justifyContent:'space-between'}}>
                <input placeholder='Search' type="text" />
                <span className='btn' style={{backgroundColor : '#546E7A' , color:'white'}}><box-icon name='bar-chart-alt-2' type='solid' ></box-icon></span>
                <span className='btn' style={{borderRadius : '50%' ,  backgroundColor : "#424242" , color : 'white'}}><box-icon name='filter-alt' color='#ffffff' ></box-icon></span>
              </div>

            </div>
            <div>

            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>SKU</th>
                  <th>Name</th>
                  <th>Tags</th>
                  <th>Category</th>
                  <th>In Stock</th>
                  <th>Avaliable Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>BWAX</td>
                  <td>Beewax</td>
                  <td>Etsy</td>
                  <td>Bundles</td>
                  <td>599.36</td>
                  <td>0</td>
                </tr>
                
              </tbody>
            </table>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
