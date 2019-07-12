import React from 'react';
import Rotate from './assets/Rotate.svg'


class PosterDesign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: ''
        }
    }

    // componentDidMount = () => {

    // }

    rotateImageHandler = () => {
        const imgContainer = document.getElementById("poster-sample-box")

        imgContainer.classList.toggle("rotate")
    }

    uploadHandler = () => {

    }

    render() {
        return (
            <React.Fragment>
                <div className="grid-container">
                    <div className="border">One</div>
                    <div className="border" id="promo-info-box">
                        <p id="promo-info-text">
                            50% off all canvas prints
                        </p>
                    </div>
                    <div id="rotate-icon-box" onClick={() => this.rotateImageHandler()}>
                        <img src={Rotate}
                            alt=""
                            height="40px"
                            width="40px"
                            style={{ marginTop: "2vh" }}
                        />
                        <p style={{ fontWeight: "400", fontSize: "18px" }}>Rotate</p>
                    </div>
                    <div id="poster-sample-box">
                        <i className="fas fa-cloud-upload-alt fa-5x"></i>
                        <p style={{ marginBottom: "0", marginTop: "0", fontWeight: "400" }}>
                            Click To Upload Image
                        </p>
                        <p style={{ fontSize: "1em", fontWeight: "lighter", marginTop: "0" }}>
                            Accepted file types .jpg, .png, .gif
                        </p>
                    </div>
                    <div>
                        <hr id="bottom-hr" width="99%" style={{ marginTop: "20px" }} />
                        <span id="bottom-row">
                            <p id="price-value">$17.99</p>
                            <button id="upload-button" onClick={this.uploadHandler}>UPLOAD</button>
                        </span>
                    </div>
                    <div>
                        <p id="price-slashed">$35.99</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default PosterDesign