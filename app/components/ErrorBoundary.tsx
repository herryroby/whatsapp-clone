import { Text } from 'native-base';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null | undefined;
  info: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    info: null,
  };

  static getDerivedStateFromError(error: Error | null): Record<string, unknown> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error | null, info: ErrorInfo | null): void {
    this.setState({ hasError: true, error, info });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error, info } = this.state;

    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.headerText}>Oops! An error occured!</Text>
            <Text style={[styles.errorText, styles.boldText]}>
              Error:
              <Text style={styles.errorText}> {error?.toString()}</Text>
            </Text>
            <Text style={[styles.errorText, styles.boldText]}>
              Stacktrace:
              <Text style={styles.errorText}> {info?.componentStack}</Text>
            </Text>
          </View>
        </View>
      );
    }

    return children;
  }
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  box: {
    width: '85%',
    padding: 15,
    borderColor: colors.error,
    borderRadius: 10,
    borderWidth: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.error,
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ErrorBoundary;
