import React, { memo } from 'react';

import { subNavLinks } from "@/common/local-data";

import { NavLink } from 'react-router-dom';
import {
  HeaderWrap,
  HeaderContainer,
  NoRoutersWrap
} from "./style";

const SubNavHeader = memo((props) => {
  if(props.routers) {
    return (
      <HeaderWrap>
        <HeaderContainer className="wrap-v1">
          {
            subNavLinks.map(item => {
              return (
                <li className="nav" key={item.title}>
                  <NavLink
                    to={item.link}
                    exact={item.exact}
                    className="item"
                    activeClassName="active-item">
                      <em>
                        {item.title}
                        {
                          item.icon && <span className="icon white-r-icon"/>
                        }
                      </em>
                      
                  </NavLink>
                </li>
              )
            })
          }
        </HeaderContainer>
      </HeaderWrap>
    );
  } else {
    return <NoRoutersWrap/>
  }
});

export default SubNavHeader;