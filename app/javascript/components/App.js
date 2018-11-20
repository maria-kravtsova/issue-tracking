import React from "react";
import AddProject from "./AddProject";
import Sidebar from "react-sidebar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  onSetSidebarOpen = (open) => this.setState({ sidebarOpen: open });

  render() {
    return (
      <div>
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
        <AddProject props={this.props} />
      </div>
    );
  }
}
