import './global.css';
import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from '~/contexts/auth';
import { Router } from '~/routes/route';

export default function App() {

  return( 
    <AuthProvider>

  <Router />
    </AuthProvider>
);
}
