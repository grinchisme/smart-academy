import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Icon } from "./src/shared/components/index"

const App = () => {
  return (
    <SafeAreaView>
      <Icon
        name='settings-cog-1'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
