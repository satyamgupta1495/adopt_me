import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundry";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };
  constructor() {
    super(); //? this is neede too -> becoz if not -> {Components} will not be called!

    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );

    // this.setState({
    //   loading: false,
    //   name: json.pets[0].name,
    //   breed: json.pets[0].breed,
    //   animal: json.pets[0].animal,
    //   city: json.pets[0].city,
    //   state: json.pets[0].state,
    //   description: json.pets[0].description,
    // });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    console.log(this.state);
    //! this function is must
    const { animal, breed, city, state, description, showModal, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />

        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>
                    Would you Like to adopt {name}?
                    
                  </h1>

                  <div className="buttons">
                    <button onClick = {this.adopt}> Yes</button>
                    <button onClick = {this.toggleModal}> No</button>
                    </div>
                </div>
                </Modal>
            ):null
          }
        </div>
      </div>
    );
  }
}

// export default withRouter(Details);
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
