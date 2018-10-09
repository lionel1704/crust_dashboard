import React, { Component } from 'react'
import { Collapse, Card } from "antd";
import { connect } from 'react-redux';
import content from "../assets/information"

class Information extends Component {
  render() {
    return (
      <Card className="cus-card-2">
        <h2>Introducing the Crust Dashboard</h2>
        <p>This Crust Dashboard visualises the real-time status of global Network connection activity in order to benchmark the capabilities of Crust. On the dashboard you will see:</p>
        <ul>
          <li>Live Connection Attempts</li>
          <li>Cummulative Success Rate</li>
          <li>NAT Types</li>
          <li>Connection Protocols</li>
        </ul>
        <h3>Glossary</h3>
        {content.map((li, i) => {
          console.log(i);
          return (
            <Collapse>
              <Collapse.Panel header={li.title}>
                {li.content}
              </Collapse.Panel>
            </Collapse>
          )
        })

        }
      </Card>
    )
  }
}

export default Information;
