import React, { Component } from "react";

export default class props extends Component {
  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      <div>
        <h3>ini di props:{makanan}</h3>
        <button
          onClick={() => {
            gantiMakanan("mie Ayam");
          }}
        >
          ganti
        </button>
      </div>
    );
  }
}
