import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: COLORS.redLight,
        color: COLORS.white,
        borderBottomWidth: 1,
        width: 230,
        paddingVertical: 10,
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        textAlign: "left",
        fontSize: 15,
        color: COLORS.white,
    },
    signinBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: COLORS.white,
      },
      signinText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: COLORS.blackNavy,
      },
      actionContainer: {
        marginTop: 50,
        gap: 15,
      },  
      signupLinkBtn: {
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      signUpLinkText: {
        color: "#39A7FF",
        fontSize: 15,
      },
      headerContainer: {
        textAlign: 'center',
        marginBottom: 30, 
      },
      headerTextOne: {
        fontSize: 40,
        textAlign: 'center',
        color: COLORS.white
      },
      headerTextTwo: {
        color: COLORS.white,
        fontSize: 15
      },
})
export default styles;