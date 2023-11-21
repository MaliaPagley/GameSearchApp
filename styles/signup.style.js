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
        color: COLORS.blackNavy,
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
    signupBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: COLORS.blackNavy,
      },
      signupText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: COLORS.white,
      },
      actionContainer: {
        marginTop: 50,
        gap: 15,
      },  
      signinLinkBtn: {
        alignItems: 'center',
        justifyContent: 'center',
      }, 
      signinLinkText: {
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
        color: COLORS.blackNavy
      },
      headerTextTwo: {
        color: COLORS.blackNavy,
        textAlign: 'center',
        fontSize: 15
      },
      logo: {
        height: 170,
        width: 170
      },
      logoContainer: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoText: {
        color: COLORS.white,
        fontSize: 20,
      }
})
export default styles;