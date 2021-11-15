import React from "react";
import {Layout} from 'antd';
import 'antd/dist/antd.css';

const {Footer} = Layout

function MainFooter() {
  return (
    <Footer style={{ textAlign: "center", background : '#72bbf2'}}>
      This is Footer For this site
    </Footer>
  );
}

export default MainFooter;
