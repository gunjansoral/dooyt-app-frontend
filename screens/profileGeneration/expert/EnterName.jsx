import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../../context/ThemeContext";
import CustomTextInput from "../../../components/inputs/CustomTextInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { ProfileContext } from "../../../context/ProfileContext";

const EnterName = () => {
  const { theme } = useContext(ThemeContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const navigation = useNavigation();

  const [expertName, setExpertName] = useState("");

  const handleRegisterNowPress = () => {
    Linking.openURL("https://www.dooyt.com");
  };

  const handleContinue = () => {
    console.log("Expert Name entered:", expertName);
    setProfile({ ...profile, expertName });
    // Navigate to EnterSpaceTitle screen
    navigation.navigate("EnterSpaceCodeForExpert", { expertName });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../../assets/icons/chevron_big_left.png")}
          />
        </TouchableOpacity>

        <View style={styles.mid}>
          <Text style={styles.title(theme)}>Enter Your Name</Text>
          <Text style={styles.subTitle(theme)}>
            Enter your information to start using the Dooyt App
          </Text>
          <CustomTextInput
            placeholder="Your Name"
            value={expertName}
            onChangeText={setExpertName}
          />
          <TouchableOpacity onPress={handleRegisterNowPress}>
            <Text style={styles.bottomText(theme)}>
              Do you still not have your own unique space code?
              <Text style={styles.linkText}> Register Now on Dooyt.com</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <PrimaryButton
          text="Continue"
          style={styles.bottomButton(theme)}
          icon={
            <Image source={require("../../../assets/icons/arrow-right.png")} />
          }
          onPress={handleContinue}
        />
        <Text style={styles.byGivingYourContainer}>
          <Text
            style={styles.byGivingYour}
          >{`By giving your information, you agree to our `}</Text>
          <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
          <Text style={styles.byGivingYour}>{` and `}</Text>
          <Text style={styles.termsConditions}>Privacy Policy</Text>
          <Text style={styles.byGivingYour}>.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EnterName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 14,
    width: "100%",
    justifyContent: "space-between",
  },
  top: {
    gap: 10,
  },
  mid: {
    gap: 15,
  },
  backButton: {
    marginBottom: 20,
  },
  title: (theme) => ({
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  }),
  subTitle: (theme) => ({
    color: theme.colors.textSecondary,
    fontWeight: "400",
    fontSize: 16,
  }),
  bottomText: (theme) => ({
    color: theme.colors.textPrimary,
    fontSize: 14,
    marginTop: 10,
  }),
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  bottom: {
    gap: 24,
    alignItems: "center",
  },
  bottomButton: (theme) => ({
    borderRadius: 33,
    backgroundColor: "#c8c8c8",
    paddingHorizontal: 16,
    height: 66,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  }),
  byGivingYour: {
    color: "#979797",
  },
  termsConditions: {
    color: "#f65f3e",
  },
  byGivingYourContainer: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Medium",
    textAlign: "center",
  },
});
