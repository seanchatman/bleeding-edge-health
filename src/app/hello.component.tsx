import * as React from "react";
import { timer } from 'rxjs/observable/timer';
import { I18nService } from './core/i18n.service';

export interface HelloProps {
  compiler: string;
  framework: string;
  setComponent: any;
  i18nService: I18nService
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  length = 0;

  componentDidMount() {
    // console.log('hello.component.tsx::componentDidMount', 'this', this);

    this.props.setComponent(this, this.state);

    timer(1000, 1000).subscribe((value: number) => {
      this.setState({seconds2: value});
    });

    // this.props.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { console.log('finalize') }))
    //   .subscribe((quote: string) => { console.log(quote); });

  }

  // componentWillMount() {
  //   console.log('hello.component.tsx::componentWillMount', '');
  // }

  // componentDidCatch() {
  //   console.log('hello.component.tsx::componentDidCatch', '');
  // }
  //
  // componentDidUpdate() {
  //   console.log('hello.component.tsx::componentDidUpdate', '');
  // }
  //
  // componentWillReceiveProps() {
  //   console.log('hello.component.tsx::componentWillReceiveProps', '');
  // }
  //
  // componentWillUpdate() {
  //   console.log('hello.component.tsx::componentWillUpdate', '');
  // }
  //
  // shouldComponentUpdate(nextProps: Readonly<HelloProps>, nextState: Readonly<{}>, nextContext: any): boolean {
  //   console.log('hello.component.tsx::shouldComponentUpdate', '');
  //   return true;
  // }

  constructor(props: HelloProps) {
    super(props, {});

    this.state = { seconds: 0, seconds2: 0 };
  }

  render() {
    return <div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}! { this.state['seconds'] }</h1>
      <button ion-button>Seconds 2: {this.state['seconds2']}</button>
    </div>;
  }
}
