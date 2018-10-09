import React, { Component } from "react";
import { Icon, Dropdown, Button, Menu, Col } from "antd";

export class DropDownItems extends Component {
    render() {
        return <span>{this.props.type}</span>
        // const {type,menu1,menu2} = this.props;
        // if (type === "Protocol") {
        //     return (
        //         <Col className="dropdown-render-i" span={8}>
        //             <Col span={6}>{type}</Col>
        //             <Dropdown overlay={menu1} trigger={['click']}>
        //                 <Button>
        //                     Any <Icon type="down" />
        //                 </Button>
        //             </Dropdown>
        //         </Col>
        //     )
        // } else {
        //     return (
        //         <Col className="dropdown-render-i" span={8}>
        //             <Col span={4}>{type}</Col>
        //             <Dropdown overlay={menu1} trigger={['click']}>
        //                 <Button>
        //                     Any <Icon type="down" />
        //                 </Button>
        //             </Dropdown>
        //             <Dropdown overlay={menu2} trigger={['click']}>
        //                 <Button>
        //                     Any <Icon type="down" />
        //                 </Button>
        //             </Dropdown>
        //         </Col>
        //     )
        // }
    }
}
