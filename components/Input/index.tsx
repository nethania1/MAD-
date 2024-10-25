import {StyleSheet, Text, TextInput} from 'react-native'; 
import React from 'react'; 
 
const Input = ({label, placeholder, onChangeText, ...rest}) => { 
  return ( 
    <> 
      <Text style={styles.label}>{label}</Text> 
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        {...rest} 
      /> 
    </> 
  ); 
}; 
 
export default Input; 
 
const styles = StyleSheet.create({ 
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 20, 
    color: 'black', 
  }, 
  input: { 
    borderWidth: 1, 
    borderRadius: 10, 
    borderColor: 'gray', 
    marginTop: 10, 
    padding: 10, 
    opacity: 0.5, 
  }, 
});