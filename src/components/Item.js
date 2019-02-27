import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.item.file_uri}>{this.props.item.filename} </a>
      </div>
    );
  }
}

export default Item;
