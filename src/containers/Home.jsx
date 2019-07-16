import React from "react";
import { connect } from "react-redux";

import LogoImg from "@/assets/react-logo.png";

import { Title, MainContainer, ImgFrame } from "./HomeStyle";

// actions
import {
  getUserInfoStart,
  getUserInfoSuccess,
  getUserInfoEnd
} from "@/actions/user";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  initValue() {
    return {
      userName: this.props.userName
    };
  }

  render() {
    const { userName } = this.initValue();
    return (
      <React.Fragment>
        <MainContainer>
          <ImgFrame>
            <img src={LogoImg} alt="" />
          </ImgFrame>
        </MainContainer>
        <Title>Welcome to {userName} React Boilerplate</Title>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user.info.name
});

const mapDispatchToProps = dispatch => ({
  getUserInfoStart: () => dispatch(getUserInfoStart()),
  getUserInfoSuccess: data => dispatch(getUserInfoStart(data)),
  getUserInfoEnd: () => dispatch(getUserInfoStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
