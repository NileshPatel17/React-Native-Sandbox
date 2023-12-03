/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import VersionInfo from 'react-native-version-info';
import Config from 'react-native-config';
import Animated, {
  LightSpeedInLeft,
  LightSpeedInRight,
  FadeInDown,
} from 'react-native-reanimated';
import { EntypoIconButton } from './icons';

const font = {
  CascadiaCode: Platform.OS === 'ios' ? 'Cascadia Code' : 'CascadiaCode',
  CascadiaCodeMono:
    Platform.OS === 'ios' ? 'Cascadia Code' : 'CascadiaCodeMono',
  SFProTextRegular:
    Platform.OS === 'ios' ? 'SFProText-Regular' : 'SF_Pro_Text_Regular',
  SFProTextBold: Platform.OS === 'ios' ? 'SFProText-Bold' : 'SF_Pro_Text_Bold'
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
            fontFamily: font.SFProTextBold
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
            fontFamily: font.SFProTextRegular
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(`Environment: ${Config.NODE_ENV}`);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{ position: 'absolute', right: 4, paddingTop: 2, fontSize: 10, color: 'gray' }}>{`version: ${Config.NODE_ENV?.toLowerCase()}-${VersionInfo.appVersion}`}</Text>
          <Animated.View entering={LightSpeedInLeft.duration(1000).delay(100)}>
            <Section title={'Step One'}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
          </Animated.View>
          <Animated.View entering={LightSpeedInRight.duration(1000).delay(100)}>

          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          </Animated.View>
          <Animated.View entering={LightSpeedInLeft.duration(1000).delay(100)}>

          <Section title="Debug">
            <DebugInstructions />
          </Section>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(500).delay(100)}
            style={{
              marginTop: 20,
              marginLeft:20,
              flexDirection: 'row',
            }}>
            <EntypoIconButton
              name="menu"
              containerStyle={{
                padding: 10,
                borderRadius: 24,
                backgroundColor: 'orange',
              }}
            />
            <EntypoIconButton
              name="camera"
              containerStyle={{
                padding: 10,
                borderRadius: 24,
                backgroundColor: 'orange',
                marginLeft: 10
              }}
            />
            <EntypoIconButton
              name="image"
              containerStyle={{
                padding: 10,
                borderRadius: 24,
                backgroundColor: 'orange',
                marginLeft: 10
              }}
            />
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
