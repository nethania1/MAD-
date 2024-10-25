import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.name}>Nethania Clarissa Lomboan</Text>
        <Text style={styles.age}>Age: 22</Text>
        <Text style={styles.jobTitle}>Data Analyst</Text>
      </View>

      <View style={styles.contact}>
        <Text style={styles.text2}>Email: nethanialomboan@gmail.com</Text>
        <Text style={styles.text2}>Phone: 088247216154</Text>
        <Text style={styles.text2}>
          LinkedIn: linkedin.com/in/nethanialomboan
        </Text>
      </View>

      <View style={styles.education}>
        <Text style={styles.text2}>
          Information System in Computer Science, Klabat University
        </Text>
      </View>

      <View style={styles.skills}>
        <Text style={styles.text2}>- React Native</Text>
        <Text style={styles.text2}>- JavaScript</Text>
        <Text style={styles.text2}>- Node.js</Text>
      </View>

      <Image
        style={styles.image1}
        source={require('./assets/foto_nethania.jpg')}
        />
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    image1: {
      height: 200,
      width: 200,
      margin: 10,
      padding: 20,
      alignSelf: 'center',
    },
    header: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    name: {
      fontSize: 25,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    age: {
      fontSize: 20,
      marginVertical: 5,
    },
    jobTitle: {
      fontSize: 20,
      color: 'blue',
    },
    contact: {
      fontSize: 50,
      fontWeight: 'bold',
      padding: 45,
    },
    education: {
      fontSize: 50,
      fontWeight: 'bold',
      padding: 45,
    },
    skills: {
      fontSize: 50,
      fontWeight: 'bold',
      padding: 45,
    },
    text2: {
      fontStyle: 'italic',
      fontSize: 20,
    },
  });
  
  export default App;  