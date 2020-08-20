import { useNavigation } from '@react-navigation/native';
import { Button, Container, Content, Text, View } from 'native-base';
import React from 'react';
import { Image, Linking, StyleSheet } from 'react-native';
import colors from '../config/colors';

const privacyPolicyUrl = 'https://www.whatsapp.com/legal/?lang=en#privacy-policy';
const termsOfServiceUrl = 'https://www.whatsapp.com/legal/?lang=en#terms-of-service';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to WhatsApp</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/welcome-logo.png')} />
        </View>
        <View style={styles.subtitleContainer}>
          <View>
            <Text style={styles.subtitle}>
              Read our{' '}
              <Text style={styles.linkText} onPress={() => Linking.openURL(privacyPolicyUrl)}>
                Privacy Policy
              </Text>
              . Tap "Agree and continue" to accept
            </Text>
            <Text style={styles.subtitle}>
              the{' '}
              <Text style={styles.linkText} onPress={() => Linking.openURL(termsOfServiceUrl)}>
                Terms of Service
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })}>
              <Text>AGREE AND CONTINUE</Text>
            </Button>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>from</Text>
          <Text style={styles.companyBrand}>FACEBOOK</Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: '75%',
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  companyBrand: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.secondary,
    letterSpacing: 3,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  footer: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.medium,
    marginBottom: 5,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 13,
    color: colors.link,
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoContainer: {
    flex: 2,
    marginTop: 30,
    marginBottom: 100,
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.medium,
  },
  subtitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.tertier,
  },
});

export default WelcomeScreen;
