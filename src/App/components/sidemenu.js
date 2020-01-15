import React, { Component } from 'react';
import styled from './node_modules/styled-components';



const tab = styled.li`
  background: linear-gradient(to bottom, #f9f9f9, #3e3e3e);
  display: block;
  height: 50px;
  width: 100%;


`;

const sidemenu = (data) => {
  // data = array

  return (
    <div>
      <ul>
        {
          data.forEach(element => {
            <tab>
              data
            </tab>
          })
        }  
      </ul>    
    </div>
  )
  
}

export default sidemenu;
