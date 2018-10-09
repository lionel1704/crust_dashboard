import React, { Component } from 'react'
import { Card, Button } from "antd";

class GetInvolved extends Component {
  render(){
    return (
      <Card className="cus-card-2">
        <h2>Get Involved</h2>
        <p>Get involved with the Crust test by downloading and running the Test App on your computer. This will connect you to the test network.
        </p>
        <h3>Download the Test App</h3>
        <Button type="primary" icon="download" size="large">Windows</Button>
        <Button type="primary" icon="download" size="large">Mac OS</Button>
        <Button type="primary" icon="download" size="large">Ubuntu</Button>
        <h3>Step-by-step guide</h3>
        <ol>
          <li>If you don’t already have one then you’ll need a SAFE <a href="safenetforum.org">Network Forum</a> account with Trust Level 1 (<a href="https://safenetforum.org/t/trust-level-1-basic-user-requirements/15200">How?</a>).</li>
          <li><a>Get an invite to the test</a></li>
          <li><a>Download the test</a></li>
          <li>Extract the Test App from the ZIP file (double-click)</li>
          <li>Run the Test App</li>
        </ol>
        <h3>Useful links</h3>
        <ul>
          <li><a>Discussion forum topic</a></li>
          <li><a href="https://hub.safedev.org">Learn more about Crust on the DevHub</a></li>
          <li><a href="https://safenetwork.tech">The SAFE Network</a></li>
        </ul>
      </Card>
    )
  }
}

export default GetInvolved;
