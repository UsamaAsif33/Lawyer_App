import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../shared/theme";

const styles = StyleSheet.create({
  buttonLogin: {
    width: wp("85%"),
    height: hp("6%"),
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("2%"),
  },
  loginTxt: {
    color: COLORS.white,
  },
});

export default styles;
