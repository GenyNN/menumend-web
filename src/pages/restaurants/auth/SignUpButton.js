import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

import { sans } from 'fonts'
import Touchable from 'Touchable'
import { moderateScale, pickStyle } from 'scale'


const commonStyle = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCBF76',
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    ...sans({
      fontWeight: '600',
      color: '#FFFFFF',
    }),
  },
}
const desktopStyle = {
  ...commonStyle,
  container: {
    ...commonStyle.container,
    width: 115,
    minWidth: 115,
    height: 56,
    minHeight: 56,
    borderRadius: 33,
  },
  text: {
    ...commonStyle.text,
    marginTop: -2.5,
    minWidth: 106,
    fontSize: 20,
    lineHeight: 25,
  },
}
const mobileStyle = {
  ...commonStyle,
  container: {
    ...commonStyle.container,
    borderRadius: 23,
    width: moderateScale(109),
    minWidth: moderateScale(109),
    height: moderateScale(46),
    minHeight: moderateScale(46),
    maxHeight: moderateScale(46),
  },
  text: {
    ...commonStyle.text,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
  },
}
const styles = StyleSheet.create(pickStyle(mobileStyle, desktopStyle))


class SignUpButton extends React.Component {

    static propTypes = {
      onPress: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props)

      this.handlePress = this.handlePress.bind(this)
    }

    handlePress() {
      this.props.onPress()
    }

    render() {
      return (
        <Touchable onPress={this.handlePress}>
          <View style={styles.container} >
            <Text style={styles.text}>
                        Sign Up
            </Text>
          </View>
        </Touchable>
      )
    }

}

import { connect } from 'react-redux'
import { selectSignUp } from './actions/popup'

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {
  onPress: selectSignUp,
}

export const SignUpButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpButton)
export default SignUpButtonContainer
