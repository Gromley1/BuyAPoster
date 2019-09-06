import React from 'react';
import Rotate from './assets/Rotate.svg'
import PosterService from './services/posterUpload'


class PosterDesign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newImg: false,
            imgUrl: ''
        }
    }

    componentDidMount = () => {
        this.hamburgerNav = document.getElementById("hamburgerNav")
        this.navList = document.getElementsByClassName("nav-list")
        this.promoBox = document.getElementById("promo-info-box")
        this.posterBox = document.getElementById("poster-sample-box")
        this.uploadImage = document.getElementsByClassName("upload")
        this.menuIcon = this.hamburgerNav.children;

    }

    rotateImageHandler = () => {
        const imgContainer = document.getElementById("poster-sample-box")

        imgContainer.classList.toggle("rotate")
    }

    uploadHandler = () => {
        PosterService.uploadImg(this.onUplaodSuccess, this.onUploadError)
    }

    uploadNewImgHandler = () => {
        PosterService.uploadNewImg(this.onUplaodNewImgSuccess, this.onUploadNewImgError)

    }

    //disable poster box elements from fading back in
    onUplaodSuccess = resp => {
        //set state for ternary clickhandler to switch to new handler call
        this.setState({
            newImg: true,
            imgUrl: resp.config.url
        }, () => {
            if (this.posterBox.style.backgroundImage === '') {
                for (let i = 0; i < this.uploadImage.length; i++) {
                    this.uploadImage[i].classList.toggle("active");
                }
                this.posterBox.style.backgroundImage = `url(${this.state.imgUrl})`
            }
        })

    }

    onUplaodNewImgSuccess = resp => {
        if (this.state.newImg) {
            //reset background img to emtpy string,
            //set state and use recurrisve call to go to else statement to upload new Img 
            this.posterBox.style.backgroundImage = ''
            this.setState({
                newImg: false
            }, () => this.onUplaodNewImgSuccess(resp))
        } else {
            //set state so that default of onclick will always go back to function uploadNewImg 
            this.setState({
                newImg: true,
                imgUrl: resp.config.url
            })
            this.posterBox.style.backgroundImage = `url(${this.state.imgUrl})`
        }
    }

    onUploadError = err => {
        console.log(err)
    }

    onUploadNewImgError = err => {
        console.log(err)
    }


    navToggle = () => {
        this.promoBox.classList.toggle("active");

        //show and hide elements
        for (let i = 0; i < this.navList.length; i++) {
            this.navList[i].classList.toggle("active");
        }
        //transform hamburger nav to x
        for (let i = 0; i < this.menuIcon.length; i++) {
            this.menuIcon[i].classList.toggle("active");
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid-container">
                    <div>
                        <div id="hamburgerNav"
                            onClick={() => this.navToggle()}
                            style={{ marginLeft: "15px", marginTop: "15px" }}
                        >
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <ul id="navContainer">
                            <li className="nav-list">About</li>
                            <li className="nav-list">Contact</li>
                            <li className="nav-list">Careers</li>
                        </ul>
                    </div>
                    <div id="promo-info-box">
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
                        <i className="fas fa-cloud-upload-alt fa-5x upload"></i>
                        <p className="upload" style={{ marginBottom: "0", marginTop: "0", fontWeight: "400" }}>
                            Click To Upload Image
                        </p>
                        <p className="upload" style={{ fontSize: "1em", fontWeight: "lighter", marginTop: "0" }}>
                            Accepted file types .jpg, .png, .gif
                        </p>
                    </div>
                    <div>
                        <hr width="99%" style={{ marginTop: "20px" }} />
                        <span id="bottom-row">
                            <p id="price-value">$17.99</p>
                            <button id="upload-button" onClick={!this.state.newImg ? this.uploadHandler : this.uploadNewImgHandler}>UPLOAD</button>
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