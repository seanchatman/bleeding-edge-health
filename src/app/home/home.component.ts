import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { Hello, HelloProps } from '../hello.component';

import * as ReactDOM from 'react-dom';
import { timer } from 'rxjs/observable/timer';
import * as React from 'react';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  hello: Hello;

  constructor(private quoteService: QuoteService, private i18nService: I18nService) { }

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; });

    let helloProps: HelloProps = {
      compiler: 'gcc',
      framework: 'react',
      setComponent: (component: Hello) => {
        this.hello = component;
      },
      i18nService: this.i18nService
    };

    const source = timer(1000, 1000).subscribe((value: number) => {
      this.hello.setState({seconds: value});
    });

    ReactDOM.render(
      React.createElement(Hello, helloProps),
      document.getElementById('helloDiv')
    );
  }

}
