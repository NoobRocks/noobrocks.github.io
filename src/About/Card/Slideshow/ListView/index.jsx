import React from "react";
import _clamp from "lodash/clamp";

import styles from "./styles.js";

const ITEM_MOVE_MS = 300;

class ListView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0,
      animatedScroll: false
    };
  }

  onClick = (...args) => {
    this.props.onClick && this.props.onClick(...args);
  };

  makeItemVisible = (scrollAlways = true, animatedScroll = false) => {
    if (!this.listView || this.innerListView.scrollWidth <= this.listView.offsetWidth) {
      return;
    }
    const {itemList, itemId, itemIdProperty} = this.props;
    if (!itemId) {
      return;
    }
    const itemIndex = itemList.findIndex(item => item[itemIdProperty] === itemId);
    if (itemIndex === -1) {
      return;
    }
    const containerRect = this.listView.getBoundingClientRect();
    const itemRect = this.innerListView.children[itemIndex + 1].getBoundingClientRect();
    if (!scrollAlways && itemRect.left >= containerRect.left && itemRect.right <= containerRect.right) {
      return;
    }
    const translateX = this.state.scrollLeft - (itemRect.left - containerRect.left) + Math.floor((containerRect.width - itemRect.width) / 2);
    const clampedTranslateX = _clamp(translateX, -(this.innerListView.scrollWidth - this.listView.offsetWidth), 0);
    this.setState({
      scrollLeft: clampedTranslateX,
      animatedScroll
    });
  };

  componentDidMount() {
    this.makeItemVisible();
  }

  componentDidUpdate(prevProps) {
    const itemListChanged = prevProps.itemList !== this.props.itemList;
    const itemIdChanged = prevProps.itemId !== this.props.itemId;
    const listViewMarginChanged = prevProps.listViewMargin !== this.props.listViewMargin;
    if (itemListChanged || itemIdChanged || listViewMarginChanged) {
      this.makeItemVisible(true, itemIdChanged && !itemListChanged && !listViewMarginChanged);
    }
  }

  render() {
    const {itemList, itemId, renderer, itemIdProperty, listViewStyle, innerListViewStyle, listViewMargin = 0} = this.props;
    const {scrollLeft, animatedScroll} = this.state;
    const innerListViewScrollStyle = {
      transition: animatedScroll ? `transform ${ITEM_MOVE_MS}ms` : "none",
      transform: `translateX(${scrollLeft}px)`
    };
    return (
      <div style={{...styles.listView, ...listViewStyle}} ref={r => this.listView = r}>
        <div style={{...styles.innerListView, ...innerListViewStyle, ...innerListViewScrollStyle}} ref={r => this.innerListView = r}>
          <div style={{...styles.innerListViewMargin, width: listViewMargin + "px"}}/>
          {itemList.map((item, i) => {
            const isSelected = item[itemIdProperty] === itemId;
            return renderer(item, {isLast: i === itemList.length - 1, isSelected, index: i}, this.onClick);
          })}
          <div style={{...styles.innerListViewMargin, width: listViewMargin + "px"}}/>
        </div>
      </div>
    );
  }
}

export default ListView;
