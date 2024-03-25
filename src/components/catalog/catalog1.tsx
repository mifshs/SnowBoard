import React, { Component } from 'react';
import './catalog.css';

interface Category {
  key: string;
  name: string;
}

interface Props {
  chooseCategory: (key: string) => void;
}

interface State {
  categories: Category[];
}

class Categories extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categories: [
        { key: 'all', name: 'All' },
        { key: 'Sky', name: 'Sky' },
        { key: 'Ski', name: 'Ski' },
        { key: 'Boards', name: 'Boards' },
        { key: 'Other', name: 'Other' }
      ]
    };
  }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default Categories;