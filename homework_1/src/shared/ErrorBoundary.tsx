import type { ReactNode } from 'react';
import { Component } from 'react';
import { type ErrorInfo } from 'react-dom/client';

import * as PropTypes from 'prop-types';

interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { error: null, hasError: false };
  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { error, hasError: true };
  }

  static get propTypes(): PropTypes.InferProps<object> {
    return {
      children: PropTypes.any,
      onClickOut: PropTypes.func,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>
            Sorry. Something went wrong...
            <br />
            Please, reload the page
          </h1>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}
