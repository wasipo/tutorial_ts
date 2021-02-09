import React from 'react'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
      return(
        <div>
          <Link to="/">ダッシュボード</Link>
          <Link to="/ReserveSetting">予約設定</Link>
        </div>
      )
    }
  }
  
export default Navbar;