import { Component, type ErrorInfo, type ReactNode } from "react";
import ServerErrorPage from "@/pages/ServerErrorPage";

type AppErrorBoundaryProps = {
  children: ReactNode;
  resetKey: string;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

export default class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Abroadways app error boundary caught an error", error, errorInfo);
  }

  componentDidUpdate(prevProps: AppErrorBoundaryProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return <ServerErrorPage />;
    }

    return this.props.children;
  }
}
