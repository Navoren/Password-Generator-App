/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be a min of 4 characters')
    .max(16, 'should not exceed limit of 16 characters')
    .required('Length is required'),
  
  
});

export default function App() {

  const [pass, setPass] = useState('');
  const [isPassGen, setIsPassGen] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMONPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmonpqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (number) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPass(passwordResult);
    setIsPassGen(true);


  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPass('');
    setIsPassGen(false);
    setLowerCase(false);
    setSymbols(false);
    setUpperCase(false);
    setNumber(false);
  };

  return (
    <SafeAreaView>
    <View>
      <Text style={styles.headingText}>Password Generator</Text>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    padding : 8,

  },
});