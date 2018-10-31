import React from 'react';
import {render} from 'react-dom';
import {WindowScroller, List, AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';

const list = Array.from({length: 100}).map(
    (_, index) => `list item ${index + 1}`,
);
const listTwo = Array.from({length: 100}).map(
    (_, index) => `list item ${index + 1}`,
);

const rowRenderer = ({index, style}) => (
    <div key={index} style={style}>
        {list[index]}
    </div>
);

const rowRenderer2 = ({index, style}) => (
    <div key={index} style={style}>
        {listTwo[index]}
    </div>
);

const App = () => {
    return (
        <div style={{}}>
            <div style={{height: 1000, backgroundColor: 'green'}}>Some content</div>
            <WindowScroller>
                {({height, onChildScroll, scrollTop}) => {
                    return (
                        <React.Fragment>
                            <List
                                autoHeight
                                height={height}
                                rowCount={list.length}
                                rowHeight={32}
                                rowRenderer={rowRenderer}
                                onScroll={onChildScroll}
                                scrollTop={scrollTop}
                                width={600}
                            />
                        </React.Fragment>
                    );

                }}
            </WindowScroller>
            <div style={{height: 1000, backgroundColor: 'green'}}>Some content</div>

            <WindowScroller>
                {({height, onChildScroll, scrollTop}) => {
                    return (
                        <React.Fragment>
                            <List
                                autoHeight
                                height={height}
                                rowCount={listTwo.length}
                                rowHeight={32}
                                rowRenderer={rowRenderer2}
                                onScroll={onChildScroll}
                                scrollTop={scrollTop}
                                width={600}
                            />
                        </React.Fragment>
                    );

                }}
            </WindowScroller>

            <div style={{height: 1000, backgroundColor: 'red'}}>Some other content</div>
        </div>
    );
};

export default App;
