import react from "react";

class Prices extends react.Component {
  state = {
    currency: "USD",
  };

  render() {
    let list = "";

    if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.bpi.USD.description} :{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.USD.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "INR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.bpi.INR.description} :{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.INR.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.INR.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.bpi.GBP.description} :{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.GBP.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.GBP.rate}</strong>
        </li>
      );
    }

    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
